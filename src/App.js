import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import Episodes from "./pages/Episodes";
import Location from "./pages/Location";
import "./App.css";
import CardDetail from "./components/Card/CardDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/:id"} element={<CardDetail />} />

        <Route path={"/episodes"} element={<Episodes />} />
        <Route path={"/episodes/:id"} element={<CardDetail />} />

        <Route path={"/location"} element={<Location />} />
        <Route path={"/location/:id"} element={<CardDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
