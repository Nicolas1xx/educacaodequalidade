export type SubjectId = 'mat' | 'por' | 'cie' | 'his';
export interface Student { name:string; grade:string; interests:SubjectId[] }
export interface Subject { id:SubjectId; name:string; description:string; color:string; tint:string }
export interface LessonSection { title:string; text:string; example:string }
export interface Lesson { id:string; subject:SubjectId; title:string; grade:string; minutes:number; available:boolean; objectives:string[]; sections:LessonSection[] }
export interface Question { prompt:string; options:[string,string,string,string]; correct:number; hint:string; explanation:string }
export interface Quiz { id:string; lessonId:string; questions:Question[] }
export interface Attempt { id:string; quizId:string; answers:number[]; score:number; date:string }
export interface Goal { id:string; title:string; done:boolean }
export interface Activity { id:string; text:string; date:string }
export interface A11y { fontScale:'md'|'lg'|'xl'; highContrast:boolean; reduceMotion:boolean; wideSpacing:boolean }
export interface StudentState { version:1; mode:'demo'|'local'; student:Student; completed:string[]; favorites:string[]; started:string[]; attempts:Attempt[]; goals:Goal[]; activities:Activity[] }
