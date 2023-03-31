import React from "react";

export default function AnalogClock() {
  return (
    <>
      <span className="clock__twelve">12</span>
      <span className="clock__three">3</span>
      <span className="clock__six">6</span>
      <span className="clock__nine">9</span>
      <span className="clock__one">1</span>
      <span className="clock__two">2</span>
      <span className="clock__four">4</span>
      <span className="clock__five">5</span>
      <span className="clock__seven">7</span>
      <span className="clock__eight">8</span>
      <span className="clock__ten">10</span>
      <span className="clock__eleven">11</span>

      <div className="clock__rounder"></div>
      <div className="clock__hour" id="clock-hour"></div>
      <div className="clock__minutes" id="clock-minutes"></div>
      <div className="clock__seconds" id="clock-seconds"></div>
    </>
  );
}
