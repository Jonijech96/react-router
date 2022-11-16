import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

const CharaterDetails = () => {
  const [character, setCharacter] = useState([])
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res=>setCharacter(res.data))
    }, [id])
    console.log(character);
    const navigate = useNavigate();
  const goToBack = () => {
    navigate("/characters/");
  };
  return (
    <div>
      <h1>CharaterDetails</h1>
      <ul>
        {/* {character.map((info)=>( */}
          <>
          <li>Name: {character.name}</li>
          <li>Species: {character.species}</li>
          <li>Gender: {character.gender}</li>
          <li>Status: {character.status}</li>
          <img src={character.image} alt="" />
          </>
        {/* ))} */}
      </ul>
      <button onClick={goToBack}>Volver atras</button>
    </div>
  )
}

export default CharaterDetails