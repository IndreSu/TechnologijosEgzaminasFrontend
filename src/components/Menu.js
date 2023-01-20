import { useState, useEffect } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

export function Menu() {
  return (
    <div className="Menu">
      <Link to="/notes">Notes list</Link>
      &nbsp;|&nbsp;
      <Link to="/create">Create new note</Link>
    </div>
  );
}
