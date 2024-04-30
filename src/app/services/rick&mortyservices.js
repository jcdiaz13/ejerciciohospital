import { i } from "./rick&mortyapi"

export const getCharacters = async () => {
  const response = await i.get("/character")
  console.log('LALALALA', response.data);
  return response.data.results; // Array de personaje
}

export const getCharacterById = (id) => i.get(`/character/${id}/`)
