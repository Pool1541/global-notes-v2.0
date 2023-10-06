import StyledLogo from "./elements/Logo.elements";

export default function Logo({ image }) {
  return (
    <StyledLogo>
      <img src={image} alt="Logo"></img>
    </StyledLogo>
  );
}
