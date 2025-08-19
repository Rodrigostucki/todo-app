"use client";
import { getTarefas } from "../lib/tarefas";
import NovaTarefa from "../components/NovaTarefa";
import { useContadorDeTarefas } from "../hooks/useContadorDeTarefas";
import { useState, useEffect } from "react";


export default function Page() {
  const [tarefasIniciais, setTarefasIniciais] = useState([]);

  useEffect(() => {
    getTarefas().then(setTarefasIniciais);
  }, []);

  return <ListaDeTarefas tarefasIniciais={tarefasIniciais} />;
}

function ListaDeTarefas({ tarefasIniciais }) {
  const [tarefas, setTarefas] = useState(tarefasIniciais);
  const total = useContadorDeTarefas(tarefas);

  useEffect(() => {
    setTarefas(tarefasIniciais);
  }, [tarefasIniciais]);

  return (
    <div>
      <h1>Minhas Tarefas</h1>
      <p>Total: {total}</p>

      <ul>
        {tarefas.map((t) => (
          <li key={t.id}>{t.titulo}</li>
        ))}
      </ul>

      <NovaTarefa onAdicionar={async (nova) => {
        const atualizadas = await getTarefas();
        setTarefas(atualizadas);
      }} />
    </div>
  );
}
