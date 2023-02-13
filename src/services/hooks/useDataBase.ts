import AsyncStorage from "@react-native-async-storage/async-storage";

const DB_KEY = "@PokemonBattles:battles";

export interface Battle {
  id: string;
  pokemon1: {
    id: string;
    name: string;
    types: string[];
  };
  pokemon2: {
    id: string;
    name: string;
    types: string[];
  };
  date: string;
}

export const useDataBase = () => {
  const addBattle = async (data: Battle) => {
    try {
      let newDb;
      const value = await AsyncStorage.getItem(DB_KEY);
      if (value !== null) {
        const db = JSON.parse(value);
        newDb = [...db, data];
      } else {
        newDb = [data];
      }
      const jsonValue = JSON.stringify(newDb);
      await AsyncStorage.setItem(DB_KEY, jsonValue);
      return newDb;
    } catch (error) {
      console.log("addBattle ERROR: " + error);
      return { error };
    }
  };

  const getBattles = async () => {
    const value = await AsyncStorage.getItem(DB_KEY);
    if (value !== null) {
      const db = JSON.parse(value);
      return db;
    }
    return [];
  };

  const deleteBattle = async (data: Battle) => {
    try {
      let newDb;
      const value = await AsyncStorage.getItem(DB_KEY);
      if (value !== null) {
        const db = JSON.parse(value);
        newDb = db.filter((battle: Battle) => battle.id !== data.id);
      } else {
        newDb = [];
      }
      const jsonValue = JSON.stringify(newDb);
      await AsyncStorage.setItem(DB_KEY, jsonValue);
      return newDb;
    } catch (error) {
      console.log({ error });
      return { error };
    }
  };

  return {
    addBattle,
    getBattles,
    deleteBattle,
  };
};
