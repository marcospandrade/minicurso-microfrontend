import { useEffect, useState } from "react";

interface Todo {
  id: string;
  describe: string;
}

export function App() {
  const [listTodos, setListTodos] = useState<Todo[]>([]);

  useEffect(() => {
    window.addEventListener("@mp/core/add-todo", (event: CustomEvent) => {
      setListTodos((oldTodos) => [...oldTodos, event.detail]);
    });
  }, []);

  return (
    <div className="my-2">
      <h2>Micro front List</h2>

      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Todo</th>
            </tr>
          </thead>
          <tbody>
            {listTodos.map((todo) => (
              <tr key={todo.id}>
                <th>{todo.id}</th>
                <td>{todo.describe}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
