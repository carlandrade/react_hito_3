import React, { useState, useEffect } from "react";

const Profile = () => {
  // Cargar los datos desde localStorage si existen
  const storedUser = JSON.parse(localStorage.getItem("user")) || {
    name: "Carlos Andrade",
    email: "carlos@example.com",
  };

  const [user, setUser] = useState(storedUser);
  const [isEditing, setIsEditing] = useState(false);

  // Guardar los datos en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false); // Guarda los cambios y vuelve al modo visualización
    alert("Perfil actualizado correctamente");
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Perfil del Usuario</h1>
      <div className="card mx-auto mt-4" style={{ maxWidth: "400px" }}>
        <div className="card-body">
          <h5 className="card-title">Información del Usuario</h5>

          {isEditing ? (
            // FORMULARIO PARA EDITAR
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-success w-100">
                Guardar
              </button>
            </form>
          ) : (
            // MODO VISUALIZACIÓN
            <>
              <p>
                <strong>Nombre:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <button
                className="btn btn-primary w-100"
                onClick={() => setIsEditing(true)}
              >
                Editar Perfil
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
