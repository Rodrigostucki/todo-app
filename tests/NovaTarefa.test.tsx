import { render, screen, fireEvent } from "@testing-library/react";
import NovaTarefa from "../components/NovaTarefa";

describe("NovaTarefa", () => {
  it("valida input e adiciona nova tarefa", () => {
    const mockAdicionar = jest.fn();
    render(<NovaTarefa onAdicionar={mockAdicionar} />);

    const input = screen.getByLabelText("campo-nova-tarefa");
    const botao = screen.getByText("Adicionar");

    fireEvent.change(input, { target: { value: "Testar componente" } });
    fireEvent.click(botao);

    expect(mockAdicionar).toHaveBeenCalledWith(
      expect.objectContaining({ titulo: "Testar componente" })
    );
    expect(input).toHaveValue("");
  });
});
