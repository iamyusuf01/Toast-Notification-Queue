import { ToastProvider } from "./Context/UseContext";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(false);
  const [position, setPosition] = useState("top-right");
  console.log(theme);
  return (
    <div >
      <ToastProvider position={position}>
        <div className={`min-h-screen text-center ${theme ? "bg-gray-900 text-white" : "bg-white text-gray-600"}`}>
          <h1 className="text-2xl font-bold text-center py-4">
            Toast Notification Queue
          </h1>
          <select
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="mt-2 p-2 rounded"
          >
            <option value="top-right">Top Right</option>
            <option value="top-left">Top Left</option>
            <option value="bottom-right">Bottom Right</option>
          </select>
          <div className="flex justify-center">
            <Button setTheme={setTheme} />
          </div>
        </div>
      </ToastProvider>
    </div>
  );
}

export default App;
