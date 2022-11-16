import React, { useEffect,useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
export const Characters = () => {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
  axios.get("https://rickandmortyapi.com/api/character")
  .then(res=>setCharacters(res.data.results))
  }, [])
  // console.log(characters);

  const navigate = useNavigate();
  const goToCharacter = (id) => {
    navigate(`/characters/${id}`);
  };
  const submit = (id) => {
    goToCharacter(id);
  };
  return (
    <div>
      <h1>Characters</h1>
    <ul>
      {characters.map((character)=>(
        <li >
        <Link key={character.id} to={`/characters/${character.id}`} >{character.name}</Link>
        </li>
      ))}
    </ul>
    </div>
  )
}
