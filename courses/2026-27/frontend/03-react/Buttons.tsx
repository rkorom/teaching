import "./App.css";

const Buttons = () => {
  const submit = () => {
    alert("Ez egy üzenet");
  };

  const submit2 = (szoveg: string) => {
    alert(szoveg);
  };

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={() => alert("Ez egy üzenet")}>Ez egy gomb</button>
      <button
        onClick={() => {
          alert("Ez egy üzenet");
        }}
      >
        Ez egy gomb
      </button>
      <button onClick={() => submit()}>Ez egy gomb</button>
      <button onClick={submit}>Ez egy gomb</button>

      <button onClick={() => submit2("Ez egy üzenet")}>Ez egy gomb</button>
    </>
  );
}

export default Buttons;
