import styled from "styled-components";
import StyledP from "./elements/Paragraph.elements";
import StyledTitle from "./elements/Title.elements";
import StyledButton from "./elements/Button.elements";
import { HiPencil } from "react-icons/hi";
import StyledCard from "./elements/StyledCard.elements";
import { useRef, useState } from "react";
import EditNote from "./EditNote";

export const EditButton = styled(StyledButton)`
  background-color: transparent;
  color: transparent;
  position: absolute;
  padding: 5px 5px 0;
  top: 13px;
  right: 5px;
  transition: all 0.2s ease;
`;

export const StyledNote = styled(StyledCard)`
  &:hover svg {
    background-color: transparent;
    color: #40a133;
    transition: color 0.2s ease;
  }
`;

export default function Note({ data }) {
  const [editing, setEditing] = useState(false);
  const noteInfo = data;
  const t = useRef();
  const p = useRef();

  function handleClick() {
    setEditing(!editing);
  }

  if (editing) {
    return (
      <EditNote
        descriptionH={p.current.clientHeight}
        data={data}
        finish={handleClick}
      />
    );
  }

  return (
    <StyledNote>
      <StyledTitle ref={t}>{noteInfo.title}</StyledTitle>
      <StyledP ref={p}>{noteInfo.description}</StyledP>
      <EditButton onClick={handleClick} title="Edit">
        <HiPencil />
      </EditButton>
    </StyledNote>
  );
}
