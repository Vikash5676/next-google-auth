'use client'


import { signInWithGoogle } from '@/app/lib/firebase/auth'
import { useContext } from 'react'
import { userProvider } from '../ContextProvider/ContextProvider'

const LoginButton = () => {
    const { login } = useContext(userProvider)
    const handleLogin = async () => {
        const data = await signInWithGoogle();
        login(data.user)
        sessionStorage.setItem('userData', JSON.stringify(data.user))
    }
    return (
        <div className='text-white py-2 px-4 bg-blue-500 text-center rounded-lg hover:cursor-pointer hover:bg-blue-700' onClick={handleLogin}>Google Login</div>
    )
}

export default LoginButton