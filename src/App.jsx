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

  const tipPerPerson = bill * tip / 100 / numPeople
  const totalPerPerson = bill / numPeople + tipPerPerson 

  const formattedTip = formatter.format(tipPerPerson)
  const formattedTotal = formatter.format(totalPerPerson)

  return (
    <div>
      <h1>
        <img src={logo} alt="Splitter logo" />
      </h1>
      <label>
        Bill
        <input type="number" onChange={handleBill}/>
      </label>
      <label>
        Select Tip %
        <input type="radio" name="tip" value="5" onChange={handleTip}/>
        <input type="radio" name="tip" value="10" onChange={handleTip}/>
        <input type="radio" name="tip" value="15" onChange={handleTip}/>
        <input type="radio" name="tip" value="25" onChange={handleTip}/>
        <input type="radio" name="tip" value="50" onChange={handleTip}/>
        <input type="number" onChange={handleTip}/>
      </label>
      <label>
        Number of People
        <input type="number" onChange={handleNumPeople}/>
      </label>
      <div className="results">
        <label>
          Tip Amount
          <small>/ person</small>
          <output>{tipPerPerson}</output>
        </label>
        <label>
          Total
          <small>/ person</small>
          <output>{totalPerPerson}</output>
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
