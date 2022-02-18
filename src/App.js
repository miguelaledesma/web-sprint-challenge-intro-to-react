import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Character from './components/Character'; 



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [ jedi, setJedi ] = useState()
  const [jediButton, setJediButton ] = useState(null)
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  const openDetails = id => {
    setJediButton(id)
  }

  const closeDetails = () => {
    setJediButton(null)
  }
  // attempted to try making buttons but thats not working. 


  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
    .then(response => {
      console.log(response.data)
      setJedi(response.data)

    })
    .catch(error => {
      console.error(error)
    })
  }, [] )


  return (
    <div className="App">
      <h1 className="Header">BEST CHARACTERS IN STAR WARS</h1>

    { jedi && jedi.map(info => {

      return <Character info= {info} key= {info.name} openDetails = {openDetails} closeDetails = {closeDetails} /> 
    } )}

    


    </div>
  );
}

export default App;
