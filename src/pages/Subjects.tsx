import {subjects} from '../data/subjects';import {SubjectCard} from '../components/SubjectCard';
export default function Subjects(){return <div className="stack"><p className="muted">Escolha uma disciplina e dê o próximo passo na sua aprendizagem.</p><div className="grid-2">{subjects.map(s=><SubjectCard subject={s} key={s.id}/>)}</div></div>}
