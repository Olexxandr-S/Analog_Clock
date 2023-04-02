import React from "react";
const twelveDark = require("../../Assets/twelve-dark.png");
const oneDark = require("../../Assets/one-dark.png");
const twoDark = require("../../Assets/two-dark.png");
const threeDark = require("../../Assets/three-dark.png");
const fourDark = require("../../Assets/four-dark.png");
const fiveDark = require("../../Assets/five-dark.png");
const sixDark = require("../../Assets/six-dark.png");
const sevenDark = require("../../Assets/seven-dark.png");
const eightDark = require("../../Assets/eight-dark.png");
const nineDark = require("../../Assets/nine-dark.png");
const tenDark = require("../../Assets/ten-dark.png");
const elevenDark = require("../../Assets/eleven-dark.png");
const twelve = require("../../Assets/twelve.png");
const one = require("../../Assets/one.png");
const two = require("../../Assets/two.png");
const three = require("../../Assets/three.png");
const four = require("../../Assets/four.png");
const five = require("../../Assets/five.png");
const six = require("../../Assets/six.png");
const seven = require("../../Assets/seven.png");
const eight = require("../../Assets/eight.png");
const nine = require("../../Assets/nine.png");
const ten = require("../../Assets/ten.png");
const eleven = require("../../Assets/eleven.png");

const Dial = ({ theme }: { theme: Boolean }) => {
  return (
    <>
      <span className="clock__twelve">
        <img src={!theme ? twelve : twelveDark} alt="twelve" />
      </span>
      <span className="clock__three">
        <img src={!theme ? three : threeDark} alt="three" />
      </span>
      <span className="clock__six">
        <img src={!theme ? six : sixDark} alt="six" />
      </span>
      <span className="clock__nine">
        <img src={!theme ? nine : nineDark} alt="nine" />
      </span>
      <span className="clock__one">
        <img src={!theme ? one : oneDark} alt="one" />
      </span>
      <span className="clock__two">
        <img src={!theme ? two : twoDark} alt="two" />
      </span>
      <span className="clock__four">
        <img src={!theme ? four : fourDark} alt="four" />
      </span>
      <span className="clock__five">
        <img src={!theme ? five : fiveDark} alt="five" />
      </span>
      <span className="clock__seven">
        <img src={!theme ? seven : sevenDark} alt="seven" />
      </span>
      <span className="clock__eight">
        <img src={!theme ? eight : eightDark} alt="eight" />
      </span>
      <span className="clock__ten">
        <img src={!theme ? ten : tenDark} alt="ten" />
      </span>
      <span className="clock__eleven">
        <img src={!theme ? eleven : elevenDark} alt="eleven" />
      </span>
    </>
  );
};

export default Dial;
