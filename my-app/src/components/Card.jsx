const Card = (props) => {
  return (
    <article className={`m-2 p-2 shadow ${props.className}`}>
      {props.children}
    </article>
  );
};

export default Card;
