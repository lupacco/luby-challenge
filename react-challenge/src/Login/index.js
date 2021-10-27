import React, { useState, useContext } from "react";
import { createGlobalStyle } from "styled-components";
import { Container, Input, Button, IconGithub, IconArrow } from "./style";
import client from "../services/client";
import { context } from "../context";
import { useHistory } from "react-router";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    
    body{
        background: #292929;
    }
`;

export default function Login() {
  const ctx = useContext(context);
  const [input, setInput] = useState("");
  const history = useHistory();
  const handleOnClick = (route) => history.push(route);

  async function getUserData() {
    try {
      const response = await client.get(`/${input}`);
      const repos = await client.get(`/${input}/repos`);
      const followers = await client.get(`/${input}/followers`);
      const following = await client.get(`/${input}/following`);

      ctx.setUser(response.data);
      console.log({followers})
      ctx.setRepos(repos.data);
      ctx.setFollowers(followers.data);
      ctx.setFollowing(following.data);
      handleOnClick("/home");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <GlobalStyle />
      <IconGithub />
      <Input
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="Usuário"
        required
      ></Input>
      <Button onClick={getUserData} type="submit">
        ENTRAR <IconArrow />
      </Button>
    </Container>
  );
}
