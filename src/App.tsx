import "./App.css";
import NavBar from "./components/NavBar";
import CardGroup from "./components/CardGroup";
import InfoPanelSlider from "./components/InfoPanelSlider";
import ScrollingCards from "./components/ScrollingCards";

import { TCar, TInfoPanel } from "./types/types";
import { useState } from "react";
import carData from "../cars.json";
import infoPanelData from "../infoPanels.json";

function App() {
  const [selectedCard, setSelectedCard] = useState(0);
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedInfoPanel, setSelectedInfoPanel] = useState(0);

  const cars: TCar[] = carData;
  const infoPanels: TInfoPanel[] = infoPanelData;

  const handleThumbnailClick = (index: number) => {
    setSelectedCard(index);
  };

  const handlePreviousInfoPanel = () => {
    setSelectedInfoPanel(
      selectedInfoPanel - 1 < 0 ? infoPanels.length - 1 : selectedInfoPanel - 1
    );
  };

  const handleNextInfoPanel = () => {
    setSelectedInfoPanel(
      selectedInfoPanel + 1 >= infoPanels.length ? 0 : selectedInfoPanel + 1
    );
  };

  return (
    <>
      <NavBar title="Car Rental" cartOption={selectedItem} />
      <CardGroup
        cards={cars}
        selectedCard={selectedCard}
        onThumbnailClick={handleThumbnailClick}
        onItemSelected={(item: string) => {
          setSelectedItem(item);
        }}
      />
      <InfoPanelSlider
        infoPanel={infoPanels[selectedInfoPanel]}
        onNextPanel={handleNextInfoPanel}
        onPreviousPanel={handlePreviousInfoPanel}
        selectedPanel={selectedInfoPanel}
        panelNumber={infoPanels.length}
      />
      <ScrollingCards cards={cars} />
    </>
  );
}

export default App;
