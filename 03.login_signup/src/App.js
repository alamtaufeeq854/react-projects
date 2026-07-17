import "./App.css";
import { LoginSignup } from "./components/LoginSignup/LoginSignup";

function App() {
  return (
    <div>
      <button
        onClick={() => {
          window.location.href =
            "https://alamtaufeeq854.github.io/react-projects/";
        }}
        className="home-btn">
        Back
      </button>
      <LoginSignup />
    </div>
  );
}

export default App;
