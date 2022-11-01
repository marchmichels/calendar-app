import React, { useState } from "react";
import Month from "./components/Month";
import Week from "./components/Week";

export default function App() {


  const [view] = useState([<Month />, <Week />]);
  const [curView, setCurView] = useState(0);








  return (
    <div>

      <a href="https://github.com/marchmichels/calendar-app" target="_blank">View source on GitHub</a>


      <div>

        <button onClick={() => {
          setCurView(0);
        }}
        >
          Month View
        </button>

        <button onClick={() => {
          setCurView(1);
        }}
        >
          Week View
        </button>
      </div>
      {view[curView]}
    </div>
  );






}