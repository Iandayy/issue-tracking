const BackGround = (props) => {
  return (
    <main onClick={props.onClick} className="p-10 bg-gray-800/30">
      {props.children}
    </main>
  );
};

export default BackGround;
