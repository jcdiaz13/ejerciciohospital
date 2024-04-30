import { useEffect, useState } from "react";
import { getCharacters } from "../../app/services/rick&mortyservices";
import { Box, StyledContainer } from "./RickMorty.styles";
import { Link, NavLink } from "react-router-dom";

const RickMorty = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((res) => {
      setCharacters(res);
      console.log(res);
    });
  }, []);

  return (
    <StyledContainer>
      <NavLink to={"/"}>Home</NavLink>
      <h1>RICK & MORTY</h1>
      <Box>
        {characters.map((character) => {
          return (
            <div key={character.id}>
              <Link to={`/Rick&MortyProfile/${character.id}`}>
                <img src={character.image} />
              </Link>
              <h2>{character.name}</h2>
            </div>
          );
        })}
      </Box>
    </StyledContainer>
  );
};

export default RickMorty;
