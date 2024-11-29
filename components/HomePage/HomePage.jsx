'use client'

import React, { useContext, useEffect, useState } from 'react'
import LoginButton from '../UI/LoginButton';
import LogoutButton from '../UI/LogoutButton';
import Image from 'next/image';
import { userProvider } from '../ContextProvider/ContextProvider';

const HomePage = () => {
    const [userData, setUserData] = useState(null);
    const { user } = useContext(userProvider)

    useEffect(() => {
        const storedUser = sessionStorage.getItem('userData');
        if (storedUser) {
            setUserData(JSON.parse(storedUser))
        }
    }, [user]);

    return (
        <div className='flex flex-col justify-center items-center w-full h-screen'>
            <div className='h-1/2'>
                {userData && <div className='flex flex-col gap-9 items-center'>
                    <h1 className='text-center'>Welcome, {userData?.displayName}!</h1>
                    <span>
                        <Image alt='profile' src={userData?.photoURL} className='w-20 h-20 object-cover rounded-full' width={20} height={20} />
                    </span>
                    <LogoutButton />
                </div>}
                {
                    !userData && <div className='flex flex-col gap-9'>
                        <p className='text-xl text-black text-center'>Please login to access this page.</p>
                        <LoginButton />
                    </div>
                }
            </div>
        </div>
    )
}

export default HomePage