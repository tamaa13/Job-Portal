import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import LayoutLanding from './LayoutLanding'

const DetailContent = () => {

    const [jobData, setJobData] = useState(null)

    const { Id } = useParams()

    useEffect(() => {
        if (Id !== undefined) {
            axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${Id}`)
                .then((res) => {
                    setJobData(res.data)
                })
        }
    }, [Id])


    return (
        <>
            <div className=''>
                <LayoutLanding />
                <div className='flex justify-center items-center my-10'>
                    <div className="max-w-2xl overflow-hidden bg-white shadow sm:rounded-lg">
                        <div className="border-t border-gray-200">
                            <dl>
                                <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Name
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {jobData?.title}
                                    </dd>
                                </div>
                                <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Company Name
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {jobData?.company_name}
                                    </dd>
                                </div>
                                <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Job Type
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {jobData?.job_type}
                                    </dd>
                                </div>
                                <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Job Tenure
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {jobData?.job_tenure}
                                    </dd>
                                </div>
                                <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Location
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {jobData?.company_city}
                                    </dd>
                                </div>
                                <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Job Qualification
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {jobData?.job_qualification}
                                    </dd>
                                </div>
                                <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Salary
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        Rp. {jobData?.salary_min} - {jobData?.salary_max}
                                    </dd>
                                </div>
                                <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Status
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {jobData?.job_status === 1 ? "Open" : " Close"}
                                    </dd>
                                </div>
                                <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Description
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {jobData?.job_description}
                                    </dd>
                                </div>
                                <div>
                                    <Link to={'/'} >
                                        <button type="button" className="text-white bg-cyan-600 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-4 my-4 dark:bg-cyan-600 dark:hover:bg-cyan-700 focus:outline-none dark:focus:ring-cyan-800">Back</button>
                                    </Link>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DetailContent