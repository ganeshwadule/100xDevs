interface InputProps {
  type: string;
  placeholder?: string;
  reference?: any;
}

const Input = ({ placeholder, type, reference }: InputProps) => {
  return (
    <input
      ref={reference}
      type={type}
      placeholder={placeholder}
      className="px-4 py-2 border-gray-400 border rounded w-full"
    />
  );
};

export default Input;
