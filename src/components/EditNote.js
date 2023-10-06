import { HiCheck } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import StyledTextArea from "./elements/TextArea.Elements";
import styled from "styled-components";
import { useEffect, useRef } from "react";
import StyledButton from "./elements/Button.elements";
import StyledCard from "./elements/StyledCard.elements";
import { updateNote } from "../firebase/firebase";

const StyledEditingNote = styled(StyledCard)`
  &:hover svg {
    background-color: transparent;
    transition: color 0.2s ease;
  }
`;

const SendButton = styled(StyledButton)`
  background-color: transparent;
  color: #40a133;
  position: absolute;
  padding: 5px 5px 0;
  top: 13px;
  right: 5px;
  transition: all 0.2s ease;
`;

const CancelButton = styled(SendButton)`
  background-color: transparent;
  color: red;
  position: absolute;
  padding: 5px 5px 0;
  top: 45px;
  right: 5px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #e99e9c;
  }
`;

const StyledTitle = styled(StyledTextArea)`
  padding: 0;
  font-size: 1.05rem;
  font-weight: 600;
  padding: 0 20px 0 0;
`;

const StyledDescription = styled(StyledTextArea)`
  width: 90%;
  padding: 0;
  font-size: 0.8rem;
  padding: 0 20px 0 0;
  height: ${(props) => `${props.height}px`};
`;

export default function EditNote({ data, descriptionH, finish }) {
  const titleRef = useRef();
  const descriptionRef = useRef();

  useEffect(() => {
    titleRef.current.select();
  }, []);

  function handleUpdate(e) {
    e.preventDefault();
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    if (/\S/.test(title) || /\S/.test(description)) {
      updateNote(data.docId, {
        title: title || "Empty",
        description: description || "Empty",
      });
      finish();
    }
  }

  function handleCancel(e) {
    e.preventDefault();
    finish();
  }

  return (
    <StyledEditingNote>
      <StyledTitle
        ref={titleRef}
        as="input"
        spellCheck={false}
        autoFocus
        defaultValue={data.title}
      />
      <StyledDescription
        ref={descriptionRef}
        height={descriptionH}
        spellCheck={false}
        defaultValue={data.description}
      />
      <SendButton type="button" onClick={handleUpdate} title="Update">
        <HiCheck />
      </SendButton>
      <CancelButton type="button" onClick={handleCancel} title="Cancel">
        <HiXMark />
      </CancelButton>
    </StyledEditingNote>
  );
}
