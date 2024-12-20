import { useCallback, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const CreatePost = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [text, setText] = useState("");
  const handleTextChange = useCallback((e) => {
    setText(e.target.value);
  }, []);
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
  return (
    <section className="mb-3">
      <Card className="mb-3 p-3">
        {/* Barra superiore */}
        <div className="d-flex align-items-center mb-3">
          <a href="/in/filippo-boesso-113a42342" className="me-2">
            {profile && profile.image ? (
              <Image
                src={profile.image}
                roundedCircle
                alt="Profilo"
                className="border custom-w2"
              />
            ) : (
              <Image
                src="default-image.jpg" // Aggiungi un'immagine di fallback
                roundedCircle
                alt="Profilo"
                className="border custom-w2"
              />
            )}
          </a>
          <Button
            onClick={handleShow}
            variant="outline-secondary"
            className="searchBar flex-grow-1 text-start bg-white fw-normal"
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
                    className="bg-white my-border-none fixed-height "
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
            className=" border-none d-flex align-items-center bg-white text-secondary fw-bold text-decoration-none"
          >
            <i className="bi bi-file-earmark-text-fill text-danger pe-2"></i>
            Scrivi un articolo
          </a>
        </div>
      </Card>
    </section>
  );
};
export default CreatePost;
