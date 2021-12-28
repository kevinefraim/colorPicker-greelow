import { useState, useEffect } from "react";
import "./colorPicker.css";

const ColorPicker = () => {
  const [inputColor, setInputColor] = useState("#fff"); //Declarando estado del input de color

  return (
    <div className="container-input" style={{ backgroundColor: inputColor }}>
      <div className="card">
        <h2>Color Picker</h2>
        <div className="form-picker">
          <input
            type="color"
            value={inputColor.value}
            onChange={(e) => setInputColor(e.target.value)}
            className="form-width"
          />
          <p className="m-2 w-75 border border-dark p-2 form-width">
            {inputColor}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
