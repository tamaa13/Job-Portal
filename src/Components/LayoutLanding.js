import React, { useContext } from 'react'
import { Navbar } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'
import Cookies from 'js-cookie'

const LayoutLanding = () => {

    const { handleFunction } = useContext(GlobalContext)

    const {
        handleLogout
    } = handleFunction


    return (
        <>
            <div>
                <Navbar
                    fluid={true}
                >
                    <div className="container flex flex-wrap items-center px-6 py-3 justify-between mx-auto">
                        <Navbar.Brand>
                            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                                PengenKerja.com
                            </span>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse>
                            {
                                !Cookies.get('token') && <li>
                                    <span className="cursor-pointer block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</span>
                                </li>
                            }
                            {
                                !Cookies.get('token') && <li>
                                    <Link to='/login' className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</Link>
                                </li>
                            }
                            {
                                Cookies.get('token') && <li>
                                    <Link to='/dashboard/list-job-vacancy' className="cursor-pointer block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Dashboard</Link>
                                </li>
                            }
                            {
                                Cookies.get('token') && <li>
                                    <span onClick={handleLogout} className="cursor-pointer block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Logout</span>
                                </li>
                            }

                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
        </>
    )
}

export default LayoutLanding