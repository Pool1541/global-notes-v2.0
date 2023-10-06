import StyledHeader from "./elements/Header.elements";
import { IoLogoFirebase, IoLogoReact } from "react-icons/io5";
import StyledAnchor from "./elements/Anchor.elements";

export default function Header() {
  return (
    <StyledHeader>
      <StyledAnchor
        href="https://es.reactjs.org/"
        target="_blank"
        color="#61dafb"
        title="React"
      >
        <IoLogoReact />
      </StyledAnchor>
      <StyledAnchor
        href="https://firebase.google.com/"
        target="_blank"
        color="#ffcc30"
        title="Firebase"
      >
        <IoLogoFirebase />
      </StyledAnchor>
      <StyledAnchor
        href="https://styled-components.com/"
        target="_blank"
        title="Styled-components"
      >
        <img
          src={require("../images/styled-components-logo.png")}
          alt="Styled-componentslogo"
        ></img>
      </StyledAnchor>
    </StyledHeader>
  );
}
