import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const size        = { width: 512, height: 512 }
export const contentType = 'image/png'

export default function Icon() {
  // Lê a imagem em disco e converte para base64 para uso no ImageResponse
  const imgPath  = join(process.cwd(), 'public', 'logo', 'clinica.jpeg')
  const imgData  = readFileSync(imgPath)
  const base64   = `data:image/jpeg;base64,${imgData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width:           512,
          height:          512,
          borderRadius:    112,          // ~22% → cantos bem arredondados, estilo iOS/app icon
          overflow:        'hidden',
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'center',
          backgroundColor: '#FCECBF',   // fallback cor creme da marca
        }}
      >
        {/* scale 1.38 elimina a borda cinza interna da imagem */}
        <img
          src={base64}
          style={{
            width:      '138%',
            height:     '138%',
            objectFit:  'cover',
            flexShrink: 0,
          }}
        />
      </div>
    ),
    { width: 512, height: 512 },
  )
}
