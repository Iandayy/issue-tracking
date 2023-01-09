const Card = (props) => {
  return (
    <article
      onClick={props.onClick}
      className={`m-2 p-2 shadow-md rounded ${props.className}`}
    >
      {props.children}
    </article>
  );
};

export default Card;
