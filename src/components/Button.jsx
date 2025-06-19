import { ToastProvider, useToast } from "../Context/UseContext";

const Button = ({setTheme}) => {
  const { addToast, } = useToast();

  const handleUndo = () => {
    alert("Undo action triggered!");
  };

  return (
    <div className="p-4 grid grid-cols-4 md:grid lg:grid text-sm text-center">
      <button
        onClick={() => addToast("Success!", "success", 3000, handleUndo)}
        className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:scale-105 duration-200"
      >
        Success Toast
      </button>
      <button
        onClick={() => addToast("Error!", "error", 4000)}
        className="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:scale-105 duration-200"
      >
        Error Toast
      </button>
      <button
        onClick={() => addToast("Info!", "info", 5000, handleUndo)}
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:scale-105 duration-200"
      >
        Info Toast
      </button>
      <button
        onClick={() => setTheme(prev => !prev)}
        className="bg-gray-500 text-white px-4 py-2 rounded hover:scale-105 duration-200"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Button;
