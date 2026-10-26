export type Config = {
  name: string; profession: string; city: string; address: string; phone: string;
  instagram: string; google: string; headline: string; subtitle: string; about: string;
  theme: string; mode: 'A' | 'B'; crn: string; email: string; hours: string;
  audience: string; difference: string; heroImage: string; logo: string;
}
export const initialConfig: Config = {
  name: 'Lucas Luz', profession: 'Nutricionista', city: 'Itaboraí, RJ',
  address: 'Edifício Múltiplo Business Center — Rua Presidente Costa e Silva, 117, Centro, Itaboraí – RJ, 24800-025',
  phone: '5521972414365', instagram: 'https://www.instagram.com/lucasluz.nutri/',
  google: 'https://share.google/nEXzAoXovWpvueWvC',
  headline: 'Nutrição que acompanha o seu ritmo.',
  subtitle: 'Entre a sua rotina e os seus objetivos, existe um caminho que faz sentido para você. Vamos conversar sobre ele?',
  about: 'Sou Lucas Luz, nutricionista em Itaboraí. Minha atuação na nutrição também encontra o esporte: no meu perfil, compartilho a rotina de consultório e a vivência como atleta. Atendo presencialmente e online. Conheça meu trabalho e converse comigo sobre o que você busca para a sua alimentação.',
  theme: 'editorial', mode: 'A', crn: '', email: '', hours: '',
  audience: '', difference: '', heroImage: '/images/lucas-consultorio.jpg', logo: '/images/logo-lucas-luz.jpeg',
}
export const themes = [
  { id: 'editorial', name: 'Editorial Luxury', colors: ['#f3f1f2','#075965','#17191a'], description: 'Tipografia serifada e composição de revista.' },
  { id: 'performance', name: 'Performance Bold', colors: ['#17191a','#075965','#f3f1f2'], description: 'Contraste forte e tipografia expressiva.' },
  { id: 'clinical', name: 'Clinical Modern', colors: ['#f3f1f2','#075965','#e8eef0'], description: 'Geometria precisa e transparência suave.' },
  { id: 'organic', name: 'Organic Wellness', colors: ['#e8eef0','#075965','#17191a'], description: 'Formas orgânicas e composições acolhedoras.' },
  { id: 'avant', name: 'Avant-Garde', colors: ['#17191a','#e8eef0','#075965'], description: 'Composição ousada e contraste editorial.' },
  { id: 'cinematic', name: 'Cinematic Premium', colors: ['#17191a','#075965','#f3f1f2'], description: 'Atmosfera profunda e luz azul petróleo.' },
]
export const services = [
  { title: 'Consultoria presencial', tag: 'EM ITABORAÍ', description: 'Um encontro no consultório para conversar sobre sua alimentação, rotina e objetivos. Consulte os detalhes do atendimento pelo WhatsApp.', icon: 'office' },
  { title: 'Consultoria online', tag: 'ONDE VOCÊ ESTIVER', description: 'A possibilidade de conversar sobre nutrição à distância. Entre em contato para saber como funciona a modalidade online.', icon: 'online' },
]
export const gallery = [
  { src: '/images/lucas-consultorio.jpg', alt: 'Lucas Luz no consultório, em fotografia publicada no seu Instagram', label: 'A rotina do consultório', detail: 'Um olhar para o cuidado', source: 'https://www.instagram.com/p/DLbDRNGvT47/' },
  { src: '/images/lucas-atleta.jpg', alt: 'Lucas Luz no palco de uma competição de fisiculturismo, com troféu', label: 'O esporte faz parte', detail: 'A vivência além do consultório', source: 'https://www.instagram.com/p/DQJ9UvxgKhl/' },
]
export const publications = [
  { id: 'DcULRBLCTVc', kind: 'reel', title: 'Evoluindo juntos.', eyebrow: 'EM COLABORAÇÃO', description: 'Lucas Luz e CT Thiago Câmara compartilham o início de um projeto que conecta treino e alimentação.', source: 'https://www.instagram.com/reel/DcULRBLCTVc/', embed: true },
  { id: 'DQhylbxgbtQ', kind: 'post', title: 'Constância para a vida real.', eyebrow: 'UM OLHAR SOBRE A NUTRIÇÃO', description: 'A visão do Lucas sobre uma alimentação que considera a rotina e as preferências de cada pessoa.', source: 'https://www.instagram.com/p/DQhylbxgbtQ/', embed: true },
  { id: 'DYdGjd2BHlh', kind: 'reel', title: 'Acompanhamento em foco.', eyebrow: 'NO PERFIL DO LUCAS', description: 'Confira a publicação original no Instagram do Lucas. Este conteúdo permanece na plataforma de origem.', source: 'https://www.instagram.com/reel/DYdGjd2BHlh/', embed: false },
]
export const beforeAfter = {
  id: 'DdwjEjfy7Vn',
  person: 'Igor Santana',
  account: '@igorsantanablak',
  source: 'https://www.instagram.com/reel/DdwjEjfy7Vn/',
  summary: 'Igor compartilha sua experiência com o acompanhamento do Lucas e conta como a alimentação passou a fazer parte da sua rotina.',
}
export const storageKey = 'lucas-luz-briefing-v1'
export function loadConfig(): Config {
  try { const raw = localStorage.getItem(storageKey); return raw ? validateConfig(JSON.parse(raw)) : initialConfig } catch { return initialConfig }
}
export function validateConfig(value: unknown): Config {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('O arquivo deve conter um objeto de configuração.')
  const data = value as Record<string, unknown>
  const result = { ...initialConfig }
  for (const key of Object.keys(initialConfig) as (keyof Config)[]) {
    if (data[key] !== undefined) {
      if (typeof data[key] !== 'string' || (data[key] as string).length > 10000) throw new Error(`Campo inválido: ${key}`)
      Object.assign(result, { [key]: data[key] })
    }
  }
  if (!themes.some(t => t.id === result.theme) || !['A','B'].includes(result.mode)) throw new Error('Tema ou modo inválido.')
  if (!result.logo) result.logo = initialConfig.logo
  for (const key of ['instagram','google'] as const) if (!/^https:\/\//.test(result[key])) throw new Error(`Use HTTPS em ${key}.`)
  for (const key of ['heroImage','logo'] as const) if (result[key] && !/^(\/[^/]|https:\/\/|data:image\/(png|jpeg|webp);base64,)/.test(result[key])) throw new Error(`Imagem inválida: ${key}`)
  return result
}
export function whatsapp(config: Config, subject = 'Gostaria de saber mais sobre a consulta nutricional.') {
  return `https://wa.me/${config.phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Olá, ${config.name}! ${subject}`)}`
}
