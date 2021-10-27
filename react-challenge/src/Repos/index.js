import React, { useContext } from "react";
import { createGlobalStyle } from "styled-components";
import Nav from "../components/NavBar";
import {
  Container,
  Header,
  ArrowBack,
  NumRepos,
  Repositories,
  Repository,
  RepoName,
  RepoDesc,
  StarIcon,
  LockOpen,
  LockClose,
} from "../Repos/style";
import { context } from "../context";
import { StyledLink } from "../Login/style";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    
    body{
        background: #292929;
    }

    a{
      text-decoration: none;
    }

`;

export default function Repos() {
  const ctx = useContext(context);
  return (
    <Container>
      <GlobalStyle />
      <Header>
        <StyledLink to="/home">
          <ArrowBack />
        </StyledLink>
        <NumRepos> {ctx.user?.public_repos} Repositórios</NumRepos>
      </Header>
      <Repositories>
        {(ctx?.repos).map((repo) => (
          <Repository key={repo?.id}>
            <a href={repo?.html_url} target="_blank" rel="noreferrer">
              <RepoName>
                <div></div> {repo?.name}
              </RepoName>
            </a>
            <RepoDesc>{repo?.description}</RepoDesc>
            <div>
              {" "}
              <div>
                <StarIcon />
                <p>{repo?.stargazers_count}</p>
              </div>{" "}
              <div>
                <LockOpen /> <LockClose />
              </div>
            </div>
          </Repository>
        ))}
      </Repositories>
      <Nav />
    </Container>
  );
}
