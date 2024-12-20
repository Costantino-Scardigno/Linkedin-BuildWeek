import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

const SideBarHome = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  const fetchProfile = () => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYyYWQwMTUzMDRhNzAwMTUxNDhiZDgiLCJpYXQiOjE3MzQ1MjA1MjUsImV4cCI6MTczNTczMDEyNX0.jS3S2eLCdwy7VCt0Rw4QaZZcR28Jj0XYWNghDsz0NWU",
      },
    })
      .then(async (resp) => {
        if (!resp.ok) {
          const errorDetails = await resp.text();
          throw new Error(`Errore ${resp.status}: ${errorDetails}`);
        }
        return resp.json();
      })
      .then((data) => {
        setProfile(data);
      })
      .catch((err) => {
        console.error("Errore durante la fetch del profilo:", err.message);
        setError(err.message);
      });
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (error) {
    return <p>Errore: {error}</p>;
  }

  if (!profile) {
    return <p>Caricamento in corso...</p>;
  }

  return (
    <div className="d-flex flex-column col-3 mt-4 ">
      <Card className="mb-3 overflow-hidden">
        {/* Sfondo del profilo */}
        <a
          href="/in/filippo-boesso-113a42342/?trk=eml-email_interested_candidates_activation_single_01-profile_prompt-0-mercado"
          aria-label="Sfondo predefinito"
          className="d-flex flex-column mb-2 text-decoration-none"
        >
          <div
            className="profile-card-background-image profile-card-background-image--default"
            style={{
              height: "100px",
              backgroundColor: "#f0f0f0",
            }}
          ></div>
        </a>

        {/* Immagine del profilo */}
        <div className="position-absolute  picImage translate-middle">
          <Button
            className="rounded-circle w-100 p-0 pt-1 profile-card-profile-picture-container position-relative"
            variant="light"
          >
            <img
              src={profile.image}
              width="100"
              height="100"
              className="rounded-circle profile-card-profile-picture profile-card-profile-picture--ghost"
            />
          </Button>
        </div>

        {/* Dettagli del membro */}
        <Card.Body className="rounded-3 text-left mt-5">
          <a
            href="/in/filippo-boesso-113a42342/?trk=eml-email_interested_candidates_activation_single_01-profile_prompt-0-mercado"
            className="text-decoration-none text-dark"
          >
            <h3 className="profile-card-name text-heading-large fs-4">
              {profile.name + " " + profile.surname}
            </h3>
          </a>
          <p className="profile-card-headline text-muted mb-1">
            {profile.title}
          </p>
          <p className="text-muted mb-2">{profile.area}</p>
        </Card.Body>
      </Card>
      {/* Analisi */}
      <div className="card rounded-3 mb-3">
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <a href="/dashboard/" className="text-decoration-none text-black">
              Visualizza tutte le analisi
            </a>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <a
              href="/mynetwork/"
              className="text-decoration-none text-dark d-flex align-items-center"
            >
              <div>
                Collegamenti
                <div className="text-muted small ">Espandi la tua rete</div>
              </div>
              <i className="addPerson bi bi-person-fill-add ms-2"></i>
            </a>
          </li>
        </ul>
      </div>

      {/* Premium */}
      <div className="card rounded-3 mb-3">
        <div className="card-body">
          <h6 className="card-subtitle text-muted premium">
            Accedi a strumenti e informazioni in esclusiva
          </h6>
          <a
            href="https://www.linkedin.com/premium/products/"
            className="btn btn-link text-start p-0 mt-2 d-flex align-items-center text-decoration-none text-black fw-bold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-gem me-2"
              viewBox="0 0 16 16"
            >
              <path d="M3.1.5A.5.5 0 0 1 3.5 0h9a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.1.7L8.5 15a.5.5 0 0 1-.8 0L.7 5.4a.5.5 0 0 1-.1-.7l3-4zM4.6 1l-2.7 3.6L8 14.1l6.1-9.5L11.4 1H4.6z" />
            </svg>
            <span>Prova Premium per 0 EUR</span>
          </a>
        </div>
      </div>

      {/* Elementi salvati */}
      <div className="card rounded-3 mb-3 overflow-hidden p-3">
        <ul className="list-unstyled">
          {/* Elementi salvati */}
          <li className="mb-3">
            <a
              href="/my-items/"
              className="text-decoration-none text-dark d-flex align-items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bookmark-fill me-2"
                viewBox="0 0 16 16"
              >
                <path d="M2 2v13l6-3 6 3V2z" />
              </svg>
              <span>Elementi salvati</span>
            </a>
          </li>

          {/* Gruppi */}
          <li className="mb-3">
            <a
              href="https://www.linkedin.com/groups"
              className="text-decoration-none text-dark d-flex align-items-center"
            >
              <i className="bi bi-people-fill me-2"></i>
              <span>Gruppi</span>
            </a>
          </li>

          {/* Newsletter */}
          <li className="mb-3">
            <a
              href="https://www.linkedin.com/mynetwork/network-manager/newsletters"
              className="text-decoration-none text-dark d-flex align-items-center"
            >
              <i className="bi bi-newspaper text-black me-2"></i>
              <span>Newsletter</span>
            </a>
          </li>

          {/* Eventi */}
          <li>
            <a
              href="https://www.linkedin.com/events"
              className="text-decoration-none text-dark d-flex align-items-center"
            >
              <i className="bi bi-calendar4-event me-2"></i>
              <span>Eventi</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBarHome;
