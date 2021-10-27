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
} from "./style";
import Nav from "../components/NavBar";
import { StyledLink } from "../Login/style";
import { context } from "../context";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    
    body{
        background: #292929;
    }
`;

export default function Followers() {
  const { user, followers, setUserInfo } = useContext(context);

  return (
    <Container>
      <GlobalStyle />
      <Header>
        <StyledLink to="/home">
          <ArrowBack />
        </StyledLink>
        <NumFollowers> {user.followers} Seguidores</NumFollowers>
      </Header>
      <AllFollowers>
        {followers?.map((follower) => (
          <Follower key={follower?.id}>
            <div>
              <YellowComp />
              <Avatar src={follower?.avatar_url} />
              <User>#{follower?.login}</User>
            </div>
            <StyledLink onClick={() => setUserInfo(follower)} to="/userinfo">
              <ArrowFoward />
            </StyledLink>
          </Follower>
        ))}
      </AllFollowers>
      <Nav />
    </Container>
  );
}
