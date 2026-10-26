# Lucas Luz — Nutricionista

Landing page Editorial Luxury em Vite, React, TypeScript e Tailwind CSS. Inclui WebGL nativo/GLSL, animações com movimento reduzido, loading de primeira visita, navegação com progresso, duas modalidades de atendimento, avaliações em estado vazio, galeria com lightbox, mapa e contato por WhatsApp.

## Executar

Node.js 20.19+ ou 22.12+.

```sh
npm install
npm run dev
```

Abra a URL exibida pelo Vite. `/` é a página pública. `/configurador` é o briefing inicial separado, com seis direções, edição de conteúdo, importação/exportação JSON e prompt. A opção “Visualizar landing page” abre `/?preview=1` com o rascunho local. O configurador **não publica alterações**, não é um painel multiusuário e não implementa cadastro de clientes do Modo B. A seleção de B registra a solicitação no briefing para desenvolvimento posterior.

```sh
npm run build
npm run preview
```

O build está em `dist/`. Hospedagem estática precisa redirecionar rotas sem arquivo para `index.html` para acesso direto ao configurador. O projeto Sites está em `.openai/hosting.json`; preserve seu ID. A hospedagem inicial é privada, sem domínio comercial confirmado. Para domínio definitivo, atualizar canonical, OG, JSON-LD, sitemap e robots antes de habilitar indexação pública.

## Conteúdo

- `src/config/business.ts`: dados públicos iniciais, textos propostos, temas, serviços e galeria. Editar `initialConfig` para atualizar a versão publicada; rascunhos no navegador não alteram esse arquivo.
- `src/styles.css`: tokens de tema e layouts responsivos.
- `src/components/Atmosphere.tsx` e `src/shaders/atmosphere.ts`: shaders, renderização, pausa fora de tela/aba oculta, DPR limitado, recuperação de contexto e fallback estático.
- `src/Configurator.tsx`: briefing inicial persistido no navegador.

## Fontes e pendências

Verificação em 26/10/2026:

- Instagram fornecido: https://www.instagram.com/lucasluz.nutri/ — nome, consultoria presencial e online, Itaboraí e vivência como atleta.
- Perfil Google fornecido: https://share.google/nEXzAoXovWpvueWvC — endereço e descrição com WhatsApp `(21) 97241-4365`. Não havia avaliações publicadas. Não há depoimentos inventados ou marcação de nota agregada.
- Foto do consultório: https://www.instagram.com/p/DLbDRNGvT47/
- Foto da competição: https://www.instagram.com/p/DQJ9UvxgKhl/ — crédito Magaclick Studio visível na fotografia. As imagens foram obtidas do perfil público fornecido; confirmar autorização de republicação e créditos antes do lançamento comercial público.

Registro CRN, formação, e-mail, horários, público-alvo e diferenciais não foram confirmados. Campos ficam vazios e identificados no configurador; a página pública omite alegações não verificadas. A logo principal usa `public/images/logo-lucas-luz.png`, com transparência real; o JPEG original permanece preservado. A extração usou a ferramenta integrada ImageGen com a instrução de remover o fundo e a marca d’água clara, preservando o monograma, as cores e os textos LUCASLUZ e NUTRIÇÃO ESPORTIVA. A identidade usa azul petróleo #075965, preto #17191a, quase branco #f3f1f2 e cinza azulado #e8eef0. Os tokens estão em src/styles/brand.css. Copy é proposta editorial e deve ser revisada pelo profissional. Somente os serviços presencial e online confirmados são apresentados.

O mapa usa Google Maps, as fontes usam Google Fonts e os CTAs abrem WhatsApp/Instagram/Google. Não há formulário de coleta, analytics, cadastro ou backend. A política de privacidade descreve esses serviços e o armazenamento local. O configurador não exige login; não inserir informações confidenciais nele. Um sistema administrativo real requer autenticação e armazenamento apropriado.

## Publicação

### Publicações adicionadas à galeria

A seção independente **Antes e depois**, em `#antes-e-depois`, apresenta as comparações masculina e feminina fornecidas pelo cliente, preservadas integralmente, com ampliação. Também mantém o reel `DdwjEjfy7Vn`, enviado expressamente para essa seção. O relato original é de Igor Santana, em colaboração com Lucas Luz. A incorporação oficial é carregada após clique e tem link alternativo para o Instagram. Sem números de resultados ou promessas. Conteúdo em `comparisonPhotos` e `beforeAfter`, em `src/config/business.ts`, e componente `src/components/BeforeAfter.tsx`.

A foto `profissional-1.jpeg` é a imagem principal; `profissional-2.jpg` aparece na seção sobre o profissional. A seção `#consultorio` apresenta `sala1.jpeg` e `sala2.jpeg`, com ampliação e navegação por teclado. Rascunhos antigos do configurador migram para a logo transparente e para a nova imagem principal.

Os três links enviados posteriormente estão em `publications`, em `src/config/business.ts`, e aparecem na galeria. O reel em colaboração com CT Thiago Câmara e a publicação sobre constância usam a incorporação oficial do Instagram, carregada apenas após clique. Os links para abrir os originais ficam sempre disponíveis, inclusive se o Instagram exigir login ou impedir incorporação. A visualização de conteúdos do Instagram depende das permissões e disponibilidade da plataforma.

O reel `DYdGjd2BHlh`, adicionado expressamente pelo cliente a **Trajetórias reais**, possui incorporação oficial carregada após clique e link para o Instagram. A galeria mantém o link para o original. Não foram copiados comentários de pacientes para a seção de avaliações.

Os dois comparadores usam `ImageComparison.tsx`: cada montagem original é exibida em duas camadas com a metade esquerda (antes) e a direita (depois), sem gerar ou alterar as fotografias. O controle nativo `range` revela as camadas por recorte, funciona com mouse, toque e teclado e mantém os controles independentes. A ampliação abre a montagem original.

O perfil usa somente `profissional-2.jpg`, sem retrato sobreposto. A primeira foto da galeria é `lucas-movimento.jpg`, obtida da publicação pública `https://www.instagram.com/lucasluz.nutri/p/De0OHrfkbAk/`. Os cinco cartões de avaliações são exemplos fictícios, identificados individualmente e no cabeçalho; não representam relatos reais nem alimentam dados estruturados de avaliações.

O site será disponibilizado no acesso privado do Sites. Para servir `dist` em outra hospedagem, publicar a pasta gerada e configurar o fallback de SPA. O bundle do configurador é carregado sob demanda e não aparece na navegação pública.
