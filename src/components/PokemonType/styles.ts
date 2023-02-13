import styled from "styled-components/native";

export const Container = styled.View.attrs({
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 6,
  },
  shadowOpacity: 0.39,
  shadowRadius: 8.3,

  elevation: 13,
})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 28px;
  padding: 8px;
  margin: 10px;
  width: 160px;
`;

export const ImageContainer = styled.View.attrs({
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 6,
  },
  shadowOpacity: 0.39,
  shadowRadius: 8.3,

  elevation: 13,
})`
  background-color: #fff;
  border-radius: 50px;
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

export const TypeImage = styled.Image`
  flex: 1;
`;

export const TypeContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TypeName = styled.Text`
  text-align: center;
  font-size: 20px;
  font-family: ${(theme) => theme.theme.FONTS.DEFAULT};
`;
