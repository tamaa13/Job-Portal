import React, { useContext } from 'react'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'

const Sidebar = () => {

    const { handleFunction } = useContext(GlobalContext)

    const {
        handleLogout
    } = handleFunction

    return (
        <>
            <div className="relative hidden h-screen shadow-lg lg:block w-80 ">
                <div className="h-full bg-white dark:bg-gray-700">
                    <div className="flex items-center justify-start pt-6 ml-8">
                        <p className="text-xl font-bold dark:text-white">
                            Dashboard
                        </p>
                    </div>
                    <nav className="mt-6">
                        <div>
                            <Link to={'/dashboard/list-job-vacancy'} className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition-colors duration-200 border-l-4  dark:text-white" >
                                <span className="text-left">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                    </svg>
                                </span>
                                <span className="mx-2 text-sm font-normal">
                                    Data Job
                                </span>
                            </Link>
                            <Link to={'/dashboard/list-job-vacancy/create'} className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition-colors duration-200 border-l-4  dark:text-white" href="#">
                                <span className="text-left">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                    </svg>
                                </span>
                                <span className="mx-2 text-sm font-normal">
                                    Create Data Job
                                </span>
                            </Link>
                            <hr />
                            <Link to={'/changepassword'} className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition-colors duration-200 border-l-4  dark:text-white" href="#">
                                <span className="text-left">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </span>
                                <span className="mx-2 text-sm font-normal">
                                    Change Password
                                </span>
                            </Link>
                            <Link to={'/'} className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition-colors duration-200 border-l-4  dark:text-white" href="#">
                                <span className="text-left">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>

                                </span>
                                <span className="mx-2 text-sm font-normal">
                                    Home
                                </span>
                            </Link>

                            <div className="cursor-pointer flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition-colors duration-200 border-l-4 dark:text-white" href="#">
                                <span className="text-left">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                    </svg>
                                </span>
                                {
                                    Cookies.get('token') && <span onClick={handleLogout} className="mx-2 text-sm font-normal">
                                        Logout
                                    </span>
                                }
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Sidebar