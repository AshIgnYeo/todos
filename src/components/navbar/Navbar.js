import React from "react";
import "./navbar.css";
import Container from "../shared/Container";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Container>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </Container>
    </div>
  );
}
