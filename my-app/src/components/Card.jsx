const Card = (props) => {
  return (
    <article
      className={`shadow-md rounded m-2 ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </article>
  );
};

export default Card;
