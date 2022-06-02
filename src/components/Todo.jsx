import { useState , useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/action";

export const Todo = () => {
  const [text, setText] = useState("");

  const todos = useSelector((store) => store.todos);
  
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAdd = async () => {
    let res = await fetch("http://localhost:8080/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: text,
        status: false,
      }),
    })
    let data = await res.json();
    alert("todo added")
  };


  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleAdd}>Add</button>
      
    </div>
  );
};