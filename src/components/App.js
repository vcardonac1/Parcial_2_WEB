import EspacioList from "./espaciosList";
import RoomList from "./roomsList";

//import Lists from "./lists";

let spaceId = "H002";

function setRooms(id) {
  console.log("setting rooms... " + id)
  spaceId = id;
}


function App() {
  return (
    <div>
      <h1>My spaces</h1>
      <EspacioList onSelect = {setRooms} />
      <h1>My Rooms</h1>
      <RoomList space = {spaceId} function={setRooms} />
    </div>
  );
}

export default App;
