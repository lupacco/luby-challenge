import styled from "styled-components";
import { FiLogOut, FiArrowLeft } from "react-icons/fi";
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
  width: 75%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  border: solid #000 1px;
  border-radius: 3px;
`;

export const ArrowBack = styled(FiArrowLeft)`
  color: #fff;
`;

export const User = styled.p`
  color: #fff;
  margin: 5px;
  font-size: 10px;
  font-weight: bold;
`;

export const Logout = styled.p`
  color: #fff;
  display: flex;
  font-size: 10px;
  margin: 5px;
`;

export const LogoutIcon = styled(FiLogOut)`
  color: #5cbc29;
  margin-left: 5px;
  margin-top: 1px;
  transform: scale(1.2);
`;

export const Avatar = styled.img`
  height: 80px;
  width: 80px;
  position: absolute;
  top: -40px;
  border: solid white 2px;
  border-radius: 50%;
`;

export const UserDetails = styled.section`
  background: #292929;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  padding: 10px;
  border: solid #000 1px;
  border-radius: 3px;
`;

export const Name = styled.h1`
  color: #fff;
  width: 100%;
  margin-top: 48px;
  margin-bottom: 0;
  display: flex;
  div {
    background: #ffce00;
    height: 28px;
    width: 5px;
    margin: 0 5px -5px -10px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export const Adress = styled.p`
  width: 100%;
  margin: 2px 0;
  color: #fff;
  font-size: 10px;
`;

export const UserNumbers = styled.section`
  background: #5252525d;
  width: 75%;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: solid #000 1px;
  border-radius: 3px;
`;

export const NumberData = styled.div`
  color: #fff;
  text-align: center;
  h2 {
    margin: 0;
    font-size: 24px;
  }
  p {
    margin: 0;
    font-size: 12px;
  }
`;

export const Bio = styled.section`
  background: #292929;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  padding: 10px;
  border: solid #000 1px;
  border-radius: 3px;
  div {
    background: #ffce00;
    height: 28px;
    width: 5px;
    margin: 0 5px -5px -10px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  h2 {
    color: #fff;
    width: 100%;
    margin-bottom: 0;
    display: flex;
  }
  p {
    color: #fff;
    width: 100%;
    font-size: 12px;
  }
`;
