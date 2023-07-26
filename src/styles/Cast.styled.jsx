import styled from 'styled-components';
import { breakpoints } from './Theme';

const { _, mobileL, tablet, desktop } = breakpoints;

export const CastWrap = styled.ul`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-height: 600px;
  overflow-y: scroll;
  margin-bottom: 20px;

  @media ${tablet} {
    max-height: 700px;
    gap: 10px;
  }
`;
export const CastItem = styled.li`
  padding: 10px;
  width: calc((100% - 10px) / 3);
  max-width: 135px;
  height: 170px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: space-between;
  align-items: center;

  @media ${mobileL} {
    width: calc((100% - 15px) / 4);
  }
`;

export const Img = styled.img`
  height: 70%;
`;

export const CastDetails = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;
export const CastText = styled.p`
  font-size: 13px;
  text-overflow: ellipsis;
  line-height: 1.14;
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;

  @media ${tablet}{
    font-size: 15px;
  }
`;
