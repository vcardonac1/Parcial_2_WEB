const url =
  "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";

function Room() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("ROOMS:");
      console.log(data);
    });

  return (
    <div>
      <h4>Lista de Rooms</h4>
    </div>
  );
}

export default Room;
