const Modal = (props) => {
  return (
    <div
      className="flex justify-center items-center z-20 fixed top-0 left-0 h-full min-h-screen w-full bg-gray-800/30 "
      onClick={() => props.isEditHandler(false)}
    >
      <div className="w-6/12 overflow-y-auto max-h-screen bg-white rounded shadow">
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
