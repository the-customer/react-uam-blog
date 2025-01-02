import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter + 1);
  }

  return (
    <>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">Counter : {counter}</h1>
          <button 
            onClick={handleClick}
            className="bg-blue-500 
            hover:bg-blue-700
            text-white 
            font-bold 
            text-2xl
            py-2 px-8 rounded">+</button>
        </div>
    </>
  )
}

export default App
