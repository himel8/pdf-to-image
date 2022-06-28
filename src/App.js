import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
const PDFJS = window.pdfjsLib;

console.log(window.pdfjsLib);

function App() {
  return (
    <div className="App custom-head">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
