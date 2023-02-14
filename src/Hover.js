import React, { useState } from "react";

const HoverExample = (props) => {
  const { hex } = props;
  const HoverableDiv = ({ handleMouseOver, handleMouseOut }) => {
    return (
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <p className="color-value">#{hex}</p>
      </div>
    );
  };

  const HoverText = () => {
    return <div>Copy Hex</div>;
  };

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div>
      {/* Hover over this div to hide/show <HoverText /> */}
      <HoverableDiv
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
      />
      {isHovering && <HoverText />}
    </div>
  );
};

export default HoverExample;
