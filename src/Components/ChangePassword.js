import React, { useState } from 'react'
import Cookies from 'js-cookie'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const ChangePassword = () => {

    let navigate = useNavigate()

    const [changeInputPassword, setChangeInputPassword] = useState(
        {
            current_password: "",
            new_password: "",
            new_confirm_password: ""
        }
    )

    const handleInputChangePassword = (e) => {
        let { value, name } = e.target
        setChangeInputPassword({ ...changeInputPassword, [name]: value })
    }

    const handleSubmitPassword = (e) => {
        e.preventDefault()

        let {
            current_password,
            new_password,
            new_confirm_password
        } = changeInputPassword

        axios.post(`https://dev-example.sanbercloud.com/api/change-password`, { current_password, new_password, new_confirm_password }, { headers: { "Authorization": "Bearer" + Cookies.get('token') } })
            .then((res) => {
                let { token, user } = res.data

                Cookies.set('token', token, { expires: 7 })
                Cookies.set('user', JSON.stringify(user), { expires: 7 })

                navigate('/dashboard/list-job-vacancy')
            })
            .catch()
    }

    return (
        <>
            <div className='flex justify-center items-center h-screen'>
                <div className="flex flex-col w-full max-w-md px-4 py-8 bg-cyan-600 rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                    <div className="self-center mb-6 text-xl font-light text-white sm:text-2xl dark:text-white">
                        Change Password
                    </div>
                    <div className="mt-8">
                        <form onSubmit={handleSubmitPassword} autoComplete="off">
                            <div className="flex flex-col mb-6">
                                <div className="flex relative ">
                                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                        <svg width={15} height={15} fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                                            </path>
                                        </svg>
                                    </span>
                                    <input autocomplete="on" onChange={handleInputChangePassword} required name='current_password' value={changeInputPassword.current_password} type="password" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Current password" />
                                </div>
                            </div>
                            <div className="flex flex-col mb-1">
                                <div className="flex relative ">
                                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                        <svg width={15} height={15} fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                                            </path>
                                        </svg>
                                    </span>
                                    <input autocomplete="on" onChange={handleInputChangePassword} required name='new_password' value={changeInputPassword.new_password} type="password" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="New password" />
                                </div>
                            </div>
                            <div className="flex flex-col mb-6">
                                <div className="flex relative ">
                                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                        <svg width={15} height={15} fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                                            </path>
                                        </svg>
                                    </span>
                                    <input autocomplete="on" onChange={handleInputChangePassword} required name='new_confirm_password' value={changeInputPassword.new_confirm_password} type="password" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Confirm password" />
                                </div>
                            </div>
                            <div className="flex w-full">
                                <button type="submit" className="py-2 px-4  bg-black hover:bg-black-700 focus:ring-black-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Submit
                                </button>
                            </div>
                            <Link to={'/dashboard/list-job-vacancy'}>
                                <div className="flex w-full">
                                    <button type="submit" className="py-2 px-4 mt-2 bg-black hover:bg-black-700 focus:ring-black-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        Back
                                    </button>
                                </div>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChangePassword