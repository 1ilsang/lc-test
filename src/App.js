import { useEffect, useState } from "react";
import { add } from "./utils";

const App = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setNumber(add(0, 1));
  }, []);

  const handleButtonClick = () => setNumber(number + 1);

  return (
    <div className="App">
      <header className="App-header">
        <p id="number">{number}</p>
      </header>
      <button id="numclick" onClick={handleButtonClick}>
        click
      </button>
    </div>
  );
};

export default App;
