import styled from 'styled-components';
import { breakpoints } from './Theme';

const { _, mobileL, tablet, desktop } = breakpoints;

export const FooterItem = styled.footer`
  position: relative;
  padding: 30px 0;
  display: flex;
  gap: 5px;
  justify-content: space-evenly;
  align-items: center;
  margin-top: auto;
  font-size: 13px;

  &::before {
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.24);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  @media ${mobileL} {
    font-size: 15px;
    align-items: baseline;
  }
  @media ${tablet} {
    font-size: 17px;
    justify-content: space-between;
    gap: 20px;
  }
  @media ${desktop} {
    font-size: 20px;
    gap: 5px;
  }
`;

export const FooterWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

  @media ${tablet} {
    gap: 20px;
  }
  @media ${desktop} {
    gap: 10px;
  }
`;

export const Rights = styled.p`
  display: none;
  @media ${tablet} {
    display: initial;
  }
`;
