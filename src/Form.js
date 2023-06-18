import React from "react";
export default function Form({ colorname, setcolorname }) {
  return (
    <form className="colorForm">
      <input
        type="text"
        placeholder="Enter name of Color"
        value={colorname}
        onChange={(e) => setcolorname(e.target.value)}
      />
    </form>
  );
}
