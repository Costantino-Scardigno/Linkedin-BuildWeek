import { useEffect, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { HiUsers } from "react-icons/hi2";
import { MdWork, MdTextsms } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import MainContent from "./MainContent";

const Mynavbar = () => {
  const [profile, setProfile] = useState(null);
  const [setError] = useState(null);
  const [showProfile, setShowProfile] = useState(false); // Stato per gestire la visibilità

  // Funzione per eseguire la fetch
  const FetchData = () => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYyYWQwMTUzMDRhNzAwMTUxNDhiZDgiLCJpYXQiOjE3MzQ1MjA1MjUsImV4cCI6MTczNTczMDEyNX0.jS3S2eLCdwy7VCt0Rw4QaZZcR28Jj0XYWNghDsz0NWU"
      }
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nella chiamata");
        }
      })
      .then((data) => {
        setProfile(data); // Aggiorna lo stato con i dati del profilo
      })
      .catch((err) => {
        console.error("Errore durante la fetch", err);
        setError(err.message); // Salva l'errore nel messaggio
      });
  };

  useEffect(() => {
    FetchData();
  }, []);

  // Funzione per gestire il click sul bottone profilo
  const handleProfileClick = () => {
    setShowProfile(!showProfile); // Alterna la visibilità
  };

  return (
    <div className="container-fluid ">
      <nav>
        <div className="row align-items-center">
          <div className="mt-1 mb-1 me-5 col-5 d-flex justify-content-end align-items-center">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="Logo" />

            <div className="ms-3">
              <InputGroup>
                <InputGroup.Text>
                  <FaSearch />
                </InputGroup.Text>
                <Form.Control placeholder="Cerca..." aria-label="Cerca" aria-describedby="search-icon" />
              </InputGroup>
            </div>
          </div>

          {/* Menu Icone */}
          <div className="mt-1 mb-1 col-3 d-flex justify-content-between align-items-center">
            <a className="nav-item" href="#">
              <AiFillHome className="fs-4 text-body-tertiary" />
              <p>Home</p>
            </a>
            <a className="nav-item" href="#">
              <HiUsers className="fs-4 text-body-tertiary" />
              <p>Rete</p>
            </a>
            <a className="nav-item" href="#">
              <MdWork className="fs-4 text-body-tertiary" />
              <p>Lavoro</p>
            </a>
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
              {" "}
              {/* Aggiunto onClick */}
              <img className="profile" src={profile && profile.image ? profile.image : "https://via.placeholder.com/150"} alt="Profile" />
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

      {/* Visualizza i dettagli del profilo */}
      {showProfile && profile && <MainContent profile={profile} />}
    </div>
  );
};

export default Mynavbar;
