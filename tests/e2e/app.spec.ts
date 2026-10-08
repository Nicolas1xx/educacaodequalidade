import {test,expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
const routes=['/','/cadastro','/app','/app/disciplinas','/app/biblioteca','/app/aula/fracoes','/app/quiz/fracoes','/app/quiz/fracoes/resultado','/app/progresso','/app/perfil'];
test('novo perfil → aula → quiz → resultado → progresso → recarga',async({page})=>{
 await page.goto('/cadastro');await page.getByRole('button',{name:'Começar a estudar'}).click();await expect(page.getByText('Digite pelo menos 2 caracteres.',{exact:false})).toBeVisible();
 await page.getByLabel('Como você se chama?').fill('Bruna');await page.getByLabel('Ano escolar',{exact:true}).selectOption('8º ano');await page.getByRole('button',{name:'Ciências',exact:true}).click();await page.getByRole('button',{name:'Começar a estudar'}).click();await expect(page.getByRole('heading',{name:'Olá, Bruna! Bora aprender hoje?'})).toBeVisible();
 await page.goto('/app/progresso');await expect(page.getByRole('heading',{name:'Sua evolução começa com o primeiro quiz'})).toBeVisible();
 await page.goto('/app/aula/fracoes');await page.getByRole('button',{name:'Concluir aula',exact:true}).click();await expect(page.getByRole('button',{name:'Aula concluída',exact:true})).toBeDisabled();await page.getByRole('link',{name:'Iniciar quiz'}).click();
 await page.getByRole('button',{name:'Ir para questão 5',exact:true}).click();await page.getByRole('button',{name:'Enviar respostas'}).click();await expect(page.getByRole('alert')).toContainText('Faltam 5 questões');
 await page.getByRole('button',{name:'Ir para questão 1',exact:true}).click();await page.getByRole('button',{name:'Preciso de uma dica'}).click();await expect(page.getByRole('status')).toContainText('Multiplique');
 for(const [i,answer] of [1,0,2,1,3].entries()){await page.getByRole('radio').nth(answer).check();if(i<4)await page.getByRole('button',{name:'Próxima'}).click()}
 await page.getByRole('button',{name:'Enviar respostas'}).click();await expect(page.getByRole('heading',{name:'5 de 5 respostas corretas'})).toBeVisible();await expect(page.getByText('Correta',{exact:false})).toHaveCount(6);
 await page.reload();await expect(page.getByRole('heading',{name:'5 de 5 respostas corretas'})).toBeVisible();await page.getByRole('link',{name:'Ver progresso'}).click();await expect(page.locator('tbody tr')).toHaveCount(1);await expect(page.locator('tbody')).toContainText('100%');
 await page.goto('/app/quiz/fracoes');await expect(page.getByRole('radio').first()).not.toBeChecked();await page.goto('/app');await page.getByLabel('Estudar uma aula com atenção').check();await page.reload();await expect(page.getByLabel('Estudar uma aula com atenção')).toBeChecked();
});
test('pesquisa, filtros, favorito e modal com foco',async({page})=>{
 await page.goto('/app/disciplinas');await page.getByRole('link',{name:'Ver conteúdos'}).first().click();await expect(page).toHaveURL(/materia=mat/);await expect(page.getByRole('heading',{name:'Frações equivalentes',exact:true})).toBeVisible();
 await page.getByRole('searchbox',{name:'Pesquisar aulas'}).fill('fracoes');await expect(page.getByRole('status')).toContainText('1 aula encontrada');await page.getByRole('button',{name:'Favoritar Frações equivalentes'}).click();await page.getByRole('button',{name:'Favoritos',exact:true}).click();await expect(page.getByRole('heading',{name:'Nenhuma aula por aqui'})).toBeVisible();await page.getByRole('button',{name:'Limpar filtros'}).click();
 await page.getByRole('button',{name:'Ver disponibilidade'}).first().click();await expect(page.getByRole('dialog')).toBeVisible();await expect(page.getByRole('button',{name:'Fechar',exact:true})).toBeFocused();await page.keyboard.press('Escape');await expect(page.getByRole('dialog')).toHaveCount(0);await expect(page.getByRole('button',{name:'Ver disponibilidade'}).first()).toBeFocused();
 await page.getByRole('button',{name:'Favoritar Frações equivalentes'}).click();await page.reload();await expect(page.getByRole('button',{name:'Favoritar Frações equivalentes'})).toHaveAttribute('aria-pressed','true');
});
test('editar perfil, acessibilidade persistente e restauração confirmada',async({page})=>{
 await page.goto('/app/perfil');await page.getByLabel('Como você se chama?').fill('Lucas');await page.getByRole('button',{name:'Salvar perfil',exact:true}).click();await page.getByRole('button',{name:'Extra',exact:true}).click();await page.getByRole('switch',{name:'Alto contraste',exact:true}).click();await page.getByRole('switch',{name:'Reduzir animações',exact:true}).click();await page.getByRole('switch',{name:'Ampliar espaçamento',exact:true}).click();await page.reload();await expect(page.locator('html')).toHaveClass(/hc/);await expect(page.locator('html')).toHaveClass(/reduce-motion/);await expect(page.locator('html')).toHaveCSS('font-size','20px');await expect(page.getByLabel('Como você se chama?')).toHaveValue('Lucas');
 await page.getByRole('button',{name:'Restaurar dados demonstrativos'}).click();await page.getByRole('button',{name:'Cancelar',exact:true}).click();await expect(page.getByLabel('Como você se chama?')).toHaveValue('Lucas');await page.getByRole('button',{name:'Restaurar dados demonstrativos'}).click();await page.getByRole('button',{name:'Confirmar restauração'}).click();await expect(page.getByLabel('Como você se chama?')).toHaveValue('Ana Luiza');await page.getByRole('button',{name:'Restaurar configurações'}).click();await expect(page.locator('html')).not.toHaveClass(/hc/);
});
for(const width of [1440,768,390])test(`dez rotas e responsividade em ${width}px`,async({page})=>{
 await page.setViewportSize({width,height:1000});const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 for(const route of routes){await page.goto(route);await expect(page.locator('main')).toBeVisible();await expect(page.locator('h1').first()).toBeVisible();await expect.poll(()=>page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBe(true);await page.screenshot({path:`test-results/screens/${width}-${route.replaceAll('/','_')||'landing'}.png`,fullPage:true});}
 expect(errors).toEqual([]);
});
test('WCAG automatizado nas dez rotas e modo alto contraste',async({page})=>{
 for(const route of routes){await page.goto(route);await expect(page.locator('h1').first()).toBeVisible();const audit=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();expect(audit.violations,`${route}: ${JSON.stringify(audit.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)})))}`).toEqual([])}
 await page.goto('/app/perfil');await page.getByRole('switch',{name:'Alto contraste',exact:true}).click();const audit=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();expect(audit.violations).toEqual([]);
});
test('storage corrompido e indisponível não quebra a navegação',async({page})=>{
 await page.addInitScript(()=>localStorage.setItem('educa.student.v1','{'));await page.goto('/app');await expect(page.getByRole('heading',{name:'Olá, Ana! Bora aprender hoje?'})).toBeVisible();
 await page.addInitScript(()=>{Storage.prototype.setItem=()=>{throw new DOMException('Quota','QuotaExceededError')}});await page.reload();await expect(page.getByRole('alert')).toContainText('Não foi possível salvar');
});
test('rotas inválidas e resultado sem tentativa',async({page})=>{
 await page.goto('/app/aula/inexistente');await expect(page.getByRole('heading',{name:'Aula indisponível'})).toBeVisible();await page.goto('/app/quiz/inexistente');await expect(page.getByRole('heading',{name:'Quiz não encontrado'})).toBeVisible();await page.goto('/app/quiz/fontes/resultado');await expect(page.getByRole('heading',{name:'Seu resultado ainda não chegou'})).toBeVisible();
});
