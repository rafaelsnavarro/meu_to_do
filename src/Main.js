import React, { useState } from "react";

export default function Main() {
  const [tarefas, setTarefas] = useState("");
  const [lista, setLista] = useState([]);
  const tarefa = { tarefa: tarefas, id: Date.now() };
  const Add = () => {
    if (tarefas !== "") {
      setLista([...lista, tarefa]);
    }
    setTarefas("");
  };

  const Remove = (id) => {
    setLista(lista.filter((item) => item.id !== id));
  };

  return (
    <section>
      <form onSubmit={(e) => e.preventDefault()}>
        <input value={tarefas} onChange={(e) => setTarefas(e.target.value)} />
        <button onClick={() => Add()}>Add</button>

        {lista.map((item, index) => (
          <div key={index}>
            <input type="checkbox" />
            <label>{item.tarefa}</label>
            <button onClick={() => Remove(item.id)}>X</button>
          </div>
        ))}
      </form>
    </section>
  );
}
