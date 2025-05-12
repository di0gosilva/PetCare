# PetCare 🐾

PetCare é uma aplicação web desenvolvida com React e Vite, com o objetivo de auxiliar no gerenciamento de cuidados com animais de estimação. O projeto está em fase inicial de desenvolvimento e serve como base para futuras funcionalidades relacionadas à saúde e bem-estar de pets.

## Objetivo do Projeto 🎯

O objetivo principal é demonstrar conhecimentos em React, consumo de APIs públicas e privadas, gerenciamento de autenticação com Context API, e proteção de rotas com `react-router-dom`. A aplicação também utiliza a API [Dog CEO](https://dog.ceo/dog-api) para obter imagens aleatórias de cachorros.

## Demonstração 📸

### Página Inicial - PetCare 🐾
![Página Home](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExazZyajNwc2tmdGpzM2Q5NDVwMTJ6MTZzeWZoOG5zaWU5N3gyeW5tOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vN2u3AsSFOWXGgfPKV/giphy.gif)

### Página de Login🍿
![Página de Login](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3dtYXA2ZG8wY3JvczN1NWdyY3A0ZjJoNG5ncGphMjNmMWIwdmNiZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/W6qDZ92ql7ZC1fS62j/giphy.gif)

### Página Dashboard - Privada ❤️
![Página Dashboard - Privada](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3J1NHlldmU1dng2bnJ6N2Fnc3BzeDN4bjQxOWRqMW1icmR3M21xZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NygbTldMwzFBbYXTUH/giphy.gif)

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
