import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import axios from 'axios'
import LayoutLanding from './LayoutLanding'
import HeroSection from './HeroSection'
import { Link } from 'react-router-dom'

const MainContent = () => {

    const [display, setDisplay] = useState(false)
    const { state } = useContext(GlobalContext)

    const {
        datas,
        setDatas,
        fetchStatus,
        setFetchStatus
    } = state


    useEffect(() => {


        if(fetchStatus === true) {

            axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
            .then((res) => {
                    setDatas([...res.data.data])
                })
            setFetchStatus(false)
        }
    }, [fetchStatus, setFetchStatus])

    const [search, setSearch] = useState("")

    const handleChangeSearch = (e) => setSearch(e.target.value)
    const handleSearch = (e) => {
        e.preventDefault()
        console.log(search)

        let fetchDatas = async () => {

            setDatas(null)
            setDisplay(true)
            let { data } = await axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`)

            let dataJob = data.data

            console.log(dataJob)

            let searchData = dataJob.filter((res) => {
                return Object.values(res).join(" ").toLowerCase().includes(search.toLowerCase())
            })

            console.log(searchData)

            setDisplay(false)
            setDatas([...searchData])
        }
        fetchDatas()
        setSearch("")
    }

    return (
        <>
            <LayoutLanding />
            <HeroSection />
            {/* Search */}
            <div className='flex mx-auto my-8 w-11/12 justify-center items-center'>
                <form onSubmit={handleSearch} className="w-full py-6">
                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input onChange={handleChangeSearch} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-cyan-600 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">Search</button>
                    </div>
                </form>
                <button onClick={() => setFetchStatus(true)} type="button" className="ml-2 py-2 px-5  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Reset
                </button>
            </div>




            {/* Card Component */}
            <div className="gap-10 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 justify-center mx-auto mb-10">
                {datas !== null && datas.map((res, i) => {
                    return (
                        <div className="max-w-xs mx-6 my-2 overflow-hidden rounded-lg shadow-2xl" key={i}>
                            <img className="w-full h-48"
                                src={res.company_image_url}
                                alt="product" />
                            <div className="flex flex-col px-6 py-4">
                                <h4 className="mb-3 text-xl font-semibold tracking-tight text-blue-500">{res.title}</h4>
                                <hr className="my-2 h-px bg-gray-200 border-0 dark:bg-gray-900" />
                                <h6 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">{res.job_type}</h6>
                                <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">{res.company_name}</h4>
                            </div>
                            <Link to={`/detailjob/${res.id}`}>
                                <button type="button" className="text-white bg-cyan-600 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-4 mb-4 dark:bg-cyan-600 dark:hover:bg-cyan-700 focus:outline-none dark:focus:ring-cyan-800">Detail</button>
                            </Link>
                        </div>


                    )
                })}
            </div>
            <div className="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
                <div className="flex items-center">
                    <button type="button" className="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100">
                        <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                            </path>
                        </svg>
                    </button>
                    <button type="button" className="w-full px-4 py-2 text-base text-indigo-500 bg-white border-t border-b hover:bg-gray-100 ">
                        1
                    </button>
                    <button type="button" className="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100">
                        <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}

export default MainContent