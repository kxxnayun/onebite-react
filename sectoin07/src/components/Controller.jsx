const Controller = ({ onClickButton }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <button
        className="px-2 py-1 bg-white rounded-md shadow-md hover:bg-gray-300 transition text-sm"
        onClick={() => onClickButton(-1)}
      >
        -1
      </button>
      <button
        className="px-2 py-1 bg-white rounded-md shadow-md hover:bg-gray-300 transition text-sm"
        onClick={() => onClickButton(-10)}
      >
        -10
      </button>
      <button
        className="px-2 py-1 bg-white rounded-md shadow-md hover:bg-gray-300 transition text-sm"
        onClick={() => onClickButton(-100)}
      >
        -100
      </button>
      <button
        className="px-2 py-1 bg-white rounded-md shadow-md hover:bg-gray-300 transition text-sm"
        onClick={() => onClickButton(100)}
      >
        +100
      </button>
      <button
        className="px-2 py-1 bg-white rounded-md shadow-md hover:bg-gray-300 transition text-sm"
        onClick={() => onClickButton(10)}
      >
        +10
      </button>
      <button
        className="px-2 py-1 bg-white rounded-md shadow-md hover:bg-gray-300 transition text-sm"
        onClick={() => onClickButton(1)}
      >
        +1
      </button>
    </div>
  );
};

export default Controller;
