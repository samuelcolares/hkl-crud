<a name="readme-top"></a>

<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="https://camo.githubusercontent.com/2366b34bb903c09617990fb5fff4622f3e941349e846ddb7e73df872a9d21233/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f3733303730332f73637265656e73686f74732f363538313234332f6176656e746f2e676966" alt="Logo" width="400" height="300">
  </a>

<h3 align="center">HKL CRUD</h3>

  <p align="center">
    Uma aplicação simples utilizando envolvendo CRUD de pessoas, filmes e músicas.
    <br />
    <br />
     <a href="https://github.com/samuelcolares/hkl-crud/issues">Reporte um Bug</a>
  </p>
</div>

<details>
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#construído-com">Construído com</a></li>
      </ul>
    </li>
    <li>
      <a href="#clonando-o-repositório">Clonando o Repositório</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#exemplos-de-uso-e-explicações">Exemplos de uso e explicações</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## Sobre o projeto

![project-screenshot-1][header]

A aplicação consistiu em realizar um CRUD (Criar, Ler, Atualizar e Deletar) e se comunicar com uma API mock. O design da aplicação foi livre, permitindo que eu mostrasse minha criatividade e habilidades de design.

<p align="right">(<a href="#readme-top">Voltar ao inicío</a>)</p>

### Construído com

![Static Badge](https://img.shields.io/badge/CORE-8A2BE2)

- React
- TypeScript
- Vite
- Tanstack Router
  <br/><br/>

![Static Badge](https://img.shields.io/badge/UI-0070f0)

- Material UI
  <br/><br/>

![Static Badge](https://img.shields.io/badge/ICONS-1d1d1d)

- Material UI Icons
  <br/><br/>

![Static Badge](https://img.shields.io/badge/STYLING%20AND%20ADITIONAL%20EFFECTS-2f7e74)

- TailwindCSS
- Framer-motion
  <br/><br/>

![Static Badge](https://img.shields.io/badge/FORMS%20AND%20VALIDATION-4171d9)

- React-Hook-Form
- Zod
  <br/><br/>

![Static Badge](https://img.shields.io/badge/API%20MOCK-ee4648)

- json-server
  <br/><br/>

![Static Badge](https://img.shields.io/badge/DATA%20FETCHING-ff4128)

- Day.js
  <br/><br/>

![Static Badge](https://img.shields.io/badge/HTTPS%20LIBRARY-3a2f69)

- AXIOS
  <br/><br/>

<p align="right">(<a href="#readme-top">Voltar ao inicío</a>)</p>

<!-- GETTING STARTED -->

## Clonando o Repositório

Este é um guia dos passos que você precisa fazer para utilizar o projeto na em sua máquina local

### Pré-requisitos

Se você já possuir Node.js instalado em sua máquina, pode pular esse passo, caso contrário, em seu terminal:

- npm
  ```sh
  npm install npm@latest -g
  ```

### Instalação

Em seu terminal:

1. Clone o repositório
   ```sh
   git clone https://github.com/samuelcolares/hkl-crud.git
   ```
2. Abra a pasta do repositório
   ```sh
   cd hkl-crud
   ```
3. Instale os pacotes NPM

   ```sh
   npm install
   ```

4. Se você usa VSCode como seu editor de código, use o comando abaixo para abrir uma janela diretamente do seu terminal:

   ```sh
   code .
   ```

5. Para o projeto funcionar corretamente você vai precisar de duas abas de terminais abertas, uma para a aplicação, outra para o servidor local:
   - Primeiro terminal:
   ```sh
   npm run dev
   ```
   - segundo terminal:
   ```sh
   npm run start:api
   ```

Os exemplos acima foram mostrando como iniciar a aplicação localmente com NPM, mas é claro que você pode usar outros gerenciadores de pacotes como: **PNPM**, **YARN**, **BUN**, mas para evitar problemas, recomendo usar o mesmo gerenciador de pacotes que eu usei para fazer esse projeto

<p align="right">(<a href="#readme-top">Voltar ao inicío</a>)</p>

<!-- USAGE EXAMPLES -->

# O que pode ser feito nessa aplicação?

1.  Cadastrar pessoas usando: Imagem de avatar, nome, email, cpf, telefone, filmes preferidos e músicas preferidas
    - Não permitindo cadastro de emails e/ou cpf e/ou telefone repetidos
2.  Cadastrar filmes usando: título e gênero, já possuindo uma lista com gêneros mais comuns em filmes
3.  Cadastrar músicas usando: nome, gênero e Cantor(a) ou Banda
4.  Editar ou excluir pessoas, filmes ou músicas
5.  Favoritar/Desfavoritar pessoas, filmes ou músicas
    - Para simular as preferências de um usuário o armazenamento dos favoritos fica por conta do localStorage do HTML Web Storage API
6.  Pesquisar por queryparams com as seguintes regras:
    - Pessoas: são filtradas pelo nome
    - Músicas: são filtradas pelo nome da música ou pelo artista/banda
    - Filmes: são filtrados pelo título do filme ou pelo gênero
7.  Bônus: A aplicação já vem em seu banco de dados local com 20 avatares (pelos quais eu agradaceço ao DiceBear), 20 pessoas, 30 filmes e 18 músicas.

⚠️ Atenção: Vai ser comum em alguns locais da aplicação se deparar com carregamentos, eu implementei uma função que simula o atraso gerado esperando a resposta de um servidor, em uma média de três segundos.

## Capturas de tela

### 1. Início (Home page) ( Rota: '/' )

![Página inicial][index]

### 2. Pesquisa (Rota: '/buscar')

![Pesquisa em carregamento][search-loading]
![Pesquisa 1][search-1]
![Pesquisa 2][search-2]

<p align="right">(<a href="#readme-top">Voltar ao inicío</a>)</p>

<!-- ROADMAP -->

## Roadmap

### 1. Início do processo criativo desenhado

### 2. Mãos na massa.

<p align="right">(<a href="#readme-top">Voltar ao inicío</a>)</p>

## Contato

Samuel Colares - samuelcolaresdequino@gmail.com

<p align="right">(<a href="#readme-top">Voltar ao inicío</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-url]: https://linkedin.com/in/samuelcolares
[header]: https://i.imgur.com/9UxdvLI.png
[index]: https://i.imgur.com/X09vkQU.jpeg
[search-1]: https://imgur.com/TyzVjhF.jpeg
[search-2]: https://i.imgur.com/XwetjD3.jpeg
[search-loading]: https://i.imgur.com/Lkns5vE.jpeg
