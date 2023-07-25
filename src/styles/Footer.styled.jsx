import styled from 'styled-components';

export const FooterItem = styled.footer`
  position: relative;
  padding: 30px 0;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  margin-top: auto;

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
`;
