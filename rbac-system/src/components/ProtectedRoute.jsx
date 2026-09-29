import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loading from "./Loading";

const ProtectedRoute = ({ allowedRoles, children }) => {
    const { user, loading } = useAuth();

    // Wait until authentication check is complete
    if (loading) {
        return <Loading />;
    }

    // User is not logged in
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // User does not have required role
    if (!allowedRoles.includes(user.role)) {
        return <Navigate to="/access-denied" replace />;
    }

    // User is authorized
    return children;
};

export default ProtectedRoute;