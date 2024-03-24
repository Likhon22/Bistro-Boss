const ViewMenuButton = ({ btnText, color = "black" }) => {
  return (
    <div className="flex justify-center items-start my-14">
      <button
        className={`btn btn-outline border-0 border-b-2 hover:bg-black  uppercase text-${color}  border-${color}`}
      >
        {btnText}
      </button>
    </div>
  );
};

export default ViewMenuButton;
