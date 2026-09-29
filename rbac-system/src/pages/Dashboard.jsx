import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
    const { user } = useAuth();

    return (
        <div className="page">
            <h1>Dashboard</h1>

            <h2>
                Welcome, {user.username}!
            </h2>

            <p>
                Your role is: <strong>{user.role}</strong>
            </p>
        </div>
    );
};

export default Dashboard;