import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { faAngleLeft, faMagnifyingGlass, faBell } from '@fortawesome/free-solid-svg-icons'

const Homebar = () => {
    return (
        <div className='flex justify-between items-center w-full gap-10 lg:flex-row flex-col'>
            <div className='flex lg:gap-[400px] gap-10 items-center lg:w-auto w-full justify-between lg:justify-normal'>
                <Link to='/' className='size-8 flex items-center justify-center bg-[#2F293E] rounded-full text-[#E2D8FD]'>
                    <FontAwesomeIcon icon={faAngleLeft} className='size-4' />
                </Link>
                <h3 className='text-lg'>Home</h3>
            </div>
            <div className='flex gap-[60px] items-center lg:w-auto w-full justify-between lg:justify-normal'>
                <div className='bg-[#2F293E] p-3 rounded-xl flex gap-2'>
                    <input
                        type="text"
                        className='bg-[#2F293E] outline-none text-sm'
                        placeholder='Search'
                    />
                    <button className='text-[#E2D8FD] text-sm'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <button className='size-10 rounded-full border border-[#D9CBFF] text-[#E2D8FD] hover:bg-[#E2D8FD] hover:text-[#2B2638] transition-colors duration-300 ease-in-out'>
                     <FontAwesomeIcon icon={faBell} />
                </button>
            </div>
        </div>
    )
}

export default Homebar