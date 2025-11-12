const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="flex items-center gap-5 pb-5 border-b-2 border-b-gray-300">
      <input
        onChange={onChangeCheckbox}
        checked={isDone}
        className="w-5"
        type="checkbox"
      ></input>
      <div className="flex-1">{content}</div>
      <div className="text-gray-400">{new Date(date).toLocaleDateString()}</div>
      <button
        onClick={onClickDeleteButton}
        className="text-sm cursor-pointer bg-gray-200 border-none rounded-[5px] p-2"
      >
        삭제
      </button>
    </div>
  );
};

export default TodoItem;
