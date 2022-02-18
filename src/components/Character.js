// Write your Character component here

import React from 'react'; 

import styled from 'styled-components'; 


const Character = props => {
    const { info } = props 
    return (
        <div className = 'characters' >
        <p> {info.name}  </p>     
       
        </div>
    )
}

export default Character; 