import { Container } from "react-bootstrap";
import { ImPencil } from "react-icons/im";
import { FaEye, FaChartBar, FaSearch } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { GoArrowRight } from "react-icons/go";
import { useEffect, useState } from "react";
import SideBar from "./SideBar";

const MainContent = () => {
  // Stati per la prima fetch
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  // Stati per la seconda fetch
  const [secondData, setSecondData] = useState(null);
  const [secondError, setSecondError] = useState(null);

  // Funzione per la prima fetch (profilo utente)
  const fetchProfile = () => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYyYWQwMTUzMDRhNzAwMTUxNDhiZDgiLCJpYXQiOjE3MzQ1MjA1MjUsImV4cCI6MTczNTczMDEyNX0.jS3S2eLCdwy7VCt0Rw4QaZZcR28Jj0XYWNghDsz0NWU",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nella chiamata del profilo");
        }
      })
      .then((data) => {
        setProfile(data);
      })
      .catch((err) => {
        console.error("Errore durante la fetch del profilo", err);
        setError(err.message);
      });
  };

  // Funzione per la seconda fetch (esperienze o un'altra API)
  const fetchSecondData = () => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/6762ad015304a70015148bd8/experiences`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYyYWQwMTUzMDRhNzAwMTUxNDhiZDgiLCJpYXQiOjE3MzQ1MjA1MjUsImV4cCI6MTczNTczMDEyNX0.jS3S2eLCdwy7VCt0Rw4QaZZcR28Jj0XYWNghDsz0NWU",
        },
      }
    )
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nella chiamata dei dati secondari");
        }
      })
      .then((data) => {
        setSecondData(data);
      })
      .catch((err) => {
        console.error("Errore durante la fetch dei dati secondari", err);
        setSecondError(err.message);
      });
  };

  useEffect(() => {
    fetchProfile(); // Prima fetch per il profilo
    fetchSecondData(); // Seconda fetch per le esperienze
  }, []); // Entrambe le fetch vengono eseguite al caricamento del componente

  if (!profile || !secondData) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <main className="row">
        <section className="col-8 mt-3">
          {/* Contenuto Profilo */}
          <div className="sect rounded">
            <img
              className="imgp rounded-circle"
              src={profile.image || "default-image-url.jpg"}
              alt="Profile"
            />
          </div>
          <div className="bg-white h-my rounded">
            <div className="ms-3">
              <h3 className="ms-2 pt-3">
                {profile.name + " " + profile.surname}
              </h3>
              <span className="ms-2">{profile.title}</span>
              <span className="text-body-tertiary ms-2 d-block">
                {profile.area}
              </span>
              <p className="text-primary ms-2">211 Collegamenti</p>
            </div>
            <div className="d-inline ms-3">
              <button
                id="my-btn"
                className="my-btn btn ms-2 rounded-pill text-white fw-semibold"
              >
                Disponibile per
              </button>
            </div>
            <div className="d-inline">
              <button className="ms-2 btn border border-primary my-bg rounded-pill text-primary fw-semibold">
                Aggiungi sezione del profilo
              </button>
            </div>
            <div className="d-inline">
              <button className="ms-2 btn border border-primary my-bg rounded-pill text-primary fw-semibold">
                Migliora profilo
              </button>
            </div>
            <div className="d-inline">
              <button className="ms-2 btn border border-secondary my-bg2 rounded-pill text-secondary-emphasis fw-semibold">
                Risorse
              </button>
            </div>
            <div className="m-3 bg-primary-subtle rounded w-75 p-3">
              <div className="d-flex justify-content-between">
                <h6 className="lh-1">Disponibile a lavorare</h6>
                <ImPencil />
              </div>
              <p>
                Ruoli di Sviluppatore web junior, Sviluppatore web frontend e
                Sviluppatore backend
              </p>
            </div>
          </div>

          {/* Sezione Analisi */}
          <div className="mt-2 bg-white rounded">
            <div className="row p-3">
              <div className="d-flex flex-column lh-1 mb-3">
                <h5 className="lh-1 mb-1">Analisi</h5>
                <p className="lh-1 mb-1 text-body-tertiary">
                  <FaEye className="me-2" />
                  Solo per te
                </p>
              </div>
              <div className="col-4 d-flex align-items-start">
                <HiUsers className="me-2 fs-2" />
                <div className="d-flex flex-column">
                  <h6 className="mb-1 fw-semibold">
                    53 visualizzazioni del profilo
                  </h6>
                  <p className="mb-1">Scopro chi ha visitato il tuo profilo</p>
                </div>
              </div>
              <div className="col-4 d-flex align-items-start">
                <FaChartBar className="me-2 fs-2" />
                <div className="d-flex flex-column lh-1">
                  <h6 className="mb-1 fw-semibold">0 impressioni del post</h6>
                  <p className="mb-1">
                    Crea un post per aumentare l’interesse.
                  </p>
                </div>
              </div>
              <div className="col-4 d-flex align-items-start">
                <FaSearch className="me-2 fs-2" />
                <div className="d-flex flex-column lh-1">
                  <h6 className="mb-1 fw-semibold">
                    4 comparse nei motori di ricerca
                  </h6>
                  <p className="mb-1">
                    Vedi quante volte compari nei risultati di ricerca.
                  </p>
                </div>
              </div>
            </div>
            <button className="border-top p-2 w-100 text-secondary fw-semibold rounded-bottom">
              Mostra altri dati analisi <GoArrowRight className="fs-5" />
            </button>
          </div>

          {/* Esperienza */}
          <div className="mt-2 bg-white rounded">
            <div className="ms-3 d-flex align-items-center justify-content-between">
              <h5 className="pt-3 fs-4">Esperienza</h5>
              <div className="d-flex m-2">
                <ImPencil className="fs-5" />
              </div>
            </div>
            {/* Mostra esperienza dalla seconda fetch */}
            {secondError && (
              <p className="text-danger ms-3">
                Errore nel caricamento: {secondError}
              </p>
            )}
            {secondData ? (
              secondData.map((experience, index) => (
                <div className="d-flex p-3 border-bottom" key={index}>
                  <img
                    className="w-img-esp me-3"
                    src={experience.image || "default-image-url.jpg"}
                    alt="Experience"
                  />
                  <div className="d-flex flex-column lh-1">
                    <h6 className="lh-1 mb-1">{experience.role}</h6>
                    <p className="lh-1 mb-1">{experience.company}</p>
                    <p className="lh-1 mb-1 text-body-tertiary">
                      {experience.startDate} - {experience.endDate}
                    </p>
                    <p className="lh-1 mb-1 text-body-tertiary">
                      {experience.area}
                    </p>
                    <p className="mt-2">{experience.description}</p>
                    <a className="fw-semibold lh-1" href="#">
                      <RiVipDiamondFill className="me-2 " />
                      Leaders,Vendita diretta e +19 competenze
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p className="ms-3">Caricamento esperienze...</p>
            )}
          </div>
        </section>

        {/* Sidebar */}
        <SideBar />
      </main>
    </Container>
  );
};

export default MainContent;
