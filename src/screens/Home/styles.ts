import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-top: 10%;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const PokeballImg = styled.Image`
  width: 90px;
  height: 90px;
`;

export const PokemonTitle = styled.Image`
  width: 174px;
  height: 105px;
`;

export const NextBattleContainer = styled.View`
  flex: 1;
  background-color: red;
`;

export const NextBattleText = styled.Text`
  color: white;
  font-size: 24px;
`;

export const ButtonsContainer = styled.View`
  padding-bottom: 20px;
  align-items: center;
  justify-content: center;
`;

export const NewBattleButton = styled.Pressable`
  background-color: green;
  width: 90%;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 10px;
  border-radius: 26px;
`;

export const NewBattleButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const BattlesButton = styled.Pressable`
  width: 90%;
  background-color: blue;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 10px;
  border-radius: 26px;
`;

export const BattlesButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
