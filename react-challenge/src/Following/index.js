import React, { useContext } from "react";
import { createGlobalStyle } from "styled-components";
import {
  Container,
  Header,
  ArrowBack,
  NumFollowers,
  AllFollowers,
  Follower,
  Avatar,
  User,
  ArrowFoward,
  YellowComp,
  StyledLink,
} from "./style";
import Nav from "../components/NavBar";
import { context } from "../context";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    
    body{
        background: #292929;
    }
`;

export default function Following() {
  const ctx = useContext(context);
  return (
    <Container>
      <GlobalStyle />
      <Header>
        <StyledLink to="/home">
          <ArrowBack />
        </StyledLink>
        <NumFollowers> Seguindo {ctx?.user.following}</NumFollowers>
      </Header>
      <AllFollowers>
        {(ctx?.following).map((follower) => (
          <Follower key={follower?.id}>
            <div>
              <YellowComp />
              <Avatar src={follower?.avatar_url} />
              <User>#{follower?.login}</User>
            </div>
            <StyledLink
              onClick={() => ctx?.setUserInfo(follower)}
              to="/userinfo"
            >
              <ArrowFoward />
            </StyledLink>
          </Follower>
        ))}
      </AllFollowers>
      <Nav />
    </Container>
  );
}
