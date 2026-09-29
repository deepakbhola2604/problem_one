import { useAuth } from "../context/AuthContext";

const Profile = () => {
    const { user } = useAuth();

    return (
        <div className="page">
            <h1>Profile</h1>

            <p>Username: {user.username}</p>
            <p>Role: {user.role}</p>
        </div>
    );
};

export default Profile;