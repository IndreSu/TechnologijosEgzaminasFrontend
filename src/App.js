import React from "react";
import { useState } from "react";
import { Menu } from "./components/Menu";

import { CreateNote } from "./pages/CreateNote";
import { LeaveComment } from "./pages/LeaveComment";
import { HashRouter, Route, Routes } from "react-router-dom";
import {NotesList} from "./pages/NotesList";
import {ViewNote} from "./pages/ViewNote";


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/notes/" element={<NotesList />} />
          <Route path="/create/" element={<CreateNote />} />
          <Route path="/create/comment/:id" element={<LeaveComment/>} />
          <Route path="/notes/view/:id" element={<ViewNote />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
