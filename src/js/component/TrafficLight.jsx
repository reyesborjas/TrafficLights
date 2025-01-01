import React, { useState } from "react";
import "./TrafficLight.css";

const TrafficLight = () => {
  const [selectedColor, setSelectedColor] = useState("red");

  const lights = [
    { color: "red", IsActive: selectedColor === "red" },
    { color: "yellow", IsActive: selectedColor === "yellow" },
    { color: "green", IsActive: selectedColor === "green" },
  ];

  return (
    <div className="traffic-light-container">
      <div className="traffic-light">
        {lights.map((light, index) => (
          <div
            key={index}
            className={`light ${light.IsActive ? light.color : ""}`}
            onClick={() => setSelectedColor(light.color)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TrafficLight;
