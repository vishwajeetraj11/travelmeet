import React from 'react'
import BasicProfileForm from '../components/Forms/BasicProfile'

const BasicProfile = ({setAuthenticated}) => {
    return (
       <BasicProfileForm setAuthenticated={setAuthenticated} />
    )
}

export default BasicProfile
