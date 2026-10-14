// useRef segítségével

import { useRef, useState } from "react";

const Penzvalto = () => {
  const osszegInput = useRef<HTMLInputElement>(null);
  const valutaSelect = useRef<HTMLSelectElement>(null);
  const [eredmeny, setEredmeny] = useState<string>("");

  const submit = () => {
    setEredmeny(`Eredmény: ${Number(osszegInput.current?.value)}`);
  };

  return (
    <>
      <h1>Pénzváltó</h1>

      <h2>Pénzösszeg (HUF):</h2>
      <input type="number" min={1} placeholder="HUF összeg" ref={osszegInput} />

      <select ref={valutaSelect}>
        <option>USD</option>
        <option>EUR</option>
      </select>

      <button onClick={submit}>Átváltás</button>

      <h3>{eredmeny}</h3>
    </>
  );
};

export default Penzvalto;
