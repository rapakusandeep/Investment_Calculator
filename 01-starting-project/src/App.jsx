import Header from "./components/Header"
import UserInput from "./components/input/UserInput"
import Result from "./components/Result"

function App() {
  return (
    <body>
      <Header />
      <div id="user-input">
        <UserInput inputLabelLeft="INITIAL INVESTMENT" inputLabelRight="ANNUAL INVESTMENT" />
        <UserInput inputLabelLeft="INITIAL INVESTMENT" inputLabelRight="ANNUAL INVESTMENT" />
      </div>
      <Result />
    </body>
  )
}

export default App
