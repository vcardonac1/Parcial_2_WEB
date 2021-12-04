import { useEffect, useState } from "react";
import Espacio from "./espacio";
import { Row } from "react-bootstrap";

const url =
  "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";

function EspacioList(props) {
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
      <Row>
        {spaces.map((s) => (
          <Espacio onClickSetRooms={props.onSelect} space={s} key={s.id}/>
        ))}
      </Row>
    </div>
  );
}

export default EspacioList;
