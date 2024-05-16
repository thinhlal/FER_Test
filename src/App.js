import { useState } from 'react'
import Content from './Content';

function App() {
  const [mount, setMount] = useState(false)

  return (
    <div className="App">
      <button 
        onClick={() => setMount(!mount)}
        style={{padding: 10, margin: 10}}
      >Mount</button>
      {mount && <Content/>}
    </div>
  )
}

export default App;
