const Header = () => {
  return (
    <div className="mt-10">
      <div className="text-2xl font-bold">오늘은 🗓️</div>
      <div className="mt-5 text-4xl text-blue-400 font-bold">
        {new Date().toDateString()}
      </div>
    </div>
  );
};

export default Header;
