import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BASE_URL = process.env.NEXT_URL ?? 'http://localhost:3000'
const OUT_DIR = path.resolve(__dirname, '../cards-neuropsico')

const CARDS = [
  { id: 1, name: '01-capa' },
  { id: 2, name: '02-o-que-e' },
  { id: 3, name: '03-como-e-feita' },
  { id: 4, name: '04-o-que-sera-avaliado' },
  { id: 5, name: '05-tempo-devolutiva' },
  { id: 6, name: '06-beneficios' },
  { id: 7, name: '07-profissionais' },
  { id: 8, name: '08-cta-agendamento' },
]

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true })
  console.log(`Salvando ${CARDS.length} cards em ${OUT_DIR}\n`)

  const browser = await puppeteer.launch({ headless: 'new' })

  for (const card of CARDS) {
    const page = await browser.newPage()
    await page.setViewport({ width: 1080, height: 1920, deviceScaleFactor: 1 })
    await page.goto(`${BASE_URL}/equipe/neuropsico-export/${card.id}`, { waitUntil: 'networkidle0', timeout: 30000 })
    const out = path.join(OUT_DIR, `${card.name}.png`)
    await page.screenshot({ path: out, clip: { x: 0, y: 0, width: 1080, height: 1920 } })
    await page.close()
    console.log(`  ✓  ${card.name}`)
  }

  await browser.close()
  console.log(`\nDone — ${CARDS.length} cards em ${OUT_DIR}`)
}

main().catch(err => { console.error(err); process.exit(1) })
