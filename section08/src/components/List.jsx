import { useState } from "react";
import TodoItem from "./TodoItem";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredDate = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLocaleLowerCase())
    );
  };

  const filteredTodos = getFilteredDate();

  return (
    <>
      <p className="text-lg font-bold mt-4">Todo List ✨</p>
      <input
        value={search}
        onChange={onChangeSearch}
        className="mb-2 w-full border-b-2 border-b-gray-300 pt-3.5 pb-3.5 outline-none focus:border-b-blue-400 focus:border-b-bold transition-colors"
        placeholder="검색어를 입력하세요"
      ></input>
      <div className="flex flex-col gap-5">
        {filteredTodos.map((todo) => {
          // map
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </>
  );
};

export default List;
