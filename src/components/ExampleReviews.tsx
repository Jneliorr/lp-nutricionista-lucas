import { Quote, Star } from 'lucide-react'

const examples=[
 ['Mariana A.','Uma conversa acolhedora e orientações fáceis de entender. Gostei da atenção à minha rotina e às minhas preferências.'],
 ['Rafael M.','O atendimento me ajudou a organizar melhor a alimentação no dia a dia, com ideias práticas para os meus horários.'],
 ['Camila S.','Pude falar sobre minhas dificuldades com tranquilidade. A proposta de acompanhamento ficou clara desde a primeira conversa.'],
 ['Pedro L.','Gostei da escuta e do cuidado ao considerar meus objetivos junto com a rotina de treinos.'],
 ['Juliana R.','A modalidade online foi prática para mim. Foi uma oportunidade de tirar dúvidas e pensar em hábitos possíveis para a minha rotina.'],
]

export default function ExampleReviews(){
 return <section className="example-reviews section container" id="avaliacoes" aria-labelledby="reviews-title"><div className="section-heading reveal"><div><span className="eyebrow">03 — AVALIAÇÕES DE EXEMPLO</span><h2 id="reviews-title">Cuidado que começa<br/>com a <em>escuta.</em></h2></div><p>Textos e nomes fictícios para demonstrar esta seção. Não são relatos de pacientes.</p></div><div className="example-reviews-grid">{examples.map(([name,quote])=><article className="example-review reveal" key={name}><div className="example-review-top"><Quote size={25} strokeWidth={1.2}/><span className="eyebrow">EXEMPLO FICTÍCIO</span></div><div className="review-stars" aria-label="5 estrelas ilustrativas">{Array.from({length:5},(_,i)=><Star key={i} size={14} fill="currentColor"/>)}</div><p>“{quote}”</p><footer><span>{name}</span><small>Nome fictício</small></footer></article>)}</div></section>
}
