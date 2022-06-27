import "./App.css";
import PdfToImage from "./Component/PdfToImage";

const PDFJS = window.pdfjsLib;

console.log(window.pdfjsLib);

function App() {
  return (
    <div className="App">
      <PdfToImage />
    </div>
  );
}

export default App;
