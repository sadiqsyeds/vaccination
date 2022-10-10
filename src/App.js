import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import CenterList from "./components/CenterList";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Auth/Login";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Staff from "./components/Staff/Staff";
import Registrations from "./components/Registrations";

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
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CenterList centers={centers} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/registrations" element={<Registrations />} />
        </Routes>
      </Router>
      {/* <Navbar />
      <Container>
        <div className="vh-100 justify-content-center align-items-center">
          <SearchBar />
          <CenterList centers={centers} />
        </div>
      </Container>
      <Footer /> */}
    </>
  );
}

export default App;
