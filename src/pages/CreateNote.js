import { useState } from "react";
import { useHref } from "react-router-dom";



export function CreateNote(props) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const listUrl = useHref('/');

  const clear = () => {
    setName("");
    setText("");
  };

  const applyResult = (result) => {
    if (result.ok) {
      clear();
    } else {
      window.alert("Failed: " + result.status);
    }
  };
  
  const createNote = () => {
    fetch("/notes/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        text,
      }),
    }).then(applyResult)
    .then(() => window.location = listUrl);
  };

  return (
    <fieldset id="create">
      <legend>New note</legend>

      <div>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="text">Text: </label>
        <textarea
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <button onClick={createNote}>Create</button>
      </div>
    </fieldset>
  );
}
