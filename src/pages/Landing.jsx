import React from 'react'
import { LoginButton } from '../components/auth0/LoginButton'

export const Landing = () => {
    return (
        <div className='max-w-lg mx-auto min-h-screen flex items-center justify-center'>
            <h1 className='text-xl text-semibold text-gray-900'>Landing Page</h1>
            <LoginButton />
        </div>
    )
}
