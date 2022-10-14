import { useState } from 'react'

const Persons = ({person}) => {
  return (
    person.map(key => <li key={Math.random()}>{key.name}</li>)
  )
}
// const Numbers = ({numbers}) => {
//   console.log(numbers);
//   return (
//     numbers.map(key => <li>{key.numbers}</li>)
//   )
// }

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const addPerson = (event) => {
    event.preventDefault()
    const personsObject = {
      name: newName
    }
    setPersons(persons.concat(personsObject))
    event.target.reset()
    console.log(persons);
  }
  const handleChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value)
  }
  const [newName, setNewName] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleChange}/>
        </div>
        <div>
          <button disabled={newName.length > 0 ? false : true} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        <Persons person={persons} />
      </ul>
        Debug: {newName}
    </div>
  )

}

export default App