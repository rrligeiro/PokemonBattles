import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  align-self: center;
  text-align: center;
  color: #f00;
  font-size: 24px;
  font-family: ${(theme) => theme.theme.FONTS.REGULAR};
`;
