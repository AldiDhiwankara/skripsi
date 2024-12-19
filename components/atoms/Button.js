const Button = ({ children, onClick, color = "bg-pink-600" }) => (
    <button
      onClick={onClick}
      className={`${color} text-white font-bold py-2 px-6 rounded-md`}
    >
      {children}
    </button>
  );
  
  export default Button;
  