import React, { useState } from 'react'

const DisplayHeader = ({text}) => <h1>{text}</h1>
const DisplayStats = (props) => {
  return(
  <div>
    {props.text}: {props.stats}
  </div>)
}
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = (good-bad)/(good+neutral+bad)
  const positive = (good/all)*100

  
  const HandleGoodClick = () => setGood(good+1)
  const HandleNeutralClick = () => setNeutral(neutral+1)
  const HandleBadClick = () => setBad(bad+1)
  return (
    <div>
      <DisplayHeader text = 'Give Feedback'></DisplayHeader>
      <Button handleClick={HandleGoodClick} text = "Good"></Button>
      <Button handleClick={HandleNeutralClick} text = "Neutral"></Button>
      <Button handleClick={HandleBadClick} text = "Bad"></Button>
      <DisplayHeader text = 'statistics'></DisplayHeader>
      <DisplayStats text='Good' stats={good}></DisplayStats>
      <DisplayStats text='Neutral' stats={neutral}></DisplayStats>
      <DisplayStats text='Bad' stats={bad}></DisplayStats>
      <DisplayStats text='All' stats={all}></DisplayStats>
      <DisplayStats text='Average' stats={average}></DisplayStats>
      <DisplayStats text='Positive' stats={positive}></DisplayStats>

    </div>
  )
}

export default App