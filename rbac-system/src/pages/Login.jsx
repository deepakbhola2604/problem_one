import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const success = login(username, password);

        if (success) {
            navigate("/dashboard");
        } else {
            setError("Invalid username or password");
        }
    };

    return (
        <div className="login-container">

            <form className="login-form" onSubmit={handleSubmit}>

                <h1>RBAC Login</h1>

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {error && <p className="error">{error}</p>}

                <button type="submit">
                    Login
                </button>

                <div className="credentials">
                    <p>Admin: admin / admin123</p>
                    <p>Manager: manager / manager123</p>
                    <p>User: user / user123</p>
                </div>

            </form>

        </div>
    );
};

export default Login;