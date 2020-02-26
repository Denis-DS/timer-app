import React from 'react'
import './App.css'
import Play from './img/play.png'
import Pause from './img/pause.png'
import Timer from './components/Timer'

function App() {
  const [isStarStop, setIsStarStop] = React.useState(false)
  return (
    <div className="App">
      <div className="content">
        <button className="button" onClick={() => setIsStarStop(!isStarStop)}>
          {isStarStop ? <img className="img" src={Pause} alt="lg" /> : <img className="img" src={Play} alt="lg" />}
        </button>
        {isStarStop ? (
          <div>
            <Timer />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default App
