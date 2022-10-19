import { useState } from 'react'

const Persons = ({persons}) => {
  return (
    persons.map(key => <li key={Math.random()}>{key.name} | number: {key.number}</li>)
  )
}

const Filter = ({value, onChange}) => {
  return (
    <p><input value={value} onChange={onChange}></input></p>
  )
}
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const addPerson = (event) => {
    event.preventDefault()
    const duplicate = persons.filter((person) => person.name === newName)
    if (duplicate.length ===! 0)
      alert(`${newName} is already added to phonebook`)
    else {
      event.preventDefault()
      const personsObject = {
        name: newName,
        number: newNumber
      }
      console.log(newNumber);
      setPersons(persons.concat(personsObject))
      setNewName('')
      setNewNumber('')
      event.target.reset()
    }
  }
  const handleChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value)
  }
  const handleNumChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value)
  }
  const filterPersons = (event) => {
    const filter = event.target.value
    setNewFilter(filter)
  }
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterPerson, setNewFilter] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filterPerson} onChange={filterPersons}></Filter>
      <form onSubmit={addPerson}>
        <div>name: <input onChange={handleChange}/></div>
        <div>number: <input onChange={handleNumChange}/></div>
        <div>
          <button disabled={newName.length > 0 ? false : true} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        <Persons persons={persons} />
      </ul>
        Debug nam: {newName}
        <br></br>
        Debug num: {newNumber}
    </div>
  )

}

export default App