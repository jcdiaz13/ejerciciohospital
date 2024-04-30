import { i } from "./rick&mortyapi"

export const getCharacters = async () => {
  const response = await i.get("/character")
  console.log('LALALALA', response.data);
  return response.data.results; // Array de personaje
}

export const getCharacterById = (id) => i.get(`/character/${id}`)


export const getEpisodes = async (episodeUrls) => {
  const episodes = await Promise.all(
    episodeUrls.map(async (url) =>{
      const res = await i.get(url);
      return res.data;
    })
  );
  console.log(episodes);
  return episodes;
}
