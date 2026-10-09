<div align="center">

# Educa+

**Aprender é para todas as pessoas.**

Plataforma educacional alinhada ao **ODS 4 – Educação de Qualidade**, desenvolvida para um hackathon de Frameworks Front-end (limite de 4 horas).

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?logo=vitest&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-2EAD33?logo=playwright&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)

[Aplicação publicada](docs/ENTREGA.md) · [Requisitos](docs/REQUISITOS.md) · [Arquitetura](docs/ARQUITETURA.md) · [Relatório de entrega](docs/ENTREGA.md)

</div>

---

## Sumário

- [Sobre o projeto](#sobre-o-projeto)
- [Funcionalidades e rotas](#funcionalidades-e-rotas)
- [Tecnologias](#tecnologias)
- [Como executar](#como-executar)
- [Testes](#testes)
- [Documentação](#documentação)
- [Processo de desenvolvimento](#processo-de-desenvolvimento)
- [Uso de Inteligência Artificial](#uso-de-inteligência-artificial)
- [Publicação](#publicação)
- [Equipe](#equipe)

## Sobre o projeto

Materiais dispersos e pouca visibilidade sobre a própria evolução dificultam o estudo independente. O Educa+ reúne em um só lugar aulas curtas, quizzes comentados, metas e ajustes de acessibilidade.

- **Público pretendido:** Ensino Fundamental II e Ensino Médio.
- **Escopo desta demonstração:** amostras introdutórias de conteúdo, e não um currículo completo.

> [!NOTE]
> Os dados são **100% mockados em TypeScript** e a persistência usa o `localStorage`. Não há back-end, banco de dados, APIs educacionais nem login real.

## 🎨 Protótipo

O protótipo navegável do Educa+ reúne as 10 telas, as versões desktop, tablet e mobile, o design system e as especificações para React + Tailwind.

🔗 **[Acessar o protótipo](https://claude.ai/artifact/DotnfVrg9aCHSimjaK9hgL)**

Fluxo principal: Landing → Cadastro → Dashboard → Disciplinas → Biblioteca → Aula → Quiz → Resultado → Progresso. O Perfil e as configurações de acessibilidade ficam no menu lateral.

### Comportamento dos dados locais

- O perfil fictício **Ana** demonstra gráficos e resultados.
- Criar um perfil local inicia a conta sem histórico.
- **Restaurar demonstração** exige confirmação e substitui os dados locais.
- Apagar os dados do navegador remove o perfil; não há sincronização.
- O botão **Entrar** abre o perfil deste navegador, sem autenticação.

## Funcionalidades e rotas

| Tela | Rota | Entrega |
| --- | --- | --- |
| Landing | `/` | Hero, benefícios, disciplinas, acessibilidade, ODS e rodapé |
| Cadastro | `/cadastro` | Nome ou apelido, ano, interesses e preferências |
| Dashboard | `/app` | Saudação, quatro indicadores, metas, atividades e aulas |
| Disciplinas | `/app/disciplinas` | Quatro matérias e progresso calculado |
| Biblioteca | `/app/biblioteca` | Pesquisa, filtros, favoritos e modal |
| Aula | `/app/aula/:id` | Objetivos, explicações, exemplos, sumário e conclusão |
| Quiz | `/app/quiz/:id` | Cinco etapas, quatro alternativas, dicas e validação |
| Resultado | `/app/quiz/:id/resultado` | Nota, anel de progresso, feedback e correção comentada |
| Progresso | `/app/progresso` | Gráfico, desempenho e histórico |
| Perfil | `/app/perfil` | Edição de dados e acessibilidade persistente |

**Conteúdos completos:** `fracoes`, `interpretacao`, `agua` e `fontes`. Outros quatro itens demonstram o estado indisponível.

## Tecnologias

| Área | Ferramentas |
| --- | --- |
| Interface | React, TypeScript, Vite |
| Estilo | Tailwind CSS |
| Navegação e estado | React Router, Context API |
| Dados e validação | Zod |
| Visualização | Recharts, Lucide React |
| Tipografia | Bitter e Atkinson Hyperlegible Next (hospedadas localmente) |
| Qualidade | Vitest, Playwright, ESLint |
| Versionamento e hospedagem | Git, GitHub, Vercel (hospedagem estática) |

As versões exatas estão resolvidas no `package-lock.json`.

## Como executar

**Requisitos:** Node.js 24 (ambiente utilizado) e npm.

```sh
npm ci            # instala as dependências
npm run dev       # servidor de desenvolvimento
npm run build     # build de produção
npm run preview   # visualiza o build localmente
npm run lint      # análise estática
npm test          # testes unitários
```

## Testes

- **Unitários:** `npm test` (Vitest).
- **De navegador:** com `npm run dev` ativo e o Google Chrome instalado, execute `npm run test:e2e` (Playwright). A variável `BASE_URL` permite apontar para outra origem.

Os relatórios locais ficam em `test-results/` e não são enviados ao Git. O resultado dos testes está no [relatório de entrega](docs/ENTREGA.md).

## Documentação

| Documento | Conteúdo |
| --- | --- |
| [Requisitos](docs/REQUISITOS.md) | 14 funcionais, 12 não funcionais e 14 histórias com critérios de aceitação |
| [Benchmarking](docs/BENCHMARKING.md) | Khan Academy, Duolingo, Google Classroom, Quizlet e Escola Games, com fontes oficiais |
| [Arquitetura](docs/ARQUITETURA.md) | Arquitetura, design system e cobertura visual do protótipo |
| [Gestão](docs/GESTAO.md) | Gestão e processo de desenvolvimento |
| [Atividades](docs/project-cards.json) | 50 atividades estruturadas |
| [Entrega](docs/ENTREGA.md) | Relatório real de entrega e testes |

**Protótipo:** *Educa+ Protótipo.pdf*, fornecido pelo usuário e lido integralmente (11 páginas). O arquivo original não é redistribuído neste repositório. Não foi fornecido link público do protótipo navegável.

## Processo de desenvolvimento

Desenvolvimento incremental, em etapas:

1. Inspeção do PDF
2. Tokens de design e dados
3. Contextos
4. Componentes e telas
5. Responsividade
6. Testes
7. Documentação
8. Publicação

- Os commits registram alterações reais; não foram usados commits vazios.
- A branch de trabalho é `feat/educa-plus`.
- As atividades são acompanhadas no GitHub Projects do repositório.

### Padrão de commits

Seguimos o [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/):

```
<tipo>(<escopo opcional>): <descrição curta no imperativo>
```

Tipos: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `build`, `ci` e `chore`. Referencie o card no rodapé, por exemplo `Refs EDU-30`.

## Uso de Inteligência Artificial

- **Codex:** utilizado na leitura do protótipo, na implementação, na documentação e nos testes.
- **Claude:** utilizado como apoio para ideias e partes da prototipação.

## Publicação

1. Importe o repositório na Vercel.
2. Selecione o framework **Vite** e **Node 24**.
3. Comando de build: `npm run build`. Pasta de saída: `dist`.

Não são necessárias variáveis de ambiente. O `vercel.json` contém o redirecionamento para `index.html`, que mantém as rotas do React Router funcionando ao recarregar a página. O [relatório de entrega](docs/ENTREGA.md) registra se a publicação foi concluída e verificada.

## Equipe

O hackathon prevê quatro integrantes. Nomes e contribuições devem ser preenchidos pela equipe.

| Integrante 
| --- |
| Joao Alexandre
| Pietro
| Nicolas 
| Pedro Vitor 

---

Repositório: https://github.com/Nicolas1xx/educacaodequalidade
