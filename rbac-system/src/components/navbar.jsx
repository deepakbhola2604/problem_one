import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const navigation = {
    admin: [
        { name: "Dashboard", path: "/dashboard" },
        { name: "Users", path: "/users" },
        { name: "Reports", path: "/reports" },
        { name: "Settings", path: "/settings" },
        { name: "Profile", path: "/profile" }
    ],

    manager: [
        { name: "Dashboard", path: "/dashboard" },
        { name: "Reports", path: "/reports" },
        { name: "Profile", path: "/profile" }
    ],

    user: [
        { name: "Dashboard", path: "/dashboard" },
        { name: "Profile", path: "/profile" }
    ]
};

const Navbar = () => {
    const { user, logout } = useAuth();

    if (!user) {
        return null;
    }

    const menuItems = navigation[user.role] || [];

    return (
        <nav className="navbar">

            <div className="logo">
                RBAC System
            </div>

            <div className="menu">

                {menuItems.map((item) => (
                    <Link key={item.path} to={item.path}>
                        {item.name}
                    </Link>
                ))}

                <button onClick={logout}>
                    Logout
                </button>

            </div>

        </nav>
    );
};

export default Navbar;