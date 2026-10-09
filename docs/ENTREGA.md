# Relatório de entrega

## Entregas

- **10 telas e 10 rotas** implementadas.
- **4 disciplinas, 4 aulas completas, 4 quizzes e 20 perguntas**. Mais 4 itens de catálogo com modal de indisponibilidade.
- Perfil demonstrativo identificado; perfil local sem histórico; edição e restauração com confirmação.
- Busca sem acentos, filtros na URL, favoritos, conclusão de aulas, metas, resultados e gráficos com persistência.
- Inter local, cores e componentes do PDF, sidebar 272 px, navegação superior em telas menores, fonte ampliada, contraste, espaçamento e redução de movimento.
- **50 cards estruturados localmente**: 49 concluídos com evidência e publicação em Backlog. **0 cards criados no GitHub Projects**. JSON e CSV incluídos.
- **34 commits reais** até este relatório, sem commits vazios. Consulte `git log --oneline` para o histórico integral.
- GitHub: https://github.com/Nicolas1xx/educacaodequalidade
- Branch de desenvolvimento: `feat/educa-plus`.
- Aplicação local: http://127.0.0.1:5173 (enquanto o servidor estiver ativo).

## Testes executados

| Verificação | Resultado real |
| --- | --- |
| Vitest | 20 testes aprovados: quizzes, integridade, métricas, perfis e armazenamento |
| Jornada no navegador | Cadastro → aula → quiz 5/5 → resultado → progresso → recarga: aprovado |
| Biblioteca | Filtro por disciplina, pesquisa sem acento, favorito, modal, Escape e retorno de foco: aprovado |
| Perfil | Edição, fonte extra, contraste, movimento, espaçamento, recarga e restauração: aprovado |
| Rotas e responsividade | As 10 rotas em 1440, 768 e 390 px: aprovadas, sem erros JavaScript ou overflow horizontal da página |
| Persistência adversa | JSON corrompido e falha de gravação: navegação preservada e aviso exibido |
| Rotas inválidas | Aula, quiz e resultado sem tentativa tratados com estado apropriado |
| Axe | Encontrou contraste 4,37:1 no metadado da aula. Corrigido para #475569; nova execução passou nas 10 rotas e perfil em alto contraste |
| Playwright total | 8 testes passaram na execução inicial; 1 falhou por contraste e passou na reexecução direcionada |
| Build de produção | TypeScript + Vite aprovados, build final em 3,21 s |
| Lint | Código de saída 0, com 8 avisos de hooks/fast refresh/estilo documentados abaixo |

Os testes automatizados não equivalem a certificação WCAG, revisão pedagógica ou avaliação com leitores de tela reais. Não foi feita nova bateria extensa após solicitação de economia do usuário.

## Publicação e pendências


- **Status:** publicado.
- **Plataforma:** Vercel.
- **Link:** https://educacaodequalidade.vercel.app/
- **Build:** `npm run build` (TypeScript + Vite). Pasta de saída: `dist`.
- **Rotas internas:** `vercel.json` redireciona todas as rotas para `index.html`, então recarregar a página funciona.



### Limitações conhecidas
- Dados salvos só no navegador (armazenamento local), sem back-end.
- Conteúdo de disciplinas, aulas e questões fixo no código.

