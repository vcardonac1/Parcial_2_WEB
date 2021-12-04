import React from "react";
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import "./espacio.css";

const url =
  "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";

function setImageRoom(type) {
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

function setRooms(id){
  console.log("Setting rooms... " + id)
}

function Room(props) {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setRooms(res);
      });
  }, []);

  return (
    <div>
      <h1>My Rooms</h1>
      <Row>
        {rooms.map((s) => (
          <Card style={{ width: "18rem"}} key={s.id}>
            <div className="imageParent">
              <Card.Img
                variant="top"
                src={setImageRoom(s.type)}
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
    </div>
  );
}

export default Room;
