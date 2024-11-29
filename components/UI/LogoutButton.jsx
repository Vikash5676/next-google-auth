import React from 'react'

const LogoutButton = () => {
    const handleLogout = () => {
        // Your logout logic here
            
        }

    return (
        <div className='text-white py-2 px-4 bg-red-500' onClick={handleLogout}>Logout</div>
    )
}

export default LogoutButton