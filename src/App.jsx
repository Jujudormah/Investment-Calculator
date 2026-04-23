import Header from "../components/header.jsx";
import UserInput from "../components/userInput.jsx";
import Results from "../components/results.jsx";
import { useState } from "react";

function App() {
  //State to hold user input values (UserInput and Results)
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 5,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <div>
      <Header />
      <UserInput handleChange={handleChange} userInput={userInput} />
      <Results userInput={userInput} />
    </div>
  );
}

export default App;
