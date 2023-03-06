import React from "react";
import "./App.css";
import { useGlobalContext } from "@/context/GlobalContext";

const App = () => {
  const test = useGlobalContext();
  console.log("test", test);
  return <div className="App"></div>;
};

export default App;
