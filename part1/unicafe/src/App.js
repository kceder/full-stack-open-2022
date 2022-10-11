import { useState } from 'react'

const StatisticLine = ({text, count}) => <tr><td>{text}</td> <td>{count}</td></tr>

const Statistics = ({good, neutral, bad, total, count}) => {
  if (total === 0)
    return (
      <div>No reviews received</div>
    )
  return (
    <table>
      <tbody>
        <tr>
        <StatisticLine text='Good' count={good} />
        <StatisticLine text='Neutral' count={neutral} />
        <StatisticLine text='Bad' count={bad} />
        <StatisticLine text='Total' count={total} />
        <StatisticLine text='Average' count={count / total} />
        <StatisticLine text='positive %' count={good / total * 100} />
        </tr>
      </tbody>
    </table>
  )
}

const Text = ({text}) => <div style={{fontWeight: 'bold'}}>{text}</div>

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [count, setCount] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setTotal(total + 1)
    setCount(count + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setTotal(total + 1)
    setCount(count - 1)
  }

  return (
    <div>
      <div>
        <Button handleClick={handleGoodClick} text='GOOD' />
        <Button handleClick={handleNeutralClick} text='NEUTRAL' />
        <Button handleClick={handleBadClick} text='BAD' />
        <Text text='Unicafe review statistics'/>
        <Statistics good={good} neutral={neutral} bad={bad} total={total} count={count}/>
      </div>
    </div>
  )
}


export default App