import { Link } from "react-router-dom";

const AccessDenied = () => {
    return (
        <div className="page access-denied">

            <h1>Access Denied</h1>

            <p>
                You don't have permission to access this page.
            </p>

            <Link to="/dashboard">
                Go to Dashboard
            </Link>

        </div>
    );
};

export default AccessDenied;