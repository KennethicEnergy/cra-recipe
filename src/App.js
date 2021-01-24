import React from "react";
import Api from "./core/Api";
import "./App.css";

const api = new Api();
const recipes = api.getRecipes();
const specials = api.getSpecials();

function App() {
  return <div>I'm in</div>;
}

export default App;
