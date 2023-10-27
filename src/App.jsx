import { useState } from "react"
import "./App.css"
import logo from "./assets/logo.svg"

const stateSetter = setState => event => setState(event.target.value)

function App() {
  const [numPeople, setNumPeople] = useState(0)
  const [tip, setTip] = useState(0)
  const [bill, setBill] = useState(0)

  const handleTip = stateSetter(setTip)
  const handleBill = stateSetter(setBill)
  const handleNumPeople = stateSetter(setNumPeople)

  return (
    <div>
      <h1>
        <img src={logo} alt="Splitter logo" />
      </h1>
      <label>
        Bill
        <input type="number" />
      </label>
      <label>
        Select Tip %
        <input type="radio" />
        <input type="radio" />
        <input type="radio" />
        <input type="radio" />
        <input type="radio" />
        <input type="number" />
      </label>
      <label>
        Number of People
        <input type="number" />
      </label>
      <div className="results">
        <label>
          Tip Amount
          <small>/ person</small>
          <output>100</output>
        </label>
        <label>
          Total
          <small>/ person</small>
          <output>888</output>
        </label>
      </div>
      <input type="reset" />
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/emmacodeswell" target="_blank">Emma Clarke</a>.
      </div>
    </div>
  );
}

export default App;
