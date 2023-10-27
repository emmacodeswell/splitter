import { useState } from 'react';
import './App.css';

const initialState = {
  bill: 0,
  tip: 0,
  people: 0
}

function App() {
  const [userInput, setuserInput] = useState(initialState)
  const [tip, setTip] = useState(0)
  const [total, setTotal] = useState(0)
  
  return (
    <div>
    </div>
  );
}

export default App;
