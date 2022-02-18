// Write your Character component here

import React from 'react'; 

import styled from 'styled-components'; 


const StyledP = styled.p `
border: 2px solid black ;
  padding: 20px;
  margin: auto; 
  color: white; 
  font-size: 20px; 
  width: 50%; 
  background-color: #FFDFD3; 

`


const Character = props => {
    const { info } = props 
    return (
        <div className = 'characters' >
        <StyledP> {info.name}  </StyledP> 
           
       
        </div>
    )
}

export default Character; 