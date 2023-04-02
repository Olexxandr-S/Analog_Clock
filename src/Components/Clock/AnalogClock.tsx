import React from "react";
import Dial from "./Dial";

export default function AnalogClock({ theme }: { theme: Boolean }) {
  return (
    <>
      <Dial theme={theme}/>

      <div className="clock__rounder"></div>
      <div className="clock__hour" id="clock-hour"></div>
      <div className="clock__minutes" id="clock-minutes"></div>
      <div className="clock__seconds" id="clock-seconds"></div>
    </>
  );
}
