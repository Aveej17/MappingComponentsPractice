import React from "react";
import emojipedia from "../emojipedia";
import Entity from "./Entry";

function MapCard(emoji) {
  return (
    <Entity
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      description={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(MapCard)}</dl>
    </div>
  );
}

export default App;
