# PetCare 🐾

PetCare é uma aplicação web desenvolvida com React e Vite, com o objetivo de auxiliar no gerenciamento de cuidados com animais de estimação. O projeto está em fase inicial de desenvolvimento e serve como base para futuras funcionalidades relacionadas à saúde e bem-estar de pets.

## Objetivo do Projeto 🎯

O objetivo principal é demonstrar conhecimentos em React, consumo de APIs públicas e privadas, gerenciamento de autenticação com Context API, e proteção de rotas com `react-router-dom`. A aplicação também utiliza a API [Dog CEO](https://dog.ceo/dog-api) para obter imagens aleatórias de cachorros.

## Demonstração 📸

### Página Inicial - PetCare 🐾
![Página Home](../public/images-github/home.png)

### Página de Login 👤
![Página de Login](../public/images-github/login.png)

### Página Dashboard - Privada 🐶
![Página Dashboard - Privada](../public/images-github/dashboard.png)

## Tecnologias Utilizadas ⚙️

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Context API](https://reactjs.org/docs/context.html)

## Funcionalidades 🛠️

- Tela de login | `axios`, `react-router-dom`, `useContext`.
- Proteção de rotas `react-router-dom`, componente `PrivateRoute`.
- Home pública com dados dinâmicos | `axios`, `useEffect`, `useState`.
- Dashboard com dados protegidos | `axios`, `useContext`, `useEffect`.
- Imagens de cachorros com API externa | [Dog CEO API](https://dog.ceo/dog-api).

## Como Rodar o Projeto 🔧

### 1. Clone o repositório

```bash
git clone https://github.com/di0gosilva/PetCare.git
```

### 2. Navegue até a pasta do projeto

```bash
cd PetCare
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Rode o projeto localmente

```bash
npm run dev
```
