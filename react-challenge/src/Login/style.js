import styled from "styled-components";
import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  background-color: #292929;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 50%;
  padding: 1em;
  margin: 5px;
  border-radius: 8px;
  border-style: hidden;
  color: #535353;
  font-size: 8px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  background-color: #ffce00;
  width: 50%;
  padding: .5em;
  margin: 5px;
  text-align: center;
  border-radius: 8px;
  border-style: hidden;
  font-size: 12px;
  font-weight: bolder;
`;

export const IconGithub = styled(AiFillGithub)`
  color: #ffce00;
  margin: 50px;
  transform: scale(5);
`;

export const IconArrow = styled(AiOutlineArrowRight)`
  margin-left: 5px;
`;
