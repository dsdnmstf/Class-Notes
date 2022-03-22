import MaterialUI from "./components/material-ui/MaterialUI";
import StyledComponents from "./components/styled/StyledComponents";
import { Wrapper } from "./components/styled/Wrapper";
import HeaderText from "./components/styled/HeaderText";

function App() {
  return (
    <Wrapper>
      <HeaderText color="blue">MATERIAL UI COMPONENT</HeaderText>
      <MaterialUI />
      <StyledComponents />
    </Wrapper>
  );
}

export default App;
