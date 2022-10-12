const Total = ({parts}) => {
    const total = parts.reduce((pre, cur) => ({
        exercises: pre.exercises + cur.exercises
    }))
    return <p>Total exercises: {total.exercises}</p>
}

const Part = ({parts}) => {
    const newPart = parts.map((part) => (
        <p key={part.id}>
        {part.name} {part.exercises}
        </p>
        ))

    return (
        <>
            {newPart}
            <Total parts={parts} />
        </>
    )
        
}
const Content = ({content}) =>
      <>
        <Part parts={content.parts} />
      </>

const Header = ({course}) =>
      <div>
        <h1>{course.name}</h1>
      </div>

const Course = ({ course }) =>
		<>
			<Header course={course} />
			<Content content={course} />
		</>

export default Course;