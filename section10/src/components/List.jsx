import { useMemo, useState } from "react";
import TodoItem from "./TodoItem";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLocaleLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  // const getAnalyzedData = () => {
  //   const totalCount = todos.length;
  //   const doneCount = todos.filter((todo) => todo.isDone).length;

  //   const notDoneCount = totalCount - doneCount;
  // };

  // useMemo(() => {}, [])
  // 의존성 배열: deps
  // -> deps에 포함된 값이 변경되었을 때만 첫 번째 인수로 전달된 콜백 함수를 다시 실행

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("getAnalyzedData 호출!");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);
  // deps의 값이 변경되었을 때는 콜백함수가 다시 실행되니까 서치바에서는 실행 x, todo 배열 변경 시에만 호출됨

  // useMemo랑 Debounce랑 차이점

  // const { totalCount, doneCount, notDoneCount } = getAnalyzedData();

  return (
    <>
      <p className="text-lg font-bold mt-4">Todo List ✨</p>
      <div>전체 ✔️: {totalCount}</div>
      <div>완료 😊: {doneCount}</div>
      <div>미완료 😭: {notDoneCount}</div>
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
