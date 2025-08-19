import { useMemo } from "react";
export function useContadorDeTarefas(tarefas) {
  return useMemo(() => tarefas.length, [tarefas]);
}
