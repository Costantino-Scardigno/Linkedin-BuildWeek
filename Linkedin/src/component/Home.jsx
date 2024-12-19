import MainHome from "./MainHome";
import SideBarHome from "./SideBarHome";
import LinkedInNewsAside from "./LinkedinNewsAside";
const Home = () => {
  return (
    <>
      <div className="row">
        <SideBarHome />
        <MainHome />
        <LinkedInNewsAside />
      </div>
    </>
  );
};
export default Home;
