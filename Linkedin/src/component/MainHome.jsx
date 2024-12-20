import { useCallback, useEffect, useState } from "react";
import {
  Card,
  Button,
  Carousel,
  ProgressBar,
  Dropdown,
  Image,
  Modal,
  Form,
} from "react-bootstrap";
import PostFeed from "./PostFeed";

const MainHome = () => {
  // SECONDA FETCH
  const [text, setText] = useState("");
  const handleTextChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const handleSubmit = () => {
    const postData = {
      text: text,
    };
    fetch("https://striveschool-api.herokuapp.com/api/posts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYyYWQwMTUzMDRhNzAwMTUxNDhiZDgiLCJpYXQiOjE3MzQ1MjA1MjUsImV4cCI6MTczNTczMDEyNX0.jS3S2eLCdwy7VCt0Rw4QaZZcR28Jj0XYWNghDsz0NWU",
      },
      body: JSON.stringify(postData),
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nella chiamata");
        }
      })
      .then((data) => {
        setText(data);
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <main className=" col-6 mt-4" aria-label="Feed principale">
      {/* Sezione principale */}
      <section className="mb-3">
        <Card>
          <Card.Header className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Preparati per la tua ricerca di lavoro</h5>
            <Button variant="outline-secondary" size="sm" aria-label="Chiudi">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </Button>
          </Card.Header>

          <Card.Body>
            {/* Progress bar */}
            <div className="d-flex align-items-center mb-3 carosello">
              <ProgressBar
                now={0}
                max={3}
                className="flex-grow-1 me-3"
                aria-valuemin={0}
                aria-valuemax={3}
                aria-valuenow={0}
              />
              <small className="text-muted">Completati: 0/3</small>
            </div>

            {/* Carosello */}
            <Carousel>
              <Carousel.Item>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://media.licdn.com/media/AAYQAgSuAAgAAQAAAAAAACwog6StkzhzSlK17m4iY5d_Xg.png"
                    alt=""
                  />
                  <Card.Body className="text-left">
                    <Card.Text>
                      Aggiungi la tua esperienza lavorativa e le tue competenze
                      per mostrare i tuoi punti di forza ai recruiter.
                    </Card.Text>
                    <Button
                      className="carouselButton  text-white"
                      variant="primary"
                    >
                      Aggiorna profilo
                    </Button>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://media.licdn.com/media/AAYQAgSuAAgAAQAAAAAAACnZ-D2hlcNzRqqPRb5a8tlJcA.png"
                    alt=""
                  />
                  <Card.Body className="text-left">
                    <Card.Text>
                      Segui le aziende per cui vuoi lavorare per farti notare
                      dai recruiter.
                    </Card.Text>
                    <Button
                      className="carouselButton  text-white"
                      variant="primary"
                    >
                      Inizia a seguire
                    </Button>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://media.licdn.com/media/AAYQAgSuAAgAAQAAAAAAACo7WHxKUCLyR-mziznrNA3hZA.png"
                    alt=""
                  />
                  <Card.Body className="text-left">
                    <Card.Text>
                      Collegati con ex colleghi e chiedi referenze per le
                      offerte di lavoro.
                    </Card.Text>
                    <Button className="carouselButton  text-white">
                      Aggiorna Contenuto
                    </Button>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            </Carousel>
          </Card.Body>
        </Card>
      </section>

      {/* Share Box */}
      <section className="mb-3">
        <Card className="mb-3 p-3">
          {/* Barra superiore */}
          <div className="d-flex align-items-center mb-3">
            <a href="/in/filippo-boesso-113a42342" className="me-2">
              <Image
                src="https://media.licdn.com/dms/image/v2/D4D03AQEY2pdgAdT1eg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1713507583452?e=1740009600&v=beta&t=YFB82azL3RNgBrKA8q-KprdeesZxXwJfhbR6bSMU4Rg"
                roundedCircle
                alt="Profilo"
                className="border custom-w2"
              />
            </a>
            <Button
              onClick={handleShow}
              variant="outline-secondary"
              className="btn-creapost searchBar flex-grow-1 text-start  fw-normal"
            >
              <strong className="fw-medium">Crea un post</strong>
            </Button>
            <Modal
              className=""
              size="lg"
              centered
              show={show}
              onHide={handleClose}
            >
              <Modal.Header className="border-none mt-1 p-4" closeButton>
                <div className="d-flex align-items-center ">
                  <img
                    className="rounded-circle custom-w me-3 "
                    src="https://media.licdn.com/dms/image/v2/D4D03AQEY2pdgAdT1eg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1713507583452?e=1740009600&v=beta&t=_pY3NDzP3qdhOwha6Xw_i3mumJWb4PO0X5-wbWhN79w"
                    alt=""
                  />
                  <div className="d-flex flex-column ">
                    <h4 className=" mb-1">Costantino Scardigno</h4>
                    <p className="text-secondary lh-1">Pubblica: Chiunque</p>
                  </div>
                </div>
              </Modal.Header>
              <Modal.Body className="border-none d-flex flex-column justify-content-between">
                <Form className="border-none">
                  <Form.Group
                    className="mb-3  "
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Control
                      className="bg-white my-border-none fixed-height fs-5 "
                      placeholder="Di cosa vorresti parlare?"
                      as="textarea"
                      value={text}
                      onChange={handleTextChange}
                      rows={3}
                    />
                  </Form.Group>
                </Form>
                <div>
                  <div className="d-flex text-secondary">
                    <i class="bi bi-emoji-smile me-2 fs-4 mb-3"></i>
                  </div>
                  <div className="d-flex align-items-center text-secondary">
                    <i class="bi bi-image me-4 fs-4"></i>
                    <i class="bi bi-calendar3 me-4 fs-5"></i>
                    <i class="bi bi-play-btn-fill me-4 fs-4"></i>

                    <i class="bi bi-plus-lg me-4 fs-4"></i>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <i class="bi bi-clock me-4 fs-4 fw-bold text-black"></i>

                <Button
                  className="custom-bg rounded-pill border-none px-4 fw-semibold text-body-tertiary"
                  variant="primary"
                  onClick={handleSubmit}
                >
                  Pubblica
                </Button>
              </Modal.Footer>
            </Modal>
          </div>

          {/* Toolbar */}
          <div className="d-flex mx-4 justify-content-between">
            {/* Aggiungi una foto */}
            <Button className=" buttonPost d-flex align-items-center bg-white text-secondary fw-bold">
              <i className="bi bi-image-fill text-primary pe-2"></i>
              Foto
            </Button>

            {/* Aggiungi un video */}
            <Button className="buttonPost d-flex align-items-center bg-white text-secondary fw-bold">
              <i className="bi bi-play-btn-fill text-success pe-2"></i>
              Video
            </Button>

            {/* Scrivi un articolo */}
            <a
              href="/article/new/"
              className="buttonPost rounded border-none d-flex align-items-center bg-white text-secondary fw-bold text-decoration-none"
            >
              <i className="bi bi-file-earmark-text-fill text-danger pe-2"></i>
              Scrivi un articolo
            </a>
          </div>
        </Card>
      </section>
      <PostFeed />
    </main>
  );
};

export default MainHome;
