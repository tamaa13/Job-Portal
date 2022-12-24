import React from 'react'
import Heading from '../Components/Heading'
import Sidebar from '../Components/Sidebar'

const LayoutDashboard = (props) => {
    return (
        <div>
            <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
                <div className="flex items-start justify-between">
                    <Sidebar />
                    <div className="flex flex-col w-full md:space-y-4">
                        <Heading />
                        <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
                            {props.children}
                        </div>
                    </div>
                </div>
            </main >
        </div >
    )
}

export default LayoutDashboard