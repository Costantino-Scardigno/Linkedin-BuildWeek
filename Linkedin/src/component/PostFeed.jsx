import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { MdOutlineComment } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import { TbSend } from "react-icons/tb";

const PostFeed = () => {
  const [Post, setPost] = useState(null);
  const [secondError, setSecondError] = useState(null);

  const fetchPostData = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/posts/`, {
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
          throw new Error("Errore nella chiamata dei dati secondari");
        }
      })
      .then((data) => {
        setPost(data);
      })
      .catch((err) => {
        console.error("Errore durante la fetch dei dati secondari", err);
        setSecondError(err.message);
      });
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  if (!Post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mt-2 bg-white rounded">
      {/* Mostra esperienza dalla seconda fetch */}
      {secondError && (
        <p className="text-danger ms-3">
          Errore nel caricamento: {secondError}
        </p>
      )}
      {Post ? (
        Post.map((posts, index) => (
          <div>
            <div
              className="d-flex flex-column justify-content-between p-3 border-bottom"
              key={index}
            >
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <img
                    className=" rounded-circle w-img-esp me-3"
                    src={posts.user.image || "default-image-url.jpg"}
                    alt="posts"
                  />
                  <div className="d-flex flex-column lh-1">
                    <h6 className="lh-1 mb-1">
                      {posts.user.name + " " + posts.user.surname}
                    </h6>
                    <p className="lh-1 mb-1 text-body-tertiary">
                      {posts.user.title}
                    </p>
                    <p className="lh-1 mb-1 mt-2 ">{posts.text}</p>
                    <p className="lh-1 mb-1 text-body-tertiary">{posts.area}</p>
                    <p className="mt-2">{posts.description}</p>
                  </div>
                </div>
                <div>
                  <div className="d-flex justifi-content-center">
                    <BsThreeDots className="mt-1 me-2" />
                    <i class="bi bi-x-lg"></i>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <button className="custom-btn btn btn-primary ">
                  <BiLike className="me-1" /> Consiglia
                </button>
                <button className=" custom-btn btn btn-primary">
                  {" "}
                  <MdOutlineComment className="me-1" /> Commenta
                </button>
                <button className="custom-btn btn btn-primary">
                  <FaShare className="me-1" />
                  Diffondi questo post
                </button>
                <button className=" custom-btn btn btn-primary">
                  <TbSend className="me-1" />
                  Invia
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="ms-3">Caricamento esperienze...</p>
      )}
    </div>
  );
};
export default PostFeed;
