import styled from 'styled-components';
import StyledDiv from './Div.element';

const StyledCard = styled(StyledDiv)`
  max-height: 200px;
  position: relative;
  overflow-y: auto;
  overflow-wrap: break-word;
  background-color: #fff;
  border: 1px solid #dadada;
  border-radius: 7px;
  padding: 20px;
  color: #464646;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 2px 3px 2px rgb(73 73 73 / 26%);
  }
`;

export default StyledCard;
