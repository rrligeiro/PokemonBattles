import styled from "styled-components/native";

export const Container = styled.View`
  padding-top: 10%;
`;

export const Title = styled.Text`
  color: black;
  font-size: 24px;
`;

export const TextInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const TextInput = styled.TextInput`
  width: 80%;
  height: 40px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0 10px;
`;

export const ScheduleBattle = styled.Pressable`
  width: 90%;
  background-color: blue;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 10px;
  border-radius: 26px;
`;

export const ScheduleBattleText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
