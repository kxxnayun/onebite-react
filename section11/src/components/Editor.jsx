import { useContext, useRef, useState } from "react";
import { TodoDispatchContext } from "../App";

const Editor = () => {
  const { onCreate } = useContext(TodoDispatchContext);
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent(""); // input 값 초기화
  };

  const onKeydown = (e) => {
    // enter key
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  return (
    <div className="mt-5 flex gap-2.5">
      <input
        onKeyDown={onKeydown}
        ref={contentRef}
        value={content}
        onChange={onChangeContent}
        className="flex-1 p-3.5 border rounded-[5px] border-gray-300"
        placeholder="새로운 Todo..."
      ></input>
      <button
        onClick={onSubmit}
        className="cursor-pointer w-[80px] border-none bg-blue-400 rounded-[5px] text-white"
      >
        추가
      </button>
    </div>
  );
};

export default Editor;
