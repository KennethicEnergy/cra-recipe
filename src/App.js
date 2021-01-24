import React from "react";
import SessionProvider from "./core/SessionProvider";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Recipe from "./components/recipe-list/recipe-list.component";

function App() {
  return (
    <div>
      <SessionProvider>
        <Recipe />
      </SessionProvider>
    </div>
  );
}

export default App;
