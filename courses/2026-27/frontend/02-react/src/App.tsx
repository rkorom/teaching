import { useRef } from "react";

const App = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onBtnClick = () => {
    alert(inputRef.current?.value);
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Írj be valamit" />

      <button onClick={onBtnClick}>Érték lekérése</button>
    </div>
  );
};

export default App;
