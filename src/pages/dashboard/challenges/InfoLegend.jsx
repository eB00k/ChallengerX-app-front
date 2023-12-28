import CustomBox from "../../../components/box/CustomBox";
import { twMerge } from "tailwind-merge";
import { PERCENTAGE_COLORS as data } from "../../../data/data";

function InfoLegend() {
  function renderBoxes() {
    return Object.entries(data).map(([key, value]) => {
      return (
        <CustomBox
          key={key}
          tooltip={key}
          className={twMerge("h-4 min-h-4 w-4 min-w-4 rounded-sm", value)}
        />
      );
    });
  }

  return (
    <div className="flex items-center justify-end gap-1">
      <span className="text-sm">Low</span>
      <div className="flex gap-1">{renderBoxes()}</div>
      <span className="text-sm">More</span>
    </div>
  );
}

export default InfoLegend;
