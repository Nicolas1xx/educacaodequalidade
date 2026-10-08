import {describe,it,expect} from 'vitest';
import {quizzes,gradeQuiz} from '../src/data/quizzes';
import {lessons} from '../src/data/lessons';
import {createDemo,createLocal} from '../src/data/progress';
import {readStudent,readA11y,defaultA11y} from '../src/lib/storage';
import {metrics} from '../src/lib/metrics';
describe('Conteúdo educacional',()=>{
 it.each(quizzes)('$id tem cinco questões válidas e respostas corretas',quiz=>{expect(quiz.questions).toHaveLength(5);for(const q of quiz.questions){expect(q.options).toHaveLength(4);expect(new Set(q.options).size).toBe(4);expect(q.explanation.length).toBeGreaterThan(20)}expect(gradeQuiz(quiz,quiz.questions.map(q=>q.correct))).toBe(5)});
 it('mantém integridade entre aulas e quizzes',()=>{for(const l of lessons.filter(l=>l.available)){expect(l.sections.length).toBeGreaterThanOrEqual(3);expect(quizzes.some(q=>q.lessonId===l.id)).toBe(true)}});
 it('corrige uma combinação conhecida com três acertos',()=>expect(gradeQuiz(quizzes[0],[1,0,2,0,0])).toBe(3));
 it.each([[],[-1,0,2,1,3],[1,0,2,1,9],[1,0,2,1,1.5]])('rejeita respostas incompletas ou inválidas %s',answers=>expect(()=>gradeQuiz(quizzes[0],answers)).toThrow());
});
describe('Perfis e armazenamento',()=>{
 it('cria perfil local sem histórico herdado',()=>{const s=createLocal({name:'Bia',grade:'8º ano',interests:['cie']});expect(s.attempts).toEqual([]);expect(s.completed).toEqual([]);expect(s.favorites).toEqual([]);expect(metrics(s)).toEqual({completed:0,quizzes:0,accuracy:0,minutes:0,goals:0})});
 it('calcula indicadores a partir das tentativas',()=>{const m=metrics(createDemo());expect(m.accuracy).toBe(67);expect(m.quizzes).toBe(3);expect(m.completed).toBe(2);expect(m.minutes).toBe(26);expect(m.goals).toBe(67)});
 it('restaurar produz cópias independentes',()=>{const a=createDemo();a.goals[0].done=false;a.attempts[0].answers[0]=0;expect(createDemo().goals[0].done).toBe(true);expect(createDemo().attempts[0].answers[0]).toBe(1)});
 it('recarrega um perfil válido',()=>{const s=createLocal({name:'Caio',grade:'9º ano',interests:[]});expect(readStudent(JSON.stringify(s))).toEqual(s)});
 it.each(['{','null','{}','{"version":2}'])('recupera persistência inválida %s',raw=>expect(readStudent(raw).mode).toBe('demo'));
 it('rejeita pontuação adulterada e aula inexistente',()=>{const s=createDemo();s.attempts[0].score=0;s.completed.push('nao-existe');expect(readStudent(JSON.stringify(s))).toEqual(createDemo())});
 it('valida preferências e fornece defaults',()=>{expect(readA11y('{')).toEqual(defaultA11y);expect(readA11y(JSON.stringify({...defaultA11y,fontScale:'gigante'}))).toEqual(defaultA11y)})
});
