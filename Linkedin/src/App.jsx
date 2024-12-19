import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Mynavbar from "./component/Mynavbar";

import { Container } from "react-bootstrap";
import Home from "./component/Home";

function App() {
  return (
    <>
      <Mynavbar />
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default App;
