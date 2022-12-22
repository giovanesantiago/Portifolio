

export interface IProjetos {
    id: number;
    img: string;
    titulo: string;
    descricao: string;
    tecnologia: string;
    linkGithub: string;
}

export const projetos: IProjetos[] = [
    {id: 19, img: "./assets/projetos/checkList.png", titulo: "CheckList Royal", descricao: "Facilitar o controle e gestão de atividades a serem realizadas antes da entrega de motos" ,tecnologia: "Java | TypeScript | Spring | Angular", linkGithub: "https://github.com/giovanesantiago/app-checklist-entregas" },
    {id: 18, img: "./assets/projetos/agendaGioDev.png", titulo: "Agenda GioDev", descricao: "Simulação de agenda telefonica,  É so uma silumação, não tem banco de dados." ,tecnologia: "Java | TypeScript | Spring | Angular | PostgreSQL", linkGithub: "https://github.com/giovanesantiago/Agenda-GioDev" },
    {id: 18, img: "./assets/projetos/botRoyal.png", titulo: "JBot Royal", descricao: "Automação de envio de mensagem no whatsapp para varios contatos com Selenium" ,tecnologia: "Java | Selenium | Swing GUI", linkGithub: "https://github.com/giovanesantiago/BotRoyal" },
    {id: 17, img: "./assets/projetos/JavinhaBank.png", titulo: "Javinha Bank", descricao: "Praticando orientação a objetos com Java e testes Unitarios com JUni, simaludor de um Banco " ,tecnologia: "Java | JUnit", linkGithub: "https://github.com/giovanesantiago/Banco-Digital" },
    {id: 16, img: "./assets/projetos/populacao1.png", titulo: "PopulacaoNE", descricao: "Tratamento de dados com Collections Map, atividade pratica do Bootcamp Quebec " ,tecnologia: "Java", linkGithub: "https://github.com/giovanesantiago/PopulacaoNE" },
    {id: 15, img: "./assets/projetos/calculaTemp.png", titulo: "Media Temperatura", descricao: "Calculadora de Media de temperatura semestral, atividade pratica do Bootcamp Quebec " ,tecnologia: "Java", linkGithub: "https://github.com/giovanesantiago/CalculadoraDeTemperaturaSemestral" },
    {id: 14, img: "./assets/projetos/javaDetetive.png", titulo: "Detetive Javinha", descricao: "Script Java Desvendando um crime, atividade pratica do Bootcamp Quebec " ,tecnologia: "Java", linkGithub: "https://github.com/giovanesantiago/DetetiveJavinha" },
    {id: 13, img: "./assets/projetos/eCommer.png", titulo: "Proway Computers", descricao: "Projeto para curso da capgemini. Front-end de um e-commerce para venda de acessorios de tecnologia. " ,tecnologia: "HTML5 | TypeScript | AngularJS", linkGithub: "https://github.com/giovanesantiago/e-commerce-PROWAY" },
    {id: 12, img: "./assets/projetos/gioTarefas.png", titulo: "App De Tarefas", descricao: "Projeto para curso da capgemini. Aplicação para o gerenciamento de tarefas no dia a dia. " ,tecnologia: "Java | Mysql", linkGithub: "https://github.com/giovanesantiago/AppDeTarefas" },
    {id: 11, img: "./assets/projetos/formRoyal.png", titulo: "Formulario EFENAI Royal", descricao: "Formulario com entrada de dados para analise de credito no financiamento" ,tecnologia: "HTML5 | CSS3 | Javascript | ReactJS", linkGithub: "https://github.com/giovanesantiago/FormularioRoyal" },
    {id: 10, img: "./assets/projetos/cartaoRoyal.png", titulo: "Cartão Virtual Royal", descricao: "Cartão virtual para divulgação de contato, redes socias e localização usada em Qr-code e tag NFC." ,tecnologia: "HTML5 | CSS3 | Bootstrap", linkGithub: "https://github.com/giovanesantiago/Cart-o-Virtual-Royal-Gio" },
    {id: 9, img: "./assets/projetos/pagLeads3.png", titulo: "Captação de Leads V3", descricao: "Formulario simples para captacão de leads nas redes socias, enviando dados para e-mail." ,tecnologia: "HTML5 | CSS3 | Javascript | ReactJS", linkGithub: "https://github.com/giovanesantiago/PagLeads-ReactV3" },
    {id: 8, img: "./assets/projetos/jogoDino.png", titulo: "Jogo do Google", descricao: "Recriando jogo do Dinossauro do Google Chrome quando esta sem internet." ,tecnologia: "HTML5 | CSS3 | Javascript ", linkGithub: "https://github.com/giovanesantiago/Projeto-Academico-Dino-Google" },
    // Pagina Leads 1
    {id: 7, img: "./assets/projetos/pagLeads1.png", titulo: "Captação de Leads", descricao: "Formulario simples para captacão de leads na divulgação em redes socias ." ,tecnologia: "HTML5 | CSS3 | Javascript | Bootstrap", linkGithub: "https://github.com/giovanesantiago/PagLeads" },
    // Formulario Honda
    {id: 6, img: "./assets/projetos/formHonda.png", titulo: "Formulario Consorcio", descricao: "Site academico. Simulção de formulario para cadastro no consorcio honda." ,tecnologia: "HTML5 | CSS3 | Javascript", linkGithub: "https://github.com/giovanesantiago/projeto-web-honda" },
    // Jogo da Cobrinha
    {id: 5, img: "./assets/projetos/jogoDaCobrinha.png", titulo: "Jogo da Cobrinha", descricao: "Site academico. Recriando o jogo da cobrinha somente com Javascript em uma aplicação web. " ,tecnologia: "HTML5 | CSS3 | Javascript", linkGithub: "https://github.com/giovanesantiago/Projetos-curso_Front-End/tree/master/Jogo%20da%20cobrinha" },
    // Clone Insta
    {id: 4, img: "./assets/projetos/cloneInsta.png", titulo: "Clone Login Instagram", descricao: "Site academico, Pagina Login de uma rede social, simulando uma união entre Instagram e Tinder. " ,tecnologia: "HTML5 | CSS3 ", linkGithub: "https://github.com/giovanesantiago/Projetos-curso_Front-End/tree/master/Pag-insta" },
    // Clone netflix
    {id: 3, img: "./assets/projetos/cloneNetflix.png", titulo: "Clone Netflix", descricao: "Site academico. Pagina incial de uma plataforma de games do PS3 com a cara da netflix. " ,tecnologia: "HTML5 | CSS3 | Javascript | Jquery ", linkGithub: "https://github.com/giovanesantiago/Projetos-curso_Front-End/tree/master/pag-netflix" },
    // Verificador de Idade
    {id: 2, img: "./assets/projetos/verificadorDeIdade.png", titulo: "Verifique sua idade", descricao: "Site academico. Simulando uma aplicação que calcula idade recebendo o ano de nascimento. " ,tecnologia: "HTML5 | CSS3 | Javascript ", linkGithub: "https://github.com/giovanesantiago/Primeiros-projetos/tree/main/Primeiro%20projeto%20com%20JS" },
    // Primeiro Projeto
    {id: 1, img: "./assets/projetos/siteAndroid.png", titulo: "Site de Noticias", descricao: "Site academico, simulando um site de noticias para divulgação de conteudo de tecnologia. " ,tecnologia: "HTML5 | CSS3 ", linkGithub: "https://github.com/giovanesantiago/Primeiros-projetos/tree/main/Primeiro%20Projeto" }
    

]