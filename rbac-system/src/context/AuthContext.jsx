import { createContext, useContext, useEffect, useState } from "react";
import users from "../data/users";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Restore user when application starts
    useEffect(() => {
        const storedUser = localStorage.getItem("user");

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

        setLoading(false);
    }, []);

    // Login
    const login = (username, password) => {
        const foundUser = users.find(
            (user) =>
                user.username === username &&
                user.password === password
        );

        if (!foundUser) {
            return false;
        }

        setUser(foundUser);
        localStorage.setItem("user", JSON.stringify(foundUser));

        return true;
    };

    // Logout
    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};