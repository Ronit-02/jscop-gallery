import './App.css';
import Yearwise from "./components/Yearwise/Yearwise";

function App() {
  return (
    <div className="App">
      <h1>Gallery</h1>
      <Yearwise year="2018" imageLink="https://randomwordgenerator.com/img/picture-generator/55e0d0434c53a914f1dc8460962e33791c3ad6e04e507440722d72d29245c5_640.jpg" />
      <Yearwise year="2019" imageLink="https://randomwordgenerator.com/img/picture-generator/52e2dc424857b10ff3d8992cc12c30771037dbf85254784c772d7cd19e49_640.jpg" />
      <Yearwise year="2020" imageLink="https://randomwordgenerator.com/img/picture-generator/54e0dc4b434faa0df7c5d57bc32f3e7b1d3ac3e45659784b762979dd90_640.jpg" />
    </div>
  );
}

export default App;
