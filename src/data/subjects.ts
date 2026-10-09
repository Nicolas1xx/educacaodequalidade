import type {Subject} from '../types';
export const subjects:Subject[]=[
{id:'mat',name:'Matemática',description:'Números, frações, equações, geometria e raciocínio lógico.',color:'#1d44b5',tint:'#e8eefc'},
{id:'por',name:'Português',description:'Leitura, interpretação de textos, gramática e produção textual.',color:'#7a2e8e',tint:'#f3e8f7'},
{id:'cie',name:'Ciências',description:'Corpo humano, ambiente, matéria, energia e o Universo.',color:'#1b6b44',tint:'#e6f3ec'},
{id:'his',name:'História',description:'Do Brasil Colônia ao mundo contemporâneo, com linhas do tempo.',color:'#8f4712',tint:'#faeee2'}];
export const subjectById=(id:string)=>subjects.find(s=>s.id===id)!;
