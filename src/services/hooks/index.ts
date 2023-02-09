import { api } from "../api";

export const useGetData = () => {
  const getPokemons = async () => {
    try {
      const response = await api.get("/pokemon?limit=100000&offset=0");
      return response.data;
    } catch (error) {
      console.log({ error });
      return { error };
    }
  };

  const getPokemonByName = async (name: string) => {
    try {
      const response = await api.get(`/pokemon/${name}`);
      return response.data;
    } catch (error) {
      console.log({ error });
      return { error };
    }
  };

  return {
    getPokemons,
    getPokemonByName,
  };
};
