import { renderHook } from "@testing-library/react";
import { useContadorDeTarefas } from "../hooks/useContadorDeTarefas";

describe("useContadorDeTarefas", () => {
  it("retorna a contagem correta", () => {
    const { result, rerender } = renderHook(
      (props: any) => useContadorDeTarefas(props.tarefas),
      {
        initialProps: { tarefas: [{ id: "id-1", titulo: "Tarefa 1" }] },
      }
    );

    expect(result.current).toBe(1);

    rerender({ tarefas: [
      { id: "id-1", titulo: "Tarefa 1" },
      { id: "id-2", titulo: "Tarefa 2" }
    ] });
    expect(result.current).toBe(2);
  });
});
