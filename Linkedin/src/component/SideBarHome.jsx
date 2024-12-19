import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Image } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const SideBarHome = () => {
  return (
    <div className="d-flex flex-column col-3 mt-4 ">
      {/* Barra Laterale */}
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
              backgroundColor: "#f0f0f0"
            }}
          ></div>
        </a>

        {/* Immagine del profilo */}
        <div className="position-absolute  picImage translate-middle">
          <Button className="rounded-circle profile-card-profile-picture-container position-relative" aria-label="Aggiungi foto" variant="light">
            <Image
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              roundedCircle
              width="60"
              height="52"
              className="profile-card-profile-picture profile-card-profile-picture--ghost"
            />
            <div className="profile-card-empty-state-overlay profile-card-empty-state-overlay--circle"></div>
            <div className="profile-card-profile-picture-add--icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 1a7 7 0 1 0 7 7A7 7 0 0 0 8 1zM7 7V3h2v4h3v2H9v4H7V9H4V7Z" />
              </svg>
            </div>
          </Button>
        </div>

        {/* Dettagli del membro */}
        <Card.Body className="text-left mt-5">
          <a
            href="/in/filippo-boesso-113a42342/?trk=eml-email_interested_candidates_activation_single_01-profile_prompt-0-mercado"
            className="text-decoration-none text-dark"
          >
            <h3 className="profile-card-name text-heading-large">Filippo Boesso</h3>
          </a>
          <p className="profile-card-headline text-muted mb-1">Personal trainer certificato presso privato</p>
          <p className="text-muted mb-2">Borgoricco, Veneto</p>
          <a
            href="/in/filippo-boesso-113a42342/?trk=eml-email_interested_candidates_activation_single_01-profile_prompt-0-mercado"
            className="text-decoration-none text-dark"
          >
            <p className="profile-card-position-details text-body-xsmall d-flex align-items-start">
              <Image
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                roundedCircle
                width="20"
                height="20"
                className="me-2"
                alt="Logo aziendale"
              />
              <strong>privato</strong>
            </p>
          </a>
        </Card.Body>
      </Card>

      {/* Analisi */}
      <div className="card rounded-4 mb-3">
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <a href="/dashboard/" className="text-decoration-none text-black">
              Visualizza tutte le analisi
            </a>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <a href="/mynetwork/" className="text-decoration-none text-dark d-flex align-items-center">
              <div>
                Collegamenti
                <div className="text-muted small">Espandi la tua rete</div>
              </div>
              <i className="addPerson bi bi-person-fill-add ms-2"></i>
            </a>
          </li>
        </ul>
      </div>

      {/* Premium */}
      <div className="card rounded-4 mb-3">
        <div className="card-body">
          <h6 className="card-subtitle text-muted premium">Accedi a strumenti e informazioni in esclusiva</h6>
          <a
            href="https://www.linkedin.com/premium/products/"
            className="btn btn-link text-start p-0 mt-2 d-flex align-items-center text-decoration-none text-black fw-bold"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-gem me-2" viewBox="0 0 16 16">
              <path d="M3.1.5A.5.5 0 0 1 3.5 0h9a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.1.7L8.5 15a.5.5 0 0 1-.8 0L.7 5.4a.5.5 0 0 1-.1-.7l3-4zM4.6 1l-2.7 3.6L8 14.1l6.1-9.5L11.4 1H4.6z" />
            </svg>
            <span>Prova Premium per 0 EUR</span>
          </a>
        </div>
      </div>

      {/* Elementi salvati */}
      <div className="card mb-3 overflow-hidden p-3">
        <ul className="list-unstyled">
          {/* Elementi salvati */}
          <li className="mb-3">
            <a href="/my-items/" className="text-decoration-none text-dark d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark-fill me-2" viewBox="0 0 16 16">
                <path d="M2 2v13l6-3 6 3V2z" />
              </svg>
              <span>Elementi salvati</span>
            </a>
          </li>

          {/* Gruppi */}
          <li className="mb-3">
            <a href="https://www.linkedin.com/groups" className="text-decoration-none text-dark d-flex align-items-center">
              <i className="bi bi-people-fill me-2"></i>
              <span>Gruppi</span>
            </a>
          </li>

          {/* Newsletter */}
          <li className="mb-3">
            <a href="https://www.linkedin.com/mynetwork/network-manager/newsletters" className="text-decoration-none text-dark d-flex align-items-center">
              <i className="bi bi-newspaper text-black me-2"></i>
              <span>Newsletter</span>
            </a>
          </li>

          {/* Eventi */}
          <li>
            <a href="https://www.linkedin.com/events" className="text-decoration-none text-dark d-flex align-items-center">
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
