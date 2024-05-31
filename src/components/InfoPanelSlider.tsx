import InfoPanel from "./InfoPanel";
import { TInfoPanel } from "../types/types";

type Props = {
  infoPanel: TInfoPanel;
  onNextPanel: () => void;
  onPreviousPanel: () => void;
  selectedPanel: number;
  panelNumber: number;
};

const InfoPanelSlider = ({
  infoPanel,
  onNextPanel,
  onPreviousPanel,
  selectedPanel,
}: Props) => {
  const { image, title, description } = infoPanel;
  return (
    <div className="infoPanelSlider--container">
      <button onClick={onPreviousPanel}>Previous</button>
      <button onClick={onNextPanel}>Next</button>
      <p>{selectedPanel + 1}</p>
      <InfoPanel image={image} title={title}>
        {description}
      </InfoPanel>
    </div>
  );
};

export default InfoPanelSlider;
