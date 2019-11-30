import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import phoneBookService from './services/phonebookService';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ filter, setFilter ] = useState('');
  
  useEffect(() => {
    phoneBookService.getAll().then(initialPersons => setPersons(initialPersons));
  }, [])

  const handleFilterChange = (event) => setFilter(event.target.value);
  const handleNewNameChange = (event) => setNewName(event.target.value);
  const handleNewNumberChange = (event) => setNewNumber(event.target.value);

  const isBlank = (str) => !str || /^\s*$/.test(str);
  const personName = (person) => person.name.toLowerCase();

  const filterPersons = () => {
    let newPersonsList = [...persons];
    if (!isBlank(filter)) {
      newPersonsList = [...persons].filter(person => personName(person).includes(filter.toLowerCase()));
    }
    return newPersonsList.sort((personA, personB) => (personName(personA) < personName(personB)) ? -1 : (personName(personA) > personName(personB)) ? 1 : 0);
  };
  
  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      if (window.confirm(`${newName} is already added to phonebook replace the old number with the new one?`)) { 
        // const changedPerson = { ...persons.find(person => person.name === newName), number: newNumber };
        // phoneBookService.update(changedPerson.id, changedPerson).then(updatePerson => {
        //   setPersons([...persons].map(person => person.id !== updatePerson.id ? person : updatePerson));
        //   setNewName('');
        //   setNewNumber('');
        // });
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      };
      phoneBookService.create(newPerson).then(addedPerson => {
        setPersons(persons.concat(addedPerson));
        setNewName('');
        setNewNumber('');
      });
    }
  };

  const deletePerson = id => {
    if (window.confirm(`Do you really want to delete ${persons.find(person => person.id === id).name}?`)) { 
      phoneBookService.deletePerson(id).then(() => {
        setPersons([...persons].filter(person => person.id !== id));
      });
    }
  }

  const formSubmissionIsDisabled = () => {
   return (isBlank(newName) || isBlank(newNumber));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>Add New</h2>
      <PersonForm submission={addPerson} isDisabled={formSubmissionIsDisabled()} newName={newName} newNumber={newNumber} nameChange={handleNewNameChange} numberChange={handleNewNumberChange}/>
      <h2>Numbers</h2>
      <Persons persons={filterPersons()} deletePerson={deletePerson} />
    </>
  )
}

export default App;