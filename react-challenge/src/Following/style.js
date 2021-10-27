import styled from "styled-components";
import { BiArrowBack, BiRightArrowAlt } from "react-icons/bi";
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
`;

export const Header = styled.header`
  background: #1f1f1f;
  color: #fff;
  width: 75%;
  height: 40px;
  padding: 8px;
  display: flex;
  align-items: center;
  border: solid #000 1px;
  border-radius: 3px;
`;

export const ArrowBack = styled(BiArrowBack)`
  color: #fff;
  flex: 1 1 auto;
`;

export const NumFollowers = styled.h1`
  flex: 1 1 auto;
  text-align: center;
  font-size: 16px;
`;

export const AllFollowers = styled.section`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid black 1px;
  border-radius: 5px;
  color: #fff;

  article: last-child {
    border-bottom: none;
  }
`;

export const Follower = styled.article`
  width: 100%;
  border-bottom: solid #969696 1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
  }
`;
export const YellowComp = styled.div`
  background: #ffce00;
  height: 32px;
  width: 5px;
  margin: 0 5px 0px 0px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const Avatar = styled.img`
  height: 40px;
  width: 40px;
  margin: 16px;
  border: solid white 2px;
  border-radius: 50%;
`;

export const User = styled.p`
  color: #fff;
  margin: 5px;
  font-size: 10px;
  font-weight: bold;
`;

export const ArrowFoward = styled(BiRightArrowAlt)`
  margin: 16px;
  transform: scale(1.5);
`;