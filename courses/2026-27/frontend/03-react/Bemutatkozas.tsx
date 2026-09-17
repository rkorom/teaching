type Props = {
  id?: number;
  nev: string;
  kor: number;
};

const Bemutatkozas = (props: Props) => {
  return (
    <>
      <h1>Hello {props.nev}!</h1>
      <hr />
      <h1>Azonosító: {props.id ?? <>N/A</>}</h1>
      {props.id ? <>Azonosító: {props.id}</> : <>N/A</>}
      <hr />
      <h2>Te {props.kor} éves vagy!</h2>
      <hr />
      {props.kor < 18 ? (
        <p style={{ color: "red" }}>Te fiatalkorú vagy!</p>
      ) : (
        <>Te felnőtt vagy!</>
      )}
    </>
  );
};

export default Bemutatkozas;
