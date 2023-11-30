import { useState } from "react"
import "./App.css"
import logo from "./assets/logo.svg"
import formatter from "./helpers/formatter"

// This function updates the state. This function returns another function that takes an event argument and sets the state to the value of event.target.value
// Essentially, it generates a function responsible for updating a specific piece of state
const stateSetter = setState => event => setState(event.target.value)

// A convenient way to check if a variable has been assigned a value or if it's still in an uninitialized state
const isDefined = value => value !== undefined

function App() {
  const [numPeople, setNumPeople] = useState('')
  const [tip, setTip] = useState('')
  const [bill, setBill] = useState('')

  // These functions update the corresponding state variables
  const handleTip = stateSetter(setTip)
  const handleBill = stateSetter(setBill)
  const handleNumPeople = stateSetter(setNumPeople)

  // Sets the radio tip 
  const handleRadioTip = event => {
    event.currentTarget.form.elements.customTip.value = ''
    handleTip(event)
  }

  // Sets a custom tip and unchecks the radio tip if its checked
  const handleCustomTip = event => {
    event.currentTarget.form.elements.tip.forEach(input => {
      input.checked = false
    })

    handleTip(event)
  }

  // Defines formatted tips to be currency using the helper formatter function
  let formattedTip = formatter.format(0)
  let formattedTotal = formatter.format(0)

  // Calculates the tip per person based on the bill amount, tip percentage, and the number of people
  // Code runs if all of numPeople, tip, and bill are defined and if numPeople is greater than 0
  if ([numPeople, tip, bill].every(isDefined) && numPeople > 0) {
    const tipPerPerson = bill * tip / 100 / numPeople
    const totalPerPerson = bill / numPeople + tipPerPerson 

    formattedTip = formatter.format(tipPerPerson)
    formattedTotal = formatter.format(totalPerPerson)
  }

  // Resets the state
  const resetState = event => {
    setTip()
    setNumPeople()
    setBill()
  }

  return (
    <div>
      <h1 className="logo">
        Spli
        <br/>
        tter
      </h1>
      <div className="wrapper">
        <form onReset={resetState}>
          <div className="inputs">
            <label>
              Bill
              <input className="bill" type="number" onChange={handleBill} placeholder="0"/>
            </label>
            
            <label>
              Select Tip %
              
              <div className="tips">
                <input type="radio" name="tip" value="5" onChange={handleRadioTip} />
                <input type="radio" name="tip" value="10" onChange={handleRadioTip} />
                <input type="radio" name="tip" value="15" onChange={handleRadioTip} />
                <input type="radio" name="tip" value="25" onChange={handleRadioTip} />
                <input type="radio" name="tip" value="50" onChange={handleRadioTip} />
                <input type="number" name="customTip" placeholder="Custom" onChange={handleCustomTip} />
              </div>
            </label>
                

            <label>
              Number of People
              <input className="numPeople" type="number" onChange={handleNumPeople} placeholder="0"/>
            </label>
          </div>
          <div className="results">
            <div className="total">
              <label>
                Tip Amount
                <br />
                <small>/ person</small>
              </label>
              <output>{formattedTip}</output>
            </div>
            <div className="total">
              <label>
                Total
                <br />
                <small>/ person</small>
              </label>
              <output>{formattedTotal}</output>
            </div>
            <input className="reset" type="reset" />
          </div>
        </form>
      </div>
      <footer>
        Coded by <a href="https://github.com/emmacodeswell" target="_blank">Emma Clarke</a> in 2023 🤎.
      </footer>
    </div>
  );
}

export default App;
