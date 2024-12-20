import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { MdOutlineComment } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import { TbSend } from "react-icons/tb";

const PostFeed = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0); // Gestisce la pagina corrente
  const [isLoading, setIsLoading] = useState(false); // Indica se è in corso un caricamento
  const [error, setError] = useState(null);

  const fetchPostData = async (page) => {
    setIsLoading(true);
    try {
      const resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYyYWQwMTUzMDRhNzAwMTUxNDhiZDgiLCJpYXQiOjE3MzQ1MjA1MjUsImV4cCI6MTczNTczMDEyNX0.jS3S2eLCdwy7VCt0Rw4QaZZcR28Jj0XYWNghDsz0NWU",
          },
        }
      );

      if (resp.ok) {
        const data = await resp.json();
        const paginatedData = data.slice(page * 10, (page + 1) * 10); // Ottieni 10 post alla volta
        setPosts((prevPosts) => [...prevPosts, ...paginatedData]); // Aggiungi i nuovi post a quelli esistenti
      } else {
        throw new Error("Errore nella chiamata dei dati");
      }
    } catch (err) {
      console.error("Errore durante la fetch dei dati", err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPostData(page);
  }, [page]); // Ricarica i dati quando la pagina cambia

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1); // Incrementa la pagina per caricare altri post
  };

  return (
    <div className="mt-2 bg-white rounded">
      {error && (
        <p className="text-danger ms-3">Errore nel caricamento: {error}</p>
      )}
      {posts.map((post, index) => (
        <div key={index}>
          <div className="d-flex flex-column justify-content-between p-3 border-bottom">
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <img
                  className="rounded-circle w-img-esp me-3"
                  src={post.user.image || "default-image-url.jpg"}
                  alt="post"
                />
                <div className="d-flex flex-column lh-1">
                  <h6 className="lh-1 mb-1">
                    {post.user.name + " " + post.user.surname}
                  </h6>
                  <p className="lh-1 mb-1 text-body-tertiary">
                    {post.user.title}
                  </p>
                  <p className="lh-1 mb-1 mt-2 ">{post.text}</p>
                  <p className="lh-1 mb-1 text-body-tertiary">{post.area}</p>
                  <p className="mt-2">{post.description}</p>
                </div>
              </div>
              <div>
                <div className="d-flex justifi-content-center">
                  <BsThreeDots className="mt-1 me-2" />
                  <i className="bi bi-x-lg"></i>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <button className="custom-btn btn btn-primary">
                <BiLike className="me-1" /> Consiglia
              </button>
              <button className="custom-btn btn btn-primary">
                <MdOutlineComment className="me-1" /> Commenta
              </button>
              <button className="custom-btn btn btn-primary">
                <FaShare className="me-1" />
                Diffondi questo post
              </button>
              <button className="custom-btn btn btn-primary">
                <TbSend className="me-1" />
                Invia
              </button>
            </div>
          </div>
        </div>
      ))}
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <div className=" custom-bg2 p-2 d-flex justify-content-center">
          <button
            className=" btn-post py-2 w-100 text-secondary fw-semibold  "
            onClick={handleLoadMore}
          >
            Mostra altri post
          </button>
        </div>
      )}
    </div>
  );
};

export default PostFeed;
