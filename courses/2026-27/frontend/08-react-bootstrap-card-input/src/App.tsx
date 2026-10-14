import { Button, Card, Col, Row } from "react-bootstrap";
import type { Pizza } from "./types/Pizza";
import { useState } from "react";
import { initPizza } from "./Pizzak";

const App = () => {
  const [allPizza, setAllPizza] = useState<Array<Pizza>>(initPizza);

  const [nev, setNev] = useState<string>("");
  const [leiras, setLeiras] = useState<string>("");
  const [ar, setAr] = useState<number>(0);

  const generateCard = (p: Pizza) => {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://tse1.mm.bing.net/th/id/OIP.I-TrGXBK4GKD38-9qUXbNgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        />
        <Card.Body>
          <Card.Title>{p.nev}</Card.Title>
          <Card.Text>{p.leiras}</Card.Text>
          <Card.Footer>{p.ar}</Card.Footer>
        </Card.Body>
      </Card>
    );
  };

  const submit = () => {
    const ujpizza: Pizza = {
      nev: nev,
      leiras,
      ar,
    };

    if (ar < 1000) {
      alert("Hiba! Túl olcsó pizza!");
    } else {
      setAllPizza([...allPizza, ujpizza]);
    }
  };

  return (
    <>
      <Row>
        <Col>{allPizza.map((p) => generateCard(p))}</Col>
        <Col>
          <input
            type="text"
            onChange={(e) => setNev(e.target.value)}
            placeholder="Név"
          />
          <br />
          <input
            type="text"
            onChange={(e) => setLeiras(e.target.value)}
            placeholder="Leírás"
          />
          <br />
          <input
            type="number"
            onChange={(e) => setAr(Number(e.target.value))}
            placeholder="Ár"
          />
          <br />
          <Button onClick={submit}>Gomb</Button>
        </Col>
      </Row>
    </>
  );
};

export default App;
