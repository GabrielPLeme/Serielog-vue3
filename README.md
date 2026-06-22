# 📺 SerieLog

Aplicação web desenvolvida em Vue 3 para gerenciamento pessoal de séries. O sistema permite cadastrar, editar, remover e filtrar séries assistidas ou não assistidas.

O projeto utiliza uma API REST simulada com JSON Server e uma interface moderna construída com Tailwind CSS e DaisyUI.

---

## 🚀 Funcionalidades

- 📌 Listagem de séries
- ➕ Cadastro de novas séries
- ✏️ Edição de séries (desafio)
- ❌ Remoção de séries
- 🔎 Filtro por gênero e status
- 🔄 Atualização dinâmica sem recarregar a página
- 🧭 Navegação com Vue Router

---

## 🎨 Front-end

O front-end foi desenvolvido com foco em componentização e reatividade.

### Tecnologias utilizadas:
- Vue 3
- Vue Router
- JavaScript (ES6+)
- Tailwind CSS
- DaisyUI

### Estrutura de componentes:
- `SerieCard.vue` → Exibe informações da série
- `SerieForm.vue` → Formulário de cadastro e edição
- `FiltroSeries.vue` → Filtros por gênero e status
- Views separadas para páginas (Home, Cadastro, Edição)

---

## 🗄️ Back-end (API Simulada)

O back-end do projeto é simulado utilizando JSON Server.

### Funcionalidades da API:
- GET → listar séries
- POST → adicionar nova série
- PUT/PATCH → editar série
- DELETE → remover série

### Arquivo base:
- `db.json` → contém os dados iniciais da aplicação

### Execução:
O servidor roda localmente na porta **3000**.

---

## ▶️ Como executar o projeto

### 1. Instalar dependências
```
npm install

```

## 2. Rodar o front-end
```
npm run dev
```
## 3. Rodar o back-end
```
npx json-server db.json
```

📌 Rotas da aplicação
    / → Listagem de séries
      /series/nova → Cadastro de série
      /series/:id → Edição de série (desafio)

🧠 Conceitos aplicados
  SPA (Single Page Application)
  Componentização com Vue
  Comunicação via props e emits
  Consumo de API REST
  Reatividade e estado
  Filtros dinâmicos sem requisição extra

👨‍💻 Autor
 GABRIEL PEREIRA LEME
