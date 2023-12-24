import React from "react";
import Box from "../../../components/box/Box";
import { CHALLENGE_DATA } from "../../../data/data";

function Challenges() {
  return (
    <div className="container-main spacing-6 grid-in-main">
      <div className="grid w-full grid-cols-3 gap-4 overflow-hidden sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
        {CHALLENGE_DATA.map((item) => (
          <Box key={item.day} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Challenges;
