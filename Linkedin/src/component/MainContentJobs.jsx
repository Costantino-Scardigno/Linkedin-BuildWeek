import { useEffect, useState } from "react";
import { TbClock } from "react-icons/tb";
const MainContentJobs = () => {
  const [jobs, setjobs] = useState(null);
  const [error, setError] = useState(null);
  const FetchJobs = () => {
    fetch("https://strive-benchmark.herokuapp.com/api/jobs")
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nella chiamata");
        }
      })
      .then((data) => {
        setjobs(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  useEffect(() => {
    FetchJobs();
  }, []);

  return (
    <>
      <div className="col-6 mt-4 bg-white border rounded-4">
        <div className="d-flex flex-column mb-0 m-4">
          <h5>Le principali offerte di lavoro per te </h5>
          <p className="text-body-tertiary">
            In base al tuo profilo, alle tue preferenze e ad attività come
            candidature,ricerche e salvataggi
          </p>
        </div>

        {jobs ? (
          jobs.data.map((jobs, index) => (
            <div key={index} className="d-flex p-3 border-bottom">
              <img
                className="w-img-esp me-3"
                src="https://media.licdn.com/dms/image/v2/C4D0BAQElsYedCcsjLg/company-logo_200_200/company-logo_200_200/0/1673524190523/wansport_logo?e=1742428800&v=beta&t=M5vF182uC3mPrDIBpSD33VXDLf7swExbfZrX4yjta7w"
                alt=""
              />
              <div key={index} className="d-flex flex-column lh-1">
                <h6 className="lh-1 mb-1">{jobs.title}</h6>
                <p className="lh-1 mb-1">{jobs.company_name}</p>
                <p className="lh-1 mb-1 text-body-tertiary">
                  {jobs.candidate_required_location}
                </p>
                <div className="d-flex align-items-center">
                  <TbClock className="me-2 text-success" />
                  <p className="mb-0 mt-2">
                    Solitamente le candidature vengono esaminate entro 2 giorni
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="ms-3">{error}</p>
        )}
      </div>
    </>
  );
};

export default MainContentJobs;
