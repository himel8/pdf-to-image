import { useState } from "react";
import { AiOutlineFileText, AiOutlineFolder } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { TiPlus } from "react-icons/ti";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [openCate, setOpenCate] = useState(false);
  const [openGroup, setOpenGroup] = useState(false);
  const [openReport, setOpenReport] = useState(false);

  return (
    <div className="side-main-container">
      <div className={`sidebar-container ${open ? "width-27" : "width-2"}`}>
        <div className="menu-icon">
          {open ? (
            <ImCross onClick={() => setOpen(!open)} />
          ) : (
            <FiMenu onClick={() => setOpen(!open)} className="cross-icon" />
          )}
        </div>
        {open && (
          <>
            <div className="sidebar-menu-style">
              <TiPlus style={{ color: "#3294d6", fontWeight: 500 }} />{" "}
              <span>Add Category</span>
            </div>
            <div className="sidebar-menu-container">
              <div
                className="sidebar-menu-style"
                onClick={() => setOpenCate(!openCate)}
              >
                {openCate ? (
                  <MdOutlineKeyboardArrowDown />
                ) : (
                  <MdKeyboardArrowRight />
                )}
                <AiOutlineFolder
                  style={{ color: "#3294d6", fontWeight: 500 }}
                />
                <span>cat 123</span>
              </div>
              <div
                className={`sidbebar-sub-menu ${openCate ? "block" : "hidden"}`}
              >
                <div
                  className="sidebar-menu-style report-list-container"
                  onClick={() => setOpenGroup(!openGroup)}
                >
                  {openGroup ? (
                    <MdOutlineKeyboardArrowDown />
                  ) : (
                    <MdKeyboardArrowRight />
                  )}
                  <HiOutlineUserGroup
                    style={{ color: "#3294d6", fontWeight: 500 }}
                  />
                  <span>New CommunicationGroup</span>
                </div>
                <div
                  className={`sidebar-main-menu  ${
                    openGroup ? "block" : "hidden"
                  }`}
                >
                  <div className="custom-flex-beetween">
                    <div
                      className="sidebar-menu-style"
                      onClick={() => setOpenReport(!openReport)}
                    >
                      {openReport ? (
                        <MdOutlineKeyboardArrowDown />
                      ) : (
                        <MdKeyboardArrowRight />
                      )}
                      <AiOutlineFileText
                        style={{ color: "#3294d6", fontWeight: 500 }}
                      />
                      <span>Reports</span>
                    </div>
                    <TiPlus />
                  </div>
                </div>
                <div className={`menu-list ${openReport ? "block" : "hidden"}`}>
                  <Link to="/html-report">
                    <li>HTML Report</li>
                  </Link>
                  <Link to="/message-report">
                    <li>Message Report</li>
                  </Link>
                  <Link to="/whatsapp-report">
                    <li>WhatsApp Report</li>
                  </Link>
                  <Link to="/pdf-to-img">
                    {" "}
                    <li>Design on PDF</li>
                  </Link>
                  <Link to="/upload-word">
                    <li>Upload Word</li>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SideBar;
