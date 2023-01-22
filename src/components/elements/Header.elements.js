import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  padding: 0 50px;
  background: #6d6d6d38;
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid #b8b8b8;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHeader;
