import "bootstrap/dist/css/bootstrap.min.css";

const SideBarHome = () => {
  return (
    <div className="d-flex flex-column col-3 mt-4">
      {/* Barra Laterale */}
      <div className="card mb-3">
        <div className="card-body text-center">
          <a href="/in/filippo-boesso-113a42342" className="d-block text-decoration-none" aria-label="Sfondo predefinito">
            <div className="rounded bg-light mb-3" style={{ width: "100%", height: "100px" }}></div>
          </a>
          <button className="btn btn-primary btn-sm position-relative rounded-circle mb-3" aria-label="Aggiungi foto" style={{ width: "72px", height: "72px" }}>
            <img
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              className="rounded-circle img-fluid"
              alt=""
              style={{ width: "100%" }}
            />
            <div className="position-absolute top-50 start-50 translate-middle">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.5.5 0 0 0-.5.5V7H4a.5.5 0 0 0 0 1h3.5v2.5a.5.5 0 0 0 1 0V8H12a.5.5 0 0 0 0-1H8.5V4.5A.5.5 0 0 0 8 4z" />
              </svg>
            </div>
          </button>
          <div>
            <h5 className="card-title">Filippo Boesso</h5>
            <p className="card-text text-muted small">Personal trainer certificato presso privato</p>
            <p className="text-muted small">Borgoricco, Veneto</p>
          </div>
        </div>
      </div>

      {/* Analisi */}
      <div className="card mb-3">
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <a href="/dashboard/" className="text-decoration-none text-dark">
              Visualizza tutte le analisi
            </a>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <a href="/mynetwork/" className="text-decoration-none text-dark">
              Collegamenti
              <span className="text-muted small">Espandi la tua rete</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Premium */}
      <div className="card mb-3">
        <div className="card-body">
          <h6 className="card-subtitle text-muted">Accedi a strumenti e informazioni in esclusiva</h6>
          <a href="https://www.linkedin.com/premium/products/" className="btn btn-link text-start p-0 mt-2 d-flex align-items-center text-decoration-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-gem me-2" viewBox="0 0 16 16">
              <path d="M3.1.5A.5.5 0 0 1 3.5 0h9a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.1.7L8.5 15a.5.5 0 0 1-.8 0L.7 5.4a.5.5 0 0 1-.1-.7l3-4zM4.6 1l-2.7 3.6L8 14.1l6.1-9.5L11.4 1H4.6z" />
            </svg>
            <span>Prova Premium per 0 EUR</span>
          </a>
        </div>
      </div>

      {/* Elementi salvati */}
      <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <a href="/my-items/" className="d-flex align-items-center text-dark text-decoration-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark-fill me-2" viewBox="0 0 16 16">
                <path d="M2 2v13.5l6-3.5 6 3.5V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1z" />
              </svg>
              Elementi salvati
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBarHome;
