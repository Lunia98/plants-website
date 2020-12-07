import Nav from "./components/Nav/Nav.jsx";
import "./App.css";
import Title from "./components/Title/Title.jsx";
import PlantCarousel from "./components/Plants/PlantCarousel.jsx";

function App() {
  return (
    <div className="App">
      <div className="App__Nav">
        <Nav />
      </div>
      <div className="Flex__Title">
        <Title />
      </div>
      <div className="Flex__Plant">
        <PlantCarousel />
      </div>
    </div>
  );
}

export default App;
