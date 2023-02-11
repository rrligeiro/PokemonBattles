import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const PokemonContainer = styled.View.attrs({
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.32,
  shadowRadius: 5.46,

  elevation: 9,
})`
  justify-content: center;
  align-items: center;
  background-color: #e0d8d7;
  border: 2px solid #000;
  border-radius: 28px;
  margin: 10px;
`;

export const PokemonTypeAndSprite = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PokemonSpriteContainer = styled.View.attrs({
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.32,
  shadowRadius: 5.46,

  elevation: 9,
})`
  border-radius: 28px;
  background-color: #e0d8d7;
  margin: 15px;
`;

export const PokemonSprite = styled.Image`
  width: 140px;
  height: 140px;
`;

export const PokemonTypesContainer = styled.View``;

export const PokemonName = styled.Text`
  text-align: center;
  color: black;
  font-size: 26px;
`;

export const FightImage = styled.Image`
  align-self: center;
  width: 160px;
  height: 72px;
`;

export const DateButton = styled.Pressable.attrs({
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.29,
  shadowRadius: 4.65,

  elevation: 7,
})`
  align-self: center;
  align-items: center;
  justify-content: center;
  background-color: #e0d8d7;
  border: 2px solid #000;
  border-radius: 28px;
  margin: 10px;
  padding: 10px;
  width: 150px;
`;

export const DateButtonText = styled.Text`
  text-align: center;
  color: black;
  font-size: 26px;
`;

export const DateContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BattleDateDisplay = styled.Text`
  text-align: center;
  color: black;
  font-size: 26px;
`;

export const ScheduleBattleButton = styled.Pressable.attrs({
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.29,
  shadowRadius: 4.65,

  elevation: 7,
})`
  align-self: center;
  align-items: center;
  justify-content: center;
  background-color: #f2352e;
  border: 2px solid #000;
  border-radius: 28px;
  margin: 10px;
  padding: 10px;
  flex: 1;
`;

export const ScheduleBattleButtonText = styled.Text`
  text-align: center;
  color: black;
  font-size: 26px;
`;
