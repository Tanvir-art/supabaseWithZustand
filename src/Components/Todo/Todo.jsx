import React, { useEffect, useState } from "react";
import supabase from "../../Config/Config";
import useTodoStore from "../../Store/Store";

const Todo = () => {
  const fetchData = useTodoStore((state) => state.fetchData);
  const dat = useTodoStore((state) => state.data);
  const [todoTitle, setTodoTitle] = useState(""); 
  const [todoId, setTodoId] = useState(null); 

  const fetchingData = async () => {
    const { data, error } = await supabase.from("Todo").select();
    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      fetchData(data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const todoText = form.todo.value;
    console.log(todoText);

    if (todoId) {
      const { data, error } = await supabase
        .from("Todo")
        .update({ todoName: todoText })
        .eq("id", todoId)
        .select();
      if (error) {
        console.log(error);
      }
      if (data) {
        console.log(data);
        fetchingData();
      }
    } else {
      const { data, error } = await supabase
        .from("Todo")
        .insert({ todoName: todoText })
        .select();

      if (error) {
        console.log(error);
      }
      if (data) {
        console.log(data);
        fetchingData();
      }
    }

    form.todo.value = "";
    setTodoTitle(""); 
    setTodoId(null); 
  };

  const handleDelete = async (id) => {
    const { error } = await supabase.from("Todo").delete().eq("id", id);
    fetchingData();
    if (error) {
      console.log(error);
    }
  };

  const handleTodoClick = (title, id) => {
    setTodoTitle(title);
    setTodoId(id);
  };

  const handleInputChange = (e) => {
    setTodoTitle(e.target.value);
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <>
      <h2>{dat.length}</h2>
      <form onSubmit={handleSubmit} className="">
        <div className="w-1/2 mx-auto my-8 flex">
          <input
            className="w-full border py-1 focus:outline-none "
            type="text"
            name="todo"
            value={todoTitle}
            onChange={handleInputChange}
          />
          <button className="px-4 py-2 bg-[#07B5D5] text-white">
            {todoTitle ? "Update" : "Add"}
          </button>
        </div>
      </form>
      {dat.map((data) => (
        <div
          className="w-1/2 bg-[#07B5D5] shadow-xl flex justify-between mx-auto py-3 px-4 text-white my-3"
          key={data.id}
          
        >
          <h2 className="text-xl font-medium">{data.todoName}</h2>
          <div className="flex gap-5">
            <button onClick={() => handleTodoClick(data.todoName, data.id)}>update</button>
            <button onClick={() => handleDelete(data.id)}>delete</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Todo;
