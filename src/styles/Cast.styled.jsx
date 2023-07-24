import styled from 'styled-components';

export const CastWrap = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: fit-content;
  max-height: 700px;
  overflow-y: scroll;
`;
export const CastItem = styled.li`
  padding: 10px 20px;
  max-width: 340px;
  height: 500px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
`;

export const Img = styled.img`
  width: 90%;
`;

export const CastDetails = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;
export const CastText = styled.p`
  font-size: 15px;
  line-height: 1.14;
  font-weight: 500;
`;
