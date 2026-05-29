# read.y
Plataforma Web para Leitura Adaptativa e Processamento de Documentos
Trabalho de Conclusão de Curso · 2026

## Sobre o Projeto
O **read.y** é uma aplicação web full-stack desenvolvida para transformar a experiência de leitura e estudo de livros e documentos acadêmicos. A plataforma permite que os usuários façam o upload de arquivos PDF, que são automaticamente processados, estruturados em blocos de texto nativos e integrados a um ecossistema inteligente auxiliado por inteligência artificial.

A grande motivação do projeto é resolver a quebra de fluidez e acessibilidade no consumo de materiais digitais densos. Centralizando o armazenamento de documentos, a extração de conteúdo limpo e a assistência por IA em uma interface fluida, o read.y transforma arquivos estáticos em uma experiência interativa de aprendizado.

🔗 [Acessar aplicação em produção](https://ready-project.vercel.app)

---

## Principais Funcionalidades

### Para o usuário (Leitor)
* **Upload e Leitura Adaptativa:** Suporte a upload temporário (leitura rápida) e upload oficial integrado ao perfil do usuário.
* **Processamento Estruturado de PDF:** Divisão automática do documento em blocos semânticos (títulos, parágrafos e notas de rodapé) com limpeza de ruídos e hífens.
* **Assistência Inteligente com Gemini:** Integração direta com a API do Google Gemini para suporte ao leitor, permitindo interações contextuais com o conteúdo do documento.
* **Painel de Progresso e Biblioteca:** Acompanhamento da página atual, percentual de rolagem, controle de leitura e gerenciamento de arquivos favoritos.

---

## Stack Tecnológica

### Backend (Node.js)
* **Runtime:** Node.js 18+
* **Framework:** Express
* **ORM:** Prisma
* **Autenticação:** JWT (JsonWebToken) & BcryptJS
* **Uploads:** Multer & Form-Data
* **IA SDK:** Google GenAI SDK (Gemini API)

### Processador de PDF (Python)
* **Framework:** FastAPI
* **Servidor:** Uvicorn
* **Motor de Extração:** pypdf (Leitura assíncrona, extração de texto e normalização de ligaduras)

### Frontend
* **Core:** React 18 · Vite · TypeScript
* **Estilização:** TailwindCSS · shadcn/ui
* **Navegação:** React Router v7
* **Iconografia:** Lucide React

### Infraestrutura
* **Vercel:** Hospedagem do Frontend Estático (`ready-project.vercel.app`).
* **Render (Node Service):** Hospedagem do servidor principal em Node.js (`ready-project-ko70.onrender.com`).
* **Render (Python Service):** Hospedagem da API isolada de processamento de PDFs (`ready-pdf-processor.onrender.com`).
* **GitHub:** Controle de versão unificado e deploys contínuos baseados na branch `main`.

---

## Estrutura do Repositório

```text
ready-project/
├── backend/                    # Servidor Principal Node.js (Express)
│   ├── src/
│   │   ├── controllers/        # Lógica de rotas (Upload, Auth, Documentos)
│   │   ├── prisma/             # Cliente e esquemas do banco de dados
│   │   └── server.js           # Ponto de entrada do app
│   ├── uploads/                # Armazenamento temporário de arquivos
│   ├── package.json
│   └── .env
│
├── frontend/                   # Interface Single Page Application (React)
│   ├── src/
│   │   ├── components/         # Componentes de UI (Leitor, Sidebar, Upload)
│   │   ├── contexts/           # Provedores Globais (Auth, Tema)
│   │   ├── pages/              # Telas (Dashboard, Biblioteca, Workspace)
│   │   ├── services/           # Chamadas HTTP via Axios
│   │   └── main.tsx
│   ├── package.json
│   └── .env
│
└── pdf-processor/              # Microsserviço de OCR e Extração de PDF (FastAPI)
    ├── main.py                 # Rotas e regras de limpeza semântica
    └── requirements.txt        # Dependências mínimas de RAM (pypdf)
