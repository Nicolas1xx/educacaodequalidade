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

Tokens, Inter local, símbolo livro/+ e breakpoints são preservados. Desktop usa sidebar de 272 px; até 1024 px usa navegação superior com rolagem interna; mobile até 640 px empilha cards. Alto contraste usa preto, branco e amarelo. Há três níveis de fonte (1, 1.125 e 1.25), espaçamento ampliado e redução de movimento. Não se alega certificação WCAG.
