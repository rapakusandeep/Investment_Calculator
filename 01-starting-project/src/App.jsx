import Header from "./components/Header"
import UserInput from "./components/input/UserInput"
import Result from "./components/Result"
import { useState } from "react"
import { calculateInvestmentResults } from "./util/investment"


    
// if (currData.initialInvestment !== null && currData.annualInvestment !== null && currData.expectedReturn !==null && currData.duration !== null ) {
//   setAnnualData(Object.assign({}, data));
// }

function App() {

function handleAnnualDataChange(annualData) {
  const result = calculateInvestmentResults(annualData);
  console.log(result);
}

  return (
    <body> 
      <Header />
      <section id="user-input">
        <UserInput
          inputLabelLeft="INITIAL INVESTMENT"
          inputLabelRight="ANNUAL INVESTMENT"
          inputLabelLeftDown="EXPECTED RETURN"
          inputLabelRightDown="DURATION"
          onAnnualDataChange={handleAnnualDataChange}
        />        
        </section>
      <Result />
    </body>
  )
}

export default App
