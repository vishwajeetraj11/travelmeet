import React from 'react'
import { NavigationBar } from '../components/layout/Navigation'

const Profile = () => {
    return (
        <div>
            <NavigationBar />
            <div className='max-w-screen-lg mx-auto w-full px-3 lg:px-0'>
                <div className='max-w-screen-lg mx-auto w-full shadow-small p-10 rounded-md border-2 border-primary mt-20'>
                    <div className='flex flex-row items-center'>
                        <div className='h-52 w-52 overflow-hidden rounded-md mr-7'>
                            <img src={'https://images.unsplash.com/photo-1546994372-f636adc59e4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80'} className='w-full h-full object-cover' />
                        </div>
                        <div className='flex-1 flex flex-col'>
                            <div className='flex flex-row items-center justify-between flex-1'>
                                <div>
                                <h1 className='font-semibold text-2xl text-gray-800'>{info.name}</h1>
                                <h1 className='font-semibold text-lg text-gray-500'>{info.designation}</h1>
                                </div>
                                <div>
                                    <p>Based in</p>
                                    <p className='text-gray-600 text-lg font-semibold'>{info.location}</p>
                                </div>
                            </div>
                            <div className='mt-6'>
                                <p className='font-semibold text-gray-600 text-md'>Bucket List</p>
                                <div className='flex flex-row flex-wrap'>
                                    {info.bucketList.map((item, i) => (
                                        <div key={i} className='mr-7 pr-3 py-1 bg-gray-100 rounded-full flex items-center mt-3'>
                                            <img src='https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80' className='w-6 h-6 rounded-full overflow-hidden ' />
                                            <p className='text-sm font-normal ml-3'>{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='mt-6'>
                            <p className='font-semibold text-xl text-gray-600 text-md mb-2 mt-16'>Travel Preferences</p>
                            <div className='flex flex-row flex-wrap'>
                                {info.bucketList.map((item, i) => (
                                    <div key={i} className='mr-7 pr-3 py-1 bg-gray-100 rounded-full flex items-center mt-1'>
                                        <img src='https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80' className='w-6 h-6 rounded-full overflow-hidden ' />
                                        <p className='text-sm ml-3 text-gray-800 font-normal'>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                            <h1 className='font-semibold text-xl text-gray-600 text-md my-6 mt-20'>Travel Experiences</h1>
                            {
                                travelExperience.map((exp,i) => (
                                    <div className='flex items-center justify-between shadow-small p-10 mb-10 rounded-md' key={i}>
                                    <div className='w-6/12'>
                                        <h2 className='text-lg font-semibold'>{exp.title}</h2>
                                        <p className='mt-2 text-sm font-medium text-gray-600'>{exp.description.length > 200 ? exp.description.slice(0,200)+'...' : exp.description}</p>
                                        <p className='text-xs mt-2 font-medium text-gray-500'>{exp.date.toDateString()}</p>
                                    </div>
                                    <div className='w-5/12 h-44 rounded-md overflow-hidden'>
                                    <img src={exp.image} className='w-full h-full object-cover' alt={`${exp.title}`} />
                                    </div>
                                    </div>
                                ))
                            }
                    </div>

                </div>
            </div>
        </div>
    )
}

const info = {
    name: 'Mahak Makharia',
    location: 'Kolkata',
    designation: 'Software Developer (SDE - III)',
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

export const travelExperience = [
    {
        date: new Date(),
        description: `While many stories of India talk about the Taj Mahal and the amazing sites recommended by Lonely Planet, this one is about an experience in Varanasi that was both wild and funny:
    
        Trying bhang lassi — a cannabis-laced yogurt drink — and then attempting to go out for the night.
        
        Before trying it for myself I knew that I’d feel something.
        
        I just didn’t know how intense and crazy that something would be. Spoiler: This night is now one of my wildest adventure travel stories to share with others.`,
        title: 'Getting High In Varanasi',
        image: 'https://zru9o3ijb9-flywheel.netdna-ssl.com/wp-content/uploads/2021/01/Varanasi.jpg',
    },
    {
        date: new Date(),
        description: `But I had nowhere else to be sick; there were no buckets, trash cans, or bags that could hold my relentless evacuation of what felt like everything I’d ever eaten.

        There were only two other foreigners on the bus; women who offered me sips of water and medicine.
        
        I was sick, sticky, and drifting in and out of feverish dreams for the next 18 hours until I was able to get to a hospital in Nepal. We passed through magnificent valleys through the Himalayas, I saw fireflies for the first time, we passed picturesque towns and tiger sanctuaries.
        
        Despite being the sickest I’ve ever felt, in the most inconvenient of locations, I was constantly amazed by the beauty of India, and the kindness of the strangers I met along the way.`,
        title: 'A Bus Ride Into The Himalayas',
        image: 'https://zru9o3ijb9-flywheel.netdna-ssl.com/wp-content/uploads/2021/01/DSC_1526_resized.jpg',
    },
    {
        date: new Date(),
        description: `It was a dream of mine to do a tiger safari and Ranthambore is one of the few places left in the world where Bengal tigers roam free.

        While there, we glamped in gorgeous tents just outside the park. On our first night, our hosts prepared a beautiful dinner next to a campfire. It was pitch dark beyond the fire.
        
        After dinner, I was tired and decided to walk back alone along dark paths to our tents using my iPhone which barely lit up the path a few feet beyond me.
        
        As I approached my tent, I saw a large lumpy creature outside. I could not see anything else, so I thought it was a cow or one of the deer from the park. I was almost upon it when it startled and bolted away.`,
        title: 'How My iphone Flashlight Saved My Life',
        image: 'https://zru9o3ijb9-flywheel.netdna-ssl.com/wp-content/uploads/2021/01/Varanasi.jpg',
    },
]

export default Profile
