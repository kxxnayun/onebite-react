import { useState, useEffect, useRef } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // 1. 마운트: 탄생
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. 업데이트: 변화, 리렌더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }

    console.log("update");
  });
  // deps 생략 -> 업데이트 될 때마다

  // 3. 언마운트: 죽음

  const onClickButton = (value) => {
    setCount(count + value);
  };
  return (
    <>
      <div className="flex justify-center mt-4 text-2xl font-bold ">
        Simple Counter
      </div>

      <section className="flex justify-center mt-2.5">
        <input
          className="border xborder-gray-400 rounded p-2"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
      </section>

      <section className="flex flex-col mt-4 p-4 items-center justify-center container max-w-3xl mx-auto bg-gray-200 rounded-lg">
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section className="flex mt-4 p-4 justify-center container max-w-3xl mx-auto bg-gray-200 rounded-lg">
        <Controller onClickButton={onClickButton} />
      </section>
    </>
  );
}

export default App;
