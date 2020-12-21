import Nav from "./components/Nav/Nav.jsx";
import "./App.css";
import Title from "./components/Title/Title.jsx";
import PlantsCarousel from "./components/Plants/PlantsCarousel";
import Plant from "./components/Plants/Plant";
import NavResponsive from "./components/NavResponsive/NavResponsive";
import useWindowSize from "./components/Utils/Utils";
import { arrayPlants } from "./data";
import PlantCarousel from "./components/Plants/PlantsCarousel";

function App() {
  let size = useWindowSize();
  return (
    <div className="App">
      <div className="App__Nav">
        {size.width < 750 ? <NavResponsive size={size} /> : <Nav />}
      </div>

      <div className="Flex__Title">
        <Title size={size} />
      </div>

      <div className="Container__Flex__Plant">
        {size.width > 750 ? (
          <PlantsCarousel />
        ) : (
          <div>
            <Plant
              imgPlant={arrayPlants[0].img}
              index={1}
              text={arrayPlants[0].text}
              description={arrayPlants[0].description}
              classname="Unique__Plant"
            />
            <p className="Text__Top">Top of the week</p>
          </div>
        )}
        {size.width < 750 && <PlantCarousel />}
      </div>
    </div>
  );
}

export default App;
