import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';
import MyStyles from './components/MyStyles';
import LoggedIn from './components/state/LoggedIn';
import MyUser from './components/state/MyUser';
import Counter from './components/reducerState/Counter';
import { ThemeContextProvider } from './components/contextState/ThemeContext';
import Box from './components/contextState/Box';

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
      {/* <Greet name = 'Udeme' isLoggedIn = {true} /> */}
      {/* <Person hisname = {personName} /> */}
      {/* <PersonList names = {namesList} /> */}
      {/* <Status status='success' /> */}
      {/* <Heading>Heading PlaceHolder Text</Heading> */}
      {/* <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar> */}
      {/* <Button handleClick={(event, id) => {
        console.log('button clicked', event, id)
      }} /> */}

      {/* <Input value = '' handleChange={event => console.log(event)}/> */}

      {/* <MyStyles styles={{border: '2px solid red', padding: '1rem', width: '80%', margin: '1rem auto', borderRadius: '12px', cursor: 'pointer'}} /> */}
      {/* <LoggedIn /> */}
      {/* <MyUser /> */}
      {/* <Counter /> */}
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;