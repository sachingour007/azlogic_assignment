import React from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const HeroSelectState = () => {
  return (
    <div className='flex items-center mt-2 text-[#414141] font-medium'>
        <LocationOnOutlinedIcon/>
        <select name="" id="" className='px-2 text-lg'>
            <option className='' value="banglore"> Banglore </option>
            <option value="mumbai"> Mumbai </option>
            <option value="haydrabaad"> Haydrabaad </option>
        </select>
    </div>
  )
}

export default HeroSelectState
