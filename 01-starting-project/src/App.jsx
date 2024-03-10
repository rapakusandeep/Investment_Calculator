import Header from "./components/Header.jsx"
import UserInput from "./components/input/UserInput.jsx"
import Result from "./components/Result.jsx"
import { useState } from "react"




function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
});

const inputIsValid = userInput.duration >= 1;

//to have the previous state, we need to use the set state like a function form as shown below
function handleChange(inputIdentifier, newValue) {
  setUserInput(prevUserInput => {
      return {
          ...prevUserInput,
          [inputIdentifier]: +newValue
      };
  });
}



  return (
    <>
      <Header />      
      <UserInput userInput={userInput} onChangeInput={handleChange} />                
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p> }
      {inputIsValid && <Result input={userInput} />}
      </>
  )
}

export default App
