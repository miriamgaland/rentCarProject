import React, { useState } from "react";
import { users } from '../data'

function Login({ connectUser, returnToHomePage, moveToSignIn }) {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsvalid] = useState(true);

  const validateUser = (currentUser) => {
    const userComparison = (user) => (currentUser.name == user.name && currentUser.password == user.password);
    return users.some(userComparison);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      password
    };

    if (validateUser(user)) {
      connectUser(user);
      returnToHomePage();
    }
    else {
      setIsvalid(false);
    }
  };

  return (
    <div className="form-wrap">
      <div className="main-div">
        <h2>Log-in</h2>
        <form onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="User name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            required
            minLength={6}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">connect</button>
          {!isValid && (<>
            <div>Check again if the username or password is correct. </div>
            <button onClick={moveToSignIn}>Sign In</button>
          </>)}
        </form>
        <div onClick={returnToHomePage}><img className="home" src={"./../home.png"}></img></div>
      </div>
    </div>
  );
}

export default Login;