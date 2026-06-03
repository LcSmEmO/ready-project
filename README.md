# read.y — Plataforma Web de Leitura Adaptativa Inteligente

> Trabalho de Conclusão de Curso (TCC) apresentado ao curso de Bacharelado em Sistemas de Informação — 2026.

A plataforma web Read.y serve para transformar a forma como as pessoas consomem documentos acadêmicos densos e livros digitais. A ideia central é ir além dos formatos estáticos de PDF, criando um ambiente de leitura dinâmico e adaptável

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

## 🎯 Visão Geral e Motivação

O consumo de materiais digitais em PDF frequentemente esbarra em problemas de acessibilidade, falta de fluidez e fadiga visual. Além disso, a extração de dados brutos desses arquivos costuma trazer ruídos textuais (como hífens órfãos de quebras de linha e símbolos corrompidos).

O **read.y** resolve esse problema atuando em três frentes:
1. **Normalização Semântica:** Um microsserviço limpa o texto do documento e o separa logicamente em blocos de parágrafos, títulos e notas de rodapé.
2. **Interface Adaptativa:** O leitor renderiza esses blocos nativamente, permitindo controle total de progresso, favoritação e marcação de página.
3. **Cognição Assistida:** O usuário pode interagir diretamente com o conteúdo do livro por meio de um chat contextualizado alimentado por IA.

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
