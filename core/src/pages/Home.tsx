import { FormEvent, useState } from "react";
import { v4 as uuid } from 'uuid';

import Parcel from 'single-spa-react/parcel';

export function Home() {
    const [todo, setTodo] = useState('')

    function handleSubmit(event: FormEvent){
        event.preventDefault();
        dispatchEvent(new CustomEvent('@mp/core/add-todo', {
            detail: {
                id: uuid(),
                describe: todo
            }
        }))
        setTodo('');
    }

  return (
    <section className="container">
      <h3>Home page</h3>
      <form onSubmit={(event) => handleSubmit(event)} className="row">
        <div className="col-auto">
          <label htmlFor="addNewTodo" className="col-form-label">
            New Todo
          </label>
        </div>

        <div className="col-auto">
          <input
            id="addNewTodo"
            type="text"
            className="form-control"
            onChange={(event) => setTodo(event.target.value)}
            value={todo}
          />
        </div>

        <div className="col-auto">
          <button className="btn btn-success mx-2" type="submit">
            Add
          </button>
        </div>
      </form>

      <Parcel config={() => System.import("@mp/list") as any} />
    </section>
  );
}
