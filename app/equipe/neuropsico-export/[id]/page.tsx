import { profissionais, Prof } from '@/lib/profissionais'
import { notFound } from 'next/navigation'

interface Props {
  params: { id: string }
}

// ─── Tokens de identidade visual ────────────────────────────────────────────
const GOLD        = 'rgba(252,236,191,0.9)'
const GOLD_DIM    = 'rgba(252,236,191,0.65)'
const GOLD_FAINT  = 'rgba(252,236,191,0.15)'
const GOLD_BORDER = 'rgba(252,236,191,0.35)'
const WHITE_DIM   = 'rgba(255,255,255,0.78)'
const WHITE_FAINT = 'rgba(255,255,255,0.5)'
const WHITE_GHOST = 'rgba(255,255,255,0.1)'
const SERIF       = 'var(--font-playfair, "Playfair Display", Georgia, serif)'

// ─── Sistema tipográfico ─────────────────────────────────────────────────────
// cardTitle:    52px  — título principal de cada card (Cards 2-8)
// cardSubtitle: 38px  — título secundário dentro de um card
// bodyText:     32px  — texto corrido principal
// bodySmall:    26px  — texto descritivo / labels
// listItem:     30px  — itens de lista

const WA_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z'

const NEURO_PHONE = '(48) 99190-8715'

// ─── Componentes compartilhados ──────────────────────────────────────────────
function SectionTitle({ text, size = 52 }: { text: string; size?: number }) {
  return (
    <div style={{
      fontFamily: SERIF,
      fontSize: size + 'px', fontWeight: 700, color: GOLD,
      lineHeight: 1.15, marginBottom: '32px',
    }}>
      {text}
    </div>
  )
}

// listItem: 30px
function BulletItem({ text, bold }: { text: string; bold?: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
      <div style={{
        width: '10px', height: '10px', borderRadius: '50%', flexShrink: 0,
        background: GOLD_DIM, marginTop: '14px',
      }} />
      <div style={{ fontSize: '30px', lineHeight: 1.55, color: WHITE_DIM }}>
        {bold
          ? <><strong style={{ color: GOLD, fontWeight: 600 }}>{bold}</strong>{' — '}{text}</>
          : text}
      </div>
    </div>
  )
}

// ─── Card 1 — Capa (hierarquia própria, não segue o sistema acima) ───────────
function Card1() {
  return (
    <div style={{
      flex: 1, display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center',
      padding: '40px 80px', textAlign: 'center',
    }}>
      <div style={{ fontFamily: SERIF, lineHeight: 1.0 }}>
        <div style={{ fontSize: '112px', fontWeight: 700, color: 'white' }}>Avaliações</div>
        <div style={{ fontSize: '76px', fontWeight: 400, color: 'rgba(255,255,255,0.85)', marginTop: '16px' }}>
          Neuropsicológicas
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '24px', margin: '72px 0', width: '100%' }}>
        <div style={{ flex: 1, height: '1px', background: GOLD_FAINT }} />
        <div style={{ width: '12px', height: '12px', flexShrink: 0, background: GOLD_DIM, transform: 'rotate(45deg)' }} />
        <div style={{ flex: 1, height: '1px', background: GOLD_FAINT }} />
      </div>

      <div style={{ fontSize: '38px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.55, maxWidth: '820px', fontWeight: 300 }}>
        Uma investigação detalhada do funcionamento cognitivo e emocional
      </div>

      <div style={{ marginTop: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <div style={{ fontSize: '38px', color: GOLD_DIM, fontWeight: 500, textAlign: 'center', lineHeight: 1.3, maxWidth: '780px' }}>
          <span>Saiba como funciona e conheça nossas profissionais</span>
        </div>
      </div>
    </div>
  )
}

// ─── Card 2 — Anna ───────────────────────────────────────────────────────────
function Card2({ anna }: { anna?: Prof }) {
  if (!anna) return null
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '60px 80px', alignItems: 'center', justifyContent: 'flex-start', paddingTop: '80px' }}>
      {/* Foto circular grande */}
      <div style={{ width: '340px', height: '340px', borderRadius: '50%', overflow: 'hidden', border: `3px solid ${GOLD_BORDER}`, marginBottom: '40px', flexShrink: 0 }}>
        <img src={anna.foto} alt={anna.nome} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* Nome */}
      <div style={{ fontFamily: SERIF, fontSize: '68px', fontWeight: 700, color: 'white', textAlign: 'center', lineHeight: 1.1, marginBottom: '18px' }}>
        {anna.nome}
      </div>

      {/* Especialidade */}
      <div style={{ fontSize: '28px', color: GOLD_DIM, textAlign: 'center', marginBottom: '14px' }}>
        Psicóloga — TCC e Neuropsicóloga
      </div>

      {/* CRP em badge */}
      <div style={{ display: 'inline-block', padding: '8px 20px', borderRadius: '40px', background: WHITE_GHOST, border: `1px solid ${GOLD_BORDER}`, color: 'white', fontSize: '24px', marginBottom: '40px' }}>
        {anna.registro}
      </div>

      {/* Bio */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'flex-start', maxWidth: '780px', marginTop: '80px' }}>
        {[
          'Formada CESUSC (2014)',
          'Pós em TCC (Instituto Cognitio, 2020)',
          'Pós em Neuropsicologia (UNIASSELVI, 2024)',
          'Atendimento clínico infantil, incluindo equoterapia',
          'Foco em TEA, TDAH e neurodesenvolvimento'
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '20px', fontSize: '38px', color: WHITE_FAINT, lineHeight: 1.4 }}>
            <span style={{ color: GOLD_DIM, fontSize: '32px', flexShrink: 0 }}>✦</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Card 3 — Catarina ───────────────────────────────────────────────────────
function Card3({ catarina }: { catarina?: Prof }) {
  if (!catarina) return null
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '60px 80px', alignItems: 'center', justifyContent: 'flex-start', paddingTop: '80px' }}>
      {/* Foto circular grande */}
      <div style={{ width: '340px', height: '340px', borderRadius: '50%', overflow: 'hidden', border: `3px solid ${GOLD_BORDER}`, marginBottom: '40px', flexShrink: 0 }}>
        <img src={catarina.foto} alt={catarina.nome} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* Nome */}
      <div style={{ fontFamily: SERIF, fontSize: '68px', fontWeight: 700, color: 'white', textAlign: 'center', lineHeight: 1.1, marginBottom: '18px' }}>
        {catarina.nome}
      </div>

      {/* Especialidade */}
      <div style={{ fontSize: '28px', color: GOLD_DIM, textAlign: 'center', marginBottom: '14px' }}>
        Psicóloga — Atendimento TEA
      </div>

      {/* CRP em badge */}
      <div style={{ display: 'inline-block', padding: '8px 20px', borderRadius: '40px', background: WHITE_GHOST, border: `1px solid ${GOLD_BORDER}`, color: 'white', fontSize: '24px', marginBottom: '40px' }}>
        {catarina.registro}
      </div>

      {/* Bio */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'flex-start', maxWidth: '780px', marginTop: '80px' }}>
        {[
          'Formada UFF/RJ (2004)',
          'Pós em Autismo, ABA, TCC e Neuropsicologia (IPOG)',
          '20+ anos de atuação clínica',
          'Equipe multidisciplinar do Centro de Referência em Autismo (RJ)',
          'Foco em transtornos do neurodesenvolvimento'
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '20px', fontSize: '38px', color: WHITE_FAINT, lineHeight: 1.4 }}>
            <span style={{ color: GOLD_DIM, fontSize: '32px', flexShrink: 0 }}>✦</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Card 4 — O que é + Para quem ───────────────────────────────────────────
function Card4() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 80px', overflow: 'hidden' }}>
      {/* cardTitle: 52px */}
      <SectionTitle text="O que é a Avaliação Neuropsicológica?" size={52} />
      {/* bodyText: 32px */}
      <div style={{ fontSize: '32px', lineHeight: 1.7, color: WHITE_DIM }}>
        É uma investigação detalhada que avalia funções do seu cérebro como atenção, memória, linguagem, comportamento e emoções. Traz clareza sobre o que está acontecendo com suas habilidades cognitivas e emocionais.
      </div>

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.15)', margin: '52px 0' }} />

      {/* cardSubtitle: 38px */}
      <SectionTitle text="Para quem é indicada?" size={38} />
      {/* bodySmall: 26px */}
      <div style={{ fontSize: '26px', color: WHITE_FAINT, marginBottom: '28px', letterSpacing: '0.5px' }}>
        Pessoas com:
      </div>
      {/* listItem: 30px (via BulletItem) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {[
          'Esquecimentos frequentes ou confusão mental',
          'Dificuldade de atenção ou foco',
          'Mudanças de humor ou comportamento',
          'Histórico de AVC, traumatismo craniano ou cirurgias neurológicas',
          'Diagnóstico (ou suspeita) de TDAH, TEA, Alzheimer ou pós-AVC',
        ].map((item, i) => <BulletItem key={i} text={item} />)}
      </div>
    </div>
  )
}

// ─── Card 5 — Como é feita ───────────────────────────────────────────────────
function Card5() {
  const steps = [
    {
      num: '01',
      title: 'Anamnese',
      desc: 'Conversa inicial para entender o histórico de vida, saúde e comportamentos atuais.',
    },
    {
      num: '02',
      title: 'Aplicação de testes',
      desc: 'Testes cognitivos (atenção, memória, raciocínio), emocionais e comportamentais, todos com base científica.',
    },
    {
      num: '03',
      title: 'Observação clínica',
      desc: 'Durante a avaliação, o psicólogo observa como você reage emocionalmente e comportamentalmente às tarefas.',
    },
  ]

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '60px 80px', justifyContent: 'center' }}>
      {/* cardTitle: 52px */}
      <SectionTitle text="Como é feita a avaliação?" size={52} />

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {steps.map((step, i) => (
          <div key={i}>
            <div style={{ display: 'flex', gap: '44px', alignItems: 'flex-start', padding: '64px 0' }}>
              <div style={{
                width: '88px', height: '88px', borderRadius: '50%', flexShrink: 0,
                border: `2px solid ${GOLD_BORDER}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: SERIF, fontSize: '34px', fontWeight: 700, color: GOLD,
              }}>
                {step.num}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: SERIF, fontSize: '44px', fontWeight: 700, color: GOLD, marginBottom: '18px', lineHeight: 1.1 }}>
                  {step.title}
                </div>
                {/* bodyText: 32px */}
                <div style={{ fontSize: '32px', lineHeight: 1.65, color: WHITE_DIM }}>
                  {step.desc}
                </div>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Card 6 — O que será avaliado ───────────────────────────────────────────
function Card6() {
  const items = [
    { bold: 'Atenção e Concentração', text: 'capacidade de focar e sustentar atenção' },
    { bold: 'Memória', text: 'habilidade de reter e recordar informações' },
    { bold: 'Linguagem', text: 'compreensão, comunicação e expressão verbal' },
    { bold: 'Raciocínio Lógico', text: 'resolver problemas e tomar decisões' },
    { bold: 'Funções Executivas', text: 'planejamento e organização' },
    { bold: 'Emoções e Comportamento', text: 'regulação emocional, humor e interações sociais' },
  ]

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '60px 80px', justifyContent: 'center' }}>
      {/* cardTitle: 52px */}
      <SectionTitle text="O que será avaliado?" size={52} />
      {/* bodySmall: 26px */}
      <div style={{ fontSize: '26px', color: WHITE_FAINT, marginBottom: '44px', lineHeight: 1.5 }}>
        Análise detalhada das funções cognitivas e emocionais que impactam o dia a dia:
      </div>
      {/* listItem: 30px (via BulletItem) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
        {items.map((item, i) => <BulletItem key={i} text={item.text} bold={item.bold} />)}
      </div>
      {/* Citação sem caixa — flui naturalmente após a lista */}
      <div style={{
        marginTop: '36px',
        fontSize: '26px', lineHeight: 1.6, color: 'rgba(252,236,191,0.75)',
        fontStyle: 'italic',
      }}>
        A avaliação proporciona uma visão clara do funcionamento cognitivo e emocional, orientando intervenções terapêuticas eficazes.
      </div>
    </div>
  )
}

// ─── Card 7 — Quanto tempo + Devolutiva ─────────────────────────────────────
function Card7() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '60px 80px', justifyContent: 'center' }}>
      <div>
        {/* cardTitle: 52px */}
        <SectionTitle text="Quanto tempo dura?" size={52} />
        {/* bodyText: 32px */}
        <div style={{ fontSize: '32px', lineHeight: 1.7, color: WHITE_DIM }}>
          O processo dura entre{' '}
          <strong style={{ color: GOLD, fontWeight: 700 }}>7 e 10 sessões presenciais</strong>,
          {' '}de 1 hora cada, realizadas semanalmente conforme disponibilidade.
        </div>
      </div>

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.15)', margin: '60px 0' }} />

      <div>
        {/* cardSubtitle: 38px */}
        <SectionTitle text="Análise dos resultados e devolutiva" size={38} />
        {/* bodyText: 32px */}
        <div style={{ fontSize: '32px', lineHeight: 1.7, color: WHITE_DIM }}>
          Os resultados são comparados com padrões esperados (idade, escolaridade) e na última sessão são explicados em detalhes, junto com{' '}
          <strong style={{ color: GOLD, fontWeight: 700 }}>laudo</strong> e{' '}
          <strong style={{ color: GOLD, fontWeight: 700 }}>sugestões de cuidados</strong> ou encaminhamentos.
        </div>
      </div>
    </div>
  )
}

// ─── Card 8 — Benefícios ─────────────────────────────────────────────────────
function Card8() {
  const items = [
    'Ajuda no diagnóstico de doenças neurológicas e psicológicas',
    'Orienta tratamentos',
    'Esclarece dúvidas sobre dificuldades cognitivas ou emocionais',
    'Ajuda a entender mudanças no comportamento',
    'Ajuda a explorar potencialidades e habilidades',
  ]

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '60px 80px', justifyContent: 'center' }}>
      {/* cardTitle: 52px */}
      <SectionTitle text="Benefícios da Avaliação Neuropsicológica" size={52} />
      {/* listItem: 30px */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '52px' }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
            <div style={{
              width: '12px', height: '12px', borderRadius: '50%', flexShrink: 0,
              background: GOLD_DIM, marginTop: '15px',
            }} />
            <div style={{ fontSize: '30px', lineHeight: 1.55, color: WHITE_DIM }}>{item}</div>
          </div>
        ))}
      </div>
    </div>
  )
}


// ─── Card 9 — CTA ────────────────────────────────────────────────────────────
function Card9() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '56px 80px', justifyContent: 'center' }}>
      {/* cardTitle: 52px */}
      <SectionTitle text="Cuidado individualizado para cada pessoa" size={52} />
      {/* bodyText: 32px */}
      <div style={{ fontSize: '32px', lineHeight: 1.7, color: WHITE_DIM, marginBottom: '44px' }}>
        Na Clínica Luciano Noceti, prezamos pela saúde mental com respeito, empatia e ética, oferecendo um cuidado individualizado para cada paciente.
      </div>

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.15)', marginBottom: '44px' }} />

      {/* Endereço */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '44px' }}>
        <svg style={{ flexShrink: 0, marginTop: '8px' }} width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <div>
          <div style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: GOLD, marginBottom: '12px' }}>
            Onde acontece
          </div>
          {/* bodyText: 32px */}
          <div style={{ fontSize: '32px', color: WHITE_DIM, lineHeight: 1.65 }}>
            Rua Felipe Schmidt, 515 — Edifício Pórtico<br />
            2º andar, Sala 204 — Centro — Florianópolis/SC
          </div>
        </div>
      </div>

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.15)', marginBottom: '44px' }} />

      {/* CTA WhatsApp */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: GOLD, marginBottom: '28px' }}>
          Agende sua avaliação
        </div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '24px',
          background: GOLD_FAINT, borderRadius: '72px',
          border: `2px solid ${GOLD_BORDER}`,
          padding: '28px 52px', alignSelf: 'flex-start',
        }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="rgba(37,211,102,0.85)">
            <path d={WA_PATH} />
          </svg>
          <div style={{ fontSize: '48px', fontWeight: 700, color: 'rgba(252,236,191,0.95)', letterSpacing: '1px' }}>
            {NEURO_PHONE}
          </div>
        </div>

        <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: GOLD, marginBottom: '28px' }}>
            Visite nosso site
          </div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '24px',
            background: GOLD_FAINT, borderRadius: '72px',
            border: `2px solid ${GOLD_BORDER}`,
            padding: '28px 52px', alignSelf: 'flex-start',
          }}>
            <span style={{ fontSize: '48px', lineHeight: 1 }}>🌐</span>
            <div style={{ fontSize: '48px', fontWeight: 700, color: 'rgba(252,236,191,0.95)', letterSpacing: '1px' }}>
              lucianonoceti.com.br
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Componente principal ────────────────────────────────────────────────────
export default function NeuroCardExport({ params }: Props) {
  if (process.env.NODE_ENV === 'production' && !process.env.ALLOW_CARD_EXPORT) {
    notFound()
  }

  const id = parseInt(params.id, 10)
  if (isNaN(id) || id < 1 || id > 9) notFound()

  const catarina = profissionais.find(p => p.fazNeuropsico && p.nome === 'Catarina Geoffroy')
  const anna     = profissionais.find(p => p.fazNeuropsico && p.nome === 'Anna de Lima Estanislau')

  return (
    <main style={{ margin: 0, padding: 0, background: '#1a0a0f', display: 'flex', justifyContent: 'center' }}>
      <div style={{
        width: '1080px',
        height: '1920px',
        overflow: 'hidden',
        position: 'relative',
        background: 'linear-gradient(160deg, #8B3245 0%, #6B2235 40%, #4A1520 80%, #2D0D14 100%)',
        fontFamily: 'var(--font-inter, Inter, sans-serif)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
      }}>

        {/* Texture overlay */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 20% 10%, rgba(252,236,191,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 90%, rgba(124,44,59,0.4) 0%, transparent 50%)',
        }} />

        {/* Header */}
        <div style={{
          padding: '72px 80px 0', flexShrink: 0,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          position: 'relative', zIndex: 1,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <img
              src="/logo/clinica.jpeg"
              alt="Clínica Luciano Noceti"
              style={{ width: '80px', height: '80px', borderRadius: '16px', objectFit: 'cover' }}
            />
            <div>
              <div style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '0.5px', color: 'rgba(252,236,191,0.95)', lineHeight: 1.2 }}>
                Clínica Luciano Noceti
              </div>
              <div style={{ fontSize: '17px', color: 'rgba(255,255,255,0.55)', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '4px' }}>
                Psicologia
              </div>
            </div>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '40px', padding: '12px 28px',
            fontSize: '19px', fontWeight: 600, color: 'rgba(252,236,191,0.85)',
            letterSpacing: '0.5px', textAlign: 'center', lineHeight: 1.3,
          }}>
            Avaliação<br />Neuropsicológica
          </div>
        </div>

        {/* Conteúdo dinâmico */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative', zIndex: 1 }}>
          {id === 1 && <Card1 />}
          {id === 2 && <Card2 anna={anna} />}
          {id === 3 && <Card3 catarina={catarina} />}
          {id === 4 && <Card4 />}
          {id === 5 && <Card5 />}
          {id === 6 && <Card6 />}
          {id === 7 && <Card7 />}
          {id === 8 && <Card8 />}
          {id === 9 && <Card9 />}
        </div>

        {/* Rodapé */}
        <div style={{
          flexShrink: 0,
          background: 'rgba(0,0,0,0.35)',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '44px 80px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          position: 'relative', zIndex: 1,
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '18px' }}>
            <svg style={{ flexShrink: 0, marginTop: '5px' }} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <div>
              <div style={{ fontSize: '26px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1px', lineHeight: 1.45 }}>Rua Felipe Schmidt, 515 — Centro</div>
              <div style={{ fontSize: '26px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1px', lineHeight: 1.45 }}>Edifício Pórtico, Florianópolis — SC</div>
              <div style={{ fontSize: '26px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1px', lineHeight: 1.45 }}>Sala 204 — 2º andar</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="rgba(252,236,191,0.6)">
              <path d={WA_PATH} />
            </svg>
            <div style={{ fontSize: '26px', color: 'rgba(252,236,191,0.6)', fontWeight: 600, letterSpacing: '1px' }}>
              {NEURO_PHONE}
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
