import React, { useContext } from "react";
import { context } from '../context'
import { createGlobalStyle } from "styled-components";
import {
  Container,
  Header,
  User,
  LogoutIcon,
  Logout,
  Avatar,
  UserDetails,
  Name,
  Adress,
  UserNumbers,
  NumberData,
  Bio,
} from "./style";
import { Link } from "react-router-dom";
import Nav from "../components/NavBar";


const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    
    body{
        background: #292929;
    }
`;

export default function Home() {
  const ctx = useContext(context)
  console.log(ctx.user.followers)
  return (
    <Container>
      <GlobalStyle />
      <Header>
        <User>#{ctx.user?.login}</User>
        <Link to="/">
          <Logout>
            Sair <LogoutIcon />
          </Logout>
        </Link>
      </Header>
      <UserDetails>
        <Avatar src={ctx.user?.avatar_url} alternativeText={ctx.user?.login} />
        <Name>
          <div></div>{ctx.user?.name}
        </Name>
        <Adress>{ctx.user?.email}</Adress>
        <Adress>{ctx.user?.location}</Adress>
      </UserDetails>
      <UserNumbers>
        <NumberData>
          <h2>{ctx.user?.followers}</h2>
          <p>Seguidores</p>
        </NumberData>
        <NumberData>
          <h2>{ctx.user?.following}</h2>
          <p>Seguindo</p>
        </NumberData>
        <NumberData>
          <h2>{ctx.user?.public_repos}</h2>
          <p>Repos</p>
        </NumberData>
      </UserNumbers>
      <Bio>
        <h2>
          <div></div>BIO
        </h2>
        <p>
          {ctx.user?.bio}
        </p>
      </Bio>
      <Nav />
    </Container>
  );
}
