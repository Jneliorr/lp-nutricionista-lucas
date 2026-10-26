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

Registro CRN, formação, e-mail, horários, público-alvo e diferenciais não foram confirmados. Campos ficam vazios e identificados no configurador; a página pública omite alegações não verificadas. O símbolo LL é uma proposta tipográfica, não o logotipo oficial. Copy é proposta editorial e deve ser revisada pelo profissional. Somente os serviços presencial e online confirmados são apresentados.

O mapa usa Google Maps, as fontes usam Google Fonts e os CTAs abrem WhatsApp/Instagram/Google. Não há formulário de coleta, analytics, cadastro ou backend. A política de privacidade descreve esses serviços e o armazenamento local. O configurador não exige login; não inserir informações confidenciais nele. Um sistema administrativo real requer autenticação e armazenamento apropriado.

## Publicação

O site será disponibilizado no acesso privado do Sites. Para servir `dist` em outra hospedagem, publicar a pasta gerada e configurar o fallback de SPA. O bundle do configurador é carregado sob demanda e não aparece na navegação pública.
