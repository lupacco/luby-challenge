import React, { useEffect, useContext, useCallback, useState } from "react";
import { context } from "../context";
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
  StyledLink,
} from "./style";
import Nav from "../components/NavBar";
import { ArrowBack } from "../Repos/style";
import client from "../services/client";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    
    body{
        background: #292929;
    }
`;

export default function UserInfo() {
  const { userInfo, setUser, setRepos, setFollowers, setFollowing } =
    useContext(context);

  const [followers, setLocalFollowers] = useState([]);
  const [following, setLocalFollowing] = useState([]);
  const [repos, setLocalRepos] = useState([]);
  const [fullInfo, setFullInfo] = useState({});

  const getFullInfo = useCallback(async () => {
    const { data: fullInfoData } = await client.get(`/${userInfo.login}`);
    const { data: reposData } = await client.get(`/${userInfo.login}/repos`);
    const { data: followersData } = await client.get(
      `/${userInfo.login}/followers`
    );
    const { data: followingData } = await client.get(
      `/${userInfo.login}/following`
    );

    setFullInfo(fullInfoData);
    setLocalRepos(reposData);
    setLocalFollowers(followersData);
    setLocalFollowing(followingData);
  }, [userInfo.login]);

  useEffect(() => {
    getFullInfo();
  }, [getFullInfo]);
  // if(!fullInfo?.login){
  //   return <h1>Carregando...</h1>
  // }
  return (
    <Container>
      <GlobalStyle />
      <Header>
        <Logout>
          <StyledLink to="/followers">
            <ArrowBack /> Voltar
          </StyledLink>
        </Logout>
        <User>#{fullInfo.login}</User>
        <StyledLink to="/home">
          <Logout
            onClick={() => {
              setUser(fullInfo);
              setFollowers(followers);
              setFollowing(following);
              setRepos(repos);
            }}
          >
            Salvar <LogoutIcon />
          </Logout>
        </StyledLink>
      </Header>
      <UserDetails>
        <Avatar src={fullInfo?.avatar_url} alternativeText="avatar" />
        <Name>
          <div></div>
          {fullInfo?.name}
        </Name>
        <Adress>{fullInfo?.email}</Adress>
        <Adress>{fullInfo?.location}</Adress>
      </UserDetails>
      <UserNumbers>
        <NumberData>
          <h2>{fullInfo?.followers}</h2>
          <p>Seguidores</p>
        </NumberData>
        <NumberData>
          <h2>{fullInfo?.following}</h2>
          <p>Seguindo</p>
        </NumberData>
        <NumberData>
          <h2>{fullInfo?.public_repos}</h2>
          <p>Repos</p>
        </NumberData>
      </UserNumbers>
      <Bio>
        <h2>
          <div></div>BIO
        </h2>
        <p>{fullInfo?.bio}</p>
      </Bio>
      <Nav />
    </Container>
  );
}
