import {
  BookOpen, Leaf, Compass, Users, Moon, Brain,
  Puzzle, Activity, HeartHandshake,
} from 'lucide-react'

const abordagens = [
  {
    icon: BookOpen,
    name: 'Psicanálise',
    sub: 'Freudo-Lacaniana',
    desc: 'Abordagem baseada na teoria de Freud e Lacan, que investiga o inconsciente, os conflitos internos e a história de vida do sujeito. Indicada para diversas demandas emocionais e relacionais.',
    color: 'text-brand-blue',
    bg: 'bg-brand-blue-light',
    border: 'border-brand-blue-light',
  },
  {
    icon: Leaf,
    name: 'Gestalt-terapia',
    sub: 'Abordagem humanista',
    desc: 'Foca no "aqui e agora", trabalhando a consciência das emoções, percepções e comportamentos no momento presente para promover o autoconhecimento e a responsabilidade pessoal.',
    color: 'text-brand-teal',
    bg: 'bg-brand-teal-light',
    border: 'border-brand-teal-light',
  },
  {
    icon: Compass,
    name: 'Existencialismo',
    sub: 'Filosofia aplicada',
    desc: 'Explora questões fundamentais da existência humana: liberdade, responsabilidade, angústia e busca de sentido. Auxilia o paciente a encontrar significado e autenticidade em sua vida.',
    color: 'text-brand-blue-mid',
    bg: 'bg-brand-blue-pale',
    border: 'border-brand-blue-pale',
  },
  {
    icon: Users,
    name: 'Psicodrama',
    sub: 'Terapia vivencial',
    desc: 'Utiliza técnicas dramáticas e expressivas para explorar conflitos internos, relações interpessoais e situações de vida, promovendo insight emocional através da ação e da criatividade.',
    color: 'text-brand-sage',
    bg: 'bg-brand-sage-light',
    border: 'border-brand-sage-light',
  },
  {
    icon: Moon,
    name: 'Psicologia Junguiana',
    sub: 'Psicologia Analítica',
    desc: 'Baseada na obra de Carl Jung, trabalha com o inconsciente coletivo, arquétipos, sonhos e processos de individuação, facilitando o desenvolvimento interior e a integração psíquica.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
  },
  {
    icon: Brain,
    name: 'TCC',
    sub: 'Cognitivo-Comportamental',
    desc: 'Terapia estruturada e baseada em evidências que identifica e modifica padrões de pensamento e comportamento disfuncionais. Altamente eficaz para ansiedade, depressão, fobias e TOC.',
    color: 'text-violet-500',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
  },
  {
    icon: Puzzle,
    name: 'Terapia para TEA',
    sub: 'Transtorno do Espectro Autista',
    desc: 'Abordagem especializada voltada ao desenvolvimento de habilidades sociais, comunicação e comportamento adaptativo em pessoas com TEA, com suporte às famílias e cuidadores.',
    color: 'text-rose-500',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
  },
  {
    icon: Activity,
    name: 'Neuropsicologia',
    sub: 'Avaliação & Reabilitação',
    desc: 'Avalia e reabilita funções cognitivas como memória, atenção, linguagem e funções executivas, auxiliando pacientes com sequelas neurológicas, TDAH e outras condições.',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-100',
  },
  {
    icon: HeartHandshake,
    name: 'Sistêmica Familiar',
    sub: 'Terapia de família e casal',
    desc: 'Abordagem que compreende o indivíduo dentro do contexto de seus sistemas relacionais — família, casal e grupos. Trabalha padrões de comunicação, vínculos e dinâmicas para promover equilíbrio e saúde nas relações.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
]

export default function Abordagens() {
  return (
    <section id="abordagens" className="section-padding bg-[#FCECBF]">
      <div className="container-max">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#7C2C3B] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Especialidades
          </span>
          <h2 className="heading-primary text-3xl sm:text-4xl">
            Nossas Abordagens Terapêuticas
          </h2>
          <div className="mt-3 w-16 h-1 rounded-full bg-[#7C2C3B] mx-auto" />
          <p className="mt-5 text-body text-base max-w-2xl mx-auto">
            Nossa equipe clínica atua com 9 abordagens terapêuticas distintas,
            proporcionando um acolhimento especializado, centrado na sua singularidade e focado no seu bem-estar.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {abordagens.map(({ icon: Icon, name, sub, desc, color, bg, border }) => (
            <article
              key={name}
              className={`card p-7 border ${border} group cursor-default`}
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-11 h-11 rounded-xl ${bg}
                                flex items-center justify-center
                                group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-neutral-800 text-sm leading-tight">
                    {name}
                  </h3>
                  <p className={`text-xs font-medium ${color} mt-0.5`}>{sub}</p>
                </div>
              </div>
              <p className="mt-4 text-neutral-500 text-sm leading-relaxed">
                {desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
