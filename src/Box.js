import "./App.css";
export default function Box({ colorname, change }) {
  return (
    <div
      className="colorBox"
      style={{
        backgroundColor: colorname,
        color: change ? "black" : "white",
      }}
    >
      <p className="name"> {colorname ? colorname : "Empty Value"} </p>
    </div>
  );
}
