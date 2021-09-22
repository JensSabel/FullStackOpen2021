import React, { useState } from 'react'

const DisplayHeader = ({text}) => <h1>{text}</h1>

const Statistics = (props) => {
    const total = props.good + props.neutral + props.bad
    if(total == 0) { 
      return(
        <div>No feedback given!</div>
      )
    }
    const average = (props.good - props.bad)/total
    const positive = props.good/total * 100

    return(
      <dic>
        <StatisticLine text="good" value={props.good}/>
        <StatisticLine text="neutral" value={props.neutral}/>
        <StatisticLine text="bad" value={props.bad}/>
        <StatisticLine text="total" value={total}/>
        <StatisticLine text="average" value={average}/>
        <StatisticLine text="positive" value={positive}/>
      </dic>
    )
}

const StatisticLine = (props) => {
  return (
    <p>{props.text}: {props.value}</p>
  )
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
  const HandleGoodClick = () => setGood(good+1)
  const HandleNeutralClick = () => setNeutral(neutral+1)
  const HandleBadClick = () => setBad(bad+1)
  
  return (
    <div>
      <DisplayHeader text = 'Give Feedback'/>
      <Button handleClick={HandleGoodClick} text = "Good"/>
      <Button handleClick={HandleNeutralClick} text = "Neutral"/>
      <Button handleClick={HandleBadClick} text = "Bad"/>
      <DisplayHeader text = 'Statistics'/>
      <Statistics
        good = {good}
        neutral = {neutral}
        bad = {bad}
        />
    </div>
  )
}

export default App