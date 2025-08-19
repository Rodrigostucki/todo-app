# My Todo App (Corrigido)

Aplicação simples de lista de tarefas usando **Next.js 15 (App Router)** + **TypeScript**.

## 🚀 Funcionalidades
- Listagem de tarefas (Server Component)
- Adição de tarefas (Client Component)
- Contador de tarefas (hook personalizado)
- Testes unitários com Jest + Testing Library

## ▶️ Como rodar
```bash
npm install
npm run dev
```

## 🧪 Como rodar os testes
```bash
npm test
```

## 📂 Estrutura
- `app/page.tsx` → página principal
- `components/NovaTarefa.tsx` → adicionar tarefa
- `hooks/useContadorDeTarefas.ts` → hook customizado
- `lib/tarefas.ts` → dados simulados (fake API)
- `tests/` → testes unitários
