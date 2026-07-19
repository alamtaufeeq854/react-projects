import "./App.css";
import TicTacToe from "./components/TicTacToe/TicTacToe";

function App() {
  return (
    <>
      <button
        onClick={() => {
          window.location.href =
            "https://alamtaufeeq854.github.io/react-projects/";
        }}
        className="home-btn">
        Back
      </button>{" "}
      <TicTacToe />
    </>
  );
}

export default App;
