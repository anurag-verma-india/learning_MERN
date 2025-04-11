import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        // alert(`username: ${username}\npassword: ${password}`);
        e.preventDefault();
        setUser({ username, password });
    };
    return (
        <div className="loginForm">
            <h1>Login</h1>
            <input
                className="ipt"
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                className="ipt"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn" onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
};

export default Login;
