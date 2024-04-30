import { useEffect, useState } from "react";
import { getCharacters } from "../../app/services/rick&mortyservices";
import { StyledContainer } from "./RickMorty.styles";
import { Link, NavLink } from "react-router-dom";
import { Title } from "../RickMortyProfile/RickMortyProfile.styles";
// import { Link } from "react-router-dom";

const RickMorty = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((res) => {
      setCharacters(res);
      console.log(res);
    });
  }, []);

  return (
    <div>
      <NavLink to={"/"}>Home</NavLink>
      <Title>RICK & MORTY</Title>
      <StyledContainer>
        {characters.map((character, i) => {
          return (
            <div key={i}>
              <Link to={`/Rick&MortyProfile/${character.id}`}>
                <img src={character.image} />
              </Link>
              <h2>{character.name}</h2>
            </div>
          );
        })}
      </StyledContainer>
    </div>
  );
};

export default RickMorty;
