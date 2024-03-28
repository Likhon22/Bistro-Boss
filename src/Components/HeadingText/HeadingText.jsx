import React from "react";

const HeadingText = ({
  headingText,
  subText,
  headingTextColor = "black",
  subTextColor = "#D99904",
}) => {
  return (
    <div className="flex flex-col justify-center gap-1 items-center py-12">
      <p
        className="font-medium text-lg border-b-2 pb-2"
        style={{ color: subTextColor }}
      >
        ---{subText}---
      </p>

      <h3
        className="font-semibold  text-3xl uppercase border-b-2 pb-2"
        style={{ color: headingTextColor }}
      >
        {headingText}
      </h3>
    </div>
  );
};

export default HeadingText;
