import React from "react";

export default function AnalogClock() {
  return (
    <>
      <span className="clock__twelve">1!&#183;2!&#183;3!</span>
      <span className="clock__three">(-1+2)&#183;3</span>
      <span className="clock__six">1+2+3</span>
      <span className="clock__nine">1+2&sup3;</span>
      <span className="clock__one">1+2/3</span>
      <span className="clock__two">1-2+3</span>
      <span className="clock__four">1&sup2;+3</span>
      <span className="clock__five">1&#183;2+3</span>
      <span className="clock__seven">1+2&#183;3</span>
      <span className="clock__eight">1&#183;2&sup3;</span>
      <span className="clock__ten">&#8739;12-&radic;3&#8739;</span>
      <span className="clock__eleven">-1+2&#183;3!</span>

      <div className="clock__rounder"></div>
      <div className="clock__hour" id="clock-hour"></div>
      <div className="clock__minutes" id="clock-minutes"></div>
      <div className="clock__seconds" id="clock-seconds"></div>
    </>
  );
}
