import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Room from "./room";

const url =
  "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";

function RoomList(props) {
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
      <Row>
        {rooms.map((s) => (
          <Room room={s} key={s.id} />
        ))}
      </Row>
    </div>
  );
}

export default RoomList;
