import styled from 'styled-components';

export const ReviewList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: fit-content;
  max-height: 700px;
  overflow-y: scroll;
  margin-bottom: 20px;
`;
export const ReviewCard = styled.li`
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 4px;
`;

export const ReviewContent = styled.p`
    margin-bottom: 10px;
`