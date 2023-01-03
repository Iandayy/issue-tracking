const Card = (props) => {
  return (
    <article className={`shadow m-5 ${props.className}`}>
      {props.children}
    </article>
  );
};

export default Card;
