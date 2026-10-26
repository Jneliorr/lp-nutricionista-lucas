import { useState } from 'react'
import { ArrowRight, ArrowUpRight, Instagram, Play, X } from 'lucide-react'
import { beforeAfter, comparisonPhotos } from '../config/business'
import Lightbox from './Lightbox'
import ImageComparison from './ImageComparison'
import './BeforeAfter.css'

export default function BeforeAfter() {
  const [playing, setPlaying] = useState(false)
  const [selected, setSelected] = useState<number|null>(null)
  return <section className="before-after section" id="antes-e-depois" aria-labelledby="before-after-title">
    <div className="container comparison-section">
      <div className="section-heading reveal"><div><span className="eyebrow">05 — ANTES E DEPOIS</span><h2 id="before-after-title">Cada mudança,<br/>uma <em>trajetória.</em></h2></div><p>Por trás de cada foto, tem alguém que decidiu começar. Com suas dificuldades, suas pequenas conquistas e um dia de cada vez.</p></div>
      <div className="comparison-grid">{comparisonPhotos.map((photo,i)=><ImageComparison key={photo.src} photo={photo} onExpand={()=>setSelected(i)}/>)}</div>
    </div>
    <div className="container before-after-grid">
      <div className="before-after-copy reveal">
        <span className="eyebrow">TRAJETÓRIAS REAIS</span>
        <h2>Além da imagem,<br/><em>uma história.</em></h2>
        <p className="before-after-intro">Por trás de cada mudança, existe uma história, uma rotina e um caminho próprio.</p>
        <div className="before-after-story"><span className="story-number">01</span><div><span className="eyebrow">A HISTÓRIA DE</span><h3>{beforeAfter.person}</h3><p>{beforeAfter.summary}</p><span className="story-source"><Instagram size={14}/> {beforeAfter.account} + @lucasluz.nutri</span></div></div>
        <a className="text-link" href={beforeAfter.source} target="_blank" rel="noreferrer">Conhecer o relato no Instagram <ArrowUpRight size={18}/></a>
        <p className="before-after-note">Cada trajetória é individual. Este relato apresenta a experiência de uma pessoa.</p>
      </div>
      <div className="before-after-media reveal" id="before-after-player">
        <div className="before-after-media-top"><span>UM RELATO, EM PRIMEIRA PESSOA.</span><Instagram size={18} strokeWidth={1.3}/></div>
        {!playing ? <button className="before-after-poster" onClick={() => setPlaying(true)} aria-label={`Assistir ao antes e depois de ${beforeAfter.person}`}><span className="before-after-words"><span>Antes</span><ArrowRight size={28} strokeWidth={1}/><em>Depois</em></span><span className="before-after-play"><Play size={24} strokeWidth={1.4}/></span><span className="before-after-watch">Assistir à história do Igor <ArrowUpRight size={16}/></span><span className="before-after-poster-note">REEL ORIGINAL · INSTAGRAM</span></button> : <div className="before-after-player"><div className="before-after-player-toolbar"><span>IGOR SANTANA</span><button className="icon-button" aria-label="Fechar vídeo de antes e depois" onClick={() => setPlaying(false)}><X size={18}/></button></div><iframe title={`Antes e depois — relato de ${beforeAfter.person}`} src={`https://www.instagram.com/p/${beforeAfter.id}/embed/`} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/><p>Se o vídeo não carregar, <a href={beforeAfter.source} target="_blank" rel="noreferrer">abra o reel no Instagram <ArrowUpRight size={13}/></a>.</p></div>}
        <div className="before-after-media-bottom"><span>ALIMENTAÇÃO. ROTINA. CONSTÂNCIA.</span><span>LL / 01</span></div>
      </div>
    </div>
    <AdditionalStory/>
    {selected!==null&&<Lightbox index={selected} photos={comparisonPhotos} onChange={setSelected} onClose={()=>setSelected(null)}/>}
  </section>
}

function AdditionalStory(){
 const [playing,setPlaying]=useState(false)
 const source='https://www.instagram.com/reel/DYdGjd2BHlh/'
 return <div className="container before-after-grid additional-story">
  <div className="before-after-copy reveal"><span className="eyebrow">TRAJETÓRIAS REAIS · 02</span><h2>Acompanhamento<br/><em>em foco.</em></h2><p className="before-after-intro">Mais uma trajetória compartilhada no perfil do Lucas. Conheça a publicação original e acompanhe essa história.</p><a className="text-link" href={source} target="_blank" rel="noreferrer">Ver a trajetória no Instagram <ArrowUpRight size={18}/></a></div>
  <div className="before-after-media reveal"><div className="before-after-media-top"><span>MAIS UMA TRAJETÓRIA.</span><Instagram size={18}/></div>{playing?<div className="before-after-player"><div className="before-after-player-toolbar"><span>ACOMPANHAMENTO EM FOCO</span><button className="icon-button" aria-label="Fechar vídeo de acompanhamento" onClick={()=>setPlaying(false)}><X size={18}/></button></div><iframe title="Trajetória real — acompanhamento em foco" src="https://www.instagram.com/p/DYdGjd2BHlh/embed/" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/><p>Se o vídeo não carregar, <a href={source} target="_blank" rel="noreferrer">abra o reel no Instagram <ArrowUpRight size={13}/></a>.</p></div>:<button className="before-after-poster" onClick={()=>setPlaying(true)} aria-label="Assistir à trajetória: acompanhamento em foco"><span className="before-after-words">Uma nova <em>história.</em></span><span className="before-after-play"><Play size={24}/></span><span className="before-after-watch">Assistir à trajetória <ArrowUpRight size={16}/></span><span className="before-after-poster-note">REEL ORIGINAL · INSTAGRAM</span></button>}<div className="before-after-media-bottom"><span>CUIDADO. ROTINA. EVOLUÇÃO.</span><span>LL / 02</span></div></div>
 </div>
}
