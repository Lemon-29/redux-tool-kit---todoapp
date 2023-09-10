"use client";
import React, { useState } from "react";
import Container from "./Container";
import { AiTwotoneDelete } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "@/redux/todoSlice";

const TodoForm = () => {
  const getTodos = useSelector((state) => state.todo.todoArray);

  const dispatch = useDispatch();
  // const [todoArray, setTodoArray] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const saveTodo = (e) => {
    e.preventDefault();
    if (todoInput === "") {
      toast.error("Enter your todo");
    } else {
      dispatch(
        addTodo({
          id: Math.random(),
          text: todoInput,
        })
      );
      // const newTodo = {
      //   id: Math.random(),
      //   text: todoInput,
      // };

      // setTodoArray([...todoArray, newTodo]);
      toast.success("Todo added Successfully");
    }
    setTodoInput("");
  };

  return (
    <div className="text-black">
      <Container>
        <p className="text-4xl flex items-center justify-left font-bold  underline">Todo Form</p>
        <form className="max-w-xl py-6 flex justify-between items-center">
          <div className="flex gap-x-2 flex-1 h-10">
            <input
              type="text"
              placeholder="type your todo"
              className="border shadow-lg border-gray-600 px-4 py-2 flex-1"
              onChange={(e) => setTodoInput(e.target.value)}
              value={todoInput}
            />
            <button
              onClick={saveTodo}
              className="bg-gray-950 text-gray-300 h-10 shadow-lg rounded-md px-4 hover:text-white duration-200"
            >
              Add Todo
            </button>
          </div>
        </form>
        {/* Todo value */}
        <div className="max-w-xl">
          {getTodos.length > 0 ? (
            getTodos.map((item) => (
              <p className="w-full bg-gray-950 py-2 px-2 text-gray-200 flex items-center justify-between rounded-md mb-2">
                {item.text}

                <span className="text-xl">
                  <AiTwotoneDelete />
                </span>
              </p>
            ))
          ) : (
            <p>No todos available</p>
          )}
        </div>
      </Container>
      <Toaster />
    </div>
  );
};

export default TodoForm;
