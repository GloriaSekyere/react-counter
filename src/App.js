import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <p className='count'>{count}</p>

      <div className='btns'>
        <button 
          className='add-btn' 
          onClick={() => setCount(prevCount => prevCount + 1)}>
            +
        </button>

        <button 
          className='sub-btn' 
          onClick={() => setCount(prevCount => prevCount - 1)}>
            -
        </button>

        <button 
          className='res-btn' 
          onClick={() => setCount(0)}>
            Reset
        </button>
      </div>
      
    </div>
  );
}

export default App;
