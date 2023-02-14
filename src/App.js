import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";
// https://github.com/noeldelgado/values.js

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [step, setStep] = useState(10);
  const [list, setList] = useState(new Values("#222").all(10));
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setStep(step);
      let colors = new Values(color).all(parseInt(step));
      console.log(step);
      console.log(colors);
      setList(colors);
      setError(false);
      // console.log(colors);
    } catch (error) {
      setError(true);
      // console.log(error)
    }
  };

  return (
    <main>
      <section className="container">
        <h3>HEX shades/tints color generator</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <label htmlFor="hex">Enter hex color code : </label>
            <input
              type="text"
              name="hex"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder="#f15025"
              className={`${error ? "error" : null}`}
            />
          </div>
          <div className="input-box">
            <label htmlFor="step">Enter step 0-100 : </label>
            <input
              type="number"
              name="step"
              value={step}
              onChange={(e) => setStep(e.target.value)}
              placeholder="10"
              className={`${error ? "error" : null}`}
            />
          </div>
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <p>Click to copy the Hex code</p>

      <section className="colors">
        {list.map((color, index) => {
          // console.log(color);
          const hex = color.hex;
          // using ... spread operator we can access rgb,alpha,type and weight from color object
          return <SingleColor key={index} {...color} hex={hex} index={index} />;
        })}
      </section>
    </main>
  );
}

export default App;
