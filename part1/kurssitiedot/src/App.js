const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Part = (props) => {
  return (
    <div>
      <p>
        {props.text} {props.count}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part text={props.part1} count={props.exercises1}/>
    </div>
  )
}

const Total = (props) => {
    console.log(props)
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]

  return (
    <div>
    <Header course={course} />
    <Content part1={parts[0].name} exercises1={parts[0].exercises} />
    <Content part1={parts[1].name} exercises1={parts[1].exercises} />
    <Content part1={parts[2].name} exercises1={parts[2].exercises} />
    <Total exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises} />
    </div>
    )

}

export default App