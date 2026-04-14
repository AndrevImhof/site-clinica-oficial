'use client'

/**
 * CorpoClinico.tsx
 * Fotos: /public/equipe/primeironome_psico.avif
 */

import { useState, useEffect, useCallback, useMemo } from 'react'
import Image from 'next/image'
import { X, MessageCircle, ChevronRight, Monitor, MapPin, Search } from 'lucide-react'

const WA_LINK = 'https://wa.me/5548998056893'

interface Prof {
  nome: string
  registro: string
  metodo: string       // texto completo exibido
  filtros: string[]    // categorias para o filtro
  formacao: string
  publico: string
  demandas: string
  atendimento: string
  foto: string
}

/* ─────────────────────────────────────────────────────────────
   DADOS COMPLETOS — 43 PROFISSIONAIS
   ───────────────────────────────────────────────────────────── */
const profissionais: Prof[] = [
  {
    nome: 'Luciano Noceti e Vieira',
    registro: 'CRP 12/02627',
    metodo: 'Psicanálise Freudo-Lacaniana',
    filtros: ['Psicanálise'],
    formacao: 'Graduação em Psicologia na UFSC desde 14/09/1999, com formação em Psicanálise pela escola Maiêutica Florianópolis Instituição Psicanalítica. Com 25 anos de carreira, foi professor pela Escola Maiêutica, Palestrante e Consultor de empresas.',
    publico: 'Atende Crianças a partir de 10 anos, Adolescentes, Adultos, Idosos, Casais e Grupos. Atendimento Presencial e On-line.',
    demandas: 'Transtornos de ansiedade, depressão, dificuldades, bipolaridade, fobias, traumas, TDAH, Compulsões, Depressão, Dor emocional, Estresse, Estresse Pós Traumático, Fobia Social, Fobias Medos, Fobias Morte e Luto, Obesidade, Sexualidade e Identidade de Gênero, Síndrome do Pânico, Suicídio, TOC, Transtorno Bipolar Transtorno de Humor, Transtornos do Sono, Pânico, Estados depressivos, Violências sexuais sofridas, Pessoas vítimas de traumas e preconceitos, Dependência química, esquizofrenia, paranoia, questões de gênero e de identidade sexual, preparação para aposentadoria, conflitos e/ou questões conjugais e amorosas (individual), pais em processo de adoção e demandas gerais referentes ao comportamento, ao social/relacional, ao cognitivo e à aprendizagem da infância e adolescência; Transtornos alimentares (anorexia, bulimia, seleção alimentar e afins), transtornos de imagem, transtornos do sono, transtorno pós traumático, suicídio, borderline, Burnout, violências, sintomas psicossomáticos, questões relacionadas ao divórcio, à família e possíveis complicações, dependências químicas e alcoolismo, Avaliação Psicológica, Avaliação para cirurgia bariátrica, Avaliação para laqueadura e vasectomia, Orientação profissional.',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), Saúde Caixa, SC Saúde, Saudesc, GEAP, CELOS, Elosaúde, ABEPOM, CASACARESC, Sim Saúde, Fusex e Particular.',
    foto: '/equipe/luciano_psico.avif',
  },
  {
    nome: 'Amanda Brum',
    registro: 'CRP 12/23963',
    metodo: 'Psicanálise de orientação lacaniana',
    filtros: ['Psicanálise'],
    formacao: 'Formada em Psicologia pela Universidade do Sul de Santa Catarina (UNISUL).',
    publico: 'Atende Crianças a partir dos 8 anos, Adolescentes, Adultos e Idosos. Atendimento On-line e Presencial.',
    demandas: 'Transtornos de ansiedade, depressão, bipolaridade, TDAH, processos de lutos e perdas, fobias, esquizofrenia, paranóia, questões de gênero e identidade sexual, aposentadoria, conflitos conjugais, pais em adoção, demandas comportamentais da infância/adolescência; transtornos alimentares, sono, TOC, suicídio, borderline, Burnout, violências, psicossomáticos, divórcio, alcoolismo.',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), Saudesc, CELOS, Elosaúde, ABEPOM, CASACARESC, SC Saúde, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/amanda_psico.avif',
  },
  {
    nome: 'Amanda Tavares',
    registro: 'CRP 12/20572',
    metodo: 'Fenomenológico-Existencial',
    filtros: ['Fenomenologia'],
    formacao: 'Graduação no Estácio. Formação em Clínica Existencialista. Pós: Sexualidade e Psicologia; Saúde Mental e Dependência; Saúde Coletiva; Cursando: Clínica Fenomenológica.',
    publico: 'Crianças (08+), Adolescentes, Adultos e Idosos. On-line.',
    demandas: 'Conflitos familiares, luto, ansiedade e depressão, ideação suicida, relações abusivas, autoconhecimento, gênero e sexualidade, acompanhamento LGBTQIA+, avaliações para bariátrica, laqueadura e vasectomia, orientação profissional.',
    atendimento: 'Unimed, Saudesc, CELOS, Elosaúde, ABEPOM, CASACARESC, Sim Saúde, GEAP, FUSEX, SC Saúde, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/AmandaTavares__psico.avif',
  },
  {
    nome: 'Ana Karoline Martins',
    registro: 'CRP 12/20210',
    metodo: 'TCC e Neuropsicologia',
    filtros: ['TCC', 'Neuropsicologia'],
    formacao: 'Estácio; Pós em Neuropsicologia; Cursos de prevenção ao suicídio (UFSC), Desenvolvimento psicomotor; Imersão em ABA; Pós em TCC na A FAMEESP.',
    publico: 'Crianças (8+), Adolescentes, Adultos e Idosos. Presencial.',
    demandas: 'Ansiedade, depressão, humor, personalidade, alimentares, luto, bipolaridade, fobias, TOC, estresse, TDAH, TEPT, gênero e sexualidade, ideação suicida, conflitos familiares, desenvolvimento infantil, avaliações psicológicas (bariátrica, laqueadura, vasectomia) e orientação profissional.',
    atendimento: 'Unimed, Saudesc, CELOS, ABEPOM, CASACARESC, SC Saúde, Sim Saúde, FUSEX, Petrobras, Saúde Caixa, GEAP e Particular.',
    foto: '/equipe/anakarol_psico.avif',
  },
  {
    nome: 'André Luiz da Silva',
    registro: 'CRP 12/12629',
    metodo: 'Psicanálise',
    filtros: ['Psicanálise'],
    formacao: 'Graduado pelo UNIFIL, Especialista em Dependência Química.',
    publico: 'Adolescentes (18+), Adultos e Idosos. On-line e Presencial.',
    demandas: 'Casos de ansiedade, depressão, transtorno obsessivo compulsivo.',
    atendimento: 'Unimed, Saudesc, CELOS, Elosaúde, ABEPOM, CASACARESC, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/andreluiz_psico.avif',
  },
  {
    nome: 'André Moraes Souza',
    registro: 'CRP 12/6907',
    metodo: 'Psicanálise',
    filtros: ['Psicanálise'],
    formacao: 'UFSC — Graduação e Mestrado. UNISUL — Doutorado em Ciências da Linguagem. Maiêutica Fpolis — Formação em Psicanálise.',
    publico: 'Crianças (07+), Adolescente, Adultos, Casais e Idoso. Presencial.',
    demandas: 'Transtornos, ansiedades, depressão, bipolaridade, síndromes, sofrimentos, problemas, psicoses, obsessões, entre outros.',
    atendimento: 'Unimed, Saudesc, CELOS, Elosaúde, ABEPOM, CASACARESC, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/andre%20moraes_psico.avif',
  },
  {
    nome: 'Anna de Lima Estanislau',
    registro: 'CRP 12/13484',
    metodo: 'TCC',
    filtros: ['TCC'],
    formacao: 'Cesusc; Pós em TCC; Equoterapia (ANDE Brasil); Pós em Neuropsicologia.',
    publico: 'Adultos e Idosos. On-line e Presencial.',
    demandas: 'Ansiedade, compulsões, depressão, estresse, TEPT, fobias, luto, obesidade, sexualidade, gênero, pânico, TOC, TDAH, transtornos alimentares, vítimas de preconceito, dependência química.',
    atendimento: 'Unimed, Saudesc, CELOS, Elosaúde, ABEPOM, CASACARESC, SC Saúde, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/annaestanislau_psico.avif',
  },
  {
    nome: 'Beatriz Zoccoler Beu dos Santos',
    registro: 'CRP 12/22152',
    metodo: 'TCC e TEA (ABA)',
    filtros: ['TCC', 'ABA'],
    formacao: 'FISMA; Especialista em Saúde da Família (Escola de Saúde Pública de SC).',
    publico: 'Crianças (2+), adolescentes, adultos, famílias e casais.',
    demandas: 'Ansiedade, Depressão, Personalidade, Bipolaridade, Borderline, TDAH, Autismo (TEA), Burnout, Luto, Obesidade, LGBTQIAPN+, suicídio, alcoolismo, separação, depressão pós-parto, orientação parental, bullying.',
    atendimento: 'Unimed, Saudesc, CELOS, Elosaúde, ABEPOM, CASACARESC, SC Saúde, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/beatriz_psico.avif',
  },
  {
    nome: 'Bibiana Mari Dutra',
    registro: 'CRP 12/15211',
    metodo: 'Psicanálise e EMDR',
    filtros: ['Psicanálise'],
    formacao: 'Psicologia na Estácio; Psicanálise na EBP; EMDR no Espaço da Mente.',
    publico: 'Adolescentes (13+) e Adultos. Presencial e On-line.',
    demandas: 'Sofrimentos psíquicos, conflitos, inibição, traumas, ansiedade e depressão.',
    atendimento: 'Particular.',
    foto: '/equipe/bibiana_psico.avif',
  },
  {
    nome: 'Carolina Rutz de Souza',
    registro: 'CRP 12/09117',
    metodo: 'Gestalt-Terapia',
    filtros: ['Gestalt'],
    formacao: 'UFSC (2010); Gestalt Terapia (ComUnidade Gestáltica); Doula (ANDO); Parentalidade e Amamentação.',
    publico: 'Adolescentes, Adultos e Casais. On-line.',
    demandas: 'Parentalidade, gênero, LGBTQIAP+, autismo tardio em mulheres, avaliações para esterilização.',
    atendimento: 'Particular.',
    foto: '/equipe/carolina_psico.avif',
  },
  {
    nome: 'Caroline de Souza Camassola',
    registro: 'CRP 12/27981',
    metodo: 'Psicanálise',
    filtros: ['Psicanálise'],
    formacao: 'UNISUL.',
    publico: 'Adolescentes (10+), Adultos e Idosos. On-line e Presencial.',
    demandas: 'Sofrimento psíquico, Ansiedade, Depressão, Burnout, Imigração, Borderline, Luto, Violência contra mulheres.',
    atendimento: 'Unimed, Saudesc, CELOS, EloSaúde, ABEPOM, CASACARESC, SC Saúde, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/caroline_psico.avif',
  },
  {
    nome: 'Catarina Geoffroy',
    registro: 'CRP 12/21876',
    metodo: 'TCC e TEA (ABA)',
    filtros: ['TCC', 'ABA'],
    formacao: 'UFF; Pós em Autismo (FAVENI); ABA (Academia do Autismo); Desenv. Infantil (ESHA/SPERJ); ABA Creative Ideias.',
    publico: 'Crianças (2+), Adolescentes, Adultos e Casais. Presencial e On-line.',
    demandas: 'TEA, TDAH, neurodesenvolvimento, ansiedade, luto, avaliações bariátrica e esterilização.',
    atendimento: 'Unimed, Saudesc, CELOS, EloSaúde, ABEPOM, CASACARESC, SC Saúde, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/catarina_psico.avif',
  },
  {
    nome: 'Clara Schmidt da Cruz',
    registro: 'CRP 12/10642',
    metodo: 'Psicanálise',
    filtros: ['Psicanálise'],
    formacao: 'UFSC (2011); Psicanálise pela Maiêutica (2011).',
    publico: 'Adolescentes (16+), Adultos e Casais. Presencial e On-line.',
    demandas: 'Ansiedade, depressão, compulsões, luto, bullying, abuso, questões LGBTQIAPN+, somatizações.',
    atendimento: 'Unimed, Saudesc, CELOS, EloSaúde, ABEPOM, CASACARESC, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/clara_psico.avif',
  },
  {
    nome: 'Débora Laryssa Thibes Santos',
    registro: 'CRP 12/12212',
    metodo: 'Psicanálise',
    filtros: ['Psicanálise'],
    formacao: 'UNOESC; Especialização em Tanatologia e Clínica.',
    publico: 'Crianças (12+), Adolescentes, Adultos e Casais. On-line.',
    demandas: 'Luto, depressão, bipolaridade, saúde mental materna (puerpério), dependências, violência doméstica.',
    atendimento: 'Unimed, Saudesc, CELOS, EloSaúde, ABEPOM, CASACARESC, Sim Saúde, SC SAÚDE, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/debora_psico.avif',
  },
  {
    nome: 'Dennis S. H. Gomes de Menezes',
    registro: 'CRP 12/09809',
    metodo: 'TEA (ABA — Modelo Denver) e Gestalt-terapia',
    filtros: ['ABA', 'Gestalt'],
    formacao: 'UFSC; Gestalt-Terapeuta; Analista do Comportamento; Especialista em TEA (CBI of Miami).',
    publico: 'TEA (7+), Estrangeiros (Espanhol). Presencial e On-line.',
    demandas: 'TEA, ansiedade, obesidade, planejamento familiar, altas habilidades.',
    atendimento: 'Unimed, Saudesc, CELOS, EloSaúde, ABEPOM, CASACARESC, SC Saúde, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/dennis_psico.avif',
  },
  {
    nome: 'Eduardo Marchi',
    registro: 'CRP 12/09164',
    metodo: 'Psicanálise',
    filtros: ['Psicanálise'],
    formacao: 'Unisul (2009); Psicanálise pela Maiêutica (2017).',
    publico: 'Adolescentes (16+), Adultos e Casais. On-line.',
    demandas: 'Inibição, fobias, transtornos alimentares, sono, pós-traumático, avaliação bariátrica.',
    atendimento: 'Unimed, Saudesc, CELOS, EloSaúde, ABEPOM, CASACARESC, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/eduardo_psico.avif',
  },
  {
    nome: 'Fabiana Reis Cypriano',
    registro: 'CRP 12/15335',
    metodo: 'TCC',
    filtros: ['TCC'],
    formacao: 'ULBRA; Pós em TCC (CBI Of Miami); MBA em RH.',
    publico: 'Adultos, Idosos e Casais. On-line.',
    demandas: 'TEPT, pânico, TAG, TOC, Burnout, estados terminais de câncer, luto.',
    atendimento: 'Unimed, Saudesc, CELOS, EloSaúde, ABEPOM, CASACARESC, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/fabiana_psico.avif',
  },
  {
    nome: 'Francielle Silva',
    registro: 'CRP 12/23321',
    metodo: 'TCC e Reabilitação Neuropsicológica',
    filtros: ['TCC', 'Neuropsicologia'],
    formacao: 'Estácio; Pós em TCC e Neuropsicologia (IPOG).',
    publico: 'Crianças (5+), Adolescentes e Adultos (até 20 anos). On-line e Presencial.',
    demandas: 'TDAH, TEA, dislexia, Síndrome de Down, atrasos de desenvolvimento.',
    atendimento: 'Unimed, Saudesc, CELOS, EloSaúde, ABEPOM, CASACARESC, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/francielle_psico.avif',
  },
  {
    nome: 'Flora Lorena Branco Müller',
    registro: 'CRP 12/23920',
    metodo: 'Psicanálise Lacaniana',
    filtros: ['Psicanálise'],
    formacao: 'UFSC; Mestrado em Psicologia Social (UFSC).',
    publico: 'Adolescentes (15+), Adultos e Idosos. Presencial e on-line.',
    demandas: 'Maternidade, relacionamentos, LGBTQIA+, ansiedade e depressão.',
    atendimento: 'Unimed, Saudesc, CELOS, EloSaúde, ABEPOM, CASACARESC, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/flora_psico.avif',
  },
  {
    nome: 'Gabriela Rodrigues Rossi',
    registro: 'CRP 12/11519',
    metodo: 'Psicanálise',
    filtros: ['Psicanálise'],
    formacao: 'CESUSC (2012); Laço Analítico.',
    publico: 'Crianças (6+), Adolescentes, Adultos e Idosos. On-line e Presencial.',
    demandas: 'Ansiedade, depressão, pânico e fobias.',
    atendimento: 'Particular.',
    foto: '/equipe/gabriela_psico.avif',
  },
  {
    nome: 'Gabrieli Cuco',
    registro: 'CRP 12/27705',
    metodo: 'TCC',
    filtros: ['TCC'],
    formacao: 'Estácio de Santa Catarina.',
    publico: 'Adolescentes (15+), Adultos e Idosos. On-line.',
    demandas: 'Crise de pânico, TOC, esgotamento profissional, dependência emocional, luto, ideação suicida.',
    atendimento: 'Unimed, Saudesc, CELOS, EloSaúde, ABEPOM, CASACARESC, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/gabrieli_psico.avif',
  },
  {
    nome: 'Giane Inacio dos Santos',
    registro: 'CRP 12/21996',
    metodo: 'Fenomenológico-Existencial',
    filtros: ['Fenomenologia'],
    formacao: 'PUC/PR; Pós em Clínica Fenomenológico Existencial (Unipar).',
    publico: 'Adolescentes (15+), Adultos e Idosos. Presencial e On-line.',
    demandas: 'Desafios existenciais, luto, ideação suicida, estresse pós-traumático, crises de identidade.',
    atendimento: 'Unimed, Saudesc, CELOS, EloSaúde, ABEPOM, CASACARESC, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/giane_psico.avif',
  },
  {
    nome: 'Hillary Amanda Pereira',
    registro: 'CRP 12/21381',
    metodo: 'TCC',
    filtros: ['TCC'],
    formacao: 'Estácio de Sá.',
    publico: 'Crianças (12+), Adolescentes e Adultos.',
    demandas: 'Abuso sexual, esgotamento profissional, autoestima, insegurança.',
    atendimento: 'Unimed, Saudesc, CELOS, EloSaúde, ABEPOM, CASACARESC, Sim Saúde, GEAP, FUSEX, SC Saúde, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/hillary_psico.avif',
  },
  {
    nome: 'Juliana Amabile da Cruz',
    registro: 'CRP 12/17799',
    metodo: 'TCC, Terapia do Esquema e Neuropsicologia',
    filtros: ['TCC', 'Neuropsicologia'],
    formacao: 'Estácio; Pós em Neuropsicologia (IPOG); Terapia do Esquema.',
    publico: 'Adultos e Idosos. On-line.',
    demandas: 'Pensamentos repetitivos, sensação de vazio, autocobrança, perfeccionismo, transições de vida.',
    atendimento: 'Unimed, Saudesc, CELOS, EloSaúde, ABEPOM, CASACARESC, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/juliana_psico.avif',
  },
  {
    nome: 'Júlia Guidi Leite',
    registro: 'CRP 12/27432',
    metodo: 'Psicanálise Lacaniana',
    filtros: ['Psicanálise'],
    formacao: 'UNIVALI.',
    publico: 'Crianças (6+), Adolescentes, Adultos e Idosos. Presencial e Online.',
    demandas: 'Psicoses, sofrimento grave, anorexia, bulimia, impactos da discriminação, adoção.',
    atendimento: 'Unimed, Saudesc, CELOS, EloSaúde, ABEPOM, CASACARESC, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/júlia_psico.avif',
  },
  {
    nome: 'Keli Ferro',
    registro: 'CRP 12/23929',
    metodo: 'Psicodrama',
    filtros: ['Psicodrama'],
    formacao: 'UNISUL.',
    publico: 'Adultos, PcD e familiares, Casais. On-line.',
    demandas: 'Adoecimento físico, adaptação a novas situações, orientação profissional.',
    atendimento: 'Unimed, Saudesc, CELOS, ABEPOM, CASACARESC, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/keli_psico.avif',
  },
  {
    nome: 'Kevin Alex Anaya Bisognin',
    registro: 'CRP 12/28352',
    metodo: 'Psicanálise Lacaniana',
    filtros: ['Psicanálise'],
    formacao: 'UFSM; Mestrado em Psicologia Social (UFSC). Atende em Inglês e Espanhol.',
    publico: 'Adolescentes (16+), Adultos e Idosos. Inglês e Espanhol. On-line e Presencial.',
    demandas: 'Questões de raça, violência, sofrimento social/relacional, luto e perda.',
    atendimento: 'Unimed, Saudesc, CELOS, EloSaúde, ABEPOM, CASACARESC, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/Kevin_psico.avif',
  },
  {
    nome: 'Larissa Fontana',
    registro: 'CRP 12/14611',
    metodo: 'TCC e Sexologia',
    filtros: ['TCC'],
    formacao: 'UNOESC; Especialista em TCC; Formação em Terapia Sexual (Cessex).',
    publico: 'Adolescentes (14+), Adultos, Idosos e Casais. On-line e Presencial.',
    demandas: 'Transtornos sexuais, terapia de casal, disfunções, ansiedade e depressão.',
    atendimento: 'Particular.',
    foto: '/equipe/larissa_psico.avif',
  },
  {
    nome: 'Luciana Elisa Cunha',
    registro: 'CRP 12/03557',
    metodo: 'Sistêmica Familiar, Junguiana, Arteterapia e TEA (ABA)',
    filtros: ['Junguiana', 'ABA', 'Sistêmica Familiar'],
    formacao: 'UNISUL (2001); Especialista em Gerontologia (UFSC); Doula da Morte.',
    publico: 'Crianças (3+), Adolescentes, Adultos, Idosos e Casais. On-line.',
    demandas: 'Acompanhamento oncológico, cuidados paliativos, mudança de carreira, TEA.',
    atendimento: 'Unimed, Saudesc, CELOS, EloSaúde, ABEPOM, CASACARESC, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/Luciana_psico.avif',
  },
  {
    nome: 'Mara Serafim',
    registro: 'CRP 12/22673',
    metodo: 'TCC',
    filtros: ['TCC'],
    formacao: 'UNISUL; Pós em Marketing (UFSC); Hipnoterapia (AC Hipnose).',
    publico: 'Adolescentes (13+), Adultos, Idosos, Casais e Grupos. Presencial e online.',
    demandas: 'Cuidados paliativos, insegurança, dependência emocional, luto e perdas.',
    atendimento: 'Unimed, Saudesc, CELOS, EloSaúde, ABEPOM, CASACARESC, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/mara_psico.avif',
  },
  {
    nome: 'Mariza Marília Tibolla',
    registro: 'CRP 12/16906',
    metodo: 'Psicanálise',
    filtros: ['Psicanálise'],
    formacao: 'Estácio de Sá.',
    publico: 'Adolescentes (14+), Adultos e Idosos. Online.',
    demandas: 'Problemas no trabalho e carreira, fobias (lugares apertados, multidões, solidão).',
    atendimento: 'Unimed, Saudesc, CELOS, EloSaúde, ABEPOM, CASACARESC, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/mariza_psico.avif',
  },
  {
    nome: 'Monica Scultori',
    registro: 'CRP 12/15680',
    metodo: 'Existencialismo Sartreano',
    filtros: ['Fenomenologia'],
    formacao: 'Existencialista Sartreana; Perita Judicial (TJSC); Pós em Tanatologia.',
    publico: 'Adolescentes (16+), Adultos, Idosos. Presencial e On-line.',
    demandas: 'Suicidologia, luto migratório, mães atípicas, mães neurodivergentes, desastres.',
    atendimento: 'Unimed, Saudesc, CELOS, EloSaúde, ABEPOM, CASACARESC, SC Saúde, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/monica_psico.avif',
  },
  {
    nome: 'Morgana Jacques Scherer',
    registro: 'CRP 12/15680',
    metodo: 'Psicanálise',
    filtros: ['Psicanálise'],
    formacao: 'Estácio; Maiêutica de Florianópolis.',
    publico: 'Adultos e Idosos. Presencial e On-line.',
    demandas: 'Sofrimento psíquico, psicoses, avaliação bariátrica e vasectomia.',
    atendimento: 'Unimed, Saudesc, CELOS, EloSaúde, ABEPOM, CASACARESC, SC Saúde, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/morgana_psico.avif',
  },
  {
    nome: 'Patrícia N. de A. Nogueira',
    registro: 'CRP 12/28637',
    metodo: 'Psicologia Analítica Junguiana',
    filtros: ['Junguiana'],
    formacao: 'UNIUBE (2013).',
    publico: 'Adolescentes (16+), Adultos e Idosos.',
    demandas: 'Vazio existencial, negligência emocional, orientação de carreira, Burnout.',
    atendimento: 'Unimed, Saudesc, CELOS, EloSaúde, ABEPOM, CASACARESC, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/patricia_psico.avif',
  },
  {
    nome: 'Pedro Becker Athayde Ciqueira',
    registro: 'CRP 12/19759',
    metodo: 'Psicanálise',
    filtros: ['Psicanálise'],
    formacao: 'UFSC (2017); Maiêutica (2019). Atende em Inglês e Espanhol.',
    publico: 'Crianças (5+), Adultos, Casal. Inglês e Espanhol. Presencial e On-line.',
    demandas: 'TEA (Método ABA), planejamento de vida, ansiedade, depressão.',
    atendimento: 'Unimed, Saudesc, CELOS, EloSaúde, ABEPOM, CASACARESC, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/pedro_psico.avif',
  },
  {
    nome: 'Sâmya Gardênia Amaral Correia Leite',
    registro: 'CRP 12/22834',
    metodo: 'Psicanálise',
    filtros: ['Psicanálise'],
    formacao: 'UNISUL; EBP/SC.',
    publico: 'Adulto, Idosos e Casais. Presencial e On-line.',
    demandas: 'Pânico, fobias, morte e luto, estresse pós-traumático.',
    atendimento: 'Unimed, Saudesc, CELOS, EloSaúde, ABEPOM, CASACARESC, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/sâmya_psico.avif',
  },
  {
    nome: 'Sergio Jablonski',
    registro: 'CRP 12/01438',
    metodo: 'TCC',
    filtros: ['TCC'],
    formacao: 'UFSC (Mestrado 1998); UFSCar (Doutorado 2010).',
    publico: 'Adultos (18+) e Idosos. Presencial e On-line.',
    demandas: 'Estresse e ansiedade.',
    atendimento: 'Unimed, Saudesc, CELOS, EloSaúde, ABEPOM, CASACARESC, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/sergio_psico.avif',
  },
  {
    nome: 'Rosangela Mezari',
    registro: 'CRP 12/12404',
    metodo: 'TCC e TEA (ABA)',
    filtros: ['TCC', 'ABA'],
    formacao: 'UEL; Pós em TEA; Professional & Self Coaching (IBC). Atende em Inglês.',
    publico: 'Crianças (2+), Adolescentes, Adultos, Idosos e Casal. Presencial e On-line.',
    demandas: 'TOD, Síndrome de Down, relações tóxicas, empoderamento, avaliações diversas.',
    atendimento: 'Unimed, Saudesc, CELOS, EloSaúde, ABEPOM, CASACARESC, SC Saúde, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/rosangela_psico.avif',
  },
  {
    nome: 'Thalita Dias Lima',
    registro: 'CRP 12/19654',
    metodo: 'TCC',
    filtros: ['TCC'],
    formacao: 'Estácio; Pós em Comportamento Alimentar (IPGS).',
    publico: 'Adolescentes, Adultos e Idosos. Presencial e On-line.',
    demandas: 'Comportamento alimentar, transtornos de ansiedade e depressão.',
    atendimento: 'Unimed, Saudesc, CELOS, EloSaúde, ABEPOM, CASACARESC, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/thalita_psico.avif',
  },
  {
    nome: 'Thayse Silveira da Rosa',
    registro: 'CRP 12/21695',
    metodo: 'TCC e Neuropsicologia',
    filtros: ['TCC', 'Neuropsicologia'],
    formacao: 'Estácio; Pós em TCC e Neuropsicologia Clínica.',
    publico: 'Crianças (10+), Adolescentes, Adultos e Idosos. Presencial e On-line.',
    demandas: 'Habilidades sociais, adaptação escolar, TDAH, conflitos familiares.',
    atendimento: 'Unimed, Saudesc, CELOS, EloSaúde, ABEPOM, CASACARESC, SC Saúde, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/thayse_psico.avif',
  },
  {
    nome: 'Valesca de Miranda Lopes',
    registro: 'CRP 12/15801',
    metodo: 'Psicanálise',
    filtros: ['Psicanálise'],
    formacao: 'Fumec; Especialização em Saúde do Adolescente (UFMG).',
    publico: 'Crianças (2+), Adolescente, Adulto, Idoso. On-line e Presencial.',
    demandas: 'Violências sexuais, homossexualidades, traumas e preconceitos, dependência química.',
    atendimento: 'Unimed, Saudesc, CELOS, EloSaúde, ABEPOM, CASACARESC, SC Saúde, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/valesca_psico.avif',
  },
  {
    nome: 'Wicleff Luiz Rufino',
    registro: 'CRP 12/14220',
    metodo: 'TCC, Neuropsicologia e Hipnose Clínica',
    filtros: ['TCC', 'Neuropsicologia'],
    formacao: 'Estácio; Pós em Neuropsicologia; Hipnose Clínica (Lucas Naves).',
    publico: 'Adolescente (14+), Adulto, Idoso. On-line e Presencial.',
    demandas: 'Readequação genital, transplantes, regressão, ansiedade e depressão.',
    atendimento: 'Unimed, Saudesc, CELOS, EloSaúde, ABEPOM, CASACARESC, Sim Saúde, GEAP, FUSEX, SC Saúde, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/wicleff_psico.avif',
  },
]

/* ─── Ordem fixa dos filtros ──────────────────────────────── */
const ORDEM_FILTROS = ['Psicanálise', 'TCC', 'Neuropsicologia', 'TEA', 'Gestalt', 'Fenomenologia', 'Junguiana', 'Sistêmica Familiar', 'Psicodrama']

// Mapeamento de rótulo de filtro → valor interno nos dados
const FILTRO_MAP: Record<string, string> = { 'TEA': 'ABA' }

/* ─── Foto com fallback ───────────────────────────────────── */
function Foto({ src, nome, className }: { src: string; nome: string; className: string }) {
  const [err, setErr] = useState(false)
  const initials = nome.split(' ').filter((_, i, a) => i === 0 || i === a.length - 1).map(p => p[0]).join('').toUpperCase()
  if (err) return (
    <div className={`${className} bg-[#F4E6E9] flex items-center justify-center`}>
      <span className="font-serif font-bold text-[#7C2C3B]" style={{ fontSize: 'clamp(1rem,4cqw,1.5rem)' }}>{initials}</span>
    </div>
  )
  return (
    <div className={`${className} relative overflow-hidden`}>
      <Image src={src} alt={`Foto de ${nome}`} fill className="object-cover"
        onError={() => setErr(true)} sizes="120px" loading="lazy" />
    </div>
  )
}

/* ─── Modal ───────────────────────────────────────────────── */
function Modal({ p, onClose }: { p: Prof; onClose: () => void }) {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', fn)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', fn); document.body.style.overflow = '' }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose} role="dialog" aria-modal="true" aria-label={`Perfil de ${p.nome}`}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden />

      <div
        className="relative bg-white w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl
                   shadow-2xl flex flex-col max-h-[92dvh] sm:max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header fixo */}
        <div className="flex-shrink-0 bg-[#FBF0F1] rounded-t-3xl sm:rounded-t-3xl px-5 pt-5 pb-4">
          {/* Drag handle mobile */}
          <div className="w-10 h-1 bg-[#7C2C3B]/20 rounded-full mx-auto mb-4 sm:hidden" />
          <button onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 hover:bg-white
                       flex items-center justify-center shadow transition-colors z-10"
            aria-label="Fechar modal">
            <X className="w-4 h-4 text-neutral-500" />
          </button>
          <div className="flex items-center gap-4 pr-8">
            <Foto src={p.foto} nome={p.nome}
              className="w-20 h-20 rounded-full border-4 border-white shadow-md flex-shrink-0" />
            <div className="min-w-0">
              <h3 className="font-serif font-bold text-[#7C2C3B] text-base leading-tight">{p.nome}</h3>
              <p className="text-[#7C2C3B] text-xs font-semibold mt-0.5 opacity-80">{p.registro}</p>
              <p className="text-neutral-600 text-xs mt-1 font-medium">{p.metodo}</p>
            </div>
          </div>
        </div>

        {/* Corpo com scroll */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-5 space-y-5">

          <div>
            <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">Formação</p>
            <p className="text-sm text-neutral-700 leading-relaxed">{p.formacao}</p>
          </div>

          <div>
            <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">Público atendido</p>
            <p className="text-sm text-neutral-700 leading-relaxed">{p.publico}</p>
          </div>

          <div>
            <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">Demandas</p>
            <p className="text-sm text-neutral-700 leading-relaxed">{p.demandas}</p>
          </div>

          <div>
            <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">Convênios aceitos</p>
            <p className="text-sm text-neutral-700 leading-relaxed">{p.atendimento}</p>
          </div>
        </div>

        {/* Botão de agendamento — fixo fora do scroll, sempre visível */}
        <div className="flex-shrink-0 px-5 py-4 border-t border-neutral-100 bg-white rounded-b-3xl">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className="btn-whatsapp justify-center w-full">
            <MessageCircle className="w-4 h-4" />
            Agendar com {p.nome.split(' ')[0]}
          </a>
        </div>
      </div>
    </div>
  )
}

/* ─── Card ────────────────────────────────────────────────── */
function Card({ p, onOpen }: { p: Prof; onOpen: () => void }) {
  return (
    <article
      className="bg-[#FAF0F2] rounded-xl border border-[#7C2C3B]/40
                 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[#7C2C3B]/60
                 transition-all duration-300 flex flex-col items-center text-center p-5 gap-3 cursor-pointer"
      onClick={onOpen}
    >
      <Foto src={p.foto} nome={p.nome}
        className="w-20 h-20 rounded-full border-4 border-[#F4E6E9]" />
      <div className="w-full space-y-0.5">
        <h3 className="font-serif font-bold text-[#7C2C3B] text-sm leading-tight line-clamp-2">{p.nome}</h3>
        <p className="text-[11px] font-semibold text-[#7C2C3B] opacity-60">{p.registro}</p>
        <p className="text-[11px] text-neutral-500 leading-snug line-clamp-2">{p.metodo}</p>
      </div>
      <span className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-[#7C2C3B] mt-auto">
        Ver perfil completo <ChevronRight className="w-3 h-3" />
      </span>
    </article>
  )
}

/* ─── Seção principal ─────────────────────────────────────── */
export default function CorpoClinico() {
  const [filtro, setFiltro] = useState('Todos')
  const [busca, setBusca] = useState('')
  const [aberto, setAberto] = useState<Prof | null>(null)
  const [expandido, setExpandido] = useState(false)
  const fechar = useCallback(() => setAberto(null), [])

  const filtros = useMemo(() => {
    const set = new Set<string>()
    profissionais.forEach(p => p.filtros.forEach(f => set.add(f)))
    return ['Todos', ...ORDEM_FILTROS.filter(f => set.has(FILTRO_MAP[f] ?? f))]
  }, [])

  const visíveis = useMemo(() => {
    return profissionais.filter(p => {
      const filtroInterno = FILTRO_MAP[filtro] ?? filtro
      const okFiltro = filtro === 'Todos' || p.filtros.includes(filtroInterno)
      const okBusca = busca === '' ||
        p.nome.toLowerCase().includes(busca.toLowerCase()) ||
        p.metodo.toLowerCase().includes(busca.toLowerCase()) ||
        p.demandas.toLowerCase().includes(busca.toLowerCase())
      return okFiltro && okBusca
    })
  }, [filtro, busca])

  // Quando não há filtro/busca ativos, limita a 6 por padrão no mobile
  const semFiltroAtivo = filtro === 'Todos' && busca === ''
  const exibidos = semFiltroAtivo && !expandido ? visíveis.slice(0, 6) : visíveis
  const mostrarBotaoExpandir = semFiltroAtivo && visíveis.length > 6

  return (
    <section id="equipe" className="section-padding bg-slate-50">
      <div className="container-max">

        {/* Cabeçalho */}
        <div className="text-center mb-10">
          <span className="inline-block text-[#7C2C3B] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Profissionais
          </span>
          <h2 className="heading-primary text-3xl sm:text-4xl">Nosso Corpo Clínico</h2>
          <div className="mt-3 w-16 h-1 rounded-full bg-[#7C2C3B] mx-auto" />
          <p className="mt-5 text-body text-sm md:text-base max-w-xl mx-auto">
            {profissionais.length} profissionais qualificados e comprometidos com a sua saúde mental.
            Clique em qualquer card para ver o perfil completo.
          </p>
        </div>

        {/* Busca */}
        <div className="relative max-w-sm mx-auto mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Buscar por nome, método ou demanda..."
            value={busca}
            onChange={e => setBusca(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-full border border-neutral-200
                       text-sm text-neutral-700 placeholder:text-neutral-400
                       focus:outline-none focus:border-[#7C2C3B] focus:ring-2 focus:ring-[#7C2C3B]/20
                       transition-all"
          />
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filtros.map(f => (
            <button
              key={f}
              onClick={() => setFiltro(f)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200
                ${filtro === f
                  ? 'bg-[#7C2C3B] text-white border-[#7C2C3B] shadow-md'
                  : 'bg-white text-[#7C2C3B] border-[#7C2C3B]/30 hover:border-[#7C2C3B] hover:bg-[#FBF0F1]'
                }`}
            >
              {f}
              {f !== 'Todos' && (
                <span className={`ml-1.5 text-[10px] ${filtro === f ? 'opacity-70' : 'opacity-50'}`}>
                  ({profissionais.filter(p => p.filtros.includes(FILTRO_MAP[f] ?? f)).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Contador */}
        <p className="text-center text-neutral-400 text-xs mb-6">
          {visíveis.length === profissionais.length
            ? `${profissionais.length} profissionais`
            : `${visíveis.length} de ${profissionais.length} profissionais`}
        </p>

        {/* Grid */}
        {visíveis.length > 0 ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {exibidos.map(p => (
                <Card key={p.registro + p.nome} p={p} onOpen={() => setAberto(p)} />
              ))}
            </div>

            {/* Botão expandir — só aparece quando não há filtro/busca ativos */}
            {mostrarBotaoExpandir && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setExpandido(!expandido)}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full
                             border-2 border-[#7C2C3B]/40 text-[#7C2C3B] text-sm font-semibold
                             hover:border-[#7C2C3B] hover:bg-[#FBF0F1]
                             transition-all duration-200"
                >
                  {expandido
                    ? 'Ver menos'
                    : `Ver todos os ${visíveis.length} profissionais`}
                  <ChevronRight className={`w-4 h-4 transition-transform duration-200
                                            ${expandido ? 'rotate-90' : ''}`} />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16 text-neutral-400">
            <p className="text-sm">Nenhum profissional encontrado.</p>
            <button onClick={() => { setFiltro('Todos'); setBusca('') }}
              className="mt-3 text-[#7C2C3B] text-xs font-semibold hover:underline">
              Limpar filtros
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {aberto && <Modal p={aberto} onClose={fechar} />}
    </section>
  )
}
