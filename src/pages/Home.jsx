import React from 'react'
import Sidebar from '../components/Sidebar'
import Homebar from '../components/Homebar'
import EventTypesGraph from '../components/EventTypesGraph'
import ProtoCount from '../components/ProtoCount'
import AttackTypeGraph from '../components/AttackTypeGraph'
import MiscSignatureDistribution from '../components/MiscSignatureDistribution'

const Home = () => {

    return (
        <main className='lg:h-screen w-full flex lg:flex-row flex-col'>
            <Sidebar />
            <div className='p-6 flex flex-col w-full lg:h-screen gap-6'>
                <Homebar />
                <div className='flex gap-6 h-full flex-col lg:flex-row'>
                    <div className='lg:w-[50%] w-full h-[400px] lg:h-full bg-[#3C354A] p-4 rounded-xl border-[#868B93] border-2 flex flex-col'>
                        <h3 className='font-medium'>Distribution of Event Types</h3>
                        <EventTypesGraph />
                    </div>
                    <div className='lg:w-[50%] w-full h-[400px] lg:h-full bg-[#3C354A] p-4 rounded-xl border-[#868B93] border-2 flex flex-col'>
                        <h3 className='font-medium'>Distribution of Protocols</h3>
                        <ProtoCount />
                    </div>
                </div>
                <div className='flex gap-6 h-full flex-col lg:flex-row'>
                    <div className='lg:w-[50%] w-full h-[400px] lg:h-full bg-[#3C354A] p-4 rounded-xl border-[#868B93] border-2 flex flex-col'>
                        <h3 className='font-medium'>Attack Type Distribution <sup>Only in Alert Event Type</sup></h3>
                        <AttackTypeGraph />
                    </div>
                    <div className='lg:w-[50%] w-full h-[400px] lg:h-full bg-[#3C354A] p-4 rounded-xl border-[#868B93] border-2 flex flex-col'>
                        <h3 className='font-medium'>Misc Attack Signature Distribution</h3>
                        <MiscSignatureDistribution />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home