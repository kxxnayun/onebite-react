import { useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";

function App() {
  const [count, setCount] = useState(0);

  const onClickButton = (value) => {
    setCount(count + value);
  };
  return (
    <>
      <div className="flex justify-center mt-4 text-2xl font-bold ">
        Simple Counter
      </div>

      <section className="flex mt-4 p-4 justify-center container max-w-3xl mx-auto bg-gray-200 rounded-lg">
        <Viewer count={count} />
      </section>

      <section className="flex mt-4 p-4 justify-center container max-w-3xl mx-auto bg-gray-200 rounded-lg">
        <Controller onClickButton={onClickButton} />
      </section>
    </>
  );
}

export default App;
