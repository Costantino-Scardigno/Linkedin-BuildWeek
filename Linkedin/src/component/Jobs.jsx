import { Container } from "react-bootstrap";
import SideBarHome from "./SideBarHome";
import MainContentJobs from "./MainContentJobs";

const Jobs = () => {
  return (
    <Container>
      <div className="row">
        <SideBarHome />
        <MainContentJobs />
      </div>
    </Container>
  );
};

export default Jobs;
