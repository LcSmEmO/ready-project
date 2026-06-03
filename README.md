# read.y — Plataforma Web de Leitura Adaptativa Inteligente

> Trabalho de Conclusão de Curso (TCC) apresentado ao curso de Bacharelado em Sistema de Informação — 2026.

A plataforma web Read.y serve para transformar a forma como as pessoas consomem documentos acadêmicos densos e livros digitais. A ideia central é ir além dos formatos estáticos de PDF, criando um ambiente de leitura dinâmico e adaptável

---

#🎥 Vídeo de Apresentação do Projeto

📌 Assista ao vídeo oficial de apresentação do Moto Help: 👉

---

## 📸 Capturas de Tela

### Tela Inicial

<img width="1859" height="938" alt="image" src="https://github.com/user-attachments/assets/11289950-93ec-4183-a29e-c307b5035b8c" />

### Tela de Login e Tela de Cadastro

<img width="692" height="639" alt="image" src="https://github.com/user-attachments/assets/2ea49419-b342-442f-ac92-04403fa8cc3f" />

<img width="728" height="725" alt="image" src="https://github.com/user-attachments/assets/50c2d243-b668-4123-ba59-c8a53523494e" />

### Biblioteca do Usuário

<img width="1856" height="934" alt="image" src="https://github.com/user-attachments/assets/20e3e462-b6b9-4884-b49d-c01676a4cc4c" />

### Tela de Leitura e Funções de acessibilidade

<img width="1856" height="937" alt="image" src="https://github.com/user-attachments/assets/3199daf3-ed61-4e5c-96b2-c8a18bfd19a4" />

---

## 🚀 Funcionalidades

✅ Leitura Adaptativa: Upload temporário para leitura rápida e extração imediata sem necessidade de login.

✅ Mapeamento Semântico de PDFs: Divisão automática do documento em blocos estruturados de títulos, parágrafos e notas de rodapé de forma leve.

✅ Limpeza Automatizada de Ruídos: Algoritmos em Python com Regex para normalização de ligaduras tipográficas e correção de hífens órfãos.

✅ Biblioteca Virtual Pessoal: Armazenamento permanente de livros e documentos vinculados ao perfil do usuário autenticado.

✅ Persistência de Progresso: Salvamento automático da última página lida e do percentual de rolagem por documento.

✅ Assistente Cognitivo Integrado: Chat inteligente contextualizado com o conteúdo do PDF usando a API do Google Gemini.

✅ Autenticação Segura: Cadastro e login de usuários gerenciados via tokens JWT (JsonWebTokens) com criptografia de senhas via bcryptjs.

✅ Persistência Relacional Remota: Integração completa com o banco de dados PostgreSQL hospedado no Supabase através do Prisma ORM.

✅ Interface Responsiva de Alta Legibilidade: Design fluido focado no conforto visual do leitor desenvolvido com TailwindCSS e shadcn/ui.

✅ Proteção de Rotas e Segurança: Bloqueio de áreas privadas e workspaces restritos a usuários devidamente autenticados na plataforma.

---

## 🏗️ Arquitetura do Sistema e Fluxo de Dados

A aplicação adota uma arquitetura descentralizada baseada em **Microsserviços**, dividida em três camadas independentes:

```text
┌────────────────────────────────────────────────────────────────────────┐
│                          FRONTEND (SPA React)                          │
│                     Hospedado na Vercel (Produção)                     │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                           HTTPS (JSON / Multipart)
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│                        BACKEND CENTRAL (Node.js)                       │
│             Express + Prisma ORM | Hospedado na Render (Web Service)    │
└──────────────────┬───────────────────────────────┬─────────────────────┘
                   │                               │
            Chamada interna (HTTP)         Integração SDK Oficial
                   │                               │
                   ▼                               ▼
┌─────────────────────────────────────┐ ┌────────────────────────────────┐
│      PROCESSADOR PDF (FastAPI)      │ │     GOOGLE GEMINI IA API       │
│   Python + pypdf | Hospedado Render │ │   Suporte Cognitivo ao Leitor  │
└─────────────────────────────────────┘ └────────────────────────────────┘
````

---

## 🛠️ Tecnologias Utilizadas

Frontend
| 	Tecnologia	 | 	Descrição	 |
| 	:-----:	 | 	:-----:	 |
| 	React 18	| 	Biblioteca principal para construção da interface SPA reativa	|
| 	Vite	| 	Ferramenta de build ultra-rápida e ambiente de desenvolvimento	|
| 	TypeScript	| 	Tipagem estática segura para prevenção de erros em tempo de execução	|
| 	TailwindCSS	| 	Estilização utilitária e estruturação do modo escuro (dark mode)	|
| 	shadcn/ui	| 	Componentes de interface de alta acessibilidade e design minimalista	|

Backend & Microsserviços
| 	Tecnologia	 | 	Descrição	 |
| 	:-----:	 | 	:-----:	 |
| 	Node.js	| 	Ambiente de execução assíncrono para o servidor principal	|
| 	Express	| 	Framework web para gerenciamento de rotas, middlewares e uploads	|
| 	FastAPI (Python)	| 	Framework de alta performance focado no microsserviço de PDF	|
| 	Uvicorn	| 	Servidor ASGI rápido para rodar a API em Python em produção	|

Banco de Dados & Serviços
| 	Tecnologia	 | 	Descrição	 |
| 	:-----:	 | 	:-----:	 |
| 	Supabase	| 	Provedor de infraestrutura em nuvem para o banco de dados PostgreSQL	|
| 	Prisma ORM	| 	Mapeamento e abstração de consultas ao banco de dados relacional	|
| 	Google Gemini API	| 	Modelo de linguagem inteligente integrado via SDK para assistência cognitiva	|
| 	pypdf	| 	Biblioteca leve para extração de baixo nível de textos e metadados de PDFs	|

---

## ⚙️ Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina:

- Navegador web moderno (Edge, Chrome, Firefox ou Opera)

- Node.js instalado (Versão 18 ou superior)

- Python instalado (Versão 3.11 ou superior)

- Uma conta ativa no Supabase (para o banco de dados PostgreSQL)

- Uma chave de API válida do Google AI Studio (Gemini API)

- Editor de código recomendado: VS Code

---

## 🛠️ Configuração

1. Acesse o painel do Supabase, crie um novo projeto PostgreSQL e copie a URI de conexão gerada em Database Settings.

2. Acesse o Google AI Studio e gere uma nova chave de API para o modelo Gemini.

3. Crie as tabelas estruturais executando o comando das migrations do Prisma contido no passo abaixo.

---

** 🚦 Como Executar o Projeto

Para rodar o ecossistema completo localmente, você precisará iniciar os três módulos em terminais separados seguindo a ordem abaixo:

### 1. Inicializando o Microsserviço de PDF (Python)
````
# Clone o repositório principal
git clone https://github.com/seu-usuario/ready-project.git
cd ready-project/pdf-processor

# Crie e ative o ambiente virtual isolado
python -m venv .venv
# No Windows:
.venv\Scripts\Activate.ps1
# No Linux/Mac:
source .venv/bin/activate

# Instale as dependências otimizadas de leitura
pip install -r requirements.txt

# Inicie o servidor FastAPI com recarregamento automático
uvicorn main:app --host 0.0.0.0 --port 8000
````

O processador de PDF estará ativo em: http://localhost:8000

### 2. Inicializando o Servidor Central (Backend Node.js)
````
# Abra um novo terminal e navegue até a pasta do backend
cd ready-project/backend

# Instale os pacotes e dependências de rotas
npm install

# ⚠️ Crie um arquivo chamado .env na pasta backend/ e adicione:
# DATABASE_URL="sua_string_de_conexao_do_supabase"
# GEMINI_API_KEY="sua_chave_da_api_do_gemini"
# JWT_SECRET="uma_chave_aleatoria_para_criptografia_jwt"
# PYTHON_SERVICE_URL="http://localhost:8000"

# Sincronize os modelos de tabelas do Prisma com o Supabase
npx prisma migrate dev

# Inicie o servidor local Express
npm run dev
````
O backend central estará ativo em: http://localhost:3001

### 3. Inicializando a Interface Web (Frontend React)
````
# Abra um terceiro terminal e navegue até a pasta do frontend
cd ready-project/frontend

# Instale os pacotes de interface
npm install

# ⚠️ Crie um arquivo chamado .env na pasta frontend/ e adicione:
# VITE_API_URL="http://localhost:3001"

# Inicie o servidor de desenvolvimento do Vite
npm run dev
````
A aplicação web abrirá automaticamente em: http://localhost:5173

---

## 📋 Funcionalidades Detalhadas

### Autenticação e Usuários
- Cadastro de novos usuários com validação de dados e armazenamento seguro de credenciais

- Login seguro baseado em tokens JWT (JsonWebTokens) com persistência de sessão ativa

- Criptografia unidirecional de senhas com algoritmo bcryptjs antes da gravação no banco

- Gerenciamento de sessão ativa e bloqueio de rotas privadas do ecossistema

### Processamento e Tratamento de PDFs

- Upload de arquivos físicos via formulários multi-partes (multipart/form-data)

- Extração cirúrgica de strings de texto em baixo nível sem sobrecarga de memória RAM

- Tratamento automatizado de ligaduras tipográficas corrompidas no processo de conversão

- Higienização de strings através de expressões regulares para união de palavras com hífens órfãos

- Identificação inteligente e categorização semântica do conteúdo em blocos de títulos, parágrafos e notas de rodapé

### Workspace de Leitura e Biblioteca

- Upload volátil para leitura rápida de documentos diretamente no navegador sem necessidade de conta

- Vinculação persistente de arquivos à estante virtual do usuário autenticado no banco de dados

- Salvamento automático do progresso de leitura contendo o número exato da última página acessada

- Rastreamento preciso do percentual de rolagem e engajamento do leitor por documento

- Sistema de marcação e listagem de arquivos favoritos na biblioteca pessoal

### Inteligência Artificial Assistiva

- Integração nativa com os modelos de linguagem generativa através do SDK do Google Gemini

- Engenharia de prompt contextualizada utilizando os blocos textuais puros extraídos do próprio PDF

- Resposta contextual sem vazamento de escopo externo ao conteúdo contido no livro carregado

---
