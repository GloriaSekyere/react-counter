import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0)

  const handleAdd = () => {
    setCount(prevCount => prevCount + 1)
  }

  const handleSubtract = () => {
    setCount(prevCount => prevCount - 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <div className="App">
      <p className='count'>{count}</p>
      <div className='btns'>
        <button className='add-btn' onClick={handleAdd}>+</button>
        <button className='sub-btn' onClick={handleSubtract}>-</button>
        <button className='res-btn' onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
