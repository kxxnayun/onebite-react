// const Button = (props) => {
//   console.log(props);
//   return (
//     <button style={{ color: props.color }}>
//       {props.text} - {props.color}
//     </button>
//   );
// };

// export default Button;

// 이벤트 객체
const Button = ({ children, text, color = "black" }) => {
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button
      onClick={onClickButton}
      // onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
