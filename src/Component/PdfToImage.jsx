import { useEffect, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
const PDFJS = window.pdfjsLib;

console.log(window.pdfjsLib);
const PdfToImage = () => {
  const [open, setOpen] = useState(false);
  const [pdf, setPdf] = useState("");
  const [width, setWidth] = useState(0);
  const [image, setImage] = useState("");
  const [height, setHeight] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [pdfRendering, setPdfRendering] = useState("");
  const [pageRendering, setPageRendering] = useState(false);

  console.log(pdf);

  async function showPdf(event) {
    try {
      setPdfRendering(true);
      const file = event.target.files[0];
      const uri = URL.createObjectURL(file);

      const _PDF_DOC = await PDFJS.getDocument({ url: uri });
      console.log(file, uri);
      setPdf(_PDF_DOC);
      setPdfRendering(false);
      setTotalPages(_PDF_DOC._pdfInfo.numPages);

      document.getElementById("file-to-upload").value = "";
    } catch (error) {
      alert(error.message);
    }
  }

  function changePage(page) {
    setCurrentPage(page);
  }

  async function renderPage() {
    setPageRendering(true);

    var page = await pdf.getPage(currentPage);

    var viewport = page.getViewport(currentPage);
    viewport.height = 600;
    viewport.width = 750;
    viewport.scale = 1;
    viewport.transform = [1, 0, 0, -1, 20, 750];
    var render_context = {
      canvasContext: document.querySelector("#pdf-canvas").getContext("2d"),
      viewport: viewport,
    };
    console.log("viewport", viewport);
    setWidth(viewport.height);
    setHeight(viewport.width);
    await page.render(render_context);

    var canvas = document.getElementById("pdf-canvas");
    var img = canvas.toDataURL("image/png");
    setImage(img);
    setPageRendering(false);
  }

  useEffect(() => {
    pdf && renderPage();
    // eslint-disable-next-line
  }, [pdf, currentPage]);

  return (
    <div className={`pdf-container ${open ? "h-100" : "h-vh"}`}>
      <div>
        <button
          className="custom-btn btn-tomato custom-btn-lg"
          id="upload-button"
          onClick={() => {
            document.getElementById("file-to-upload").click();
            setOpen(true);
          }}
        >
          Select PDF
        </button>
        <input
          type="file"
          id="file-to-upload"
          accept="application/pdf"
          hidden
          onChange={showPdf}
        />
        <div id="pdf-main-container">
          <div id="pdf-loader" hidden={!pdfRendering}>
            Loading document ...
          </div>
          {image && (
            <div id="pdf-meta" className="main-container">
              <div id="pdf-buttons">
                <button
                  className="custom-btn custom-btn-md btn-green"
                  id="pdf-prev"
                  onClick={() => {
                    if (currentPage > 1) {
                      changePage(currentPage - 1);
                    } else {
                      return null;
                    }
                  }}
                >
                  Previous
                </button>
                <button
                  className="custom-btn custom-btn-md btn-red"
                  id="pdf-next"
                  onClick={() => {
                    if (currentPage < totalPages) {
                      changePage(currentPage + 1);
                    } else {
                      return null;
                    }
                  }}
                >
                  Next
                </button>
              </div>
              <h3 id="page-count-container" className="page-text">
                Page {currentPage} of{" "}
                <span id="pdf-total-pages">{totalPages}</span>
              </h3>
            </div>
          )}
          <div id="pdf-contents">
            <div id="image-convas-row">
              <canvas id="pdf-canvas" width={width} height={height}></canvas>
              {image && (
                <img
                  id="image-generated"
                  src={image}
                  alt="pdfImage"
                  style={{ width: width, height: height }}
                />
              )}
            </div>
            <div id="page-loader" hidden={!pageRendering}>
              Loading page ...
            </div>

            {image && (
              <a href={image} download className="download-container">
                <div className="custom-btn btn-tomato custom-btn-lg download-box">
                  <AiOutlineDownload />
                  <span>Download This Page</span>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfToImage;
