# Educa+ — Aprender é para Todos

Plataforma educacional acadêmica alinhada ao **ODS 4**, desenvolvida para um hackathon de Frameworks Front-end com limite de quatro horas.

**Dados 100% mockados em TypeScript e persistência no localStorage. Sem backend, banco, APIs educacionais ou login real.**

## Executar

Requer Node.js 24 (ambiente utilizado) e npm.

```sh
npm ci
npm run dev
npm run build
npm run preview
npm test
npm run lint
```

Testes de navegador: com `npm run dev` ativo e Google Chrome instalado, execute `npm run test:e2e`. `BASE_URL` permite apontar para outra origem. Os relatórios locais ficam em `test-results/` e não são enviados ao Git.

## Problema, público e proposta

Materiais dispersos e pouca visibilidade sobre a própria evolução podem dificultar o estudo independente. A proposta é reunir aulas curtas, quizzes comentados, metas e ajustes de acessibilidade. Público pretendido: Fundamental II e Ensino Médio; esta demonstração contém amostras introdutórias, não um currículo completo.

## Funcionalidades e rotas

| Tela | Rota | Entrega |
| --- | --- | --- |
| Landing | `/` | Hero, benefícios, disciplinas, acessibilidade, ODS e footer |
| Cadastro | `/cadastro` | Nome/apelido, ano, interesses e preferências |
| Dashboard | `/app` | Saudação, quatro indicadores, metas, atividades e aulas |
| Disciplinas | `/app/disciplinas` | Quatro matérias e progresso calculado |
| Biblioteca | `/app/biblioteca` | Pesquisa, filtros, favoritos e modal |
| Aula | `/app/aula/:id` | Objetivos, explicações, exemplos, sumário e conclusão |
| Quiz | `/app/quiz/:id` | Cinco etapas, quatro alternativas, dicas e validação |
| Resultado | `/app/quiz/:id/resultado` | Nota, anel, feedback e correção comentada |
| Progresso | `/app/progresso` | Gráfico, desempenho e histórico |
| Perfil | `/app/perfil` | Edição e acessibilidade persistente |

IDs completos: `fracoes`, `interpretacao`, `agua`, `fontes`. Quatro itens adicionais demonstram o estado indisponível.

O perfil fictício Ana demonstra gráficos e resultados. Criar perfil local inicia sem histórico. Restaurar demonstração exige confirmação e substitui os dados locais. Apagar os dados do navegador remove o perfil; não há sincronização. O botão Entrar abre o perfil deste navegador, sem autenticação.

## Tecnologias e framework

React, TypeScript, Vite, Tailwind CSS, React Router, Lucide React, Recharts, Context API, Zod e fonte Inter hospedada localmente. Versões exatas resolvidas no `package-lock.json`. Git e GitHub para versionamento, Vercel para hospedagem estática. Vitest e Playwright para validação.

## Documentação do hackathon

- [Requisitos: 14 funcionais, 12 não funcionais e 14 histórias com aceitação](docs/REQUISITOS.md)
- [Benchmarking: Khan Academy, Duolingo, Google Classroom, Quizlet e Escola Games](docs/BENCHMARKING.md), com fontes oficiais e análises separadas.
- [Arquitetura, design system e cobertura visual do protótipo](docs/ARQUITETURA.md)
- [Gestão e processo de desenvolvimento](docs/GESTAO.md)
- [50 atividades estruturadas](docs/project-cards.json)
- [Relatório real de entrega e testes](docs/ENTREGA.md)

Protótipo: **Educa+ Protótipo.pdf**, fornecido pelo usuário e lido integralmente (11 páginas). O arquivo original não é redistribuído neste repositório. Não foi fornecido link público do protótipo navegável.

Repositório: https://github.com/Nicolas1xx/educacaodequalidade
Aplicação: consultar [relatório de publicação](docs/ENTREGA.md).

## Processo e integrantes

Desenvolvimento incremental: inspeção do PDF → tokens e dados → contextos → componentes e telas → responsividade → testes → documentação → publicação. Commits registram alterações reais; não foram usados commits vazios. A branch de trabalho é `feat/educa-plus`. Os estados dos cards locais refletem entregas verificáveis, sem alegar publicação no GitHub Projects.

O hackathon prevê quatro integrantes. Seus nomes e contribuições humanas não foram informados; devem ser preenchidos pela equipe. Não se atribuem commits a integrantes inexistentes.

## Inteligência Artificial

Codex foi efetivamente utilizado nesta execução para leitura do protótipo, implementação, documentação e testes. O pedido menciona Claude na prototipação, mas a autoria do PDF não foi confirmada nesta sessão; confirmar com a equipe antes de atribuir esse uso.

## Publicação

Importe o repositório na Vercel, selecione Vite, Node 24, comando `npm run build` e saída `dist`. Não são necessárias variáveis de ambiente. `vercel.json` contém fallback para as rotas do React Router. O relatório registra se a publicação automática foi concluída e verificada.
