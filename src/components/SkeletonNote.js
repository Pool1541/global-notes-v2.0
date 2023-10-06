import styled, { keyframes } from "styled-components";
import StyledDiv from "./elements/Div.element";
import StyledCard from "./elements/StyledCard.elements";

const skeleton = keyframes`
  from{
    background-color: #c7c7c7;
  }

  to{
    background-color: #afafaf;
  }
`;

const SkeletonCard = styled(StyledCard)`
  background-color: #dadada;
  min-height: 102px;
`;

const SkeletonContent = styled(StyledDiv)`
  height: 15px;
  width: 80%;
  border-radius: 7px;
  background-color: #bdbdbd;
  animation: ${skeleton} 1s linear infinite alternate;
`;

export default function SkeletonNote() {
  return (
    <SkeletonCard>
      <SkeletonContent />
      <SkeletonContent />
    </SkeletonCard>
  );
}
