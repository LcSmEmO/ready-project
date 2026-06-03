# read.y — Plataforma Web de Leitura Adaptativa Inteligente

> Trabalho de Conclusão de Curso (TCC) apresentado ao curso de Bacharelado em Sistemas de Informação — 2026.

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

## 📌 Índice
* [Visão Geral e Motivação](#-visão-geral-e-motivação)
* [Arquitetura do Sistema e Fluxo de Dados](#-arquitetura-do-sistema-e-fluxo-de-dados)
* [Principais Funcionalidades](#-principais-funcionalidades)
* [Stack Tecnológica e Justificativas](#-stack-tecnológica-e-justificativas)
* [Estrutura do Projeto](#-estrutura-do-projeto)
* [Configuração e Execução Local](#-configuração-e-execução-local)
* [Endpoints e Comunicação entre Serviços](#-endpoints-e-comunicação-entre-serviços)
* [Otimizações de Infraestrutura (Case Render vs RAM)](#-otimizações-de-infraestrutura-case-render-vs-ram)
* [Autores e Licença](#-autores-e-licença)

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

## 🎯 Visão Geral e Motivação

O consumo de materiais digitais em PDF frequentemente esbarra em problemas de acessibilidade, falta de fluidez e fadiga visual. Além disso, a extração de dados brutos desses arquivos costuma trazer ruídos textuais (como hífens órfãos de quebras de linha e símbolos corrompidos).

O **read.y** resolve esse problema atuando em três frentes:
1. **Normalização Semântica:** Um microsserviço limpa o texto do documento e o separa logicamente em blocos de parágrafos, títulos e notas de rodapé.
2. **Interface Adaptativa:** O leitor renderiza esses blocos nativamente, permitindo controle total de progresso, favoritação e marcação de página.
3. **Cognição Assistida:** O usuário pode interagir diretamente com o conteúdo do livro por meio de um chat contextualizado alimentado por IA.
