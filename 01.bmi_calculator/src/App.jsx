import { useState } from "react";

const App = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) {
      setResult("Please, Enter the height and weight");
      return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    let category;

    if (bmi < 18.5) category = "underweight";
    else if (bmi < 25) category = "normal weight";
    else if (bmi < 30) category = "overweight";
    else category = "obese";

    setResult(`Your BMI is ${bmi} : You are ${category}`);
  };

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
      <div className="container">
        <h1>BMI Calculator</h1>
        <label htmlFor="height">Height (cm)</label>
        <input
          type="number"
          id="height"
          placeholder="e.g. 170"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <label htmlFor="weight">Weight (kg)</label>
        <input
          type="number"
          id="weight"
          placeholder="e.g. 67"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <button onClick={calculateBMI}>Calculate</button>

        <div className="result">{result}</div>
      </div>
    </div>
  );
};

export default App;
