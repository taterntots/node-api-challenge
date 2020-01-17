import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
  text-align: center;
  background-color: #12B0C9;
`

export default function CharacterCard(props) {
  return (
    <CardStyle>
      <div className='project-info'>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>
    </CardStyle>
  )
}