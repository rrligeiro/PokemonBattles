import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
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
