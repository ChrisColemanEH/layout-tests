import React, { ChangeEventHandler, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./app.css";

function App() {
  const [theme, setTheme] = useState("light");
  const [useDark, setUseDark] = useState(false);

  useEffect(() => {
    if (useDark) setTheme("dark");
    else setTheme("light");
  }, [useDark]);

  function switchTheme(e: any) {
    if (useDark) setUseDark(false);
    else setUseDark(true);
  }

  return (
    <div className="App" data-theme={theme}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="checkbox" onChange={switchTheme} checked={useDark} />
      </header>
      <main className="">
        <div className="left-container">
          <div className="left-content-pad">
            <h2>Scrollable left grid container</h2>
            <ul>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
            </ul>
          </div>
        </div>
        <div className="right-container">
          <div className="right-content-pad">
            <h1>Hello World</h1>
            <ul>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
              <li>Lots of list items</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
