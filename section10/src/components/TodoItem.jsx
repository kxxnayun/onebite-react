import { memo } from "react";

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

// 고차 컴포넌트 (HOC)
// export default memo(TodoItem, (prevProps, nextProps) => {
//   // 반환값에 따라, Props가 바뀌었는지 안 바뀌었는지 판단
//   // T -> Props가 바뀌지 않음 -> 리렌더링 X
//   // F -> Props가 바뀜 -> 리렌더링 O

//   if (prevProps.id !== nextProps.id) {
//     return false;
//   }

//   if (prevProps.isDone !== nextProps.isDone) {
//     return false;
//   }

//   if (prevProps.content !== nextProps.content) {
//     return false;
//   }

//   if (prevProps.date !== nextProps.date) {
//     return false;
//   }

//   return true;
// });

export default memo(TodoItem);
