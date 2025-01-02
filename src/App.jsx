import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  
  const handleClick = () => {
    setCounter(counter + 1);
  }
  const handleClick2 = () => {
    setCounter2(counter2 + 1);
  }

  return (
    <>
       <Counter name="Compteur A" cpt={counter} hc={handleClick}/>
       <Counter name="Compteur B" cpt={counter2} hc={handleClick2}/>
    </>
  )
}

export default App
