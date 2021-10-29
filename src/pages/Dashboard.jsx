import React from 'react'
import { LogoutButton } from '../components/auth0/LogoutButton'
import BasicProfileForm from '../components/Forms/BasicProfile'

export const Dashboard = () => {
    return (
        <div>
        <h1 className='text-center text-h1 text-semibold text-gray-900'>Dashboard Page</h1>
        <LogoutButton />
        <BasicProfileForm />
        </div>
    )
}

