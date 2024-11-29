import React from 'react'
import LoginButton from '../UI/LoginButton';
import LogoutButton from '../UI/LogoutButton';

export const getServerSideProp = () => {
    const user = sessionStorage.getItem('userData');
    return { user };

}

const HomePage = ({ user }) => {
    return (
        <div className='flex flex-col justify-center items-center w-full h-screen'>
            <div className='h-1/2'>
                {user && <div className='flex flex-col gap-9'>
                    <h1 className='text-center'>Welcome, {user.name}!</h1>
                    <LogoutButton />
                </div>}
                {
                    !user && <div className='flex flex-col gap-9'>
                        <p className='text-xl text-black text-center'>Please login to access this page.</p>
                        <LoginButton />
                    </div>
                }
            </div>
        </div>
    )
}

export default HomePage