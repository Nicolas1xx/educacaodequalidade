import type {Subject} from '../types';
export const subjects:Subject[]=[
{id:'mat',name:'Matemática',description:'Números, frações, equações, geometria e raciocínio lógico.',color:'#2563EB',tint:'#EFF6FF'},
{id:'por',name:'Português',description:'Leitura, interpretação de textos, gramática e produção textual.',color:'#6D28D9',tint:'#F5F3FF'},
{id:'cie',name:'Ciências',description:'Corpo humano, ambiente, matéria, energia e o Universo.',color:'#047857',tint:'#ECFDF5'},
{id:'his',name:'História',description:'Do Brasil Colônia ao mundo contemporâneo, com linhas do tempo.',color:'#B45309',tint:'#FFFBEB'}];
export const subjectById=(id:string)=>subjects.find(s=>s.id===id)!;
