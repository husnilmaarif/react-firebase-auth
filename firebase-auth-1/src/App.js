import "./App.css";

// firebase login
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./config/Firebase";
import { useState } from "react";

const provider = new GoogleAuthProvider();

function App() {
  const [login, setLogin] = useState({});

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setLogin(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLogin(errorMessage);
      });
  };
  return (
    <div className="App" style={{ marginTop: "50px" }}>
      <button onClick={handleLogin}>Login Google</button>
      <br />
      <h2>{login.email}</h2>
      <p>selamat datang {login.displayName}</p>
    </div>
  );
}

export default App;
