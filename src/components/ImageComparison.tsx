import { useId, useState } from 'react'
import type { CSSProperties } from 'react'
import { ChevronsLeftRight, Plus } from 'lucide-react'
import type { Photo } from '../config/business'

export default function ImageComparison({photo,onExpand}:{photo:Photo;onExpand:()=>void}) {
 const [position,setPosition]=useState(50)
 const id=useId()
 return <figure className="comparison-card reveal">
  <div className="image-comparison" style={{'--comparison-position':`${position}%`} as CSSProperties}>
   <div className="comparison-layer comparison-after"><img src={photo.src} alt={`Depois · ${photo.label}`} width="1280" height="1280" loading="lazy" draggable={false}/></div>
   <div className="comparison-layer comparison-before"><img src={photo.src} alt={`Antes · ${photo.label}`} width="1280" height="1280" loading="lazy" draggable={false}/></div>
   <div className="comparison-labels" aria-hidden="true"><span>Antes</span><span>Depois</span></div>
   <span className="comparison-divider" aria-hidden="true"><span><ChevronsLeftRight size={24}/></span></span>
   <input id={id} className="comparison-range" type="range" min="0" max="100" step="1" value={position} onChange={e=>setPosition(Number(e.target.value))} aria-label={`Comparar antes e depois: ${photo.label}`} aria-valuetext={`${position}% da imagem de antes revelada`} aria-describedby={`${id}-hint`}/>
  </div>
  <figcaption><span className="eyebrow">{photo.detail} / {photo.label.endsWith('Homem')?'HOMEM':'MULHER'}</span><button className="text-link" onClick={onExpand} aria-label={`Ampliar: ${photo.label}`}>Ampliar <Plus size={17}/></button></figcaption>
  <p id={`${id}-hint`} className="comparison-hint">Arraste a divisória para comparar. Use também as setas do teclado.</p>
 </figure>
}
