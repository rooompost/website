import logo from "./assets/logo.png";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={logo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Welcome to The Cutting ROOOM</h1>
      <div className="card">
        <p>Email us at reach@roompost.com</p>
      </div>
      <p className="read-the-docs">Copyright © Rooom post 2024</p>
    </>
  );
}

export default App;
