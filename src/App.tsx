import "./App.css";
import Home from "./Pages/HomePage/Home";
import About from "./Pages/AboutPage/About";
import Join from "./Pages/JoinPage/Join";
import Resource from "./Pages/ResourcePage/Resource";
import NoPage from "./Pages/NoPage";
import SongPrayer from "./Pages/ResourcePage/SongPrayer";
import NewAdult from "./Pages/ResourcePage/NewAdult";
import TNTTSongs from "./Pages/ResourcePage/TNTTSongs";
import PermSlips from "./Pages/ResourcePage/PermSlips";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/join" element={<Join />} />
          <Route path="/resources" element={<Resource />} />
          <Route path="/songpray" element={<SongPrayer />} />
          <Route path="/newadult" element={<NewAdult/>} />
          <Route path="/permslip" element={<TNTTSongs />} />
          <Route path="/tnttsongs" element={<PermSlips />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
