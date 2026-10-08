import type {Goal} from '../types';
export const createGoals=():Goal[]=>[{id:'read',title:'Estudar uma aula com atenção',done:false},{id:'quiz',title:'Praticar com um quiz',done:false},{id:'review',title:'Revisar o que aprendi',done:false}];
export const demoGoals=createGoals().map((g,i)=>({...g,done:i<2}));
