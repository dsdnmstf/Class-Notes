import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { useDispatch } from "react-redux";
import { CLEAR_TODO_LIST } from "../../redux/types/todoType";
import { clearTodo } from "../../redux/actions/todoActions";
const TodoList = () => {
  const { list } = useSelector((state) => state.todoReducer);
  console.log(list);
  const dispatch = useDispatch();
  const handleClearList = () => {
    dispatch(clearTodo());
  };

  return (
    <div>
      <div>
        {list.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={handleClearList} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};

export default TodoList;
