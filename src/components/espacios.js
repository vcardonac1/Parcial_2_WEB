const url =
  "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";

function Espacio() {
  function getData(url, cb) {
    fetch(url)
      .then((response) => response.json())
      .then((result) => cb(result));
  }

  getData(url, (data) => console.log({ data }));

  return <div>Lista de spaces</div>;
}

export default Espacio;
