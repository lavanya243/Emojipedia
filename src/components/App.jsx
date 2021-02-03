import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function createCard(c) {
  return (
    <Entry key={c.id} emoji={c.emoji} name={c.name} description={c.meaning} />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
