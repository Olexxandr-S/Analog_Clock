import React from "react";

export default function AnalogClock() {
  return (
    <>
      <span className="clock__twelve">1100</span>
      <span className="clock__three">11</span>
      <span className="clock__six">110</span>
      <span className="clock__nine">1001</span>
      <span className="clock__one">1</span>
      <span className="clock__two">10</span>
      <span className="clock__four">100</span>
      <span className="clock__five">101</span>
      <span className="clock__seven">111</span>
      <span className="clock__eight">1000</span>
      <span className="clock__ten">1010</span>
      <span className="clock__eleven">1011</span>

      <div className="clock__rounder"></div>
      <div className="clock__hour" id="clock-hour"></div>
      <div className="clock__minutes" id="clock-minutes"></div>
      <div className="clock__seconds" id="clock-seconds"></div>
    </>
  );
}
