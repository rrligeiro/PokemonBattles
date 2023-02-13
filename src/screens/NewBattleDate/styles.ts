import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: #000;
  font-family: ${(theme) => theme.theme.FONTS.DEFAULT};
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
  color: #000;
  font-size: 22px;
  font-family: ${(theme) => theme.theme.FONTS.DEFAULT};
`;

export const FightImage = styled.Image`
  align-self: center;
  width: 130px;
  height: 58px;
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
  border: 1px solid #e0d0d6;
  border-radius: 28px;
  margin: 10px;
  padding: 10px;
  width: 150px;
`;

export const DateButtonText = styled.Text`
  text-align: center;
  color: black;
  font-size: 12px;
  font-family: ${(theme) => theme.theme.FONTS.BOLD};
`;

export const DateContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BattleDateDisplay = styled.Text`
  text-align: center;
  color: black;
  font-size: 20px;
  font-family: ${(theme) => theme.theme.FONTS.BOLD};
`;

export const ScheduleBattleButton = styled.Pressable.attrs({
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.32,
  shadowRadius: 5.46,

  elevation: 9,
})`
  background-color: #54c772;
  width: 300px;
  align-self: center;
  align-items: center;
  justify-content: center;
  padding: 6px;
  margin: 10px;
  border-radius: 26px;
  border: 1px solid #54c72f;
`;

export const ScheduleBattleButtonText = styled.Text`
  text-align: center;
  color: black;
  font-size: 26px;
  font-family: ${(theme) => theme.theme.FONTS.BOLD};
`;
