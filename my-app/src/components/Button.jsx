const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`rounded p-1 ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
