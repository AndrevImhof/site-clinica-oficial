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
const NEURO_PHONE = '(48) 99190-8715'
const WA_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z'

// ─── Header Completo (ids 1 e 9) ─────────────────────────────────────────────
function HeaderCompleto() {
  return (
    <div style={{
      padding: '56px 80px 0', flexShrink: 0,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <img
          src="/logo/clinica.jpeg"
          alt="Clínica Luciano Noceti"
          style={{ width: '64px', height: '64px', borderRadius: '14px', objectFit: 'cover' }}
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
  )
}

// ─── Header Minimalista (ids 2-8) ────────────────────────────────────────────
function HeaderMinimalista() {
  return (
    <div style={{
      padding: '36px 80px 0', flexShrink: 0,
      display: 'flex', alignItems: 'center',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <img
          src="/logo/clinica.jpeg"
          alt="Clínica Luciano Noceti"
          style={{ width: '56px', height: '56px', borderRadius: '12px', objectFit: 'cover' }}
        />
        <div style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '0.5px', color: 'rgba(252,236,191,0.95)' }}>
          Clínica Luciano Noceti
        </div>
      </div>
    </div>
  )
}

// ─── Footer Escuro (ids 1 e 9) ───────────────────────────────────────────────
function FooterEscuro() {
  return (
    <div style={{
      flexShrink: 0,
      background: 'rgba(0,0,0,0.35)',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      padding: '32px 80px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
        <svg style={{ flexShrink: 0, marginTop: '4px' }} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <div>
          <div style={{ fontSize: '20px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1px', lineHeight: 1.45 }}>Rua Felipe Schmidt, 515 — Centro</div>
          <div style={{ fontSize: '20px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1px', lineHeight: 1.45 }}>Edifício Pórtico, Florianópolis — SC</div>
          <div style={{ fontSize: '20px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1px', lineHeight: 1.45 }}>Sala 204 — 2º andar</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(252,236,191,0.6)">
          <path d={WA_PATH} />
        </svg>
        <div style={{ fontSize: '20px', color: 'rgba(252,236,191,0.6)', fontWeight: 600, letterSpacing: '1px' }}>
          {NEURO_PHONE}
        </div>
      </div>
    </div>
  )
}

// ─── Card 1 — Capa ───────────────────────────────────────────────────────────
function Card1Capa() {
  return (
    <div style={{
      flex: 1, display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '40px 80px',
      textAlign: 'center', position: 'relative', zIndex: 1,
    }}>
      <div style={{ fontFamily: SERIF, lineHeight: 1 }}>
        <div style={{ fontSize: '72px', fontWeight: 700, color: 'white' }}>Avaliações</div>
        <div style={{ fontSize: '52px', fontWeight: 400, color: 'rgba(255,255,255,0.85)', marginTop: '12px' }}>
          Neuropsicológicas
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '24px', margin: '56px 0', width: '100%' }}>
        <div style={{ flex: 1, height: '1px', background: GOLD_FAINT }} />
        <div style={{ width: '12px', height: '12px', flexShrink: 0, background: GOLD_DIM, transform: 'rotate(45deg)' }} />
        <div style={{ flex: 1, height: '1px', background: GOLD_FAINT }} />
      </div>

      <div style={{ fontSize: '32px', fontWeight: 300, color: 'rgba(255,255,255,0.65)', lineHeight: 1.55, textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
        Uma investigação detalhada do funcionamento cognitivo e emocional
      </div>

      <div style={{ fontSize: '32px', fontWeight: 500, color: GOLD_DIM, lineHeight: 1.4, textAlign: 'center', maxWidth: '760px', margin: '56px auto 0' }}>
        Saiba como funciona e conheça nossas profissionais
      </div>
    </div>
  )
}

// ─── Placeholder ─────────────────────────────────────────────────────────────
function Placeholder({ n }: { n: number }) {
  return (
    <div style={{
      flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{ fontSize: '36px', color: WHITE_FAINT }}>Card {n} — em breve</div>
    </div>
  )
}

// ─── Componente principal ────────────────────────────────────────────────────
export default function NeuroCarrosselExport({ params }: Props) {
  if (process.env.NODE_ENV === 'production' && !process.env.ALLOW_CARD_EXPORT) {
    notFound()
  }

  const id = parseInt(params.id, 10)
  if (isNaN(id) || id < 1 || id > 9) notFound()

  const fullLayout = id === 1 || id === 9

  return (
    <main style={{ margin: 0, padding: 0, background: '#1a0a0f', display: 'flex', justifyContent: 'center' }}>
      <div style={{
        width: '1080px',
        height: '1350px',
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

        {fullLayout ? <HeaderCompleto /> : <HeaderMinimalista />}
        {id === 1 ? <Card1Capa /> : <Placeholder n={id} />}
        {fullLayout && <FooterEscuro />}

      </div>
    </main>
  )
}
