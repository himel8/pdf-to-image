import { Route, Routes } from "react-router-dom";
import CommingSoon from "../Component/CommingSoon";
import PdfToImage from "../Component/PdfToImage";
import SideBar from "../Component/SideBar";
const Home = () => {
  return (
    <>
      <SideBar />
      <Routes>
        <Route path="/pdf-to-img" element={<PdfToImage />} />
        <Route path="/html-report" element={<CommingSoon />} />
        <Route path="/message-report" element={<CommingSoon />} />
        <Route path="/whatsapp-report" element={<CommingSoon />} />
        <Route path="/upload-word" element={<CommingSoon />} />
      </Routes>
    </>
  );
};

export default Home;
