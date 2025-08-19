import { render, screen } from "@testing-library/react";
import Page from "../app/page";

jest.mock("../lib/tarefas", () => ({
  getTarefas: jest.fn(() => Promise.resolve([
    { id: "mock-id-1", titulo: "Mocked Task 1" },
    { id: "mock-id-2", titulo: "Mocked Task 2" }
  ])),
}));

describe("Page", () => {
  it("renderiza tarefas iniciais", async () => {
    render(await Page());

  expect(await screen.findByText("Mocked Task 1")).toBeInTheDocument();
  expect(await screen.findByText("Mocked Task 2")).toBeInTheDocument();
  expect(screen.getByText("Total: 2")).toBeInTheDocument();
  });
});
