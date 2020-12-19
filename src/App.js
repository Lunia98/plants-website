import Nav from "./components/Nav/Nav.jsx";
import "./App.css";
import Title from "./components/Title/Title.jsx";
import PlantsCarousel from "./components/Plants/PlantsCarousel.jsx";
import NavResponsive from "./components/NavResponsive/NavResponsive";
import useWindowSize from "./components/Utils/Utils";

function App() {
  let size = useWindowSize();
  return (
    <div className="App">
      <div className="App__Nav">
        {size.width < 750 ? <NavResponsive size={size} /> : <Nav />}
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
