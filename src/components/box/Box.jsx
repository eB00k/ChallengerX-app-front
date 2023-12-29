import { twMerge } from "tailwind-merge";
import { PERCENTAGE_COLORS as colorData } from "../../data/data";

const getBoxColorClass = (percentage) => {
  // Ensure percentage is within 0-100 range for safety
  const clampedPercentage = Math.max(0, Math.min(percentage, 100));
  return colorData[Math.floor(clampedPercentage / 25) * 25];
};

function Box({ day, date, status, isDone, percentage }) {
  const defaultVariant = "box-default text-txt-white";
  const percentageColorVariant = getBoxColorClass(percentage);

  return (
    <div className={twMerge(defaultVariant, percentageColorVariant)}>
      <h3>{day}</h3>
      {/* <small>{date}</small> */}
    </div>
  );
}

export default Box;
