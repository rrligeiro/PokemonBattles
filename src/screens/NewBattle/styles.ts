import { Battle } from "./../../services/hooks/useDataBase";
import { Pressable } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View``;

export const Title = styled.Text`
  text-align: center;
  color: black;
  font-size: 20px;
  margin: 1%;
  font-family: ${(theme) => theme.theme.FONTS.DEFAULT};
`;

export const TextInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: center;
  border: 2px solid black;
  border-radius: 25px;
  justify-content: center;
  margin: 2%;
  width: 95%;
`;

export const TextInput = styled.TextInput`
  width: 90%;
  padding: 2%;
  font-family: ${(theme) => theme.theme.FONTS.DEFAULT};
`;

export const ScheduleBattle = styled.Pressable.attrs({
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.32,
  shadowRadius: 5.46,

  elevation: 9,
})`
  width: 70%;
  background-color: #eb0602;
  align-self: center;
  align-items: center;
  margin: 1%;
  padding: 2%;
  justify-content: center;
  border-radius: 26px;
  border: 1px solid #000;
`;

export const ScheduleBattleText = styled.Text`
  font-size: 16px;
  font-family: ${(theme) => theme.theme.FONTS.DEFAULT};
`;

export const DisconectedText = styled.Text`
  text-align: center;
  font-size: 16px;
  font-family: ${(theme) => theme.theme.FONTS.DEFAULT};
  color: red;
  margin: 50% 10%;
`;
