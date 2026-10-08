import type {Quiz,Question} from '../types';
const q=(prompt:string,options:Question['options'],correct:number,hint:string,explanation:string):Question=>({prompt,options,correct,hint,explanation});
export const quizzes:Quiz[]=[
{id:'fracoes',lessonId:'fracoes',questions:[
q('Qual fração é equivalente a 1/2?',['2/3','3/6','2/5','1/3'],1,'Multiplique os dois termos pelo mesmo número.','1 × 3 = 3 e 2 × 3 = 6. Portanto, 1/2 = 3/6.'),
q('Simplificando 6/8, obtemos:',['3/4','2/3','1/2','6/4'],0,'Procure um divisor comum a 6 e 8.','Dividindo numerador e denominador por 2, temos 3/4.'),
q('Qual fração representa a mesma quantidade que 2/3?',['2/6','3/4','4/6','4/3'],2,'Experimente multiplicar numerador e denominador por 2.','2 × 2 = 4 e 3 × 2 = 6. Logo, 2/3 = 4/6.'),
q('Ana comeu 2 de 4 pedaços iguais de uma pizza. Que parte ela comeu?',['Um quarto','Metade','A pizza inteira','Um terço'],1,'Simplifique a fração 2/4.','2/4 = 1/2. Ana comeu metade da pizza.'),
q('Qual é a forma irredutível de 4/12?',['2/6','4/6','1/4','1/3'],3,'Divida os dois termos pelo maior divisor comum.','O maior divisor comum é 4. Assim, 4/12 = 1/3.') ]},
{id:'interpretacao',lessonId:'interpretacao',questions:[
q('“Lia plantou uma árvore no sábado.” Quando ela plantou?',['Domingo','Sábado','Segunda','Sexta'],1,'A informação está explícita na frase.','O texto diz diretamente que foi no sábado.'),
q('Qual frase expressa uma opinião?',['A muda tem folhas.','A árvore tem dois metros.','Essa é a árvore mais bonita.','Lia regou a muda.'],2,'Procure um julgamento pessoal.','“Mais bonita” expressa uma avaliação subjetiva.'),
q('O que é uma informação explícita?',['Uma informação escrita diretamente','Uma ideia inventada','Uma opinião do leitor','Uma pergunta sem resposta'],0,'Pense no que está visível no texto.','Explícita é a informação apresentada diretamente pelo texto.'),
q('Lia abriu o guarda-chuva e desviou das poças. As pistas sugerem:',['Neve','Calor intenso','Uma festa','Chuva'],3,'Relacione guarda-chuva e poças.','Essas pistas permitem inferir chuva, sem afirmar detalhes não informados.'),
q('A ideia principal de um texto é:',['A palavra mais longa','O assunto central','A última vírgula','O nome do autor'],1,'Ela resume o que é mais importante.','A ideia principal apresenta o assunto central do texto.') ]},
{id:'agua',lessonId:'agua',questions:[
q('A passagem da água líquida para vapor se chama:',['Condensação','Evaporação','Infiltração','Precipitação'],1,'Lembre-se da poça em um dia quente.','Na evaporação a água passa do estado líquido ao gasoso.'),
q('Qual é a principal fonte de energia do ciclo da água?',['Lua','Solo','Sol','Vento'],2,'É a fonte que aquece a superfície.','A energia solar impulsiona a evaporação.'),
q('O vapor resfria e forma gotículas. Isso é:',['Condensação','Evaporação','Escoamento','Infiltração'],0,'Agora o vapor volta ao estado líquido.','Condensação é a passagem do vapor para pequenas gotas líquidas.'),
q('A chuva é um exemplo de:',['Transpiração','Evaporação','Infiltração','Precipitação'],3,'A água está caindo das nuvens.','Precipitação é a queda da água da atmosfera para a superfície.'),
q('O que favorece a infiltração da água?',['Asfalto contínuo','Solo com vegetação','Telhado impermeável','Piso de concreto'],1,'A água precisa penetrar no solo.','O solo com vegetação favorece a infiltração, ao contrário de superfícies impermeáveis.') ]},
{id:'fontes',lessonId:'fontes',questions:[
q('Uma ferramenta antiga é uma fonte:',['Material','Oral','Apenas imaginária','Sem valor histórico'],0,'É um objeto físico.','Objetos e construções são fontes materiais.'),
q('Uma entrevista com um morador é uma fonte:',['Geológica','Oral','Apenas escrita','Sem autoria'],1,'Considere o relato falado.','Depoimentos e entrevistas constituem fontes orais.'),
q('Ao analisar uma carta antiga, devemos investigar:',['Só a cor do papel','Apenas o tamanho','Autoria, data e contexto','Somente a assinatura'],2,'Precisamos entender quem escreveu e por quê.','Autoria, época, destinatário e intenção ajudam a interpretar a carta.'),
q('Por que comparar fontes?',['Para apagar diferenças','Para escolher a mais bonita','Para evitar perguntas','Para conhecer perspectivas diferentes'],3,'Uma única fonte não mostra todas as experiências.','Comparar fontes amplia a investigação e revela diferentes perspectivas.'),
q('Uma fotografia antiga é uma fonte:',['Visual','Somente oral','Sem contexto','Sempre neutra'],0,'Ela registra uma imagem.','Fotografias são fontes visuais e também precisam de análise de contexto.') ]}];
export function gradeQuiz(quiz:Quiz,answers:number[]):number { if(answers.length!==quiz.questions.length || answers.some(a=>!Number.isInteger(a)||a<0||a>3)) throw new Error('Responda todas as questões.'); return quiz.questions.reduce((sum,q,i)=>sum+Number(q.correct===answers[i]),0); }
