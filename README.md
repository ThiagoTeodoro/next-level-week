# Projeto da Next Level Week Rocketseat

Atividades da Next Level Week oferecida pela Rocketseat


## Aula 01.

Nexta semana a proposta é um pouco diferente do que já estamos acostumados, pois desta vez vamos trabalhar com Typescript.

#### Typescript

O Typescript é uma forma de atribuir tipagem ao código Javascript, ele não fará com que suas aplicações rodem o client-side Typescript, o que quer dizer, que essa funcionalidade vai existir apenas no ambiente de desenvolvimento. Com ele podemos utilizar uma funcionalidade que para mim é uma das coisas mais interessantes, o intelisense do VSCODE.

##### Typescript + NodeJS

###### O que muda?

Bom para criar projeto com NojeJS + Typescript, algumas adaptações são necessárias, a começar pelas dependências.... vamos precisar usar as seguintes dependências de desenvolvimento : 

**_Dependências de Desenvolvimento_**

1. typescript
2. ts-node
3. ts-node-dev

> Para que o projeto seja entendido pelo NodeJS, você precisa na raiz do projeto, criar o seu arquivo de tipos e refereências do Typescript, e você faz isso indo na raiz do projeto (mesmo local do package.json) e executando ``` npx typescript --init ```. Lembrando que agora que estamos usando Typescript, todas as extenções de arquivo passarão a ser (file).ts. 

**Quando estamos trabalhando com Typescript, nós vamos sempre ter que verificar se o arquivo de declaração de tipos, está instalado por padrão, isso nem sempre vem nas bibliotecas mas o VSCODE consegui te informar quando não tem e como instalar sempre que não encontrar. Ele avisa isso colocando 3 pontinhos na importação que você está utilizando. Lá virá o código de instalação para a declaração de tipos... E também você vai perceber por que o intelisense do VSCODE não vai se ativar para aquela biblioteca. Essas definições são instaladas geralmente como Dependências de desenvolvimento, com o -D no final.**

Para iniciar o projeto nós usamos ``` npx  ts-node (caminho do arquivo principal) ```. Mas para funcionar com o live-reload, nós vamos usar o pacote ts-node-dev, por isso o comando de inicialização vai ser na verdade : ``` npx  ts-node-dev (caminho do arquivo principal) ```

##### Typescript + ReactJS

###### O que muda?

Aqui, basicamente, o que vai mudar é a criação do projeto que será feita com ``` npx create-react-app (nome da aplicacao) --template=typescript ```
Para executar, é a mesma coisa, npm start.
