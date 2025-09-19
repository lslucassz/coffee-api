# ☕ Coffee API

API simples em **Node.js** que fornece uma lista de cafés quentes e gelados, incluindo título, descrição e ingredientes.  
Essa API é utilizada pelo aplicativo **Coffee List** (React Native + Expo) [COFFEE LIST IH](https://github.com/lslucassz/coffee-list-ih).

---

## 🚀 Tecnologias
- Node.js
- Fastify
- JSON

---

## 📌 Rotas disponíveis

### 🔹 `GET /coffes/hot`
Retorna uma lista dos cafés **quentes** mais populares.

### 🔹 `GET /coffes/iced`
Retorna uma lista dos cafés **gelados** mais populares.

---

## ▶️ Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/lslucassz/coffee-api
cd coffee-api

# Instale as dependências
npm install

# Rode o servidor
npm run dev ou pnpm run dev

# Porta do Servidor Local
http://localhost:3333
