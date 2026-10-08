# Requisitos e histórias

## Funcionais

- RF01 — **Criar perfil local**: Nome de 2 a 80 caracteres e ano válido; iniciar sem histórico.
- RF02 — **Editar perfil**: Nome e ano reaparecem após recarga.
- RF03 — **Explorar demonstração**: Ana identificada como fictícia, com gráficos preenchidos.
- RF04 — **Restaurar demonstração**: Confirmação substitui o perfil e preserva acessibilidade.
- RF05 — **Navegar por disciplinas**: Ver conteúdos aplica materia na biblioteca.
- RF06 — **Pesquisar aulas**: Busca sem distinguir acentos ou maiúsculas e estado vazio.
- RF07 — **Favoritar aulas**: Alternar favorito e persistir ao recarregar.
- RF08 — **Estudar aula**: Objetivos, três seções, exemplos, sumário e conclusão única.
- RF09 — **Responder quiz**: Cinco questões, quatro alternativas, dica e navegação livre.
- RF10 — **Corrigir quiz**: Bloquear envio incompleto e calcular acertos de 0 a 5.
- RF11 — **Consultar resultado**: Exibir percentual e explicação de todas as questões.
- RF12 — **Acompanhar progresso**: Atualizar gráfico e histórico após cada tentativa.
- RF13 — **Marcar metas**: Checkboxes atualizam percentual e persistem.
- RF14 — **Personalizar interface**: Fonte, contraste, movimento e espaçamento globais.

## Não funcionais

- RNF01 — **Tipagem**: TypeScript com strict e interfaces dos dados.
- RNF02 — **Arquitetura**: Páginas, componentes, contextos, dados e funções puras separados.
- RNF03 — **Sem servidor**: Nenhum backend, banco ou autenticação real.
- RNF04 — **Persistência**: Chaves versionadas e validação Zod; falha de gravação visível.
- RNF05 — **Responsividade**: Sem overflow de página em 1440, 768 e 390 px.
- RNF06 — **Teclado**: Elementos nativos, foco visível e skip link.
- RNF07 — **Contraste**: Tokens do PDF e ajuste pontual para texto sobre azul claro.
- RNF08 — **Movimento**: Respeitar prefers-reduced-motion e preferência local.
- RNF09 — **Privacidade**: Nome/apelido, ano e interesses; sem e-mail ou CPF.
- RNF10 — **Desempenho**: Rotas lazy e fonte Inter local; dados sem requisições.
- RNF11 — **Integridade**: Pontuação validada, IDs conhecidos e completude de quizzes.
- RNF12 — **Deploy**: SPA com fallback de rotas e build de produção.

## Histórias de usuário e aceitação

### US01 — Criar perfil local
Como estudante, quero criar perfil local para organizar e acompanhar minha aprendizagem.

Critério de aceitação: Nome de 2 a 80 caracteres e ano válido; iniciar sem histórico.

### US02 — Editar perfil
Como estudante, quero editar perfil para organizar e acompanhar minha aprendizagem.

Critério de aceitação: Nome e ano reaparecem após recarga.

### US03 — Explorar demonstração
Como estudante, quero explorar demonstração para organizar e acompanhar minha aprendizagem.

Critério de aceitação: Ana identificada como fictícia, com gráficos preenchidos.

### US04 — Restaurar demonstração
Como estudante, quero restaurar demonstração para organizar e acompanhar minha aprendizagem.

Critério de aceitação: Confirmação substitui o perfil e preserva acessibilidade.

### US05 — Navegar por disciplinas
Como estudante, quero navegar por disciplinas para organizar e acompanhar minha aprendizagem.

Critério de aceitação: Ver conteúdos aplica materia na biblioteca.

### US06 — Pesquisar aulas
Como estudante, quero pesquisar aulas para organizar e acompanhar minha aprendizagem.

Critério de aceitação: Busca sem distinguir acentos ou maiúsculas e estado vazio.

### US07 — Favoritar aulas
Como estudante, quero favoritar aulas para organizar e acompanhar minha aprendizagem.

Critério de aceitação: Alternar favorito e persistir ao recarregar.

### US08 — Estudar aula
Como estudante, quero estudar aula para organizar e acompanhar minha aprendizagem.

Critério de aceitação: Objetivos, três seções, exemplos, sumário e conclusão única.

### US09 — Responder quiz
Como estudante, quero responder quiz para organizar e acompanhar minha aprendizagem.

Critério de aceitação: Cinco questões, quatro alternativas, dica e navegação livre.

### US10 — Corrigir quiz
Como estudante, quero corrigir quiz para organizar e acompanhar minha aprendizagem.

Critério de aceitação: Bloquear envio incompleto e calcular acertos de 0 a 5.

### US11 — Consultar resultado
Como estudante, quero consultar resultado para organizar e acompanhar minha aprendizagem.

Critério de aceitação: Exibir percentual e explicação de todas as questões.

### US12 — Acompanhar progresso
Como estudante, quero acompanhar progresso para organizar e acompanhar minha aprendizagem.

Critério de aceitação: Atualizar gráfico e histórico após cada tentativa.

### US13 — Marcar metas
Como estudante, quero marcar metas para organizar e acompanhar minha aprendizagem.

Critério de aceitação: Checkboxes atualizam percentual e persistem.

### US14 — Personalizar interface
Como estudante, quero personalizar interface para organizar e acompanhar minha aprendizagem.

Critério de aceitação: Fonte, contraste, movimento e espaçamento globais.
