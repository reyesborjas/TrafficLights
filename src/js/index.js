//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import TrafficLight from "./component/TrafficLight";

// include your styles into the webpack bundle
import "./component/TrafficLight.css";


//import your own components
<TrafficLight/>

//render your react application
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<TrafficLight />);

