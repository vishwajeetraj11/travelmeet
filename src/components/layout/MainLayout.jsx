import React from 'react'
import { NavigationBar } from './Navigation'

const MainLayout = ({children}) => {
    return (
        <div>
            <NavigationBar />
            {children}
        </div>
    )
}

export default MainLayout
