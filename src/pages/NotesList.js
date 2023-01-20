import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export function NotesList(props) {
  const [notes, setNotes] = useState([]);
  const JSON_HEADERS = {
    "Content-Type": "application/json",
  };

  const fetchNotes = () => {
    fetch("/notes")
      .then((response) => response.json())
      .then((jsonResponse) => setNotes(jsonResponse));
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <h2>Notes</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Text</th>
          </tr>
        </thead>
        <body>
          {notes.map((note) => (
            <tr key={note.id}>
              <td>
                <Link to={"/notes/" + note.id}>{note.id}</Link>
              </td>
              <td>{note.name}</td>
              <td>{note.text}</td>
              <td>
              <Link to={'/create/comment/' + note.id}>
                <button>Read more</button></Link>
              </td>

            </tr>
          ))}
            
        </body>
      </table>
    </div>
  );
}
