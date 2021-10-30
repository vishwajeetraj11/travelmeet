import React from 'react'
import { NavigationBar } from '../components/layout/Navigation'

const Profile = () => {
    return (
        <div>
            <NavigationBar />
            <div className='max-w-screen-lg mx-auto w-full px-3 lg:px-0'>
                <div className='max-w-screen-md mx-auto w-full shadow-small p-10 rounded-md'>
                    <div className='flex flex-row items-center'>
                        <div className='h-52 w-52 overflow-hidden rounded-md mr-7'>
                            <img src={'https://images.unsplash.com/photo-1546994372-f636adc59e4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80'} className='w-full h-full object-cover' />
                        </div>
                           <div className='flex-1 flex flex-col'>
                           <div className='flex flex-row items-center justify-between flex-1'>
                           <h1>{info.name}</h1>
                           <div>
                           <p>Based in</p>
                           <p>{info.location}</p>
                           </div>
                       </div>
                       <div className=''>
                       </div>
                           </div>
                    </div>
                    <div>Travel Preferences</div>
                    <div>Travel Experience</div>
                </div>
            </div>
        </div>
    )
}

const info = {
    name: 'Mahak Makharia',
    location: 'Kolkata',
    bucketList: ['Dubai', 'Paris', 'London', 'Dubai'],
    travelPreference: {
        type: [
            'Workation',
            'Exploration',
            'Relaxing',
            'Adventures',
        ],
        duration: [
            'Short',
            'Long'
        ],
        groupSizes: [
            'Large',
            'Small'
        ]
    },
}

export default Profile
