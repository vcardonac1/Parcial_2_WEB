import React from "react";
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import "./espacio.css";
import Room from "./room";

const url =
  "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";

function setImageSpace(type) {
  let icon;
  if (type === "house") {
    icon =
      "https://thumbs.dreamstime.com/b/house-vector-icon-home-logo-isolated-white-background-house-vector-icon-home-logo-vector-illustration-138343234.jpg";
  } else if (type === "loft") {
    icon =
      "https://previews.123rf.com/images/benchart/benchart1201/benchart120100008/11841728-ilustraci%C3%B3n-de-una-torre-de-dibujos-animados-de-creaci%C3%B3n-de-tiendas-con-piso-de-arriba-apartamentos.jpg";
  }

  return icon;
}

function Space(props) {
  const [spaces, setSpaces] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setSpaces(res);
      });
  }, []);

  return (
    <div>
      <h1>My Spaces</h1>
      <Row>
        {spaces.map((s) => (
          <Card style={{ width: "18rem", cursor: "pointer" }} onClick={()=>console.log(s.id)} key={s.id}>
            <div className="imageParent">
              <Card.Img
                variant="top"
                src={setImageSpace(s.type)}
                className="img"
              />
            </div>

            <Card.Body>
              <Card.Title>{s.name}</Card.Title>
              <Card.Text>{s.address}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>

      <Room />
    </div>
  );
}

export default Space;
