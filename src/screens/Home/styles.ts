import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-top: 20%;
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

export const AlertText = styled.Text`
  text-align: center;
  margin: 5%;
  color: #f00;
  font-size: 26px;
  font-family: ${(theme) => theme.theme.FONTS.REGULAR};
`;

export const NextBattleContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  border: 2px solid #000;
  border-radius: 26px;
  margin: 3px;
`;

export const NextBattleText = styled.Text`
  text-align: center;
  margin: 30px;
  color: #000;
  font-size: 36px;
  font-family: ${(theme) => theme.theme.FONTS.DEFAULT};
`;

export const ButtonsContainer = styled.View`
  padding-bottom: 20px;
  align-items: center;
  justify-content: center;
`;

export const NewBattleButton = styled.Pressable.attrs({
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
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 10px;
  border-radius: 26px;
  border: 1px solid #54c72f;
`;

export const BattlesButton = styled.Pressable.attrs({
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.32,
  shadowRadius: 5.46,

  elevation: 9,
})`
  width: 300px;
  background-color: #d2d660;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 10px;
  border-radius: 26px;
  border: 1px solid #d2d00f;
`;

export const BattlesButtonText = styled.Text`
  font-size: 22px;
  font-family: ${(theme) => theme.theme.FONTS.BOLD};
`;
