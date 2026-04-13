import { MapPin, Monitor, Shield, Thermometer } from 'lucide-react'

const diferenciais = [
  {
    icon: MapPin,
    title: 'Centro de Florianópolis',
    desc: 'Localização privilegiada no coração da cidade, de fácil acesso por transporte público e veículo próprio.',
    color: 'text-brand-blue',
    bg: 'bg-brand-blue-light',
  },
  {
    icon: Monitor,
    title: 'Presencial e Online',
    desc: 'Atendimento híbrido com psicólogos credenciados pelo CRP para consultas remotas em todo o Brasil.',
    color: 'text-brand-teal',
    bg: 'bg-brand-teal-light',
  },
  {
    icon: Shield,
    title: 'Ampla Rede de Convênios',
    desc: 'Aceitamos Unimed, SC Saúde, Geap, Celos, Saudesc, Elo Saúde, CASACARESC e muito mais.',
    color: 'text-brand-sage',
    bg: 'bg-brand-sage-light',
  },
  {
    icon: Thermometer,
    title: 'Ambiente Acolhedor',
    desc: 'Consultórios climatizados, silenciosos e projetados para proporcionar conforto e privacidade.',
    color: 'text-brand-blue-mid',
    bg: 'bg-brand-blue-pale',
  },
]

export default function Diferenciais() {
  return (
    <section className="bg-white py-14 border-y border-neutral-100">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {diferenciais.map(({ icon: Icon, title, desc, color, bg }) => (
            <div
              key={title}
              className="flex flex-col items-center sm:items-start text-center sm:text-left
                         gap-3 p-6 rounded-2xl border border-transparent
                         hover:border-neutral-100 hover:bg-slate-50
                         transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center
                              group-hover:scale-105 transition-transform duration-300`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 text-sm mb-1.5">{title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
