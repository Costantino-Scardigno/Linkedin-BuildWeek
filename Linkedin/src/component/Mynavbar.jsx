import { useEffect, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { MdWork, MdTextsms, MdHome } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const Mynavbar = () => {
  const navigate = useNavigate();

  // Funzione per gestire il click sul bottone profilo
  const handleProfileClick = () => {
    navigate("/profile"); // Naviga verso la pagina del profilo
  };

  return (
    <div className="container-fluid ">
      <nav>
        <div className="row align-items-center">
          <div className="mt-1 mb-1 me-5 col-5 d-flex justify-content-end align-items-center">
            <img
              className="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
              alt="Logo"
            />

            <div className="ms-3">
              <InputGroup>
                <InputGroup.Text>
                  <FaSearch />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Cerca..."
                  aria-label="Cerca"
                  aria-describedby="search-icon"
                />
              </InputGroup>
            </div>
          </div>

          {/* Menu Icone */}
          <div className="mt-1 mb-1 col-3 d-flex justify-content-between align-items-center">
            <Link className="nav-item " to="/">
              <MdHome className="fs-3 text-body-tertiary" />
              <p>Home</p>
            </Link>
            <a className="nav-item" href="#">
              <HiUsers className="fs-4 text-body-tertiary" />
              <p>Rete</p>
            </a>
            <Link className="nav-item " to="jobs">
              <MdWork className="fs-3 text-body-tertiary" />
              <p>Lavoro</p>
            </Link>
            <a className="nav-item" href="#">
              <MdTextsms className="fs-4 text-body-tertiary" />
              <p>Messaggistica</p>
            </a>
            <a className="nav-item" href="#">
              <FaBell className="fs-4 text-body-tertiary" />
              <p>Notifiche</p>
            </a>
          </div>
          <div className="d-flex col-3 align-items-center">
            <button onClick={handleProfileClick}>
              {/* Aggiunto onClick */}
              <img
                className="profile"
                src="https://epicode-testapi-bucket.s3.eu-south-1.amazonaws.com/1734612163411-myimg2.jpg"
                alt="Profile"
              />
              <span className="t-12">
                Tu <IoMdArrowDropdown className="text-black fs-5" />
              </span>
            </button>
            <button className="border-start">
              <BsFillGrid3X3GapFill />
              <span className="t-12">
                Per le aziende <IoMdArrowDropdown className="text-black fs-5" />
              </span>
            </button>
            <a className="linkpremium" href="#">
              Prova Premium per 0 EUR
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Mynavbar;
