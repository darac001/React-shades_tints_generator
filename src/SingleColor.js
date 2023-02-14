import React, { useState, useEffect } from "react";
// import rgbToHex from "./utils";
import Hover from "./Hover"

const SingleColor = (props) => {
  const { rgb, weight, index, hex, alpha } = props;
  // console.log(rgb);
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");



  useEffect(() => {
    let removeCopy = setInterval(() => {
      setAlert(false)
    }, 3000);
    // cleanup
    return () => clearInterval(removeCopy);
  }, [alert]);

  // console.log(bcg);

  // using rgb to hex function
  // using ...spread operator we can access each rgb value
  // const hex = rgbToHex(...rgb)
  // console.log(hex)

  return (
    <article
      // copy hex value on click
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
      }}
      
      className={"color"}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className="percent-value">{weight}%</p>
      {/* <p className="color-value">{hex}</p> */}
      {/* <p className="color-value">#{hex}</p> */}
      {alert && <p className="alert">copied to clipboard</p>}
      <Hover hex={hex} weight={weight} />
    </article>
  );
};

export default SingleColor;
