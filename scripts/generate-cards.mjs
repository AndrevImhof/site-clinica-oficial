import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BASE_URL = process.env.NEXT_URL ?? 'http://localhost:3000'
const OUT_DIR = path.resolve(__dirname, '../cards-instagram')

async function main() {
  console.log(`Fetching slug list from ${BASE_URL}/api/equipe-slugs ...`)
  const res = await fetch(`${BASE_URL}/api/equipe-slugs`)
  if (!res.ok) throw new Error(`API error ${res.status} — is the dev server running on ${BASE_URL}?`)
  const slugs = await res.json()

  fs.mkdirSync(OUT_DIR, { recursive: true })
  console.log(`Saving ${slugs.length} cards to ${OUT_DIR}\n`)

  const browser = await puppeteer.launch({ headless: 'new' })

  for (const { slug, nome } of slugs) {
    const page = await browser.newPage()
    await page.setViewport({ width: 1080, height: 1920, deviceScaleFactor: 1 })
    await page.goto(`${BASE_URL}/equipe/card-export/${slug}`, { waitUntil: 'networkidle0', timeout: 30000 })
    const out = path.join(OUT_DIR, `${slug}.png`)
    await page.screenshot({ path: out, clip: { x: 0, y: 0, width: 1080, height: 1920 } })
    await page.close()
    console.log(`  ✓  ${nome}`)
  }

  await browser.close()
  console.log(`\nDone — ${slugs.length} cards in ${OUT_DIR}`)
}

main().catch(err => { console.error(err); process.exit(1) })
