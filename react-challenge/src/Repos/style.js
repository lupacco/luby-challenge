import styled from "styled-components";
import { BiArrowBack, BiLockAlt, BiLockOpenAlt, BiStar } from "react-icons/bi";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  background-color: #292929;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  
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

export const NumRepos = styled.h1`
  flex: 1 1 auto;
  text-align: center;
  font-size: 16px;
`;

export const Repositories = styled.section`
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

export const Repository = styled.article`
  width: 100%;
  border-bottom: solid #969696 1px;
  div {
    display: flex;
    margin: 10px 10px 0 10px;
    align-items: center;
    justify-content: space-between;

    div {
      margin: 0;
      justify-content: center;
    }
  }
`;

export const RepoName = styled.h2`
  font-size: 16px;
  color: #fff;
  width: 100%;
  display: flex;
  div {
    background: #ffce00;
    height: 20px;
    width: 5px;
    margin: 0 5px 0px 0px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export const RepoDesc = styled.p`
  margin: 10px;
  font-size: 10px;
`;

export const StarIcon = styled(BiStar)`
  color: #FFCE00;
  margin-right: 4px;
`;
export const LockOpen = styled(BiLockOpenAlt)`
  color: #63BF1F;
`;
export const LockClose = styled(BiLockAlt)`
  color: #CC042A;
`;
