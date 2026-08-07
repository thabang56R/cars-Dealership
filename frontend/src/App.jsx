import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Dealers from "./components/Dealers/Dealers";
import Reviews from "./components/Reviews/Reviews";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Dealers</Link> | 
        <Link to="/login">Login</Link> | 
        <Link to="/register">Register</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dealers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dealer/:id/reviews" element={<Reviews />} />
      </Routes>
    </Router>
  );
}
