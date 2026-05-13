# TalentHub — Sistema de Gerenciamento de Currículos

## Sobre o projeto

O TalentHub é uma aplicação desenvolvida em Next.js com foco em gerenciamento de currículos e experiência do usuário (UX/UI). O sistema permite cadastrar, visualizar e pesquisar candidatos de forma moderna, organizada e responsiva.

O projeto foi desenvolvido utilizando conceitos modernos de desenvolvimento front-end, validação de formulários e componentes reutilizáveis.

---

# Funcionalidades implementadas

## Landing Page

- Página inicial moderna
- Apresentação dos benefícios do sistema
- Interface responsiva
- Navegação intuitiva

---

## Lista de Currículos

- Exibição de currículos em cards
- Busca em tempo real
- Filtro por nome e cargo
- Navegação dinâmica para detalhes

---

## Página de Detalhes

- Exibição completa das informações do candidato
- Foto fake do usuário
- Layout organizado e responsivo

---

## Cadastro de Currículos

O formulário contém:

- Nome
- Cargo desejado
- E-mail
- Telefone
- CPF
- Resumo profissional
- Experiências profissionais
- Formações acadêmicas
- Habilidades

---

# Tecnologias utilizadas

## Next.js

Framework React utilizado para criação da aplicação utilizando App Router.

---

## Tailwind CSS

Biblioteca utilizada para estilização moderna e responsiva.

---

## React Hook Form

Utilizado para gerenciamento dos formulários.

---

## Yup

Biblioteca utilizada para validação dos campos do formulário.

Exemplos de validação:
- Campos obrigatórios
- Formato de e-mail
- Quantidade mínima de caracteres

---

## Sonner

Biblioteca utilizada para notificações toast.

Exemplos:
- Sucesso ao cadastrar
- Erro de validação

---

## React Icons

Utilizado para ícones visuais no sistema.

---

## Máscaras de formulário

Foram utilizadas máscaras para:
- CPF
- Telefone

Compatíveis com React 19 e Next.js 16.

---

# Estrutura do Projeto

```txt
app
├── componentes
│   ├── footer.tsx
│   ├── header.tsx
│   └── nav.tsx
│
├── sistema/paginas/curriculos
│   ├── [id]
│   │   └── page.tsx
│   │
│   ├── novo
│   │   └── page.tsx
│   │
│   └── page.tsx
│
├── globals.css
├── layout.tsx
└── page.tsx

public
└── uploads
    ├── avatar1.png
    └── avatar2.png