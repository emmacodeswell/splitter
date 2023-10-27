import { useState } from 'react';
import './App.css';

const initialState = {
  bill: 0,
  tip: 0,
  people: 0
}

function App() {
  const [userInput, setUserInput] = useState(initialState)
  const [tip, setTip] = useState(0)
  const [total, setTotal] = useState(0)

  return (
    <div>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
}

export default App;
