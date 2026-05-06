'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Brain, MessageCircle, User, Clock, FileText, Award, BookOpen, X, Monitor, MapPin } from 'lucide-react'

interface Psicologa {
  nome: string
  registro: string
  metodo: string
  biografia: string
  formacao: string
  publico: string
  demandas: string
  foto: string
}

const psicologas: Psicologa[] = [
  {
    nome: 'Catarina Geoffroy',
    registro: 'CRP 12/21876',
    metodo: 'Terapia Cognitivo Comportamental (TCC), Neuropsicologia e ABA',
    biografia: 'Psicóloga formada pela UFF/RJ em 2004. Tenho pós-graduação em autismo, ABA, TCC e neuropsicologia. Atuei como psicóloga clínica sob a abordagem da Terapia Cognitivo–Comportamental. Fiz parte da equipe multidisciplinar da Clínica Escola do autista, posteriormente Centro de Referência Municipal em Autismo Prof. Maria José da Silva Rodrigues, ambos na cidade de São Gonçalo, RJ.\n\nEm 2021 mudei para Florianópolis SC, atuando ainda como psicóloga clínica, sob a abordagem da TCC, desenvolvendo acompanhamento psicoterapêutico presencial infantil, juvenil e adulto (atendimento remoto a partir de 15 anos), orientação parental e avaliação psicológica com ênfase na investigação neuropsicológica referente a transtornos do neurodesenvolvimento, alterações comportamentais e cognitivas. Fiz a Pós-Graduação em Neuropsicologia no IPOG, referência em curso e avaliações neuropsicológicas.',
    formacao: 'Psicóloga formada pela UFF/RJ em 2004. Pós-graduação em Autismo, ABA, TCC e Neuropsicologia (IPOG). Atuou como psicóloga clínica na abordagem TCC e fez parte da equipe multidisciplinar do Centro de Referência Municipal em Autismo Prof. Maria José da Silva Rodrigues (São Gonçalo, RJ). Em 2021 mudou-se para Florianópolis/SC.',
    publico: 'Atendimento presencial infantil, juvenil e adulto. Atendimento remoto a partir de 15 anos. Orientação parental e avaliação neuropsicológica.',
    demandas: 'TEA, TDAH, TOD, ansiedade, depressão, dificuldades e transtornos socioemocionais, transtornos alimentares, luto, fobias, estresse pós-traumático, gênero e sexualidade, conflitos familiares e de relacionamentos.',
    foto: '/equipe/catarina_neuro.jpeg',
  },
  {
    nome: 'Anna de Lima Estanislau',
    registro: 'CRP 12/13484',
    metodo: 'Terapia Cognitivo-Comportamental (TCC) e Neuropsicologia',
    biografia: 'Sou neuropsicóloga especializada em avaliação neuropsicológica de crianças, adolescentes e adultos, com atuação clínica voltada à investigação detalhada do funcionamento cognitivo, emocional e comportamental.\n\nRealizo avaliações completas com o objetivo de auxiliar no diagnóstico diferencial, planejamento terapêutico e orientação para intervenções clínicas e educacionais. O processo envolve entrevista clínica, aplicação de instrumentos padronizados e análise integrada dos resultados.',
    formacao: 'Psicóloga formada desde 2014 pelo Centro Universitário CESUSC (Florianópolis/SC). Pós-graduação em Terapia Cognitivo-Comportamental pelo Instituto Cognitio (2020) e em Neuropsicologia pela UNIASSELVI (2024). Experiência em atendimento clínico infantil, incluindo equoterapia, com foco em crianças com diferentes condições neurológicas e do neurodesenvolvimento.',
    publico: 'Atendimento clínico infantil, juvenil e adulto. Modalidades online e presencial.',
    demandas: 'Avaliação neuropsicológica com foco em TEA, TDAH e outras condições do neurodesenvolvimento. Identificação de déficits em funções cognitivas e executivas, com orientação para intervenções terapêuticas e encaminhamentos.',
    foto: '/equipe/annaestanislau_psico.avif',
  },
]

const WA_NEURO_LINK = 'https://wa.me/5548991908715?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20Avalia%C3%A7%C3%A3o%20Neuropsicol%C3%B3gica.'

const cards = [
  {
    titulo: 'Neurodesenvolvimento & Inteligência',
    texto: 'Avaliação completa para TDAH, TEA (Autismo), Deficiência Intelectual, além de mapeamento para Superdotação e Altas Habilidades.',
  },
  {
    titulo: 'Funções Cognitivas & Executivas',
    texto: 'Investigação profunda de memória, inteligência, atenção, déficits cognitivos e disfunções sociais ou executivas.',
  },
  {
    titulo: 'Emocional & Personalidade',
    texto: 'Análise clínica para auxílio diagnóstico de transtornos depressivos, estruturação de personalidade e planejamento terapêutico direcionado.',
  },
]

const detalhes = [
  {
    icon: User,
    label: 'Idade',
    valor: 'A partir de 5 anos',
    obs: 'Testes não verbais para menores; testes padronizados a partir dos 6 anos.',
  },
  {
    icon: Clock,
    label: 'Duração',
    valor: '5 a 10 sessões',
    obs: null,
  },
  {
    icon: FileText,
    label: 'Laudo',
    valor: '4 a 6 semanas',
    obs: 'Após o término das avaliações.',
  },
]

export default function AvaliacaoNeuropsico() {
  const [modalAberto, setModalAberto] = useState<Psicologa | null>(null)
  return (
    <section id="neuropsicologia" className="w-full bg-[#7C2C3B] section-padding">
      <div className="container-max">

        {/* ── Badge ── */}
        <div className="flex justify-center mb-5 md:mb-8">
          <span className="inline-flex items-center gap-2 bg-white/15 border border-white/25
                           rounded-full px-4 py-1.5 text-white text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#FCECBF] animate-pulse" />
            Destaque
          </span>
        </div>

        {/* ── Título ── */}
        <div className="text-center mb-12">
          <h2 className="heading-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Avaliação Neuropsicológica
          </h2>
          <div className="mt-4 w-16 h-1 rounded-full bg-[#FCECBF] mx-auto" />
          <p className="mt-5 text-white/75 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Mapeamento cognitivo e emocional profundo para diagnósticos precisos
            e direcionamento terapêutico assertivo.
          </p>
        </div>
        {/* — Psicólogas que realizam — */}
        <div className="mb-12 md:mb-16">
          <div className="text-center mb-8">
            <h3 className="heading-serif text-2xl md:text-3xl text-white mb-2">
              Quem realiza
            </h3>
            <p className="text-white/70 text-sm md:text-base">
              Psicólogas especializadas em Avaliação Neuropsicológica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {psicologas.map((psi) => (
              <button
                key={psi.nome}
                onClick={() => setModalAberto(psi)}
                className="group bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 text-left hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-[#FCECBF]/40">
                  <Image
                    src={psi.foto}
                    alt={psi.nome}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="heading-serif text-xl md:text-2xl text-[#7C2C3B] mb-1">
                    {psi.nome}
                  </h4>
                  <p className="text-[#7C2C3B]/70 text-sm font-semibold mb-3">
                    {psi.registro}
                  </p>
                  <p className="text-neutral-700 text-sm leading-relaxed mb-4">
                    {psi.metodo}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[#7C2C3B] text-sm font-semibold group-hover:gap-3 transition-all">
                    Ver perfil completo
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
        {/* ── 1. O que avaliamos — Mobile: scroll | md+: grid ── */}
        <div className="snap-cards flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4
                        md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:snap-none md:pb-0 md:mx-0 md:px-0">
          {cards.map((card) => (
            <div
              key={card.titulo}
              className="bg-white rounded-2xl p-6 flex flex-col gap-3 shadow-lg shadow-black/20
                         flex-shrink-0 snap-start w-[82vw] min-w-[270px] md:w-auto md:min-w-0"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F4E6E9] flex items-center justify-center flex-shrink-0">
                <Brain className="w-5 h-5 text-[#7C2C3B]" />
              </div>
              <h3 className="font-serif font-bold text-[#7C2C3B] text-base leading-snug">
                {card.titulo}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {card.texto}
              </p>
            </div>
          ))}
        </div>

        {/* ── 2. Qualidade — Padrão Ouro ── */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-5
                        bg-white/10 border border-white/20 rounded-2xl px-7 py-6">
          <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#FCECBF]/20 border border-[#FCECBF]/30
                          flex items-center justify-center">
            <Award className="w-7 h-7 text-[#FCECBF]" />
          </div>
          <div>
            <p className="text-[#FCECBF] font-bold text-base sm:text-lg leading-snug mb-1">
              Instrumentos Padrão Ouro
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              Utilizamos testes de referência mundial e nacional (como <strong className="text-white/90">WISC</strong> e <strong className="text-white/90">Neupsilin</strong>),
              garantindo diagnósticos de alta precisão e validade médica e escolar.
            </p>
          </div>
        </div>

        {/* ── 3. Como funciona — Detalhes ── */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {detalhes.map(({ icon: Icon, label, valor, obs }, i) => (
            <div
              key={label}
              className={`bg-[#7C2C3B] px-6 py-6 flex items-start gap-4
                ${i < detalhes.length - 1 ? 'sm:border-r border-white/10' : ''}`}
            >
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon className="w-4 h-4 text-[#FCECBF]" />
              </div>
              <div>
                <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest mb-1">
                  {label}
                </p>
                <p className="text-white font-semibold text-sm leading-snug">
                  {valor}
                </p>
                {obs && (
                  <p className="text-white/50 text-[11px] leading-relaxed mt-1">
                    {obs}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="flex justify-center mt-10">
          <a
            href={WA_NEURO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white text-[#7C2C3B]
                       font-bold text-sm sm:text-base px-8 py-4 rounded-full
                       hover:bg-[#FCECBF] transition-colors duration-200 shadow-lg shadow-black/20"
          >
            <MessageCircle className="w-5 h-5" />
            Agendar Avaliação Neuropsicológica
          </a>
        </div>

      </div>
    {/* — Modal de detalhes da psicóloga — */}
      {modalAberto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setModalAberto(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalAberto(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors z-10"
              aria-label="Fechar"
            >
              <X className="w-5 h-5 text-neutral-700" />
            </button>

            <div className="overflow-y-auto max-h-[90vh]">
            <div className="p-6 md:p-10">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-8 pb-8 border-b border-neutral-200">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-[#FCECBF]/60">
                  <Image
                    src={modalAberto.foto}
                    alt={modalAberto.nome}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="heading-serif text-2xl md:text-3xl text-[#7C2C3B] mb-1">
                    {modalAberto.nome}
                  </h3>
                  <p className="text-[#7C2C3B]/70 text-sm font-semibold mb-3">
                    {modalAberto.registro}
                  </p>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    {modalAberto.metodo}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-[#7C2C3B] font-bold text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Biografia
                  </h4>
                  <p className="text-neutral-700 text-sm leading-relaxed whitespace-pre-line mb-4">
                    {modalAberto.biografia}
                  </p>
                  <h4 className="text-[#7C2C3B] font-bold text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Formação
                  </h4>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    {modalAberto.formacao}
                  </p>
                </div>

                <div>
                  <h4 className="text-[#7C2C3B] font-bold text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Público atendido
                  </h4>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    {modalAberto.publico}
                  </p>
                </div>

                <div>
                  <h4 className="text-[#7C2C3B] font-bold text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Brain className="w-4 h-4" />
                    Demandas atendidas
                  </h4>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    {modalAberto.demandas}
                  </p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
