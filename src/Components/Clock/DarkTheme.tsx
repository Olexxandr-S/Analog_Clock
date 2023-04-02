import React from "react";

export default function DarkTheme({
  theme,
  toggleClass,
}: {
  theme: Boolean;
  toggleClass: any;
}) {
  return (
    <div className="clock__theme" onClick={toggleClass}>
      {theme ? <i className="bx bxs-sun"></i> : <i className="bx bxs-moon"></i>}
    </div>
  );
}
