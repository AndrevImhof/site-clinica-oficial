import { profissionais, slugify } from '@/lib/profissionais'
import { notFound } from 'next/navigation'

interface Props {
  params: { slug: string }
}

function detectarModalidade(publico: string) {
  const t = publico.toLowerCase()
  return { online: /on.?line/.test(t), presencial: /presencial/.test(t) }
}

export function generateStaticParams() {
  return profissionais.map(p => ({ slug: slugify(p.nome) }))
}

export default function CardExport({ params }: Props) {
  const p = profissionais.find(p => slugify(p.nome) === params.slug)
  if (!p) notFound()

  const { online, presencial } = detectarModalidade(p.publico)

  const demandaPreview = p.demandas
    .replace(/\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 280)

  const nomePartes = p.nome.split(' ')
  const primeiroNome = nomePartes[0]
  const restoNome = nomePartes.slice(1).join(' ')

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

        {/* Top bar */}
        <div style={{ padding: '72px 80px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          {/* Logo */}
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
          {/* CRP badge */}
          {p.registro && (
            <div style={{
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '40px', padding: '12px 28px',
              fontSize: '22px', fontWeight: 600, color: 'rgba(252,236,191,0.85)',
              letterSpacing: '1px',
            }}>
              {p.registro}
            </div>
          )}
        </div>

        {/* Photo */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '72px', position: 'relative', zIndex: 1 }}>
          <div style={{
            width: '340px', height: '340px', borderRadius: '50%', overflow: 'hidden',
            border: '6px solid rgba(252,236,191,0.35)',
            boxShadow: '0 0 0 12px rgba(252,236,191,0.08), 0 40px 80px rgba(0,0,0,0.5)',
          }}>
            <img
              src={p.foto}
              alt={p.nome}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Name */}
        <div style={{ textAlign: 'center', marginTop: '56px', padding: '0 80px', position: 'relative', zIndex: 1 }}>
          <div style={{
            fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)',
            lineHeight: 1.05,
          }}>
            <span style={{ display: 'block', fontSize: '80px', fontWeight: 700, color: 'white' }}>
              {primeiroNome}
            </span>
            <span style={{ display: 'block', fontSize: '60px', fontWeight: 400, color: 'rgba(255,255,255,0.85)', marginTop: '-8px' }}>
              {restoNome}
            </span>
          </div>

          {/* Method */}
          <div style={{ marginTop: '28px', fontSize: '30px', color: 'rgba(252,236,191,0.8)', lineHeight: 1.4, fontWeight: 400 }}>
            {p.metodo}
          </div>

          {/* Modality badges */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '28px' }}>
            {online && (
              <div style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                background: 'rgba(125,192,228,0.15)', border: '1.5px solid rgba(125,192,228,0.4)',
                borderRadius: '40px', padding: '12px 28px',
                fontSize: '24px', fontWeight: 600, color: 'rgba(180,225,255,0.9)',
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                </svg>
                On-line
              </div>
            )}
            {presencial && (
              <div style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                background: 'rgba(252,236,191,0.12)', border: '1.5px solid rgba(252,236,191,0.35)',
                borderRadius: '40px', padding: '12px 28px',
                fontSize: '24px', fontWeight: 600, color: 'rgba(252,236,191,0.9)',
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                Presencial
              </div>
            )}
          </div>
        </div>

        {/* Divider */}
        <div style={{ margin: '56px 80px 0', height: '1px', background: 'rgba(255,255,255,0.15)', position: 'relative', zIndex: 1 }} />

        {/* Demandas */}
        <div style={{ margin: '48px 80px 0', flex: 1, position: 'relative', zIndex: 1 }}>
          <div style={{
            fontSize: '18px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase',
            color: 'rgba(252,236,191,0.55)', marginBottom: '24px',
          }}>
            Áreas de atuação
          </div>
          <div style={{
            fontSize: '32px', lineHeight: 1.6, color: 'rgba(255,255,255,0.78)',
            display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}>
            {demandaPreview}{p.demandas.length > 280 ? '...' : ''}
          </div>
        </div>

        {/* Footer */}
        <div style={{
          flexShrink: 0,
          background: 'rgba(0,0,0,0.35)',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '44px 80px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          position: 'relative', zIndex: 1,
        }}>
          <div style={{ fontSize: '26px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1px' }}>
            Centro de Florianópolis — SC
          </div>
          <div style={{ fontSize: '26px', color: 'rgba(252,236,191,0.6)', fontWeight: 600 }}>
            @clinica.lucianonoceti
          </div>
        </div>

      </div>
    </main>
  )
}
