const Input = ({ label, type = "text", labelColor= "text-white", name, value, onChange }) => (
    <div className="mb-4">
      <label className={`block font-bold mb-2 ${labelColor}`}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border rounded-md"
      />
    </div>
  );
  
  export default Input;