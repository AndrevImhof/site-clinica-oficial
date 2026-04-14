import { CheckCircle2, Heart, Award } from 'lucide-react'
import Image from 'next/image'

const stats = [
  { value: '+20.000', label: 'Pacientes Atendidos', icon: Heart },
  { value: '+9',      label: 'anos de experiência',  icon: Award },
  { value: '9',       label: 'Abordagens Clínicas', icon: CheckCircle2 },
]

const values = [
  'Excelência no atendimento de demandas psicoterapêuticas',
  'Equipe clínica com diversas abordagens terapêuticas',
  'Atendimento a crianças, adolescentes, adultos e idosos',
  'Sessões individuais, de casal e em grupo',
  'Psicólogos credenciados pelo CRP para atendimento online',
]

export default function Sobre() {
  return (
    <section id="sobre" className="section-padding bg-slate-50">
      <div className="container-max">

        {/* Section label */}
        <div className="text-center mb-8 md:mb-14">
          <span className="inline-block text-[#7C2C3B] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Nossa história
          </span>
          <h2 className="heading-primary text-3xl sm:text-4xl">
            Sobre a Clínica
          </h2>
          <div className="mt-3 w-16 h-1 rounded-full bg-[#7C2C3B] mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Image column ── */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Foto da fachada — arquivo: /public/equipe/fachada.jpeg */}
              <div className="w-full aspect-square rounded-3xl overflow-hidden shadow-hover border border-white relative">
                <Image
                  src="/logo/fachada.jpeg"
                  alt="Fachada da Clínica Luciano Noceti"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 384px"
                />
              </div>

              {/* Stats floating card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-white rounded-2xl shadow-hover
                              p-4 border border-neutral-100">
                <p className="font-serif font-bold text-3xl text-[#7C2C3B]">+20.000</p>
                <p className="text-neutral-500 text-xs mt-0.5 font-medium">pacientes atendidos</p>
                <div className="mt-2 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1 h-6 rounded-full bg-brand-blue-light" style={{ height: `${12 + (i * 4)}px` }} />
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* ── Text column ── */}
          <div className="space-y-6">
            <p className="text-body text-base leading-8">
              A <strong className="text-neutral-800">Clínica Luciano Noceti</strong> se destaca pela excelência no atendimento
              das demandas psicoterapêuticas de crianças, adolescentes, adultos e idosos,
              seja em sessões individuais, de casal ou em grupo, presencial ou online.
            </p>
            <p className="text-body text-base leading-8">
              Com uma equipe clínica diversificada e altamente qualificada, oferecemos
              uma ampla gama de abordagens terapêuticas, garantindo que cada paciente
              encontre o suporte ideal para a sua jornada de autoconhecimento e desenvolvimento emocional.
            </p>
            <p className="hidden md:block text-body text-base leading-8">
              Fundada pelo psicanalista <strong className="text-neutral-800">Luciano Noceti e Vieira</strong>,
              graduado em Psicologia pela UFSC e com formação em Psicanálise pela Instituição
              Psicanalítica Maiêutica Florianópolis, a clínica nasceu do compromisso com
              o cuidado humano e a promoção da saúde mental como bem coletivo.
            </p>

            {/* Values checklist */}
            <ul className="space-y-2.5">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-2.5 text-neutral-600 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#7C2C3B] flex-shrink-0 mt-0.5" />
                  {v}
                </li>
              ))}
            </ul>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-100">
              {stats.map(({ value, label, icon: Icon }) => (
                <div key={label} className="text-center">
                  <Icon className="w-5 h-5 text-[#7C2C3B] mx-auto mb-1" />
                  <p className="font-serif font-bold text-xl text-neutral-800">{value}</p>
                  <p className="text-neutral-400 text-[11px] leading-tight mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
