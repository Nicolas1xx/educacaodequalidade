# Arquitetura e decisões

SPA estática: navegador → React Router → página → Context API → funções e mocks TypeScript → localStorage. Não existe camada de API ou banco de dados. Publicação na Vercel serve apenas arquivos estáticos.

- `src/app/router.tsx`: dez rotas especificadas, rotas inválidas e carregamento lazy.
- `src/app/providers`: perfil e preferências independentes.
- `src/components`: formulários, cards e controles reutilizáveis.
- `src/components/ui`: primitives, modal nativo e estados de feedback.
- `src/data`: sete arquivos solicitados, quatro aulas, quatro quizzes e dados demonstrativos.
- `src/lib`: persistência validada e cálculos puros.
- `tests`: unidades e fluxo no navegador.

Cada quiz tem cinco questões fixas. Uma tentativa usa UUID, respostas e data local. Envio duplicado na mesma montagem é protegido por referência e ID; refazer cria nova tentativa. Conclusão da leitura é independente da realização do quiz. Tempo de estudo é uma estimativa pela duração das aulas concluídas, explicitamente rotulada. Metas são marcadas manualmente pelo estudante.

`educa.student.v1` guarda um perfil por origem. `educa.a11y.v1` guarda preferências globais. Dados inválidos são substituídos por demonstração; falha de gravação mostra aviso. Não há sincronização entre dispositivos ou abas em tempo real. Rascunhos de quiz são descartados ao sair, conforme aviso na tela.

## Referência visual
Foram lidas e renderizadas as 11 páginas de Educa+ Protótipo.pdf. Páginas 1–2: landing desktop; 3: dashboard em largura intermediária; 4–6: mobile; 7–9: Design System; 10–11: documentação das dez telas, rotas e React + Tailwind.

O PDF contém capturas de landing, dashboard e quiz, e especificações das outras telas. Estas foram implementadas usando os componentes documentados. Não há captura integral das outras sete telas para comparação pixel a pixel. O botão flutuante de navegação do protótipo foi omitido por ser ferramenta de prototipação. Estatísticas decorativas do dashboard foram substituídas por métricas coerentes com os mocks; contagens de aulas refletem o catálogo entregue.

Os breakpoints do protótipo são preservados; os tokens de cor, a tipografia e o símbolo foram substituídos pelo sistema visual descrito abaixo. Desktop usa sidebar de 264 px; até 1024 px usa navegação superior com rolagem interna; mobile até 640 px empilha cards. Alto contraste usa preto, branco e amarelo. Há três níveis de fonte (1, 1.125 e 1.25), espaçamento ampliado e redução de movimento. Não se alega certificação WCAG.

## Sistema visual "caderno escolar"

A segunda versão da interface abandona o padrão genérico de produto digital (Inter, azul saturado, cartões com cantos de 16 px, sombras difusas, gradientes e ícones em blocos coloridos) por uma identidade retirada do material escolar brasileiro. Os tokens em `src/index.css` recebem o nome do objeto que representam:

| Token | Valor | Origem |
| --- | --- | --- |
| `--papel` / `--folha` | `#f4f5f0` / `#ffffff` | fundo da página e folhas (cartões) |
| `--pauta` / `--pauta-forte` | `#d5e0ec` / `#a9bccf` | linhas pautadas e bordas |
| `--tinta` / `--grafite` / `--lapis` | `#1c2b5a` / `#2f3340` / `#5b6472` | títulos, texto e texto secundário |
| `--caneta` | `#1d44b5` | ação principal (caneta azul) |
| `--margem` | `#c5192d` | margem vermelha do caderno, que coincide com o vermelho oficial do ODS 4 |
| `--marca` | `#ffe566` | marca-texto: estado selecionado, aba ativa e destaque do título |
| `--lousa` / `--giz` | `#1e4a3a` / `#f1efe6` | rodapé |

Tipografia: Bitter (slab serif, peso 700–800) nos títulos e números; Atkinson Hyperlegible Next, desenhada para leitores com baixa visão, no texto corrido. Ambas são variáveis e servidas localmente via Fontsource.

Elementos estruturais, todos com significado:

- Fundo pautado com a linha vermelha de margem fixa à esquerda nas páginas públicas; na área do estudante, a barra lateral assume a margem.
- Rubricas em itálico vermelho substituem os eyebrows em caixa alta.
- Abas de fichário (`.badge`) identificam disciplinas; cada cartão de disciplina recebe a cor na borda superior.
- A barra de progresso é uma régua com marcas a cada 10 %.
- O gabarito do quiz usa círculos numerados; a alternativa escolhida recebe marca-texto.
- Seções da aula são numeradas na margem porque a ordem de leitura é relevante.
- Metas concluídas são riscadas em vermelho.
- Aviso de modo (demonstração ou local) é um post-it.
- Única animação: o traço de marca-texto sobre "Todos." no título da landing, desligado com movimento reduzido.

Alto contraste continua em preto, branco e amarelo; a pauta é removida nesse modo para não competir com o texto.
