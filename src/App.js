import React from "react";
import "./App.css";
import useContentful from "./useContentful";
import { useEffect, useState } from "react";
import Mobile from "./Mobile";

function App() {
  const [view, setView] = useState([]);
  const { getHomeView } = useContentful();

  useEffect(() => {
    getHomeView().then((response) => {
      setView(response);
    });
  });

  return (
    <>
      {view.map((home, index) => (
        <Mobile key={index} home={home} />
      ))}
      {/* {view.map((home, index) => (
        <ul key={index}>
          <li>{home.backgroundImage.fields.file.url}</li>
          <li>{home.logo.fields.file.url}</li>
        </ul>
      ))} */}
    </>
  );
}

export default App;
