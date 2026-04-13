import { Brain, MessageCircle, User, Clock, FileText, Award } from 'lucide-react'

const WA_LINK = 'https://wa.me/5548998056893'

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
  return (
    <section id="neuropsicologia" className="w-full bg-[#7C2C3B] section-padding">
      <div className="container-max">

        {/* ── Badge ── */}
        <div className="flex justify-center mb-8">
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

        {/* ── 1. O que avaliamos — Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card) => (
            <div
              key={card.titulo}
              className="bg-white rounded-2xl p-6 flex flex-col gap-3 shadow-lg shadow-black/20"
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
            href={WA_LINK}
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
    </section>
  )
}
