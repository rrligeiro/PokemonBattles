import { Pressable } from "react-native";
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
  flex-direction: row;
  align-items: center;
  padding: 2%;
  margin: 2%;
  border: 2px solid #000;
  border-radius: 20px;
  background-color: #e0d8d7;
`;

export const PokemonContainer = styled.View`
  flex: 7;
  flex-direction: row;
  align-items: center;
`;

export const PokemonName = styled.Text`
  flex: 1;
  color: #000;
  font-size: 25px;
  text-align: center;
  font-family: ${(theme) => theme.theme.FONTS.DEFAULT};
`;

export const PokemonImageContainer = styled.View.attrs({
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
`;

export const Image = styled.Image`
  width: 96px;
  height: 96px;
`;
