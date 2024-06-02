import React from 'react'
import { Link } from 'react-router-dom'
import wijungle from '../assets/wijungle.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faChartPie, faBriefcase, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className='flex flex-row lg:flex-col justify-between items-end py-[10px] lg:py-[30px] px-6 lg:border-r border-[#D8BCFF] border-none gap-10 '>
            <div className='flex flex-row lg:flex-col gap-10 items-center'>
                <Link to='/' className='w-20 lg:w-12'>
                    <img src={wijungle} alt="logo" />
                </Link>
                <div className='flex flex-row  lg:flex-col gap-10'>
                    <Link className='text-[#D8BCFF] bg-[#372C44] size-10 flex items-center justify-center rounded-lg'>
                        <FontAwesomeIcon icon={faHouse} className='size-6' />
                    </Link>
                    <Link className='text-[#8D8598] sm:flex hidden size-10 items-center justify-center hover:text-[#D8BCFF] transition-colors duration-300 ease-in-out'>
                        <FontAwesomeIcon icon={faChartPie} />
                    </Link>
                    <Link className='text-[#8D8598] size-10 sm:flex hidden items-center justify-center hover:text-[#D8BCFF] transition-colors duration-300 ease-in-out'>
                        <FontAwesomeIcon icon={faBriefcase} />
                    </Link>
                    <Link className='text-[#8D8598] size-10 flex items-center justify-center hover:text-[#D8BCFF] transition-colors duration-300 ease-in-out'>
                        <FontAwesomeIcon icon={faGear} />
                    </Link>
                </div>
            </div>
            <Link className='text-[#8D8598] size-10 flex items-center justify-center hover:text-[#D8BCFF] transition-colors duration-300 ease-in-out'>
                <FontAwesomeIcon icon={faRightFromBracket} />
            </Link>
        </div>
    )
}

export default Sidebar