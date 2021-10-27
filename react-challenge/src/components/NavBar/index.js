import React from "react";
import { NavBar, FollowIcon, GithubIcon, HomeIcon, StyledLink } from "./style";

export default function Nav() {
  return (
    <NavBar>
      <StyledLink to="/home">
          <div>
            <HomeIcon />
            <p>Home</p>
          </div>
      </StyledLink>
      <StyledLink to ="/repos">
          <div>
            <GithubIcon />
            <p>Repos</p>
          </div>
      </StyledLink>
      <StyledLink to="/followers">
        <div>
          <FollowIcon />
          <p>Seguidores</p>
        </div>
      </StyledLink>
      <StyledLink to="following">
          <div>
            <FollowIcon />
            <p>Seguindo</p>
          </div>
      </StyledLink>
    </NavBar>
  );
}
