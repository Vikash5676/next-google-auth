'use client'

import { signOut } from '@/app/lib/firebase/auth'
import React, { useContext } from 'react'
import { userProvider } from '../ContextProvider/ContextProvider'

const LogoutButton = () => {
    const { logout } = useContext(userProvider)
    const handleLogout = async () => {

        // Your logout logic here
        signOut()
        logout();
        sessionStorage.removeItem('userData')
        window.location.reload()

    }

    return (
        <div className='text-white py-2 px-4 bg-red-500 hover:cursor-pointer' onClick={handleLogout}>Logout</div>
    )
}

export default LogoutButton