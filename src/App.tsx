import "./App.css";
import Home from "./Pages/HomePage/Home";
import About from "./Pages/AboutPage/About";
import Join from "./Pages/JoinPage/Join";
import Resource from "./Pages/ResourcePage/Resource";
import NoPage from "./Pages/NoPage";

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
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
