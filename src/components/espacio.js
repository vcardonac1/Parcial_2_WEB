import React from "react";
import { Card } from "react-bootstrap";
import "./espacio.css";

function setImage(type) {
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

function Espacio(props) {
  return (
    <Card
      style={{ width: "18rem", cursor: "pointer" }}
      onClick={() => props.onClickSetRooms(props.space.id)}
    >
      <div className="imageParent">
        <Card.Img
          variant="top"
          src={setImage(props.space.type)}
          className="img"
        />
      </div>

      <Card.Body>
        <Card.Title>{props.space.name}</Card.Title>
        <Card.Text>{props.space.address}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Espacio;
