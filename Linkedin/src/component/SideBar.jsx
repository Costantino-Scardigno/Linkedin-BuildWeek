import { useEffect, useState } from "react";
import { ImPencil } from "react-icons/im";
import { RiVipDiamondFill } from "react-icons/ri";
import { TbUsersPlus } from "react-icons/tb";

const SideBar = ({ profile }) => {
  const [users, setusers] = useState(null);
  const [error, setError] = useState(null);
  const FetchUsers = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/profile/`, {
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
          throw new Error("Errore nella chiamata");
        }
      })
      .then((data) => {
        setusers(data.slice(0, 7)); // Salva i dati ricevuti nello stato
      })
      .catch((err) => {
        console.error("Errore durante la fetch", err);
        setError(err.message); // Salva l'errore nello stato
      });
  };
  useEffect(() => {
    FetchUsers();
  }, [profile]);

  return (
    <>
      <aside className="col-3 mt-3 ">
        <div className="p-3 rounded bg-white">
          <div className="d-flex justify-content-between">
            <h5>Lingua del profilo</h5>
            <ImPencil />
          </div>
          <p>Italiano</p>
          <hr />
        </div>
        <div className=" p-3 mt-2 rounded bg-white">
          <div className="d-flex justify-content-between">
            <h5>Profilo pubblico e URL</h5>
            <ImPencil />
          </div>
          <p className="text-secondary">
            www.linkedin.com/in/costantino-scardigno-8322b2260
          </p>
          <hr />
        </div>
        <div className=" p-3 mt-2 rounded bg-white">
          <div className="d-flex justify-content-between">
            <h5 className="mb-3">Altri profili per te</h5>
          </div>
          {users ? (
            users.map((user, index) => (
              <div key={index} className="d-flex mb-3 border-bottom ">
                {" "}
                <img
                  className="rounded-circle w-img-esp me-2"
                  src={user.image}
                  alt=""
                />{" "}
                <div className="d-flex flex-column lh-1">
                  <h6>{user.name + " " + user.surname}</h6>
                  <p>{user.title}</p>
                  <button className="my-width-btn-aside btn border rounded-pill  border-secondary my-bg2 mb-3">
                    <TbUsersPlus className="me-2" />
                    Collegati
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="ms-3">Caricamento esperienze...</p>
          )}
        </div>
      </aside>
    </>
  );
};

export default SideBar;
