import "./App.css";
import ImageGenerator from './components/ImageGenerator/ImageGenerator.jsx'

function App() {
  return( 
  
  <>

   <button
        onClick={() => {
          window.location.href =
            "https://alamtaufeeq854.github.io/react-projects/";
        }}
        className="home-btn">
        Back
      </button>
  <ImageGenerator/>
  
  </> )
}

export default App;
