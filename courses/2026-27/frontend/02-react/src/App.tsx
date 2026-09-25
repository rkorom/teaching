import { useState } from "react";
import "./App.css";

function App() {
  const [szoveg, setSzoveg] = useState<string>("");
  const [eredmeny, setEredmeny] = useState<string>("");
  const [valasztott, setValasztott] = useState<string>("");

  return (
    <>
      <h1>Hello World</h1>
      <h2>{eredmeny}</h2>

      <input
        onChange={(e) => setSzoveg(e.target.value)}
        type="text"
        placeholder="Írj be valamit..."
      />

      <select onChange={(e) => setValasztott(e.target.value)}>
        <option value="">Válassz egy opciót</option>
        <option value="Első opció">Első opció</option>
        <option value="Második opció">Második opció</option>
        <option value="Harmadik opció">Harmadik opció</option>
      </select>

      <button
        onClick={() =>
          setEredmeny(
            `A megadott szöveg: ${szoveg}, A választott opció: ${valasztott}`,
          )
        }
      >
        Print
      </button>
    </>
  );
}

export default App;
