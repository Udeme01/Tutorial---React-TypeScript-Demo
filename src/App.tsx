import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
  // created a new person object with first and last as properties.
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  // created an array of objects with first and last as properties.
  const namesList = [
    {
      first: 'Maxi',
      last: 'Luis'
    },
    {
      first: 'Leo',
      last: 'Mark'
    },
    {
      first: 'Gerald',
      last: 'Jacky'
    }
  ] 

  return (
    <div className="App">
      <Greet name = 'Udeme' messageCount = {10} isLoggedIn = {true} />
      <Person hisname = {personName} />
      <PersonList names = {namesList} />
    </div>
  );
}

export default App;