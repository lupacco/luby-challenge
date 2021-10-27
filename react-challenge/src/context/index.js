import React, { createContext } from "react";
import usePersistedState from "./persistedState";

export const context = createContext({});

export const ConxtextProvider = (props) => {
  const [user, setUser] = usePersistedState('user',{});
  const [repos, setRepos] = usePersistedState('repos',{});
  const [followers, setFollowers] = usePersistedState('followers',{});
  const [following, setFollowing] = usePersistedState('following',{});
  const [userInfo, setUserInfo] = usePersistedState('userinfo',{});


  return (
    <context.Provider
      value={{
        user,
        repos,
        followers,
        following,
        userInfo,
        setUser,
        setRepos,
        setFollowers,
        setFollowing,
        setUserInfo,
      }}
    >
      {props.children}
    </context.Provider>
  );
};

export default usePersistedState;
