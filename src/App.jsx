import { useState } from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './components/Home';
import CreateNote from './components/CreateNote';
import Notes from './components/Notes';
import FindNote from './components/FindNote';
import UpdateNote from './components/UpdateNote';
import DeleteNote from './components/DeleteNote';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateNote />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/find/:id" element={<FindNote />} />
        <Route path="/update" element={<UpdateNote />} />
        <Route path="/delete" element={<DeleteNote />} />
      </Routes>
    </Router>
  );
}

export default App
