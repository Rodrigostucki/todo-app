// Removido tipo TypeScript, usando apenas JavaScript

let tarefas = [
  { id: crypto.randomUUID(), titulo: "Estudar Next.js" },
  { id: crypto.randomUUID(), titulo: "Praticar testes unitários" },
];

export async function getTarefas() {
  // Retorna uma cópia para evitar que consumidores manipulem a mesma referência
  return Promise.resolve([...tarefas]);
}

export function addTarefa(titulo) {
  const nova = { id: crypto.randomUUID(), titulo };
  tarefas.push(nova);
  return nova;
}
