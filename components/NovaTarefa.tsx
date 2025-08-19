"use client";

import { useState } from "react";
import { addTarefa } from "../lib/tarefas";

interface NovaTarefaProps {
  onAdicionar: (tarefa: any) => void;
}

export default function NovaTarefa({ onAdicionar }) {
  const [titulo, setTitulo] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!titulo.trim()) return;
    const nova = addTarefa(titulo);
    onAdicionar(nova);
    setTitulo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nova tarefa"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        aria-label="campo-nova-tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
