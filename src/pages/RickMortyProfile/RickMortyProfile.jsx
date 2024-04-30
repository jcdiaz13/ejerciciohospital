import { useEffect, useState } from "react";
import {
  getCharacterById,
  getEpisodes,
} from "../../app/services/rick&mortyservices";
import { NavLink, useParams } from "react-router-dom";
import {
  StyledContainer,
  GridContainer,
  ImageColumn,
  ProfileColumn,
  EpisodesColumn,
  ProfileImage,
  Data,
  Episodes,
} from "./RickMortyProfile.styles";

const RickMortyProfile = () => {
  const [profile, setProfile] = useState();
  const [episodes, setEpisodes] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getCharacterById(id).then((res) => {
      setProfile(res);
      getEpisodes(res.data.episode).then((episode) => {
        setEpisodes(episode);
        console.log("episodes", episode);
      });
      console.log("profile", res.data);
    });
  }, [id]);

  return (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <StyledContainer>
        {profile && (
          <GridContainer>
            <ImageColumn>
              <ProfileImage src={profile.data.image} alt={profile.data.name} />
            </ImageColumn>
            <ProfileColumn>
              <h1>{profile.data.name}</h1>
              <Data>
                <p>Specie: {profile.data.species}</p>
                <p>Gender: {profile.data.gender}</p>
                <p>Location: {profile.data.location.name}</p>
                <p>Status: {profile.data.status}</p>
                <p>Origin: {profile.data.origin.name}</p>
                <p>Type: {profile.data.type}</p>
                <p>Last known location: {profile.data.location.name}</p>
                <p>Created: {profile.data.created}</p>
              </Data>
            </ProfileColumn>
            <EpisodesColumn>
              <Episodes>
                <h2>Episodes: {profile.data.episode.length}</h2>
                {episodes?.map((episode) => (
                  <p key={episode.name}>{episode.name}</p>
                ))}
              </Episodes>
            </EpisodesColumn>
          </GridContainer>
        )}
      </StyledContainer>
    </>
  );
};

export default RickMortyProfile;
