import styled from "styled-components";

const StyledAnchor = styled.a`
  position: relative;
  text-decoration: none;
  width: 40px;
  height: 32px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &:visited {
    color: unset;
  }

  svg {
    font-size: ${(props) => (props.medium ? "2rem" : "1.5rem")};
    fill: ${(props) => (props.color ? props.color : "unset")};
  }

  img {
    position: absolute;
    left: 0;
    width: 100px;
    object-fit: contain;
  }
`;

export default StyledAnchor;
