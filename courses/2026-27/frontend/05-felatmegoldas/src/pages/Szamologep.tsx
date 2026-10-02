// useState segítségével

import { useState } from "react";

const Szamologep = () => {
  const [elsoSzam, setElsoSzam] = useState<number>(0);
  const [masodikSzam, setMasodikSzam] = useState<number>(0);
  const [muvelet, setMuvelet] = useState<string>("+");
  const [eredmeny, setEredmeny] = useState<string>("");

  const submit = () => {
    console.log(elsoSzam, muvelet, masodikSzam);

    if (muvelet === "+") {
      setEredmeny(`Eredmény: ${elsoSzam + masodikSzam}`);
    } else if (muvelet === "-") {
      setEredmeny(`Eredmény: ${elsoSzam - masodikSzam}`);
    } else if (muvelet === "*") {
      setEredmeny(`Eredmény: ${elsoSzam * masodikSzam}`);
    } else if (muvelet === "/") {
      setEredmeny(`Eredmény: ${elsoSzam / masodikSzam}`);
    } else {
      alert("Hibás művelet!");
    }
  };

  return (
    <>
      <h1>Számológép</h1>

      <input
        type="number"
        placeholder="Első szám"
        onChange={(e) => setElsoSzam(parseInt(e.target.value))}
      />

      <select onChange={(e) => setMuvelet(e.target.value)}>
        <option>+</option>
        <option>-</option>
        <option>*</option>
        <option>/</option>
      </select>

      <input
        type="number"
        placeholder="Második szám"
        onChange={(e) => setMasodikSzam(parseInt(e.target.value))}
      />

      <button onClick={submit}>Számolás</button>

      <h2>{eredmeny}</h2>
    </>
  );
};

export default Szamologep;
