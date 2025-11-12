const Viewer = ({ count }) => {
  return (
    <div>
      <div>현재 카운트</div>
      <div className="flex justify-center text-xl font-bold">{count}</div>
    </div>
  );
};

export default Viewer;
