import { useState } from "react";
import { useHref } from "react-router-dom";

export function LeaveComment(props) {
  const [text, setText] = useState("");

  const listUrl = useHref("/");

  const clear = () => {
    setText("");
  };

  const applyResult = (result) => {
    if (result.ok) {
      clear();
    } else {
      window.alert("Failed: " + result.status);
    }
  };

  const leaveComment = () => {
    fetch("/{noteId}/comment/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
      }),
    })
      .then(applyResult)
      .then(() => (window.location = listUrl));
  };

  return (
    <fieldset id="create">
      <legend>Leave comment</legend>

      <div>
        <label htmlFor="text">Text: </label>
        <textarea
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <button onClick={leaveComment}>Leave comment</button>
      </div>
    </fieldset>
  );
}
