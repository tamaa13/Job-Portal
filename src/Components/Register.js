import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {

    let navigate = useNavigate()

    const [registerInput, setRegisterInput] = useState({
        name: "",
        email: "",
        image_url: "",
        password: ""
    })

    const handleRegisterInput = (e) => {
        let name = e.target.name
        let value = e.target.value

        if (name === "name") {
            setRegisterInput({ ...registerInput, name: value })
        } else if (name === "email") {
            setRegisterInput({ ...registerInput, email: value })
        } else if (name === "image_url") {
            setRegisterInput({ ...registerInput, image_url: value })
        } else if (name === "password") {
            setRegisterInput({ ...registerInput, password: value })
        }
    }

    const handleRegisterSubmit = (e) => {
        e.preventDefault()

        let {
            name, email, image_url, password
        } = registerInput

        axios.post(`https://dev-example.sanbercloud.com/api/register`, { name, email, image_url, password })
            .then(() => {
                navigate('/login')
            })
    }


    return (

        <>
            <div className='flex justify-center items-center h-screen'>
                <div className="flex flex-col w-full max-w-md px-4 py-8 bg-cyan-600 rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                    <div className="self-center mb-6 text-xl font-light text-white sm:text-2xl dark:text-white">
                        Create Account
                    </div>
                    <div className="mt-8">
                        <form onSubmit={handleRegisterSubmit} autoComplete="off">
                            <div className="flex flex-col mb-2">
                                <div className="flex relative ">
                                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={15} height={15}>
                                            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <input required onChange={handleRegisterInput} value={registerInput.name} name='name' type="text" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your name" />
                                </div>
                            </div>
                            <div className="flex flex-col mb-2">
                                <div className="flex relative ">
                                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                        <svg width={15} height={15} fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                                            </path>
                                        </svg>
                                    </span>
                                    <input required onChange={handleRegisterInput} value={registerInput.email} name='email' type="text" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your email" />
                                </div>
                            </div>
                            <div className="flex flex-col mb-6">
                                <div className="flex relative ">
                                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={15} height={15}>
                                            <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <input required onChange={handleRegisterInput} value={registerInput.image_url} name='image_url' type="text" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Link profile image" />
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
                                    <input required onChange={handleRegisterInput} value={registerInput.password} name='password' type="password" minLength={8} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your password" />
                                </div>
                            </div>
                            <div className="flex w-full">
                                <button type="submit" className="py-2 px-4  bg-black hover:bg-black-700 focus:ring-black-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Register
                                </button>
                            </div>
                            <Link to={'/'}>
                                <div className="flex w-full">
                                    <button type="submit" className="py-2 px-4 mt-2 bg-black hover:bg-black-700 focus:ring-black-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        Back
                                    </button>
                                </div>
                            </Link>
                        </form>
                    </div>
                    <div className="flex items-center justify-center mt-6">
                        <Link to='/login' className="inline-flex items-center text-xs font-thin text-center text-white hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
                            <span className="ml-2">
                                Already have an account ? Sign in
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register