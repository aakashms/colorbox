import { useState } from "react";
import "./App.css";
import Box from "./Box";
import Button from "./Button";
import Form from "./Form";

function App() {
  const [colorname, setcolorname] = useState("");
  const [change, setchange] = useState(true);

  return (
    <div className="App">
      <Box colorname={colorname} change={change} />
      <Form colorname={colorname} setcolorname={setcolorname} />
      <Button setchange={setchange} />
    </div>
  );
}

export default App;
