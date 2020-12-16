import Nav from "./components/Nav/Nav.jsx";
import "./App.css";
import Title from "./components/Title/Title.jsx";
import PlantsCarousel from "./components/Plants/PlantsCarousel.jsx";

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
        <PlantsCarousel />
      </div>
    </div>
  );
}

export default App;
