import styled from "styled-components";
import { FiUsers, FiHome, FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #969696;

  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover {
    color: #000;
    background: rgba(0,0,0,.03);
  }
`;

export const NavBar = styled.nav`
  width: 75%;
  background: #fff;
  height: 25px;
  border-radius: 5px;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    margin: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  p {
    margin: 4px 0 0 0;
    font-size: 12px;
  }
`;

export const HomeIcon = styled(FiHome)``;

export const FollowIcon = styled(FiUsers)``;

export const GithubIcon = styled(FiGithub)``;
