import StyledForm from "./elements/Form.elements";
import StyledDiv from "./elements/Div.element";
import StyledTextArea from "./elements/TextArea.Elements";
import StyledButton from "./elements/Button.elements";
import styled, { keyframes } from "styled-components";
import { useRef, useState } from "react";
import { setNote } from "../firebase/firebase";

const Container = styled(StyledDiv)`
  min-height: 132px;
`;

const SubmitButton = styled(StyledButton)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: -20px;
  right: 20px;

  &:hover {
    background-color: #40a133;
  }
`;

const grow = keyframes`
  from {
    height: 0;
    padding: 0 5px;
  }

  to {
    height: 30px;
    padding: 5px;
  }
`;

const decrease = keyframes`
  from {
    height: 30px;
    padding: 5px;
  }
  to {
    height: 0;
    padding: 0 5px;
  }
`;

const StyledInput = styled(StyledTextArea)`
  height: 0;
  padding: 0;
  animation: ${({ reverse }) => (reverse === "normal" ? grow : decrease)} 0.1s
    linear both;
`;

export default function Form() {
  const [isEditing, setIsEditing] = useState(false);
  const [animation, setAnimation] = useState(false);
  const form = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();

  function handleEditing() {
    setIsEditing(true);
    document.addEventListener("click", handleClick);
  }

  function handleClick(e) {
    if (!(e.target.form === form.current || e.target === form.current)) {
      setAnimation(true);
      titleRef.current.addEventListener("animationend", toggleAnimation);
      document.removeEventListener("click", handleClick);
    }
  }

  function toggleAnimation() {
    setIsEditing(false);
    setAnimation(false);
    titleRef.current.removeEventListener("animationend", toggleAnimation);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const title = titleRef.current;
    const description = descriptionRef.current;

    if (/\S/.test(title.value) || /\S/.test(description.value)) {
      const noteInfo = {
        title: title.value || "Empty",
        description: description.value || "Empty",
        date: Date.now(),
      };
      title.value = "";
      description.value = "";

      await setNote(noteInfo);
    }
  }

  return (
    <Container>
      <StyledForm ref={form} onSubmit={handleSubmit}>
        {isEditing ? (
          <StyledInput
            ref={titleRef}
            reverse={animation ? "reverse" : "normal"}
            autoFocus
            as="input"
            type={"text"}
            placeholder="Title"
          ></StyledInput>
        ) : null}
        <StyledTextArea
          ref={descriptionRef}
          placeholder="Take a note..."
          onFocus={handleEditing}
        />
        <SubmitButton type="submit">+</SubmitButton>
      </StyledForm>
    </Container>
  );
}
