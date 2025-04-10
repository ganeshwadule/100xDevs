import React from "react";
import { useRecoilState } from "recoil";
import { todos } from "../store/atoms/todos";

const Todos = () => {

  const [todo, setTodo] = useRecoilState(todos());
//   console.log(todo);

  return (
    <div>
      {todo.map((t, index) => (
        <div key={index}>{t.todo}</div>
      ))}
    </div>
  );
};

export default Todos;
