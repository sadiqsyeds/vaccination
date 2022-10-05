import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import CenterList from "./components/CenterList";
import SearchBar from "./components/SearchBar";

const dummy_centres = [
  {
    name: "Center 1",
    address: "CV Raman Nagar",
    pincode: "560001",
  },
  {
    name: "Center 2",
    address: "Jayanagar Bangalore",
    pincode: "560026",
  },
];

console.log(dummy_centres);

function App() {
  const [centers, setCenters] = useState(dummy_centres);
  return (
    <Container>
    <div className="App">
      <SearchBar />
      <CenterList centers={centers} />
    </div>
    </Container>
  );
}

export default App;
