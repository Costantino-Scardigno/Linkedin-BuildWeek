import { Card, Button, Carousel, ProgressBar, Dropdown } from "react-bootstrap";

const MainHome = () => {
  return (
    <main className=" col-6 mt-4" aria-label="Feed principale">
      {/* Sezione principale */}
      <section className="mb-3">
        <Card>
          <Card.Header className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Preparati per la tua ricerca di lavoro</h5>
            <Button variant="outline-secondary" size="sm" aria-label="Chiudi">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </Button>
          </Card.Header>

          <Card.Body>
            {/* Progress bar */}
            <div className="d-flex align-items-center mb-3 carosello">
              <ProgressBar now={0} max={3} className="flex-grow-1 me-3" aria-valuemin={0} aria-valuemax={3} aria-valuenow={0} />
              <small className="text-muted">Completati: 0/3</small>
            </div>

            {/* Carosello */}
            <Carousel>
              <Carousel.Item>
                <Card>
                  <Card.Img variant="top" src="https://media.licdn.com/media/AAYQAgSuAAgAAQAAAAAAACwog6StkzhzSlK17m4iY5d_Xg.png" alt="" />
                  <Card.Body className="text-left">
                    <Card.Text>Aggiungi la tua esperienza lavorativa e le tue competenze per mostrare i tuoi punti di forza ai recruiter.</Card.Text>
                    <Button className="carouselButton  text-white" variant="primary">
                      Aggiorna profilo
                    </Button>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card>
                  <Card.Img variant="top" src="https://media.licdn.com/media/AAYQAgSuAAgAAQAAAAAAACnZ-D2hlcNzRqqPRb5a8tlJcA.png" alt="" />
                  <Card.Body className="text-left">
                    <Card.Text>Segui le aziende per cui vuoi lavorare per farti notare dai recruiter.</Card.Text>
                    <Button className="carouselButton  text-white" variant="primary">
                      Inizia a seguire
                    </Button>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card>
                  <Card.Img variant="top" src="https://media.licdn.com/media/AAYQAgSuAAgAAQAAAAAAACo7WHxKUCLyR-mziznrNA3hZA.png" alt="" />
                  <Card.Body className="text-left">
                    <Card.Text>Collegati con ex colleghi e chiedi referenze per le offerte di lavoro.</Card.Text>
                    <Button className="carouselButton  text-white">Aggiorna Contenuto</Button>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            </Carousel>
          </Card.Body>
        </Card>
      </section>

      {/* Share Box */}
      <section className="mb-3">
        <Card>
          <Card.Body className="d-flex align-items-center">
            <div className="me-3">
              <img
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                alt="Avatar"
                className="rounded-circle"
                style={{ width: "48px", height: "48px" }}
              />
            </div>
            <Button variant="outline-secondary" className=" flex-grow-1 text-start">
              <strong>Crea un post</strong>
            </Button>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between">
            <Button variant="link">Foto</Button>
            <Button variant="link">Video</Button>
            <Button variant="link">Scrivi un articolo</Button>
          </Card.Footer>
        </Card>
      </section>

      {/* Sort Options */}
      <section className="mb-3">
        <Dropdown>
          <Dropdown.Toggle variant="light" className="w-100">
            <div className="d-flex justify-content-between align-items-center">
              <small>Seleziona la visualizzazione del feed:</small>
              <strong>Più rilevanti per primi</strong>
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#action/1">Più recenti</Dropdown.Item>
            <Dropdown.Item href="#action/2">Più rilevanti per primi</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </section>
    </main>
  );
};

export default MainHome;
