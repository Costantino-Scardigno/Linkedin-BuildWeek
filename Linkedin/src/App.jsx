import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Mynavbar from "./component/Mynavbar";
import MainContent from "./component/MainContent";
import { Container } from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Mynavbar />
      <Container></Container>
    </>
  );
}

export default App;
