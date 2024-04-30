import { useEffect, useState } from "react";
import { getCharacterById } from "../../app/services/rick&mortyservices";
import { NavLink, useParams } from "react-router-dom";
import { StyledContainer } from "../RickMortyHome/RickMorty.styles";

const RickMortyProfile = () => {
  const [profile, setProfile] = useState();
  const { id } = useParams();

  useEffect(() => {
    getCharacterById(id).then((res) => {
      setProfile(res);
    });
  }, [id]);

  return (
    <StyledContainer>
      <img src={profile && profile.data.image} />
      <div>
        <NavLink to={"/"}>Home</NavLink>
        <h1>{profile && profile.data.name}</h1>
        <p>Specie: {profile && profile.data.species}</p>
        <p>Gender: {profile && profile.data.gender}</p>
        <p>Location: {profile && profile.data.location.name}</p>
        <p>Status: {profile && profile.data.status}</p>
        <p>Episodes: {profile && profile.data.episode.length}</p>
      </div>
    </StyledContainer>
  );
};

export default RickMortyProfile;
