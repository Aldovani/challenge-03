<h1 align="center">Furniro</h1>
<h4 align="center">Uma loja de móveis fictícia</h4>

<div align="center">

  [Tecnologias](#tecnologias)| [Instalação](#instalacao) 


</div>

<img src="./.github/banner.jpg"/>


<div id="Sobre">

 
<div id="tecnologias">


### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### Front-end
- [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)
- [tailwind](https://tailwindcss.com)
- [Typescript](https://www.typescriptlang.org/)
- [Redux](https://redux.js.org/)


</div>

<br/>


## Requisitos

### Funcionalidades

1. **Autenticação de Usuário**:
   - Utilize [Firebase](https://firebase.google.com/docs/auth?hl=pt-br) para autenticação.
   - Permitir autenticação com e-mail, Facebook e Google.

2. **Rotas e Proteção de Rotas**:
   - Use [React Router](https://reactrouter.com/en/main) para criação e proteção de rotas.

3. **Home Page**:
   - Exibir móveis em formato de Carrossel.
   - Recomendação de biblioteca: [Splide](https://splidejs.com/).
   - [Splide for React docs](https://splidejs.com/integration/react-splide/).

4. **API para Produtos**:
   - Crie um arquivo JSON e hospede-o no [Run Mocky](https://designer.mocky.io/) para criar uma API para os produtos.

5. **Página de Produtos Gerais**:
   - Implementar paginação.
   - Botão de ‘Filter’ deve abrir um pop-up com filtros funcionais.

6. **Página de Produto**:
   - Redirecionar usuário para rota específica ao clicar no card de um móvel.
   - Botão ‘Add To Cart’ deve adicionar o produto no carrinho.

7. **Carrinho**:
   - Utilize [Redux](https://redux.js.org/) para gerenciar o estado do carrinho.
   - Possibilidade de adicionar ou remover produtos.
   - Possibilidade de remover todos os produtos ao clicar no ícone de lixeira.

8. **Check Out**:
   - Usuário precisa estar logado para acessar a página de Check Out.
   - Rota de Check Out deve estar protegida.
   - Campos de formulário devem ser validados.
   - Dados de endereço devem ser preenchidos automaticamente via [API do ViaCEP](https://viacep.com.br/).

### Estilização

- Utilize **styled-components ou Tailwind** para estilização.
- A aplicação deve ser responsiva.

### Testes

- Implementar testes unitários com pelo menos 70% de cobertura.

<br/>
<br/>

<div id="instalacao">


### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com),
- [Node.js](https://nodejs.org/en/). 
- [VSCode](https://code.visualstudio.com/)
- [Firebase](https://firebase.google.com/)

### Clonar o código
```Bash

# Clone este repositório
$ git clone https://github.com/aldovani/ibico

```

### 🎲 Antes de rodar a aplicação

é necessário setar as varável de ambiente 

```env

VITE_API_KEY= 
VITE_AUTH_DOMAIN= 
VITE_PROJECT_ID= 
VITE_STORAGE_BUCKET=
VITE_MESSAGING_SENDER_ID= 
VITE_APP_ID=

```

### 💻 Rodando o Front End (web)

```bash

# Vá para a pasta web
$ cd challenge-03

# Instale as dependências
$ npm install

# Execute a base de dados
$ npm run db

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:5173 - acesse <http://localhost:5173>
```

</div>

### Autor
---

<a href="https://aldovani.github.io/portfolio/">
 <img style="border-radius: 50%;" src="https://github.com/aldovani.png" width="100px;" alt="Aldovani image profile"/>
 <br />
 <sub><b>Aldovani</b></sub></a> <a href="https://aldovani.github.io/portfolio/" ></a>


Feito com ❤️ por Aldovani Henrique 👋 Entre em contato!

[![Twitter Badge](https://img.shields.io/badge/-@aldovanih-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/aldovanih)](https://twitter.com/aldovanih) [![Linkedin Badge](https://img.shields.io/badge/-Aldovani-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/aldovani/)](https://www.linkedin.com/in/aldovani/) 
