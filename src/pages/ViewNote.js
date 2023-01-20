import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function ViewNote(props) {
  const [note, setNote] = useState({});

  const params = useParams();

  useEffect(() => {
    fetch("/notes/" + params.id)
      .then((response) => response.json())
      .then(setNote);
  }, [params.id]);

  return (
    <div>
      <div>
        <b>ID</b>
      </div>
      <div>{note.id}</div>

      <div>
        <b>Name</b>
      </div>
      <div>{note.name}</div>

      <div>
        <b>Text</b>
      </div>
      <div>{note.text}</div>

    </div>
  );
}
