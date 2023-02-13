import styled from "styled-components/native";

export const Container = styled.View.attrs({
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.32,
  shadowRadius: 5.46,

  elevation: 9,
})`
  background-color: #e0d8d7;
  border-radius: 28px;
  margin: 10px;
  border: 4px solid #e0d8e4;
`;

export const PokemonSpriteContainer = styled.View.attrs({
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 1,
  shadowRadius: 16.0,

  elevation: 24,
})`
  background-color: #e0d8d7;
  border-radius: 28px;
  border: 4px solid;
`;

export const PokemonSprite = styled.Image`
  width: 140px;
  height: 140px;
`;

export const PokemonName = styled.Text`
  font-size: 12px;
  color: #000;
  text-align: center;
  overflow: hidden;
  position: absolute;
  top: 125px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  font-family: ${(theme) => theme.theme.FONTS.DEFAULT};
`;

export const FightContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
`;

export const FightImage = styled.Image`
  width: 36px;
  height: 24px;
`;

export const DateText = styled.Text`
  align-self: center;
  color: black;
  font-size: 24px;
  font-family: ${(theme) => theme.theme.FONTS.DEFAULT};
`;

export const DateTextContainer = styled.View``;

export const DeleteButton = styled.Pressable`
  align-self: center;
  margin: 10px;
`;

export const DeleteButtonAndTextContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
