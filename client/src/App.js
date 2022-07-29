import React from "react";
import { Routes, Route } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AddSong from "./pages/AddSong";
import TopHits from "./pages/TopHits";
import Card from "./components/Card/Card";

import data from "./data"; 
// import Songs from './components/Songs';

const App = () => {
  return (
    <div>
      <Navbar />
      <Sidebar>
        <Routes>
          <Route exact path="/" />
          <Route exact path="/topsongs" element={<TopHits />} />
          <Route exact path="/addsong" element={<AddSong />} />
        </Routes>
      </Sidebar>
      <div className="song-container mt-7 ">
      {data.map((song) => 
            <Card album_pic={song.album_pic} name={song.name} released={song.released} />
          )}
      </div>
      
      
      {/* <Songs /> */}
    </div>
  );
};

export default App;
