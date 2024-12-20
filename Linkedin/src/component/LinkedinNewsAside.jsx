import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";

const LinkedInNewsAside = () => {
  return (
    <aside aria-label="LinkedIn Notizie" className="mb-4 col-3 mt-4">
      {/* Modulo Notizie */}
      <Card className="mb-4">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <h5>In primo piano</h5>
          <Button variant="link" className="p-0" aria-label="Chiudi">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              width="16"
              height="16"
            >
              <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z" />
            </svg>
          </Button>
        </Card.Header>
        <Card.Body>
          <h6 className="text-muted">a cura di LinkedIn Notizie</h6>
          <ListGroup className="mt-3">
            <ListGroupItem>
              <a
                href="/news/story/tech-le-tendenze-del-2025-6259028/"
                className="text-dark text-decoration-none"
              >
                <strong className="fw-medium">
                  Tech: le tendenze del 2025
                </strong>
                <br />
                <small className="text-muted">
                  1 giorno fa • 1.889 lettori
                </small>
              </a>
            </ListGroupItem>
            <ListGroupItem>
              <a
                href="/news/story/revolut-diventa-banca-italiana-6503817/"
                className="text-dark text-decoration-none"
              >
                <strong className="fw-medium">
                  Revolut diventa banca italiana
                </strong>
                <br />
                <small className="text-muted">1 giorno fa • 795 lettori</small>
              </a>
            </ListGroupItem>
            <ListGroupItem>
              <a
                href="/news/story/istantanee-dal-maximall-pompeii-6278404/"
                className="text-dark text-decoration-none"
              >
                <strong className="fw-medium">
                  Istantanee dal Maximall Pompeii
                </strong>
                <br />
                <small className="text-muted">1 giorno fa • 384 lettori</small>
              </a>
            </ListGroupItem>
          </ListGroup>
          <Button variant="link" className="text-decoration-none mt-3 p-0">
            Vedi altro
          </Button>
        </Card.Body>
      </Card>

      {/* Giochi di oggi */}
      <Card className="mb-4">
        <Card.Header>
          <h5>I giochi di oggi</h5>
        </Card.Header>
        <ListGroup>
          <ListGroupItem>
            <a
              href="/games/tango/"
              className="text-dark text-decoration-none d-flex align-items-center"
            >
              <img
                src="https://static.licdn.com/aero-v1/sc/h/im5l00imv9odauybfemlfxm6"
                alt="Tango"
                className="me-3"
                style={{ width: "32px", height: "32px" }}
              />
              <div>
                <strong>Tango</strong>
                <br />
                <small className="text-muted">Armonizza la griglia</small>
              </div>
            </a>
          </ListGroupItem>
          <ListGroupItem>
            <a
              href="/games/queens/"
              className="text-dark text-decoration-none d-flex align-items-center"
            >
              <img
                src="https://static.licdn.com/aero-v1/sc/h/25itbd3dpc6ockbgvdhot9qp1"
                alt="Queens"
                className="me-3"
                style={{ width: "32px", height: "32px" }}
              />
              <div>
                <strong>Queens</strong>
                <br />
                <small className="text-muted">Incorona ogni regione</small>
              </div>
            </a>
          </ListGroupItem>
        </ListGroup>
      </Card>

      {/* Footer */}
      <footer className="text-center mt-4">
        <ul className="list-inline">
          <li className="list-inline-item">
            <a
              href="https://about.linkedin.com/it-it"
              target="_blank"
              rel="noreferrer"
            >
              Informazioni
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="https://www.linkedin.com/accessibility"
              target="_blank"
              rel="noreferrer"
            >
              Accessibilità
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="https://www.linkedin.com/help/linkedin"
              target="_blank"
              rel="noreferrer"
            >
              Centro assistenza
            </a>
          </li>
        </ul>
        <p className="text-muted small mt-3">LinkedIn Corporation © 2024</p>
      </footer>
    </aside>
  );
};

export default LinkedInNewsAside;
