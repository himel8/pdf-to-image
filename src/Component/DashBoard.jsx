import { Link } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="main-container h-vh">
      <div className=" custom-btn-lg btn-tomato btn-link">
        <Link to="/pdf-to-img">Pdf to Image</Link>
      </div>
    </div>
  );
};

export default DashBoard;
