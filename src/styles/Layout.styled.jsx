import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 10px 0;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 18px;
  line-height: 1.75px;
  text-transform: uppercase;
  &.active {
    color: #02c342;
  }
`;

export const Header = styled.header`
  padding: 10px;
  position: relative;
  height: 40px;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.24);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;
