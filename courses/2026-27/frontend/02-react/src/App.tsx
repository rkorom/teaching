import "./App.css";
import type { Ember } from "./types/Ember";

function App() {
  const emberek: Array<Ember> = [
    { nev: "John Doe", kor: 30, varos: "New York" },
    { nev: "Jane Smith", kor: 25, varos: "Los Angeles" },
    { nev: "Alice Johnson", kor: 28, varos: "Chicago" },
  ];

  emberek.push({ nev: "x", kor: 15, varos: "Szeged" });

  const generateRow = (e: Ember) => {
    return (
      <tr>
        <td>{e.nev}</td>
        <td>{e.kor}</td>
        <td>{e.varos}</td>
      </tr>
    );
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Név</th>
            <th>Kor</th>
            <th>Város</th>
          </tr>
        </thead>
        <tbody>{emberek.map((i) => generateRow(i))}</tbody>
      </table>
    </>
  );
}

export default App;
