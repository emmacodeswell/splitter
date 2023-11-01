import { useState } from "react"
import "./App.css"
import logo from "./assets/logo.svg"
import formatter from "./helpers/formatter"

const stateSetter = setState => event => setState(event.target.value)

const isDefined = value => value !== undefined

function App() {
  const [numPeople, setNumPeople] = useState('')
  const [tip, setTip] = useState('')
  const [bill, setBill] = useState('')

  const handleTip = stateSetter(setTip)
  const handleBill = stateSetter(setBill)
  const handleNumPeople = stateSetter(setNumPeople)

  const handleRadioTip = event => {
    event.currentTarget.form.elements.customTip.value = ''
    handleTip(event)
  }

  const handleCustomTip = event => {
    event.currentTarget.form.elements.tip.forEach(input => {
      input.checked = false
    })

    handleTip(event)
  }

  let formattedTip
  let formattedTotal

  if ([numPeople, tip, bill].every(isDefined) && numPeople > 0) {
    const tipPerPerson = bill * tip / 100 / numPeople
    const totalPerPerson = bill / numPeople + tipPerPerson 

    formattedTip = formatter.format(tipPerPerson)
    formattedTotal = formatter.format(totalPerPerson)
  }

  const resetState = event => {
    setTip()
    setNumPeople()
    setBill()
  }

  return (
    <div>
      <h1>
        <img src={logo} alt="Splitter logo" />
      </h1>
      <form onReset={resetState}>
        <label>
          Bill
          <input type="number" onChange={handleBill}/>
        </label>
        <label>
          Select Tip %
          <input type="radio" name="tip" value="5" onChange={handleRadioTip}/>
          <input type="radio" name="tip" value="10" onChange={handleRadioTip}/>
          <input type="radio" name="tip" value="15" onChange={handleRadioTip}/>
          <input type="radio" name="tip" value="25" onChange={handleRadioTip}/>
          <input type="radio" name="tip" value="50" onChange={handleRadioTip}/>
          <input type="number" name="customTip" placeholder="Custom" onChange={handleCustomTip}/>
        </label>
        <label>
          Number of People
          <input type="number" onChange={handleNumPeople}/>
        </label>
        <div className="results">
          <label>
            Tip Amount
            <small>/ person</small>
            <output>{formattedTip}</output>
          </label>
          <label>
            Total
            <small>/ person</small>
            <output>{formattedTotal}</output>
          </label>
        </div>
        <input type="reset" />
      </form>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/emmacodeswell" target="_blank">Emma Clarke</a>.
      </div>
    </div>
  );
}

export default App;
