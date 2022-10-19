import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  // logout
  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/login");
  };

  let navigate = useNavigate();

  // fungsi mengunci halaman home
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    // jika berhasil login, bisa akses home page
    if (authToken) {
      navigate("/");
    }

    // jika belum login, home page terkunci dan diarahkan ke halaman login
    if (!authToken) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <h3>Home Page</h3>

      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}

export default Home;
