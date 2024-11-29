'use client'

import { createContext, useState } from "react";


export const userProvider = createContext("");

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (data) => {
        setUser(data)
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <userProvider.Provider value={{ user, login, logout }} > {children} </userProvider.Provider>
    )
}

export default UserProvider;