// RickMortyProfile.styles.js

import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 90%;
  margin: auto;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export const ImageColumn = styled.div`
  grid-column: 1 / 2;
`;

export const ProfileColumn = styled.div`
  grid-column: 2 / 3;
`;

export const EpisodesColumn = styled.div`
  grid-column: 3 / 4;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: auto;
`;

export const Data = styled.div`
  /* Estilos para los datos */
`;

export const Episodes = styled.div`
  /* Estilos para los episodios */
`;
