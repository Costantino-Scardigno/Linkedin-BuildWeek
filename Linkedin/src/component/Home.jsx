import MainHome from "./MainHome";
import SideBarHome from "./SideBarHome";
import LinkedInNewsAside from "./LinkedinNewsAside";
import { Container } from "react-bootstrap";
const Home = () => {
  return (
    <>
      <Container>
        <div className="row">
          <SideBarHome />
          <MainHome />
          <LinkedInNewsAside />
        </div>
      </Container>
    </>
  );
};
export default Home;
