import { Card, Carousel, Col, Row } from "react-bootstrap";
import type { Pizza } from "./types/Pizza";
import { useState } from "react";
import { initPizza } from "./Pizzak";

const App = () => {
  const [allPizza, setAllPizza] = useState<Array<Pizza>>(initPizza);

  const generateCard = (p: Pizza) => {
    return (
      <Col>
        <Card style={{ width: "18rem" }}>
          <Carousel interval={null}>
            {p.img.map((img) => (
              <Carousel.Item>
                <img src={img} width="100%" />
              </Carousel.Item>
            ))}
          </Carousel>
          <Card.Body>
            <Card.Title>{p.nev}</Card.Title>
            <Card.Text>{p.leiras}</Card.Text>
            <Card.Footer>{p.ar}</Card.Footer>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return (
    <>
      <Row>{allPizza.map((p) => generateCard(p))}</Row>
    </>
  );
};

export default App;
