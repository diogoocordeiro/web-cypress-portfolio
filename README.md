Projeto de Automação de Testes com CypressVisão GeralEste repositório contém um projeto de automação de testes End-to-End (E2E) desenvolvido com Cypress. Atualmente, o foco principal é a validação de funcionalidades de login, demonstrando a criação de testes robustos e bem estruturados para garantir a autenticação de usuários. Utilizo o padrão de design Page Object Model (POM) para organizar o código de forma modular, reusável e de fácil manutenção. O objetivo é apresentar minhas habilidades em garantia de qualidade de software e automação de testes, utilizando as melhores práticas da ferramenta.Tecnologias UtilizadasCypress: Framework de automação de testes End-to-End.JavaScript / TypeScript: Linguagem de programação.Node.js: Ambiente de execução para JavaScript.npm / Yarn: Gerenciadores de pacotes.Mochawesome: Gerador de relatórios HTML visuais e detalhados.Git: Sistema de controle de versão.Pré-requisitosAntes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:Node.js: Versão 16.x ou superior. Você pode baixá-lo em nodejs.org.npm (vem com o Node.js) ou Yarn (pode ser instalado via npm install -g yarn).Como Clonar o RepositórioPara obter uma cópia local do projeto, execute o seguinte comando no seu terminal:git clone https://github.com/seu-usuario/seu-repositorio-cypress.git
cd seu-repositorio-cypress
(Lembre-se de substituir https://github.com/seu-usuario/seu-repositorio-cypress.git pelo link real do seu repositório no GitHub.)Como Instalar as DependênciasApós clonar o repositório e navegar para a pasta do projeto, instale todas as dependências necessárias:npm install
# OU, se você usa Yarn:
yarn install
Como Executar os TestesVocê pode executar os testes de duas maneiras:1. Modo Interativo (Cypress Open)Para abrir a interface gráfica do Cypress e selecionar os testes a serem executados, use:npx cypress open
Isso abrirá o Test Runner do Cypress, onde você pode navegar pelos seus arquivos de teste e executá-los em tempo real.2. Modo Headless (Via Linha de Comando)Para executar todos os testes em segundo plano (sem interface gráfica) e gerar os relatórios, use:npx cypress run
Este comando é ideal para integração contínua (CI) e para gerar os relatórios do Mochawesome.Relatórios de Testes (Mochawesome)Após a execução dos testes em modo npx cypress run, os relatórios HTML detalhados serão gerados na pasta cypress/results/.Para visualizar o relatório, abra o arquivo .html (ex: mochawesome_mmddyyyy_HHMMss.html ou mochawesome.html) em seu navegador de internet.Estrutura do Projeto.
├── cypress/
│   ├── e2e/              # Arquivos de especificação dos testes
│   │   └── *.cy.js
│   ├── fixtures/         # Dados de teste estáticos
│   ├── support/          # Comandos customizados e funções auxiliares
│   │   ├── commands.js
│   │   ├── utils.js      # Exemplo de arquivo para funções auxiliares
│   │   └── pages/        # Implementações do Page Object Model (POM)
│   │       └── LoginPage.js # Exemplo de Page Object
│   └── results/          # Pasta gerada com relatórios Mochawesome (ignorada pelo Git)
├── node_modules/         # Dependências do projeto (ignorada pelo Git)
├── cypress.config.js     # Configurações do Cypress (para Cypress 10+)
├── package.json          # Lista de dependências e scripts do projeto
├── package-lock.json     # Trava as versões exatas das dependências
└── .gitignore            # Arquivos e pastas a serem ignorados pelo Git
└── README.md             # Este arquivo
ContatoSinta-se à vontade para entrar em contato para discutir este projeto ou outras oportunidades:Nome: Diogo Oliveira CordeiroEmail: diogoocordeiro@gmail.comLinkedIn: Link para o seu perfil do LinkedInTelefone: +55 61 99984-2454 (Opcional, se quiser incluir)
