const Input = ({ placeholder, type }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="px-4 py-2 border-gray-400 border rounded w-full"
    />
  );
};

export default Input;
