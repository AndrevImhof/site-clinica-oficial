import { NextResponse } from 'next/server'
import { profissionais, slugify } from '@/lib/profissionais'

export function GET() {
  return NextResponse.json(
    profissionais.map(p => ({ slug: slugify(p.nome), nome: p.nome }))
  )
}
