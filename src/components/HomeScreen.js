import React, { useState } from "react";

import { useActionStatus } from "../hooks/useActionStatus";
import { FETCH_PROFILE, fetchProfile } from "../ducks/github";
import { useReduxState } from "../hooks/useReduxState";

export const HomeScreen = () => {
  const { userProfile } = useReduxState();
  const [status, resetStatus] = useActionStatus(FETCH_PROFILE);
  const [userName, setUserName] = useState("");

  console.log(userProfile);

  const handleUserNameChange = ({ target: { value: newUserName } }) => {
    setUserName(newUserName);
  };

  const handleSearch = () => {
    resetStatus();
    fetchProfile(userName);
  };

  return (
    <>
      <h1>Search Github Users</h1>
      <input onChange={handleUserNameChange} />
      <button onClick={handleSearch}>OK</button>

      {status.loading && <div>Searching…</div>}
      {status.error && <div>{status.error.toString()}</div>}
      {status.success && (
        <div className="user-card">
          <img alt={`${userProfile.login}'s`} src={userProfile.avatar_url} />

          <div>
            <h1>{userProfile.name}</h1>
            {userProfile.bio && <p>{userProfile.bio}</p>}
            {userProfile.location && <p>{userProfile.location}</p>}
          </div>
        </div>
      )}
    </>
  );
};
