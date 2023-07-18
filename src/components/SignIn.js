import { useState } from 'react';
import { users } from '../data'

export default function SignIn({ connectUser, returnToHomePage }) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [isValid, setIsvalid] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password.match(confPassword)) {
            console.log('k',password.match(confPassword))
            users.push({ name: name, password: password })
            connectUser({ name, password });
            returnToHomePage();
        }
        else {
            setIsvalid(false);
        }
    };

    return (
        <div className="form-wrap">
            <div className="main-div">
                <h2>Sign-In</h2>
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
                    <input
                        required
                        type="password"
                        placeholder="Confirm password"
                        value={confPassword}
                        onChange={(e) => setConfPassword(e.target.value)}
                    />
                    <button type="submit">Sign in</button>
                    {!isValid && (<>
                        <div> Your password is incorrect. </div>
                    </>)}
                </form>
                <div onClick={returnToHomePage}><img className="home" src={"./../home.png"}></img></div>
            </div>
        </div>
    )
}