import { Button, Container, Title } from "./styles";

export function GenericButton() {
  return (
    <Container>
      <Button onPress={()=>{console.log("Apertou")}}>
        <Title>Generic Button</Title>
      </Button>
    </Container>
  );
}
