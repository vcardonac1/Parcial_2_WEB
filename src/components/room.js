import React from "react";
import { Card } from "react-bootstrap";
import "./espacio.css";

function setImage(type) {
  let icon;
  if (type === "kitcken") {
    icon =
      "https://png.pngtree.com/element_our/20200610/ourlarge/pngtree-kitchen-utensils-image_2238008.jpg";
  } else {
    icon =
      "https://png.pngtree.com/png-clipart/20190117/ourlarge/pngtree-yellow-sofa-furniture-sofa-home-improvement-sofa-yellow-backrest-png-image_415071.jpg";
  }

  return icon;
}

function Room(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.room.name}</Card.Title>
      </Card.Body>
      <div className="imageParent">
        <Card.Img
          variant="top"
          src={setImage(props.room.type)}
          className="img"
        />
      </div>
    </Card>
  );
}

export default Room;
