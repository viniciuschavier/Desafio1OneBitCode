const puppeteer = require('puppeteer');
const rl = require('readline-sync');

async function start(){
  //Inicio da quantidade de aulas a ser marcada
  let inicio = 1;
  
  //URL da aula
  let url = rl.question('Insira a URL da aula que deseja comecar a marcar como concluida: ');

  //Fim da quantidade de aulas a ser marcada
  let fim = Number(rl.question('Insira a quantidade de aulas a ser marcadas a partir da url inserida: '));

  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  //Acessa a página de login
  await page.goto('https://comunidade.onebitcode.com/users/sign_in?post_login_redirect=https%3A%2F%2Fcomunidade.onebitcode.com%2Ffeed#email');

  try {
    console.log("\nIniciando login")
    const email = rl.question("Insira o email: ");
    const senha = rl.question("Insira a senha: ");
    
    //Insere o email informado
    await page.type('[name="user[email]"]', email);

    //Insere a senha informada
    await page.type('[name="user[password]"]', senha); 

    //Faz o submit do login
    await page.click('[name="commit"]');

    //Espera a página de navegação ser carregada
    await page.waitForNavigation({ timeout: 10000 });
    console.log('Login realizado com sucesso!');

  } catch{
    console.log('\nErro ao fazer login. Verifique suas credenciais e tente novamente.\nAplicação encerrada.\n');
    await browser.close();
    return;
  }

  //Acessa a URL da aula
  console.log('Acessando URL da aula')
  await page.goto(url);

  while(inicio <= fim){
    try{
      setTimeout(async() => {
        //Espera o botão de 'concluir aula' ficar disponível e clica no botão com delay de 5 segundos
        await page.locator('button[type="submit"]').click();
      }, 5000)

      //Espera a página ser carregada
      await page.waitForNavigation({ timeout: 10000 });

      console.log(`Aula ${inicio} concluida com sucesso!`);
      
      //Incrementa +1 nas aulas marcadas
      inicio++;

    }catch{
      //Em caso de erro recarrega a página
      console.log("Erro ao concluir aula. Tentando novamente...");
      await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
    }
  }

  console.log('Aulas concluidas com sucesso!');

  await browser.close();
}

start();