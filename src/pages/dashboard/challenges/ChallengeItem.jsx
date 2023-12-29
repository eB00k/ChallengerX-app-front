import React from "react";

function ChallengeItem({ id, title, description, target_day, current_day }) {
  const calculateRatioInPercentage = (all, part) => {
    return Math.round((part * 100) / all);
  };

  return (
    <div className="text-txt-white relative h-12 w-full overflow-hidden rounded-xl border-[1px] border-border-clr bg-dark-secondary text-lg">
      <div
        className=" full flex h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 p-4"
        style={{
          width: `${calculateRatioInPercentage(target_day, current_day)}%`,
        }}
      >
        <div className="absolute left-0 top-0 flex h-12 w-full items-center justify-between gap-4 px-4">
          <div className="flex-3 truncate"> {title}</div>
          <div className="flex-3 flex justify-end">
            {current_day}/{target_day}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChallengeItem;
