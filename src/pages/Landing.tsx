import {ArrowRight,Check,Type,Contrast,Keyboard,Smartphone,Flame} from 'lucide-react';
import {Action,Card,ProgressBar,Button,Badge} from '../components/ui/Primitives';
import {subjects} from '../data/subjects';
import {SubjectCard} from '../components/SubjectCard';
import {useA11y} from '../app/providers/A11yProvider';

const benefits=[
  {title:'Gratuito para sempre',text:'Todo o conteúdo é aberto. Sem assinatura, sem anúncios e sem pegadinhas.'},
  {title:'Conteúdo organizado',text:'Aulas por disciplina e ano escolar, do 6º ano à 3ª série do Ensino Médio.'},
  {title:'Quizzes com correção',text:'Pratique e entenda cada erro com explicações passo a passo.'},
  {title:'Metas e progresso',text:'Defina metas semanais e acompanhe sua evolução em gráficos simples.'}
];

const a11yFeatures=[
  {Icon:Type,title:'Tamanho da fonte',text:'Três níveis de texto, aplicados em todas as telas.'},
  {Icon:Contrast,title:'Alto contraste',text:'Preto, branco e amarelo, com bordas visíveis.'},
  {Icon:Keyboard,title:'Navegação por teclado',text:'Foco visível e atalho para pular ao conteúdo.'},
  {Icon:Smartphone,title:'Feito para celular',text:'Leve, responsivo e com áreas de toque confortáveis.'}
];

const fontLabel={md:'Padrão',lg:'Grande',xl:'Extra'} as const;

export default function Landing(){
  const {settings,update}=useA11y();
  return <>
    <section className="hero"><div className="container hero-inner">
      <div>
        <p className="eyebrow">Plataforma gratuita · alinhada ao ODS 4 da ONU</p>
        <h1>Aprender é para<br/><span className="marca">Todos.</span></h1>
        <p className="hero-copy">Conteúdos organizados, quizzes com correção comentada e acompanhamento do seu progresso. Tudo gratuito e acessível para estudantes do Ensino Fundamental II e do Ensino Médio.</p>
        <div className="row actions"><Action to="/cadastro">Começar agora <ArrowRight size={18}/></Action><a className="btn secondary" href="#disciplinas">Ver disciplinas</a></div>
        <div className="hero-checks small">{['Sem e-mail ou CPF','Funciona no celular','Ajustes de acessibilidade'].map(t=><span key={t}><Check size={16} className="success"/>{t}</span>)}</div>
      </div>
      <div className="hero-preview" aria-label="Prévia com dados demonstrativos">
        <Card className="preview-goals">
          <div className="between"><div><small className="muted">Meta da semana</small><h3>Quase lá, Ana!</h3></div><Badge><Flame size={15}/>5 dias</Badge></div>
          <div className="stack">{subjects.slice(0,3).map((s,i)=><ProgressBar key={s.id} label={s.name} value={[72,58,41][i]} color={s.color}/>)}</div>
        </Card>
        <Card className="preview-quiz">
          <div className="between"><Badge>Quiz · Frações</Badge><small className="muted">2 de 5</small></div>
          <h4>Simplificando 6/8, obtemos:</h4>
          <div className="preview-option selected"><b>A</b>3/4<Check size={18}/></div>
          <div className="preview-option"><b>B</b>2/3</div>
        </Card>
        <small className="preview-caption muted">Prévia ilustrativa · dados fictícios</small>
      </div>
    </div></section>

    <section id="beneficios" className="landing-section white-section"><div className="container">
      <div className="section-heading"><p className="eyebrow">Por que o Educa+</p><h2>Estudar bem não deveria depender de quanto você pode pagar</h2><p className="muted">Reunimos o essencial em um só lugar, com linguagem clara e organizado por ano escolar.</p></div>
      <div className="linhas">{benefits.map(({title,text})=><div className="linha" key={title}><h3>{title}</h3><p>{text}</p></div>)}</div>
    </div></section>

    <section id="disciplinas" className="landing-section"><div className="container">
      <div className="section-heading"><p className="eyebrow">Disciplinas</p><h2>Comece pelas matérias que mais caem nas provas</h2><p className="muted">Aulas curtas, exemplos do dia a dia e quizzes ao final de cada conteúdo.</p></div>
      <div className="grid-4">{subjects.map(s=><SubjectCard key={s.id} subject={s} publicView/>)}</div>
    </div></section>

    <section id="acessibilidade" className="landing-section white-section"><div className="container grid-2 a11y-section">
      <div>
        <p className="eyebrow">Acessibilidade</p>
        <h2>Uma plataforma que se adapta a você</h2>
        <p className="muted">Ajuste a experiência do seu jeito, a qualquer momento, direto no seu perfil. As preferências ficam salvas neste navegador.</p>
        <ul className="a11y-list">{a11yFeatures.map(({Icon,title,text})=><li key={title}><Icon size={22}/><div><strong>{title}</strong><p className="small">{text}</p></div></li>)}</ul>
      </div>
      <Card className="a11y-try">
        <h3>Experimente agora</h3>
        <p className="muted small">Os ajustes valem para esta página e para toda a plataforma.</p>
        <div className="actions">
          <Button variant="secondary" aria-pressed={settings.highContrast} onClick={()=>update({highContrast:!settings.highContrast})}><Contrast size={20}/>{settings.highContrast?'Desativar alto contraste':'Ativar alto contraste'}</Button>
          <Button variant="secondary" onClick={()=>update({fontScale:settings.fontScale==='md'?'lg':settings.fontScale==='lg'?'xl':'md'})}><Type size={20}/>Tamanho do texto: {fontLabel[settings.fontScale]}</Button>
        </div>
      </Card>
    </div></section>

    <section id="ods" className="landing-section"><div className="container ods">
      <div className="ods-symbol" role="img" aria-label="Símbolo do ODS 4, Educação de Qualidade"><strong>4</strong><span>EDUCAÇÃO DE<br/>QUALIDADE</span></div>
      <div>
        <p className="eyebrow">Objetivo de Desenvolvimento Sustentável 4 · ONU</p>
        <h2>Educação inclusiva, equitativa e de qualidade</h2>
        <p className="muted">O Educa+ nasceu para contribuir com o ODS 4 da Agenda 2030: ampliar o acesso gratuito a materiais de estudo e promover oportunidades de aprendizagem para todos os estudantes, independentemente de onde vivem ou de suas necessidades.</p>
        <div className="row"><Badge>Acesso gratuito</Badge><Badge>Inclusão</Badge><Badge>Aprendizagem ao longo da vida</Badge></div>
      </div>
    </div></section>
  </>;
}
