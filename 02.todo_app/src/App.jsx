import Todo from "./components/Todo";
import "./App.css";

const App = () => {
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
      <Todo />
    </div>
  );
};

export default App;
