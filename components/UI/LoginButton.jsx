'use client'


import { signInWithGoogle } from '@/app/lib/firebase/auth'

const LoginButton = () => {
    const handleLogin = () => {
        signInWithGoogle()
    }
    return (
        <div className='text-white py-2 px-4 bg-blue-500 text-center rounded-lg hover:cursor-pointer hover:bg-blue-700' onClick={handleLogin}>Google Login</div>
    )
}

export default LoginButton