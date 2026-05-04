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
    publico: 'Atende Crianças a partir dos 8 anos, Adolescentes, Adultos e Idosos. Atendimento Online e Presencial.',
    demandas: 'Ansiedade, depressão, bipolaridade, TDAH (Transtorno de Déficit de Atenção e Hiperatividade), processos de lutos e perdas, fobias, esquizofrenia, paranóia, questões de gênero e identidade sexual, preparação para aposentadoria, conflitos e/ou questões conjugais e amorosas (individual), pais em adoção, demandas comportamentais da infância e adolescência; transtornos alimentares, sono, comportamento, socialização e aprendizagem; borderline, Burnout, violências contra a mulher, crianças e adolescentes (e de gênero), dependência química e alcoolismo.',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), Saudesc, CELOS, Elosaúde, ABEPOM, CASACARESC, SC Saúde, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/amanda_psico.avif',
  },
  {
    nome: 'Ana Karoline Martins',
    registro: 'CRP 12/20210',
    metodo: 'Terapia Cognitiva e Comportamental (TCC) e Neuropsicologia',
    filtros: ['TCC', 'Neuropsicologia'],
    formacao: 'Graduação em Psicologia pela Faculdade Estácio de Sá. Pós-Graduação em Neuropsicologia pela Faculdade Metropolitana do Estado de São Paulo. Cursou prevenção ao suicídio (UFSC/AFSP) e desenvolvimento psicomotor. Imersão em ABA. Pós em TCC na FAMEESP. Pós-Graduação em Terapia Cognitivo-Comportamental na UMESP.',
    publico: 'Atende Crianças a partir de 8 anos, Adolescentes, Adultos e Idosos. Atendimento Presencial.',
    demandas: 'Transtornos de humor, personalidade, alimentares, luto, ansiedade, depressão, bipolaridade, fobias, TOC, estresse, TDAH, TEPT, gênero e sexualidade, ideação suicida, conflitos familiares e de relacionamentos, desenvolvimento infantil, avaliação psicológica, avaliação para cirurgia bariátrica, laqueadura e vasectomia, orientação profissional.',
    atendimento: 'Unimed, Saudesc, CELOS, ABEPOM, CASACARESC, SC Saúde, Sim Saúde, Petrobras, Saúde Caixa, GEAP e Particular.',
    foto: '/equipe/anakarol_psico.avif',
  },
  {
    nome: 'André Luiz da Silva',
    registro: 'CRP 12/12629',
    metodo: 'Psicanálise',
    filtros: ['Psicanálise'],
    formacao: 'Formado pelo Centro Universitário Filadélfia (UNIFIL) – Londrina/PR, há 14 anos. Com especialização em Dependência Química e Comportamento Suicida, com atuação dedicada ao cuidado e acompanhamento de pessoas que enfrentam o uso abusivo de substâncias e seus impactos emocionais, familiares e sociais. Atuo pela Psicanálise, oferecendo um atendimento ético, sigiloso e acolhedor, focado na sua história e naquilo que faz sentido para você — respeitando seu tempo e seu processo. Mais do que tratar sintomas, meu objetivo é caminhar junto com você no processo de se escutar, se reconhecer e se fortalecer — para que seja possível construir novas formas de viver, se posicionar e se relacionar, sem precisar se abandonar no meio do caminho.',
    publico: 'Atendo adultos e idosos (a partir dos 18 anos). Atendimento On-line.',
    demandas: '🔹 Dependência química (álcool e outras substâncias)\n🔹 Ansiedade\n🔹 Depressão\n🔹 Transtorno Obsessivo-Compulsivo (TOC)\n🔹 Conflitos emocionais e relacionais\n🔹 Momentos de crise e angústia',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), Saudesc, CELOS, ABEPOM, CASACARESC, Sim Saúde, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/andreluiz_psico.jpeg',
  },
  {
    nome: 'Anna de Lima Estanislau',
    registro: 'CRP 12/13484',
    metodo: 'Terapia Cognitivo Comportamental (TCC)',
    filtros: ['TCC'],
    formacao: 'Bacharel em Psicologia - Faculdade Cesusc - Florianópolis - SC. Especialização em Terapia Cognitivo-Comportamental - Pós Graduação Grupo Cognitivo - Florianópolis - SC. Curso de Equoterapia - ANDE Brasil - Associação Nacional de Equoterapia - Brasília - DF. Curso de Equitadora - ANDE Brasil - Associação Nacional de Equoterapia - Brasília - DF. Pós-graduação em Neuropsicologia pelo Centro Universitário Leonardo da Vinci.',
    publico: 'Atende Adultos e Idosos. Atendimento On-line e Presencial.',
    demandas: 'Ansiedade, Compulsões, Depressão, Dor emocional, Estresse, Estresse Pós Traumático, Fobia Social, Fobias Medos, Fobias Morte, Luto, Obesidade, Sexualidade e Identidade de Gênero, Síndrome do Pânico, Suicídio, TOC (Transtorno Obsessivo Compulsivo), TDAH (Transtorno do déficit de atenção com hiperatividade), Transtorno Bipolar, Transtorno de Humor, Transtornos Alimentares (Bulimia, Anorexia, etc), Transtornos do Sono, Pânico, Episódios depressivos, sexualidades, Pessoas vítimas de traumas e preconceitos, Dependência química, Preocupações, Pensamentos recorrentes de perigo ou morte, Pensamentos de autocrítica, Sentimento de culpa, Crenças de incapacidade, entre outros.',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), Saudesc, CELOS, Elosaúde, ABEPOM, CASACARESC, SC Saúde, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/annaestanislau_psico.avif',
  },
  {
    nome: 'Beatriz Zoccoler Beu dos Santos',
    registro: 'CRP 12/22152',
    metodo: 'Terapia Cognitivo Comportamental (TCC) e ABA',
    filtros: ['TCC', 'ABA'],
    formacao: 'Graduada em Psicologia na FISMA desde 2021, com foco na abordagem cognitivo comportamental. Especialista em Saúde da Família e da Comunidade através da Residência Multiprofissional da Escola de Saúde Pública de Santa Catarina.',
    publico: 'Atendo crianças a partir de 2 anos, adolescentes, adultos, famílias e casais. Atendimento Presencial.',
    demandas: 'Transtornos de Ansiedade, Depressão, Transtornos de Personalidade, Transtornos de Humor, Bipolaridade, Borderline, Narcisismo, Fobias, Traumas, TDAH, Autismo, Compulsões, Estresse, Estresse pós traumático (TEPT), Burnout, Fobia Social, Morte e Luto, Obesidade, Sexualidade e Identidade de Gênero (LGBTQIAPN+), Síndrome do Pânico, Suicídio, TOC (Transtorno Obsessivo Compulsivo), Transtornos do Sono, Pânico, Violências sexuais sofridas, Pessoas vítimas de traumas e preconceitos, Dependência química e alcoolismo, Conflitos e/ou questões conjugais e amorosas (individual), Casais, Transtornos alimentares (anorexia, bulimia, seleção alimentar e afins), Transtornos de imagem, Suicídio, Violências (contra a mulher, crianças, adolescentes e de gênero), Questões relacionadas ao divórcio/separação, Famílias, Desenvolvimento de habilidades sociais, Depressão pós-parto, Puerpério, Baby blues, Orientação Parental, Bullying.',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), Saudesc, CELOS, Elosaúde, ABEPOM, CASACARESC, SC Saúde, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/beatriz_psico.avif',
  },
  {
    nome: 'Bibiana Mari Dutra Vieira',
    registro: 'CRP 12/15211',
    metodo: 'Psicanálise e EMDR',
    filtros: ['Psicanálise'],
    formacao: 'Formada em Psicologia na Estácio; Psicanálise na Escola Brasileira de Psicanálise; EMDR no Espaço da Mente.',
    publico: 'Atende Adolescentes a partir dos 13 anos e Adultos. Atendimento On-line e Presencial.',
    demandas: 'Sofrimentos psíquicos, tais como conflitos, inibição, traumas, ansiedade e depressão.',
    atendimento: 'Particular.',
    foto: '/equipe/bibiana_psico.avif',
  },
  {
    nome: 'Bruna Mendes Cardoso',
    registro: '',
    metodo: 'Psicanálise',
    filtros: ['Psicanálise'],
    formacao: 'Graduação em Psicologia pela Universidade do Vale do Itajaí, especialização em Saúde Mental Materna e Neurodesenvolvimento Infantil, Pós graduanda em Psicologia Perinatal. Curso de formação em psicopatologia e psicanálise.',
    publico: 'Atende crianças a partir de 5 anos, adolescentes, adultos, gestantes e famílias. Atendimento presencial e on-line.',
    demandas: 'Acompanhamento psicológico em todo o ciclo perinatal (antes, durante e após o nascimento); escuta para gestantes, tentantes, mães recentes e famílias em transformação; depressão pós-parto, periparto e saúde mental materna; acompanhamento de processo de adoção e das mudanças subjetivas envolvidas na gestação biológica ou adotiva; processos de luto por morte, perdas gestacionais e perdas simbólicas (fim de relacionamentos, mudanças bruscas, perda de emprego, rupturas afetivas ou identitárias); transtornos de ansiedade, estresse e sintomas psicossomáticos (dores, insônia, tensão, falta de ar); quadros depressivos, crises de ansiedade, ataques de pânico e sofrimento emocional generalizado; atendimento a mulheres, crianças e adolescentes que viveram ou vivem situações de violência (doméstica, sexual, psicológica, de gênero); demandas referentes ao comportamento, socialização, desenvolvimento cognitivo e aprendizagem de crianças e adolescentes; Transtorno do Déficit de Atenção e Hiperatividade (TDAH); conflitos escolares, emocionais e familiares; autolesão, ideação suicida e sofrimento emocional; apoio em processos de separação, guarda, reorganização familiar e adaptação emocional para adultos e crianças; conflitos conjugais; acolhimento de vivências afetivo-sexuais, construção da identidade de gênero, dúvidas, angústias e experiências ligadas ao corpo, à escolha e à expressão de si.',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), Saudesc, CELOS, Elosaúde, ABEPOM, CASACARESC, SC Saúde, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/bruna_psico.avif',
  },
  {
    nome: 'Carolina Rutz de Souza',
    registro: 'CRP 12/09117',
    metodo: 'Gestalt-Terapia',
    filtros: ['Gestalt'],
    formacao: 'Formada pela Universidade Federal de Santa Catarina em 2010, Formação Básica em Gestalt Terapia pelo ComUnidade Gestáltica e Formação como Doula pela ANDO além de cursos sobre Parentalidade e Consultoria em Amamentação.',
    publico: 'Atende Adolescentes, Adultos e Casais. Atendimento On-line.',
    demandas: 'Foco em parentalidade (tríade pais-bebê, díade mãe-bebê), orientação a pais de crianças e adolescentes. Questões de gênero, LGBTQIAP+, incluindo pessoas trans antes, durante e após a transição. Acompanhamento de meninas e mulheres com diagnóstico tardio de autismo. Acompanhamento psicoterápico, Avaliação para esterilização/anticoncepção (laqueadura) e Avaliação para esterilização/anticoncepção (vasectomia).',
    atendimento: 'Particular.',
    foto: '/equipe/carolina_psico.avif',
  },
  {
    nome: 'Caroline de Souza Camassola',
    registro: 'CRP 12/27981',
    metodo: 'Psicanálise',
    filtros: ['Psicanálise'],
    formacao: 'Graduação em Psicologia pela Universidade do Sul de Santa Catarina (UNISUL).',
    publico: 'Atende Adolescentes a partir dos 10 anos, Adultos e Idosos. Atendimento Online e Presencial.',
    demandas: 'Sofrimento psíquico, Ansiedade, Depressão, Estresse, Burnout, Imigração e Adaptação cultural, Transtorno bipolar, TOC (transtorno obsessivo-compulsivo), Transtornos alimentares, Fobias, TDAH, Transtorno de personalidade borderline, Irritabilidade, Inseguranças, Perfeccionismo, Solidão, Sobrecarga emocional, Luto, Perdas, Traumas, Transições de vida, Ressignificação do sentido da vida, Envelhecimento, Aposentadoria, Conflitos familiares, conjugais e interpessoais, Relações abusivas, Dificuldades da Maternidade e Paternidade, Conflitos com pais, Violência contra mulheres, crianças e adolescentes, Bullying, Pessoas vítimas de preconceito, Automutilação, Ideação suicida, Identidade de gênero, Sexualidade, Dificuldades escolares, Dificuldades de aprendizagem, Dificuldades no trabalho, Perda de emprego, Mudança de emprego, Dependência química.',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), Saudesc, CELOS, Elosaúde, ABEPOM, CASACARESC, SC Saúde, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/caroline_psico.avif',
  },
  {
    nome: 'Catarina Geoffroy',
    registro: 'CRP 12/21876',
    metodo: 'Terapia Cognitivo Comportamental (TCC), Neuropsicologia e ABA',
    filtros: ['TCC', 'ABA', 'Neuropsicologia'],
    formacao: 'Graduação em Psicologia pela Universidade Federal Fluminense RJ; Pós graduação em Neuropsicologia pelo Ipog; Pós graduação em Autismo pela FAVENI; Curso em terapia ABA no autismo para pais e aplicadores pela Academia do Autismo; Pós graduação em Desenvolvimento Infantil - ESHA/SPERJ - Niterói - RJ; Qualificação em ABA - Creative Ideias.',
    publico: 'Atendimento à Crianças a partir de 04 (quatro) anos, Adolescentes e Adultos. Atendimento Presencial e On-line a partir de 15 anos.',
    demandas: 'Avaliação neuropsicológica, transtornos de neurodesenvolvimento, dificuldades de aprendizagem, transtornos de ansiedade, transtornos depressivos, transtornos de humor, transtorno de personalidade, transtornos alimentares, luto, estresse, pânico, desenvolvimento de habilidades sociais, estresse pós traumático, gênero e sexualidade, conflitos familiares e de relacionamento, orientação parental.',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), Saudesc, CELOS, Elosaúde, ABEPOM, CASACARESC, SC Saúde, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/catarina_neuro.jpeg',
  },
  {
    nome: 'Clara Schmidt da Cruz',
    registro: 'CRP 12/10642',
    metodo: 'Psicanálise',
    filtros: ['Psicanálise'],
    formacao: 'Psicóloga pela Universidade Federal de Santa Catarina (UFSC, 2011); Formação em Psicanálise pela Maiêutica Florianópolis Instituição Psicanalítica (2011); Curso De qual cura se trata em uma análise? (Escola Brasileira de Psicanálise - Seção Santa Catarina, 2014); Curso A neurose obsessiva (Escola Brasileira de Psicanálise - Seção Santa Catarina, 2015).',
    publico: 'Atende Adolescentes a partir dos 16 anos, Adultos e Casais. Atendimento Presencial e On-line.',
    demandas: 'Ansiedade, Depressão, Compulsões - álcool, cigarro, maconha, jogos, redes sociais, Luto - perda de entes queridos, término de relacionamentos, mudanças de cidade, encerramento de ciclos, Bullying, Assédio sexual, moral e psicológico, Abuso sexual, físico e psicológico, Angústias de quem está em período de vestibular ou vivendo a faculdade/início da vida adulta, Pensamentos obsessivos e atos compulsivos, Somatizações - quando o corpo fala, Problemas com a vida sexual e a sexualidade, Queixas específicas das pessoas LGBTQIAPN+, Queixas das pessoas que sofrem violência de gênero, raça, classe, identidade de gênero e/ou orientação sexual e condição física.',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), Saudesc, CELOS, Elosaúde, ABEPOM, CASACARESC, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/clara_psico.avif',
  },
  {
    nome: 'Débora Laryssa Thibes Santos',
    registro: 'CRP 12/12212',
    metodo: 'Transpessoal',
    filtros: ['Fenomenologia'],
    formacao: 'Graduação em Psicologia pela Universidade do Oeste de Santa Catarina (UNOESC). Pós-graduação em Tanatologia pela Unyleya. Pós-graduação em Psicologia Clínica pela Universidade do Oeste de Santa Catarina (UNOESC). Pós-graduação em Psicologia Transpessoal pelo Instituto Zen.',
    publico: 'Adolescentes (a partir de 13 anos), Adultos e Casais. Atendimento exclusivamente na modalidade On-line.',
    demandas: 'Acompanhamento em Processos de Luto: Suporte especializado para lidar com a perda de entes queridos e "lutos simbólicos", como términos de relacionamento, mudanças de cidade e transições de carreira. Cuidado em Saúde Mental: Acolhimento em momentos de ansiedade profunda, esgotamento emocional (Burnout), estados de tristeza e oscilações de humor, focando no resgate do equilíbrio integral. Travessias de Vida e Crises Existenciais: Auxílio na busca por sentido e propósito em momentos de mudança, como a preparação para a aposentadoria e crises de identidade. Fortalecimento após Traumas: Atendimento sensível para superação de violências (emocionais ou físicas) e vivências traumáticas, visando a reconstrução da segurança interna. Conflitos e Vínculos: Mediação de dificuldades em relacionamentos amorosos e familiares, promovendo comunicações mais conscientes e saudáveis. Saúde Mental Materna: Suporte emocional durante o puerpério e os desafios de ajustamento à maternidade. Avaliações Específicas: Realização de avaliação psicológica para cirurgia bariátrica e procedimentos de esterilização.',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), Saudesc, CELOS, ABEPOM, CASACARESC, Sim Saúde, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/debora_psico.avif',
  },
  {
    nome: 'Denis S.H. Gomes de Menezes',
    registro: 'CRP 12/09809',
    metodo: 'ABA (Modelo Denver) e Gestalt-Terapia',
    filtros: ['ABA', 'Gestalt'],
    formacao: 'Graduado em Psicologia e Graduando em Antropologia pela Universidade Federal de Santa Catarina, Gestalt-Terapeuta, Analista do Comportamento, especialista em Transtorno do Espectro Autista pelo Centro Universitário Celso Lisboa/CBI of Miami.',
    publico: 'Pessoas com Transtorno do Espectro Autista (TEA), a partir de 7 anos (Crianças, Adolescentes e Adultos), adolescentes e adultos, em geral, Estrangeiros de língua espanhola. Atendimento Presencial e On-line.',
    demandas: 'Transtornos de ansiedade e depressão, Bipolaridade, Sobrepeso e Obesidade, Endividamento, Planejamento Familiar, Relacionamento do Casal, TDAH, Transtorno do Espectro Autista, Psicoses, Obsessões e Fobias. Avaliação para cirurgia bariátrica, Avaliação para esterilização/anticoncepção (laqueadura), Avaliação para esterilização/anticoncepção (vasectomia), Altas Habilidades (QI Elevado).',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), Saudesc, CELOS, Elosaúde, ABEPOM, CASACARESC, SC Saúde, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/dennis_psico.avif',
  },
  {
    nome: 'Eduardo Marchi',
    registro: 'CRP 12/09164',
    metodo: 'Psicanálise',
    filtros: ['Psicanálise'],
    formacao: 'Graduação em Psicologia pela Unisul (2009), Formação em psicanálise pela Maiêutica Florianópolis – Instituição Psicanalítica (2017).',
    publico: 'Atende Adolescentes a partir dos 16 anos e Adultos. Atendimento On-line.',
    demandas: 'Ansiedade: preocupação excessiva, medos, pânico. Depressão; Inibição: Dificuldades em iniciar, manter ou terminar relacionamentos; Dificuldades no desenvolvimento profissional. Fobias: Fobia social- medo de falar em publico, permanecer em espaços, de interagir com pessoas, etc Conflitos familiares, alienação parental. Sofrimentos relacionados a imagem corporal. Transtornos Alimentares: (Bulimia, Anorexia) Transtornos do Sono (insônia primaria e secundaria) Transtorno pós traumático: após acidentes ou violência sofrida, Avaliação para cirurgia bariátrica.',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), Saudesc, CELOS, ABEPOM, CASACARESC, Sim Saúde, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/eduardo_psico.avif',
  },
  {
    nome: 'Fabiana Reis Cypriano',
    registro: 'CRP 12/15335',
    metodo: 'Terapia Cognitivo Comportamental (TCC)',
    filtros: ['TCC'],
    formacao: 'Formada em Psicologia pela ULBRA - Universidade Luterana do Brasil; Pós-Graduação em Terapia Cognitivo Comportamental com certificação Internacional pelo CBI Of Miami; MBA em Gestão de Recursos Humanos pela Universidade Veiga de Almeida - RJ; Pós graduação em Saúde Mental // Medicina Funcional Integrativa, no meu caso Psicóloga Integrativa. Cursos de Transtornos de Humor, Saúde Mental, Transtornos Alimentares, Dependência Química, estados terminais de câncer e Transplante de Medula Óssea.',
    publico: 'Adultos, Idosos e Casais. Atendimento On-line.',
    demandas: 'Transtornos de Ansiedade, compulsões, estresse, TEPT (Transtorno de estresse pós-traumático), Fobias em geral, obsessões, medo, angústia, luto, obesidade, dependência química, síndrome do pânico, Suicídio, TAG (Transtorno de Ansiedade Generalizada), TOC (Transtorno obsessivo compulsivo), TDAH (Transtorno de déficit de atenção e hiperatividade), Transtornos de Humor (Bipolar, Hipomania, depressão), Transtornos de personalidade em geral (Antissocial, esquiva, Borderline, dependente, histriônica, narcista), Transtornos Alimentares (Bulimia, Anorexia, etc), Orientação Profissional, LGBTQIA+, Processos de autoconhecimento, autoestima, dependência emocional, Dificuldades nos relacionamentos, dificuldade na tomada de decisão, síndrome de Burnout, sintomas psicossomáticos, estados terminais de câncer. Avaliação para cirurgia bariátrica.',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), Saudesc, CELOS, ABEPOM, CASACARESC, Sim Saúde, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/fabiana_psico.avif',
  },
  {
    nome: 'Flora Lorena Branco Müller',
    registro: 'CRP 12/23920',
    metodo: 'Psicanálise de Orientação Lacaniana',
    filtros: ['Psicanálise'],
    formacao: 'Graduação em Psicologia pela Universidade Federal de Santa Catarina, Mestrado em Psicologia Social pelo Programa de Pós Graduação em Psicologia da UFSC.',
    publico: 'Atende Adolescentes a partir de 15 anos, Adultos e Idosos. Atendimento presencial e on-line.',
    demandas: 'Ansiedade, Depressão, Transtornos Alimentares, Questões relativas a maternidade, Questões nos relacionamentos amorosos, Questões de gênero e para a comunidade LGBTQIA+, e diversas outras demandas que possam surgir a partir da transferência.',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), Saudesc, CELOS, Elosaúde, ABEPOM, CASACARESC, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/flora_psico.avif',
  },
  {
    nome: 'Gabriela Rodrigues Rossi',
    registro: 'CRP 12/11519',
    metodo: 'Psicanálise',
    filtros: ['Psicanálise'],
    formacao: 'Formada em Psicologia pela CESUSC em 2012. Fundamentos da Clínica Lacaniana / Escola de Psicanálise Laço Analítico.',
    publico: 'Atende Crianças a partir dos 06 anos, Adolescente, Adulto e Idoso. Atendimento On-line e Presencial.',
    demandas: 'Ansiedade, depressão, pânico, fobias, entre outros.',
    atendimento: 'Particular.',
    foto: '/equipe/gabriela_psico.avif',
  },
  {
    nome: 'Gabrieli Cuco',
    registro: 'CRP 12/27705',
    metodo: 'Terapia Cognitivo Comportamental (TCC)',
    filtros: ['TCC'],
    formacao: 'Graduação em Psicologia pelo Centro Universitário Estácio de Santa Catarina, Pós Graduanda em Psicologia Baseada em Evidências: Terapias Cognitivo-Comportamentais.',
    publico: 'Adolescente a partir dos 15 anos, Adulto e Idoso. Atendimento On-line.',
    demandas: 'Transtornos de ansiedade, Depressão, Crise de Pânico, TOC, Fobias, Comportamento alimentar, estresse e esgotamento profissional, problemas familiares e conjugais, separação conjugal, dependência emocional, processo de autoconhecimento e autoestima, bipolaridade, borderline, Dependência química, Preocupações, Pensamentos recorrentes de perigo ou morte, Pensamentos de autocrítica, Sentimento de culpa, Crenças de incapacidade, Orientação Parental, demandas gerais referentes ao comportamento, ao social/relacional da infância e adolescência; automutilação, luto, habilidades sociais/socioemocionais, ideação suicida, conflitos familiares e de relacionamentos, separação dos pais, adaptação escolar, TDAH.',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), Saudesc, CELOS, ABEPOM, CASACARESC, Sim Saúde, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/gabrieli_psico.avif',
  },
  {
    nome: 'Hillary Amanda Pereira',
    registro: 'CRP 12/21381',
    metodo: 'Terapia Cognitivo Comportamental (TCC)',
    filtros: ['TCC'],
    formacao: 'Graduada em Psicologia pela Universidade Estácio de Sá de Santa Catarina.',
    publico: 'Atende Criança a partir 12, Adolescente e Adulto. Atendimento On-line.',
    demandas: 'Atende demandas relacionadas à ansiedade, depressão, tristezas, abuso sexual, estresse e esgotamento profissional, processo de autoconhecimento e autoestima, insegurança, entre outros.',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), Saudesc, CELOS, ABEPOM, CASACARESC, Sim Saúde, FUSEX, SC Saúde, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/hillary_psico.avif',
  },
  {
    nome: 'Juliana Amabile da Cruz',
    registro: 'CRP 12/17799',
    metodo: 'Terapia Cognitivo Comportamental (TCC), Terapia do Esquema e Neuropsicologia',
    filtros: ['TCC', 'Neuropsicologia'],
    formacao: 'Formada em psicologia pela instituição Estácio de Sá; Pós graduanda em terapia cognitivo comportamental, Formação em Terapia do Esquema. Pós-Graduação Lato Sensu em Neuropsicologia no IPOG.',
    publico: 'Atende Adultos, Idosos. Atendimento on-line.',
    demandas: 'Psicoterapia com enfoque nas demandas: depressão, ansiedade, pensamentos acelerados ou repetitivos, exaustão emocional, sobrecarga mental, irritabilidade, sensação de vazio, perda de sentido, autocobrança, perfeccionismo, estagnação e emoções intensas e persistentes. Também contempla dificuldades ligadas a relacionamentos, dependência emocional, autoestima, conflitos familiares e conjugais, esgotamento profissional, adaptação a transições do ciclo de vida e desenvolvimento de habilidades para lidar com os desafios cotidianos.',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), Saudesc, CELOS, ABEPOM, CASACARESC, Sim Saúde, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/juliana_psico.avif',
  },
  {
    nome: 'Julia Guidi Leite',
    registro: 'CRP 12/27432',
    metodo: 'Psicanálise de orientação Lacaniana',
    filtros: ['Psicanálise'],
    formacao: 'Formada pela Universidade do Vale do Itajaí (UNIVALI).',
    publico: 'Atende Crianças a partir dos 06 anos, Adolescentes, Adultos, Idosos. Atendimento Presencial e Online.',
    demandas: 'Angústia e transtornos ansiosos; sofrimento psíquico e impasses subjetivos; quadros depressivos e melancólicos; transtornos do humor; manifestações bipolares; fobias e inibições; efeitos psíquicos do trauma; dificuldades atencionais e impulsividade (TDAH); sintomas compulsivos e repetição; estresse crônico e sobrecarga psíquica; manifestações pós-traumáticas; inibição social e ansiedade relacional; luto e elaboração de perdas; relação com o corpo, imagem e alimentação; questões de sexualidade e identidade; crises de pânico; ideação suicida; TOC e sintomas obsessivos; oscilações de humor e instabilidade afetiva; insônia e demais transtornos do sono; pânico recorrente; impactos subjetivos da violência sexual e interpessoal; efeitos psíquicos do preconceito e da discriminação; uso abusivo de substâncias e dependências; quadros psicóticos e sofrimento grave (incluindo esquizofrenia e paranoia); conflitos em torno de gênero e identidade; transições do ciclo vital e aposentadoria; conflitos conjugais e amorosos (atendimento individual); acompanhamento de pais em processo de adoção; dificuldades comportamentais, relacionais, cognitivas e de aprendizagem na infância e adolescência; transtornos alimentares (anorexia, bulimia, compulsão e seletividade alimentar); sofrimento ligado à imagem corporal; reações ao trauma; organização borderline da personalidade; burnout e esgotamento psíquico; violências contra mulheres, crianças e adolescentes; sintomas psicossomáticos e corpo em sofrimento; separação, divórcio e reorganização familiar; alcoolismo e outras dependências.',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), Saudesc, CELOS, Elosaúde, ABEPOM, CASACARESC, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/júlia_psico.avif',
  },
  {
    nome: 'Keli Ferro',
    registro: 'CRP 12/23929',
    metodo: 'Psicodrama',
    filtros: ['Psicodrama'],
    formacao: 'Graduada em Psicologia clínica pela Universidade do Sul de Santa Catarina.',
    publico: 'Atende Adultos, pessoas com deficiência e familiares, Atendimento casais. Atendimento On-line.',
    demandas: 'Dificuldades familiares, adoecimento físico, processos de aprendizagem, condições de trabalho, adaptação a novas situações e transtornos mentais, como depressão e pânico. Avaliação para esterilização/anticoncepção (laqueadura), Avaliação para esterilização/anticoncepção (vasectomia), Orientação profissional.',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), Saudesc, CELOS, ABEPOM, CASACARESC, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/keli_psico.avif',
  },
  {
    nome: 'Kevin Alex Anaya Bisognin',
    registro: 'CRP 12/28352',
    metodo: 'Psicanálise de orientação lacaniana',
    filtros: ['Psicanálise'],
    formacao: 'Formado em Psicologia pela Universidade Federal de Santa Maria (UFSM), Mestrando em Psicologia Social e Cultura pela Universidade Federal de Santa Catarina (UFSC), Em formação pelo Instituto Clínico de Psicanálise de Orientação Lacaniana (ICPOL/SC).',
    publico: 'Atende Adolescentes a partir dos 16 anos, Adultos e Idosos. Atendimento On-line e Presencial. Opção de atendimento em inglês e espanhol.',
    demandas: 'Ansiedade, depressão, pânico, fobia, inibições, dependências, autolesão e ideação, síndromes, transtornos, entre outras faces da saúde mental. Questões de gênero e raça e situações de violência. Sofrimento psíquico derivado de demandas gerais referente ao comportamento, ao social, ao relacional e à aprendizagem e trabalho. Processos de luto e perda, sobrecarga e esgotamento, mudanças corporais, transições de vida, expressão de si, traumas e experiências afins que causam angústia generalizada e outras demandas que possam surgir a partir do vínculo terapêutico.',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), Saudesc, CELOS, Elosaúde, ABEPOM, CASACARESC, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/Kevin_psico.avif',
  },
  {
    nome: 'Larissa Fontana',
    registro: 'CRP 12/14611',
    metodo: 'Terapia Cognitivo Comportamental (TCC)',
    filtros: ['TCC'],
    formacao: 'Formada em Psicologia pela Universidade do Oeste de Santa Catarina. Especialização em Terapia Cognitivo Comportamental, sendo ela uma referência nos transtornos de ansiedade, fobias e depressão. Formação em terapia sexual (transtornos sexuais) pela Cessex. Pós-graduação em sexologia pela POSFG de Porto Alegre.',
    publico: 'Atende Adolescentes a partir de 14 anos, Adultos, Idosos, Casais. Atendimento On-line e Presencial.',
    demandas: 'Sendo ela uma referência nos transtornos de ansiedade, fobias e depressão. Terapia sexual a fim de tratar os transtornos sexuais e/ou aprimorar seu conhecimento na sexualidade e proporcionar maior bem estar. Terapia de casal, a fim de aprimorar a comunicação efetiva de ambos e na resolução de problemas e na identificação de pensamentos disfuncionais no intuito de maior satisfação no relacionamento. Avaliação para esterilização/anticoncepção (laqueadura), Avaliação para esterilização/anticoncepção (vasectomia).',
    atendimento: 'Particular.',
    foto: '/equipe/larissa_psico.avif',
  },
  {
    nome: 'Luciana Elisa Cunha',
    registro: 'CRP 12/03557',
    metodo: 'Psicologia Familiar Sistêmica, Psicologia Junguiana, Arteterapia e ABA',
    filtros: ['Junguiana', 'ABA', 'Sistêmica Familiar'],
    formacao: 'Graduação em Psicologia (UNISUL/2001); Especialização em Gerontologia (UFSC/2010); Especialização em Saúde Coletiva (UFSC/2014); Psicodrama (Atuare/2004); Arteterapia Junguiana (Incorporarte/2009), Psicologia Familiar Sistêmica (Instituto Expansão/2011), Psicologia Analítica (CIPA/2012); Constelação Familiar Sistêmica (Ipê Roxo/2017); Contoterapia (Ipê Roxo/2018); Doula da Morte (AmortSer/2019 - RS); Análise do Comportamento Aplicado ao Autismo – ABA (ESCON/2019).',
    publico: 'Atende Crianças a partir dos 3 anos, adolescente, adultos, idosos, Casais. Atendimento On-line.',
    demandas: 'TEA, Ansiedade, depressão, pânico, Avaliações, Mudança de carreira, adaptação de curso de vida, acompanhamento oncológico/outras doenças paliativas em qualquer idade, casais, famílias.',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), Saudesc, CELOS, ABEPOM, CASACARESC, Sim Saúde, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/Luciana_psico.avif',
  },
  {
    nome: 'Mara Serafim',
    registro: 'CRP 12/22673',
    metodo: 'Terapia Cognitivo Comportamental (TCC)',
    filtros: ['TCC'],
    formacao: 'Pós-Graduanda em Terapia Cognitivo-Comportamental (ICTC); Graduada em Psicologia (UNISUL); Pós-Graduada em Marketing para Gestão Empresarial (UFSC); Graduada em Automação de Empresas (UNIVALI); Curso de Cuidados Paliativos (UNISUL); Curso de Hipnoterapia (Associação Catarinense de Hipnose).',
    publico: 'Atende Crianças a partir de 13 anos, Adolescentes, Adultos, Idosos, Casais e Grupos. Atendimento Presencial e Online.',
    demandas: 'Ansiedade, depressão, tristezas, luto e perdas, fobias, traumas e abusos, cuidados paliativos, ideações suicidas, estresse e esgotamento profissional, problemas familiares e conjugais, separação conjugal, dependência emocional, autoconhecimento e autoestima, insegurança, dependências emocionais, orientação profissional.',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), Saudesc, CELOS, Elosaúde, ABEPOM, CASACARESC, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/mara_psico.avif',
  },
  {
    nome: 'Mariza Marília Tibolla',
    registro: 'CRP 12/16906',
    metodo: 'Psicanalítica',
    filtros: ['Psicanálise'],
    formacao: 'Graduação em Psicologia pela Faculdade Estácio de Sá.',
    publico: 'Atende Adolescente a partir dos 14 anos, Adultos e Idosos. Atendimento Online.',
    demandas: 'Problemas no relacionamento amoroso ou familiar. Ansiedade, tristeza, medo, depressão. Problemas no trabalho e carreira. Processos de lutos e perdas. Fobias ex: (lugares apertados, altura, animais, relacionamento, ficar sozinho, multidões…).',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), Saudesc, CELOS, ABEPOM, CASACARESC, Sim Saúde, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/mariza_psico.avif',
  },
  {
    nome: 'Monica Scultori',
    registro: 'CRP 12/19265',
    metodo: 'Existencialista Sartreana',
    filtros: ['Fenomenologia'],
    formacao: 'Psicóloga com formação na abordagem Existencialista Sartreana; Perita Judicial no Tribunal de Justiça de Santa Catarina (Vara da Familia); Pós-graduação: Tanatologia (Psicologia da Morte e do Morrer);Especialização: Suicidologia, Desastres Aéreos, Desastres Naturais, Diversidade Sexual.',
    publico: 'Atende Adolescentes a partir de 16 anos, Adultos, Idosos. Atendimento Presencial e On-line.',
    demandas: 'Especializada em oferecer suporte a pessoas em momentos de perda, luto (luto social, luto simbólico, luto parental, luto conjugal, luto por suicídio, luto por morte súbita, luto por morte violenta, luto por separação ou divórcio, luto por perda da saúde, luto pela perda do pet, luto por perda funcional, luto migratório, luto institucional). Síndrome do Ninho Vazio, Mães Atípicas, Mães de Anjos e Mães Neurodivergentes, Ansiedade, Depressão, Medo, Fobia Social. Dependência Emocional, Crises Existenciais, Traumas, Estresse, Estresse Pós-Traumático, Depêndencia Química, Alcoolismo, Violência Doméstica, Violências Sexuais, Distúrbios Alimentares (anorexia, bulimia), Transtorno de Imagem, Transtorno de Humor, Bipolar, Bordeline, Abandono de Incapaz, Dificuldades na Dinâmica Conjugal e Afetiva ( Sofrimento no vínculo amoroso, Feridas emocionais na relação, Dores no campo afetivo, Vivências de frustração relacional,  Divórcio/Separação), Bornout, Bulling, Pais em Processo de Filiação Adotiva,Aaspectos relacionados à Identidade de Gênero e à Orientação Sexual,  Desafios no Reconhecimento e Afirmação da Identidade.',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), Saudesc, CELOS, Elosaúde, ABEPOM, CASACARESC, SC Saúde, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/monica_psico.avif',
  },
  {
    nome: 'Morgana Jacques Scherer',
    registro: 'CRP 12/15680',
    metodo: 'Psicanálise',
    filtros: ['Psicanálise'],
    formacao: 'Graduada em Psicologia pela Estácio, Pós-graduanda em Saúde Mental e Atenção Psicossocial pela Estácio, Psicanalista, com formação na instituição Maiêutica de Florianópolis, Experiência clínica desde 2015, Experiência em Saúde mental e transtornos psiquiátricos.',
    publico: 'Atende Adultos, Idosos. Atendimento Presencial e On-line.',
    demandas: 'Qualquer manifestação de sofrimento psíquico, depressão, ansiedade, sintomas psicossomáticos e psicoses. Avaliação para cirurgia bariátrica, Avaliação para esterilização/anticoncepção (vasectomia).',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), Saudesc, CELOS, Elosaúde, ABEPOM, CASACARESC, SC Saúde, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/morgana_psico.avif',
  },
  {
    nome: 'Nicolas Carione de Pellegrin',
    registro: 'CRP 12/30597',
    metodo: 'Escuta orientada através da Psicanálise',
    filtros: ['Psicanálise'],
    formacao: 'Graduação em Psicologia pela Universidade do Vale do Itajaí (UNIVALI). Formação em andamento pelo Centro de Estudos de Terapias e Psicanálise (CETEP).',
    publico: 'Atende adolescentes a partir de 15 anos, adultos e idosos. Atendimento Presencial e On-line.',
    demandas: 'Transtornos de ansiedade, angústia, depressão, dificuldades nos relacionamentos, conflitos familiares, autoestima, insegurança, ciúmes, dependência emocional, separações e términos de relacionamento, luto e perdas, estresse, sensação de vazio, insatisfação com a vida, autoconhecimento, amadurecimento emocional, repetição de padrões nos vínculos e dificuldades na construção e manutenção de relações. Abuso sexual, vítimas de traumas e preconceitos, transtornos alimentares (anorexia, bulimia, TARE) e transtornos de imagem.',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), Saudesc, CELOS, Elosaúde, ABEPOM, CASACARESC, SC Saúde, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/nicolas_psico.jpeg',
  },
  {
    nome: 'Patricia N. de A. Nogueira',
    registro: 'CRP 12/28637',
    metodo: 'Psicologia Analítica',
    filtros: ['Junguiana'],
    formacao: 'Graduação em Psicologia pela Universidade de Uberaba – UNIUBE (2013). Capacitação em Orientação Profissional e de Carreira pela Faculdade Anhanguera.',
    publico: 'Atendimento para adolescentes a partir de 16 anos, adultos e idosos. Atendimento Presencial.',
    demandas: 'Autoconhecimento, autoestima e bem-estar emocional. Desenvolvimento de habilidades pessoais e ressignificação de projetos de vida. Orientação profissional e de carreira (incluindo primeira escolha, transição e reposicionamento no mercado). Elaboração de currículo e preparação para o mercado de trabalho. Questões emocionais relacionadas a traumas e experiências adversas, como "negligência, rejeição e instabilidade familiar". Dificuldades nos relacionamentos, dependência emocional e padrões disfuncionais. Ansiedade. Transtornos do humor (depressão e distimia). Distúrbios do sono. Transtornos alimentares. Transtornos de personalidade. Avaliação psicológica para procedimentos cirúrgicos, como bariátrica, vasectomia e processo transexualizador.',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), Saudesc, CELOS, ABEPOM, CASACARESC, Sim Saúde, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/patricia_psico.avif',
  },
  {
    nome: 'Sâmya Gardênia Amaral Correia Leite',
    registro: 'CRP 12/22834',
    metodo: 'Psicanálise',
    filtros: ['Psicanálise'],
    formacao: 'Psicóloga formada pela UNISUL. Praticante da Psicanálise em formação pela Escola Brasileira de Psicanálise/SC.',
    publico: 'Atende Adulto, Idosos e Atendimento Casal. Atendimento Presencial e On-line.',
    demandas: 'Ansiedade, depressão, pânico, fobias, morte e luto, estresse pós traumático, entre outros.',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), Saudesc, CELOS, Elosaúde, ABEPOM, CASACARESC, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/sâmya_psico.avif',
  },
  {
    nome: 'Sergio Jablonski',
    registro: 'CRP 12/01438',
    metodo: 'Terapia Comportamental Cognitiva',
    filtros: ['TCC'],
    formacao: 'Graduação em psicologia (UFSC, 1995), Mestrado em psicologia (UFSC, 1998), Doutorado em epistemologia da psicologia (UFSCar, 2010).',
    publico: 'Atende Adulto a partir dos 18 anos, Idosos. Atendimento Presencial e On-line.',
    demandas: 'Estresse e ansiedade.',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), Saudesc, CELOS, Elosaúde, ABEPOM, CASACARESC, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/sergio_psico.avif',
  },
  {
    nome: 'Rosangela Mezari',
    registro: 'CRP 12/12404',
    metodo: 'Terapia Cognitivo Comportamental (TCC) e ABA',
    filtros: ['TCC', 'ABA'],
    formacao: 'Psicologia (Universidade Estadual de Londrina). Pós Graduada em Transtorno do Espectro Autista. Curso Intervenção ABA para Autismo e deficiência Intelectual (Centro Universitário Celso Lisboa/CBI of MIAMI). Cursando Especialização em Neuropsicologia com Ênfase em Avaliações (Faculdade Metropolitana). Especialização: Professional & Self Coaching (IBC) - Analista Comportamental e Analista 360; Cursos e estudos adicionais: Psicologia Positiva, Psicologia Transpessoal, Orientação Profissional, Inteligência Emocional, Recrutamento e seleção, Linguagem corporal, Metafísica, Saúde Vibracional, Programação Neuro Linguística, Reprogramação Mental, Física Quântica; Curso Análise do Comportamento aplicada ao Espectro Autista (Método ABA).',
    publico: 'Atende Crianças a partir de 2 anos, Adolescentes, Adultos, Idosos e Casal. Atendimento Presencial e On-line. Atendimento a estrangeiros (Inglês).',
    demandas: 'Atende casos relativos a: Transtornos Globais do Desenvolvimento (TGD), Ansiedade, Depressão, Estresse, Insegurança, Fobias, Síndrome de burnout, Transtorno de personalidade, Transtorno obsessivo compulsivo (TOC), Transtorno déficit de atenção e hiperatividade (TDAH), Transtorno opositor desafiante infantil (TOD), Síndrome de down, Transtorno do Espectro Autista (TEA), Transtorno do Espectro Autista (método ABA), Síndrome do pânico, Bipolaridade, Dificuldade em aprendizagem, Transtorno alimentar, Dependência emocional, Conflitos afetivos, Padrões mentais negativos, Relações tóxicas e abusivas, Crenças limitantes, Auto sabotagem, Baixa autoestima, Dificuldade no relacionamento interpessoal, Oscilação de humor, Dificuldade da tomada de decisões. Autoconhecimento, Desenvolvimento pessoal, Empoderamento, Orientação profissional, Relacionamento afetivo, Terapia de casal. Realização de Avaliação Psicológica, Avaliação para cirurgia bariátrica, Avaliação para esterilização/anticoncepção (laqueadura), Avaliação para esterilização/anticoncepção (vasectomia).',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), Saudesc, CELOS, Elosaúde, ABEPOM, CASACARESC, SC Saúde, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/rosangela_psico.avif',
  },
  {
    nome: 'Thalita Dias Lima Leal Graebin',
    registro: 'CRP 12/19654',
    metodo: 'Terapia Cognitivo Comportamental (TCC)',
    filtros: ['TCC'],
    formacao: 'Graduada em psicologia pela Universidade Estácio de Santa Catarina, Pós Graduação em Comportamento Alimentar na Faculdade IPGS.',
    publico: 'Atende Adultos. Atendimento On-line.',
    demandas: 'Transtornos de ansiedade, depressão, crise de Pânico, TOC, Fobias, comportamento alimentar, autoestima, relacionamento.',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), Saudesc, CELOS, ABEPOM, CASACARESC, Sim Saúde, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/thalita_psico.avif',
  },
  {
    nome: 'Thayse Silveira da Rosa',
    registro: 'CRP 12/21695',
    metodo: 'Terapia Cognitivo Comportamental (TCC) e Neuropsicologia',
    filtros: ['TCC', 'Neuropsicologia'],
    formacao: 'Formada em psicologia pela Universidade Estácio de Santa Catarina; Pós-Graduação em Terapia Cognitivo Comportamental Centro Universitário União das Américas Descomplica; Pós-Graduação em Neuropsicologia Clínica.',
    publico: 'Atende Crianças a partir dos 10 anos, Adolescentes, Adultos e Idosos. Atendimento Presencial e On-line.',
    demandas: 'TDAH, Transtornos de ansiedade, transtornos de depressão, transtornos de humor, transtorno de personalidade, luto, bipolaridade, fobias em geral, estresse, pânico, habilidades sociais, ideação suicida, autoestima, conflitos familiares e de relacionamentos, adaptação escolar.',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), Saudesc, CELOS, Elosaúde, ABEPOM, CASACARESC, SC Saúde, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/thayse_psico.avif',
  },
  {
    nome: 'Valesca de Miranda Lopes',
    registro: 'CRP 12/15801',
    metodo: 'Psicanálise',
    filtros: ['Psicanálise'],
    formacao: 'Universidade Fumec, Especialização em Saúde do Adolescente na Universidade Federal de Minas Gerais.',
    publico: 'Atende Crianças a partir de 02 anos, Adolescente, Adulto, Idoso. Atendimento On-line e Presencial.',
    demandas: 'Ansiedade, Compulsões, Depressão, Dor emocional, Estresse, Estresse Pós Traumático, Fobia Social, Fobias Medos, Fobias Morte e Luto, Obesidade, Sexualidade e Identidade de Gênero, Síndrome do Pânico, Suicídio, TOC (Transtorno Obsessivo Compulsivo), Transtorno Bipolar, Transtorno de Humor, Transtornos Alimentares (Bulimia, Anorexia, etc), Transtornos do Sono, Pânico, Estados depressivos, Violências sexuais sofridas, Homossexualidades, Pessoas vítimas de traumas e preconceitos, Dependência química, entre outros.',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), Saudesc, CELOS, Elosaúde, ABEPOM, CASACARESC, SC Saúde, Sim Saúde, GEAP, FUSEX, Petrobras, Saúde Caixa e Particular.',
    foto: '/equipe/valesca_psico.avif',
  },
  {
    nome: 'Vanessa Aparecida Oliveira',
    registro: 'CRP 12/29376',
    metodo: 'Terapia Cognitivo-Comportamental (TCC)',
    filtros: ['TCC'],
    formacao: 'Bacharel em Psicologia pela Faculdade Anhanguera de São José/SC. Pós-graduação em Psicologia Clínica com Ênfase em Terapia Cognitivo-Comportamental pela Universidade Pitágoras Unopar Anhanguera. Cursos complementares em manejo dos sintomas ansiosos, aprimoramento de habilidades socioemocionais e interpessoais, e desenvolvimento pessoal e profissional.',
    publico: 'Atende crianças acima de 07 anos, adolescentes, adultos, idosos e casais.',
    demandas: 'Ansiedade, estresse e dificuldades emocionais; sintomas depressivos e desmotivação; dificuldades comportamentais e regulação emocional; baixa autoestima e insegurança; dificuldades de atenção, concentração, impulsividade e organização; dificuldades nos relacionamentos interpessoais e conjugais; conflitos familiares, divórcio e reestruturação familiar; orientação parental; desenvolvimento de habilidades sociais; vivências de luto e dor emocional; autoconhecimento e identidade; transtornos do sono; crises de pânico e fobias; sintomas psicossomáticos; preparação para aposentadoria; experiências traumáticas; padrões de pensamento disfuncionais e crenças limitantes.',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), FUSEX, CELOS, Elosaúde, Saudesc, CASACARESC, ABEPOM, Sim Saúde, GEAP, SC Saúde e Particular.',
    foto: '/equipe/vanessa_psico.jpeg',
  },
  {
    nome: 'Wicleff Luiz Rufino',
    registro: 'CRP 12/14220',
    metodo: 'Terapia Cognitivo Comportamental (TCC), Neuropsicologia',
    filtros: ['TCC', 'Neuropsicologia'],
    formacao: 'Formado em psicologia pela Universidade Estácio de Santa Catarina; Pós-graduação em Neuropsicologia na Faculdade Metropolitana - SP, Formação Internacional em Hipnose Clínica no Instituto Lucas Naves.',
    publico: 'Atende adolescente a partir dos 14 anos, Adulto, Idoso. Atendimento On-line e Presencial.',
    demandas: 'Atende demandas relacionadas à ansiedade, depressão maior, bipolaridade, síndromes, transtorno alimentar, ideações suicidas, acolhimentos, manejo e resolução de problemas, luto, Regressão, fobias e traumas, outras demandas de ordens psicológicas e avaliação Psicológica, Avaliação para cirurgia bariátrica, Avaliação para esterilização/anticoncepção (laqueadura), Avaliação para esterilização/anticoncepção (vasectomia). Avaliação Psicológica em transplantes. Avaliação Psicológica em cirurgia de readequação genital.',
    atendimento: 'Unimed, Cartão Acesso + Fácil (Unimed), Saudesc, CELOS, Elosaúde, ABEPOM, CASACARESC, Sim Saúde, GEAP, FUSEX, SC Saúde, Petrobras, Saúde Caixa e Particular.',
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
              <div className="mt-1.5">
                <SelosModalidade publico={p.publico} />
              </div>
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

/* ─── Utilitário: detecta modalidade a partir do campo publico ── */
function detectarModalidade(publico: string) {
  const texto = publico.toLowerCase()
  return {
    online:     /on.?line/.test(texto),
    presencial: /presencial/.test(texto),
  }
}

/* ─── Selos de modalidade ─────────────────────────────────── */
function SelosModalidade({ publico }: { publico: string }) {
  const { online, presencial } = detectarModalidade(publico)
  if (!online && !presencial) return null
  return (
    <div className="flex flex-wrap justify-center gap-1 pt-1">
      {online && (
        <span className="inline-flex items-center gap-1 rounded-full text-[10px] px-2 py-0.5
                         font-semibold bg-sky-50 text-sky-600 border border-sky-100">
          <Monitor className="w-2.5 h-2.5" />
          Online
        </span>
      )}
      {presencial && (
        <span className="inline-flex items-center gap-1 rounded-full text-[10px] px-2 py-0.5
                         font-semibold bg-[#F4E6E9] text-[#7C2C3B] border border-[#7C2C3B]/20">
          <MapPin className="w-2.5 h-2.5" />
          Presencial
        </span>
      )}
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
        <SelosModalidade publico={p.publico} />
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
