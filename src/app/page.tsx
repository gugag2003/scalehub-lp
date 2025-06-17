"use client"

import React from 'react';
import Link from 'next/link';
import { LayoutGroup, motion } from "motion/react"
import { TextRotate } from '@/components/text-rotate';
import Image from 'next/image';
import  AiAssistat  from "@/components/ui/ai-assistat"
import { BackgroundPaths } from "@/components/ui/background-paths"


export default function Home() {

  return (
    <div className="min-h-screen bg-[#f0eee6]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#f0eee6] backdrop-blur-sm border-b border-[#f0eee6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Image 
                src='/images/metalic-logo-1-bg-transp.png'
                alt='ScaleHub'
                width={50}
                height={50}
              />
              <h1 className="text-xl sm:text-2xl font-bold text-black">ScaleHub</h1>
            </div>
            <nav className="hidden md:flex space-x-6 lg:space-x-8">
              <Link href="#solutions" className="text-black hover:text-emerald-700 font-medium text-sm lg:text-base">
                Soluções
              </Link>
              <Link href="#about" className="text-black hover:text-emerald-700 font-medium text-sm lg:text-base">
                Sobre
              </Link>
              <Link href="#research" className="text-black hover:text-emerald-700 font-medium text-sm lg:text-base">
                Pesquisa
              </Link>
              <Link href="#contact" className="text-black hover:text-emerald-700 font-medium text-sm lg:text-base">
                Contato
              </Link>
            </nav>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-black">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
              <Link 
                href="/login" 
                className="text-black hover:text-gray-700 font-medium text-sm lg:text-base"
              >
                Entrar
              </Link>
              <Link 
                href="/demo" 
                className="bg-black text-[#f0eee6] px-3 py-2 lg:px-4 lg:py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm lg:text-base"
              >
                Ver Demo
              </Link>
            </div>
          </div>
        </div>
      </header>

            <section
        id="hero"
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f0eee6]"
      >
        {/* tapete animado */}
        <BackgroundPaths />

        {/* conteúdo visível */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Headline rotativa */}
          <h1 className="mb-6 text-center font-overusedGrotesk text-lg font-bold text-foreground sm:mb-8 sm:text-2xl md:text-3xl lg:mb-12 lg:text-4xl xl:text-5xl">
            <LayoutGroup>
              <motion.span
                className="mr-2 sm:mr-3"
                layout
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              >
                Encontre
              </motion.span>

              <span className="inline-block mr-2 sm:mr-3">
                <TextRotate
                  texts={[
                    "atendimento",
                    "suporte",
                    "comercial",
                    "secretária",
                    "gerente",
                    "expert",
                  ]}
                  mainClassName="text-white px-2 sm:px-3 bg-[#007a55] overflow-hidden py-1 sm:py-1.5 lg:py-2 justify-center rounded-lg inline-block"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </span>

              <motion.span
                layout
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              >
                em um só lugar.
              </motion.span>
            </LayoutGroup>
          </h1>

          {/* assistente / call-to-action */}
          <AiAssistat />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#f0eee6]" />
      </section>

          {/* Main Heading */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold text-black mb-6 sm:mb-8 leading-tight">
            Somos <span className="text-emerald-700">o que faltava</span> para <span className="underline">sua operação</span>{' '}
            <span className="text-emerald-700">vender no automático</span>.
          </h1>

          {/* Description */}
          <p className="text-base lg:text-xl text-center text-black/80 mb-8 sm:mb-12 leading-relaxed">
            Criamos agentes treinados para conversão no atendimento, suporte contextualizado e agendamentos que interagem
            com o seu calendário. Ativos 24/7.
          </p>
          
          
          {/* CTA Buttons - Mobile first design */}
          <div className="justify-center flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link 
              href="/start" 
              className="w-full sm:w-auto bg-black text-amber-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-800 transition-colors text-center"
            >
              Começar Agora
            </Link>
            <Link 
              href="/api-docs" 
              className="w-full sm:w-auto bg-black text-amber-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-800 transition-colors text-center"
            >
              Documentação da API
            </Link>
          </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center">
          <p className="text-base sm:text-lg lg:text-xl text-black leading-relaxed">
            Na ScaleHub, desenvolvemos agentes de IA para servir o crescimento sustentável dos negócios.
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-black leading-relaxed mt-4 sm:mt-6">
            Embora ninguém possa prever todos os resultados que a IA terá nos negócios, sabemos que projetar 
            tecnologias poderosas requer tanto passos ousados para frente quanto pausas intencionais para 
            considerar os efeitos. É por isso que focamos na construção de ferramentas com benefício empresarial 
            em sua fundação, como nossos agentes de automação.
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-black leading-relaxed mt-4 sm:mt-6">
            Através de nossa pesquisa diária, desenvolvimento de produtos e implementações, buscamos mostrar 
            como o desenvolvimento responsável de IA para negócios se parece na prática.
          </p>
        </div>
      </section>

      {/* Featured Solutions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-8 sm:mb-12">Soluções em Destaque</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white/50 backdrop-blur-sm border border-amber-200 rounded-xl p-4 sm:p-6 hover:bg-white/70 transition-colors">
            <h3 className="text-lg sm:text-xl font-semibold text-black mb-3">Automação de Atendimento</h3>
            <p className="text-sm sm:text-base text-black/70 mb-4 leading-relaxed">
              Agentes inteligentes que automatizam o atendimento ao cliente com respostas personalizadas e contextuais.
            </p>
            <span className="text-xs sm:text-sm text-black/60">Atendimento • 15 Mar, 2025</span>
          </div>
          
          <div className="bg-white/50 backdrop-blur-sm border border-amber-200 rounded-xl p-4 sm:p-6 hover:bg-white/70 transition-colors">
            <h3 className="text-lg sm:text-xl font-semibold text-black mb-3">Análise de Dados</h3>
            <p className="text-sm sm:text-base text-black/70 mb-4 leading-relaxed">
              Processamento inteligente de grandes volumes de dados para insights e tomada de decisão automatizada.
            </p>
            <span className="text-xs sm:text-sm text-black/60">Analytics • 12 Mar, 2025</span>
          </div>
          
          <div className="bg-white/50 backdrop-blur-sm border border-amber-200 rounded-xl p-4 sm:p-6 hover:bg-white/70 transition-colors">
            <h3 className="text-lg sm:text-xl font-semibold text-black mb-3">Gestão de Processos</h3>
            <p className="text-sm sm:text-base text-black/70 mb-4 leading-relaxed">
              Otimização e automatização de fluxos de trabalho complexos com agentes especializados.
            </p>
            <span className="text-xs sm:text-sm text-black/60">Processos • 8 Mar, 2025</span>
          </div>
          
          <div className="bg-white/50 backdrop-blur-sm border border-amber-200 rounded-xl p-4 sm:p-6 hover:bg-white/70 transition-colors">
            <h3 className="text-lg sm:text-xl font-semibold text-black mb-3">Automação de Vendas</h3>
            <p className="text-sm sm:text-base text-black/70 mb-4 leading-relaxed">
              Agentes que qualificam leads, agendam reuniões e acompanham o pipeline de vendas automaticamente.
            </p>
            <span className="text-xs sm:text-sm text-black/60">Vendas • 5 Mar, 2025</span>
          </div>
          
          <div className="bg-white/50 backdrop-blur-sm border border-amber-200 rounded-xl p-4 sm:p-6 hover:bg-white/70 transition-colors">
            <h3 className="text-lg sm:text-xl font-semibold text-black mb-3">Integração de Sistemas</h3>
            <p className="text-sm sm:text-base text-black/70 mb-4 leading-relaxed">
              Conecte todos os seus sistemas e ferramentas através de agentes inteligentes de integração.
            </p>
            <span className="text-xs sm:text-sm text-black/60">Integração • 1 Mar, 2025</span>
          </div>
          
          <div className="bg-white/50 backdrop-blur-sm border border-amber-200 rounded-xl p-4 sm:p-6 hover:bg-white/70 transition-colors">
            <h3 className="text-lg sm:text-xl font-semibold text-black mb-3">Monitoramento Inteligente</h3>
            <p className="text-sm sm:text-base text-black/70 mb-4 leading-relaxed">
              Supervisão contínua de sistemas e processos com alertas proativos e ações corretivas automáticas.
            </p>
            <span className="text-xs sm:text-sm text-black/60">Monitoramento • 25 Fev, 2025</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center bg-white/30 backdrop-blur-sm border border-amber-200 rounded-2xl p-6 sm:p-8 lg:p-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6">
            Pronto para escalar seu negócio com IA?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-black/80 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Descubra como nossos agentes de IA podem automatizar seus processos mais complexos 
            e impulsionar o crescimento da sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto bg-black text-amber-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-800 transition-colors text-center"
            >
              Falar com Especialista
            </Link>
            <Link 
              href="/case-studies" 
              className="w-full sm:w-auto bg-black text-amber-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-800 transition-colors text-center"
            >
              Ver Casos de Uso
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-200 bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-semibold text-white mb-4">ScaleHub</h3>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                Automatizando o futuro dos negócios com agentes de IA inteligentes e confiáveis.
              </p>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Produto</h4>
              <ul className="space-y-2">
                <li><Link href="/agents" className="text-sm sm:text-base text-neutral-400 hover:text-emerald-700 transition-colors">Agentes IA</Link></li>
                <li><Link href="/api" className="text-sm sm:text-base text-neutral-400 hover:text-emerald-700 transition-colors">API</Link></li>
                <li><Link href="/integrations" className="text-sm sm:text-base text-neutral-400 hover:text-emerald-700 transition-colors">Integrações</Link></li>
                <li><Link href="/pricing" className="text-sm sm:text-base text-neutral-400 hover:text-emerald-700 transition-colors">Preços</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-sm sm:text-base text-neutral-400 hover:text-emerald-700 transition-colors">Sobre</Link></li>
                <li><Link href="/careers" className="text-sm sm:text-base text-neutral-400 hover:text-emerald-700 transition-colors">Carreiras</Link></li>
                <li><Link href="/research" className="text-sm sm:text-base text-neutral-400 hover:text-emerald-700 transition-colors">Pesquisa</Link></li>
                <li><Link href="/blog" className="text-sm sm:text-base text-neutral-400 hover:text-emerald-700 transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Suporte</h4>
              <ul className="space-y-2">
                <li><Link href="/docs" className="text-sm sm:text-base text-neutral-400 hover:text-emerald-700 transition-colors">Documentação</Link></li>
                <li><Link href="/support" className="text-sm sm:text-base text-neutral-400 hover:text-emerald-700 transition-colors">Suporte</Link></li>
                <li><Link href="/status" className="text-sm sm:text-base text-neutral-400 hover:text-emerald-700 transition-colors">Status</Link></li>
                <li><Link href="/contact" className="text-sm sm:text-base text-neutral-400 hover:text-emerald-700 transition-colors">Contato</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-400 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
            <p className="text-sm sm:text-base text-neutral-400">
              © 2025 ScaleHub. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}