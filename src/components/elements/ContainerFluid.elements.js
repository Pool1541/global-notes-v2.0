import styled from "styled-components";
import StyledDiv from "./Div.element";

const StyledContainerFluid = styled(StyledDiv)`
  width: 100%;
  margin: 80px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
`;

export default StyledContainerFluid;
