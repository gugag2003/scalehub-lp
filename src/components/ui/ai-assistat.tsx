"use client"

import React, { useEffect, useRef, useState } from "react"
import { Sparkles, X } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

/** Roteiros de conversa por agente --------------------------------------- */
const scripts: Record<
  Agent,
  { text: string; isUser: boolean; delay?: number }[]
> = {
  Suporte: [
    { text: "Olá! 👋 Sou o suporte Mixmodal. Como posso ajudar?", isUser: false },
    { text: "Oi! Estou com dúvida sobre um processo parado na Alfândega.", isUser: true, delay: 1500 },
    { text: "Entendi. Qual o número do processo? Verifico agora mesmo.", isUser: false, delay: 1800 },
    { text: "É #BR23984-A.", isUser: true, delay: 1200 },
    { text: "Perfeito, localizei. Ele será liberado até amanhã, 18 jun 2025.", isUser: false, delay: 2000 },
  ],
  Antedimento: [
    { text: "Olá! Sou do atendimento Mixmodal. No que posso ajudar?", isUser: false },
    { text: "Gostaria de saber nossos horários de funcionamento.", isUser: true, delay: 1400 },
    { text: "Trabalhamos de seg-sex, 8h – 18h BRT. Posso ajudar em mais algo?", isUser: false, delay: 1800 },
  ],
  Comercial: [
    { text: "Bem-vindo ao comercial Mixmodal! Como podemos impulsionar seu negócio?", isUser: false },
    { text: "Quero cotar um desembaraço para 3 contêineres.", isUser: true, delay: 1600 },
    { text: "Ótimo! Mande NCM e porto de destino que preparo a proposta.", isUser: false, delay: 2000 },
  ],
  Secretária: [
    { text: "Olá! Sou a secretária virtual. Quer marcar uma reunião?", isUser: false },
    { text: "Sim, preciso de um horário com o gerente amanhã.", isUser: true, delay: 1500 },
    { text: "Agenda disponível às 10 h ou 15 h. Qual prefere?", isUser: false, delay: 1800 },
  ],
  Expert: [
    { text: "Sou o Expert em comércio exterior. Pergunte 🚀", isUser: false },
    { text: "Qual a vantagem do RECOF-SPED para minha operação?", isUser: true, delay: 2000 },
    { text: "Economia em impostos suspensos e agilidade logística. Podemos detalhar cenários.", isUser: false, delay: 2300 },
  ],
}

type Agent = "Suporte" | "Antedimento" | "Comercial" | "Secretária" | "Expert"

/** ---------------------------------------------------------------------- */

export default function AIMessageBar() {
  const [agent, setAgent] = useState<Agent>("Suporte")
  const [messages, setMessages] = useState<
    { text: string; isUser: boolean }[]
  >([])
  const [step, setStep] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  /* Reinicia o chat quando troca de agente ------------------------------ */
  useEffect(() => {
    setMessages([])
    setStep(0)
  }, [agent])

  /* “Reproduz” o script passo a passo ----------------------------------- */
  useEffect(() => {
    const currentScript = scripts[agent]
    if (step >= currentScript.length) return

    const { text, isUser, delay = 1000 } = currentScript[step]

    const id = setTimeout(() => {
      setMessages((prev) => [...prev, { text, isUser }])
      setStep((prev) => prev + 1)
    }, delay)

    return () => clearTimeout(id)
  }, [step, agent])


  const clearChat = () => {
    setMessages([])
    setStep(0)
  }

  return (
    <div className="w-full max-w-xl mx-auto h-[600px] mb-10 bg-gradient-to-br from-neutral-900 to-emerald-950 rounded-xl overflow-hidden shadow-2xl border border-emerald-800">
      {/* Header --------------------------------------------------------- */}
      <div className="bg-emerald-700 backdrop-blur-sm p-4 border-b border-emerald-800 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Sparkles className="text-emerald-100 h-5 w-5" />
            <h2 className="text-[#f0eee6] font-medium">Chat Demo</h2>
          </div>
          <button
            onClick={clearChat}
            className="text-emerald-100 hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Dropdown de agente ----------------------------------------- */}

        <Select
          value={agent}
          onValueChange={(value) => setAgent(value as Agent)}
        >
          <SelectTrigger className="w-full bg-emerald-950 border border-emerald-800 text-emerald-100 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/70">
            <SelectValue placeholder={agent} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Suporte">Suporte</SelectItem>
            <SelectItem value="Antedimento">Antedimento</SelectItem>
            <SelectItem value="Comercial">Comercial</SelectItem>
            <SelectItem value="Secretária">Secretária</SelectItem>
            <SelectItem value="Expert">Expert</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Mensagens ------------------------------------------------------ */}
      <div className="p-4 h-[calc(100%-184px)] overflow-y-auto bg-neutral-900">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <Sparkles className="h-12 w-12 text-emerald-100 mb-4" />
            <h3 className="text-neutral-200 text-xl mb-2">
              Iniciando conversa com {agent}...
            </h3>
          </div>
        ) : (
          <>
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex mb-4 ${m.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    m.isUser
                      ? "bg-emerald-700 text-white rounded-tr-none"
                      : "bg-neutral-800 text-slate-100 rounded-tl-none border border-neutral-600/50"
                  } animate-fade-in`}
                >
                  <p className="text-sm">{m.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Campo bloqueado ------------------------------------------------- */}
      <div className="pt-4 pb-6 px-4 border-t border-neutral-700/50 bg-emerald-950">
        <input
          disabled
          placeholder="Envio de mensagens desativado nesta demo"
          className="w-full bg-neutral-700/50 border border-neutral-600/50 rounded-full py-3 px-4 text-neutral-400 cursor-not-allowed"
        />
      </div>

      {/* Animations ----------------------------------------------------- */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
