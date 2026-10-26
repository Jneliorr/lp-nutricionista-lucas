import { useState } from 'react'
import { ArrowUpRight, Instagram, Play, X } from 'lucide-react'
import { publications } from '../config/business'
import './InstagramPublications.css'

export default function InstagramPublications() {
  const [active, setActive] = useState<string | null>(null)
  return <div className="instagram-publications" id="publicacoes">
    <div className="publications-heading reveal"><div><span className="eyebrow">FOTOS, REELS E CONVERSAS</span><h3>Mais perto do <em>dia a dia.</em></h3></div><p>Publicações para conhecer o trabalho e o olhar do Lucas.</p></div>
    <div className="publications-grid">{publications.map((post, index) => <article key={post.id} className={`publication-card publication-${index} ${active === post.id ? 'publication-expanded' : ''}`}>
      <div className="publication-meta"><span>{post.kind === 'reel' ? 'REEL' : 'PUBLICAÇÃO'}</span><Instagram size={18} strokeWidth={1.3}/></div>
      <span className="eyebrow">{post.eyebrow}</span><h4>{post.title}</h4><p>{post.description}</p>
      <div className="publication-actions">{post.embed && <button className="publication-load" aria-expanded={active === post.id} aria-controls={`instagram-${post.id}`} onClick={() => setActive(active === post.id ? null : post.id)}>{active === post.id ? <><X size={15}/> Fechar visualização</> : <>{post.kind === 'reel' ? <Play size={14}/> : <Instagram size={14}/>} {post.kind === 'reel' ? 'Carregar reel' : 'Ver publicação aqui'}</>}</button>}<a className="text-link" href={post.source} target="_blank" rel="noreferrer">{post.embed ? 'Abrir no Instagram' : 'Ver reel no Instagram'} <ArrowUpRight size={16}/></a></div>
      {post.embed && <div id={`instagram-${post.id}`} className="publication-embed" hidden={active !== post.id}>{active === post.id && <><iframe src={`https://www.instagram.com/p/${post.id}/embed/`} title={`Instagram: ${post.title}`} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/><p className="embed-help">Se a visualização não carregar ou pedir login, use “Abrir no Instagram”.</p></>}</div>}
    </article>)}</div>
    <p className="publications-note">As visualizações incorporadas conectam ao Instagram somente ao clicar. Os links abrem as publicações originais.</p>
  </div>
}
