const FixedButton = ({ children, onClick }) => (
  <button
  onClick={onClick}
    className="fixed top-2 -left-2 md:left-10 flex justify-center items-center  rounded-full p-4  transition duration-300 ease-in-out z-50 transparent">
    {children}
  </button>
);

export default FixedButton;