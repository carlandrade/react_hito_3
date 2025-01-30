import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App({ isAuthenticated, setIsAuthenticated }) {
  const handleLogout = () => {
    setIsAuthenticated(false); // 🔹 Cambia el estado a "deslogueado"
    localStorage.removeItem("isAuthenticated"); // 🔹 Elimina la sesión del localStorage
  };

  return (
    <div>
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
