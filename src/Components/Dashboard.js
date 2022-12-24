import React, { useContext, useEffect } from 'react'
import { Table } from 'flowbite-react'
import { GlobalContext } from '../context/GlobalContext'
import Cookies from 'js-cookie'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

    let navigate = useNavigate()

    const { state } = useContext(GlobalContext)

    const {
        datas,
        setDatas,
        fetchStatus,
        setFetchStatus,
        setInput,
        setCurrentId
    } = state

    const handleDelete = (e) => {
        let idData = parseInt(e.target.value)
        axios.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`, { headers: { "Authorization": "Bearer " + Cookies.get('token') } })
            .then((res) => {
                setFetchStatus(true)
            })
    }

    const handleEdit = (e) => {
        let idData = parseInt(e.target.value)
        setCurrentId(idData)
        axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`, { headers: { "Authorization": "Bearer " + Cookies.get('token') } })
            .then((res) => {
                let data = res.data

                setInput(
                    {
                        title: data.title,
                        job_description: data.job_description,
                        job_qualification: data.job_qualification,
                        job_type: data.job_type,
                        job_tenure: data.job_tenure,
                        job_status: data.job_status,
                        company_name: data.company_name,
                        company_image_url: data.company_image_url,
                        company_city: data.company_city,
                        salary_min: data.salary_min,
                        salary_max: data.salary_max
                    }
                )
                navigate('/dashboard/list-job-vacancy/create')
            })
    }

    useEffect(() => {
        if (fetchStatus === true) {
            axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
                .then((res) => {
                    setDatas([...res.data.data])
                })
            setFetchStatus(false)
        }
        // eslint-disable-next-line
    }, [fetchStatus, setFetchStatus])

    return (
        <>
            <div className='container sm:w-full md:w-fit lg:w-fit mx-auto mt-10'>
                <div className='Card mb-8 '>
                    <Table hoverable={true}>
                        <Table.Head>
                            <Table.HeadCell className='bg-cyan-600 text-white text-center'>
                                No
                            </Table.HeadCell>
                            <Table.HeadCell className='bg-cyan-600 text-white text-center'>
                                Title
                            </Table.HeadCell>
                            <Table.HeadCell className='bg-cyan-600 text-white text-center'>
                                Description
                            </Table.HeadCell>
                            <Table.HeadCell className='bg-cyan-600 text-white text-center'>
                                Qualification
                            </Table.HeadCell>
                            <Table.HeadCell className='bg-cyan-600 text-white text-center'>
                                Type
                            </Table.HeadCell>
                            <Table.HeadCell className='bg-cyan-600 text-white text-center'>
                                Tenure
                            </Table.HeadCell>
                            <Table.HeadCell className='bg-cyan-600 text-white text-center'>
                                Status
                            </Table.HeadCell>
                            <Table.HeadCell className='bg-cyan-600 text-white text-center'>
                                Company
                            </Table.HeadCell>
                            <Table.HeadCell className='bg-cyan-600 text-white text-center'>
                                Location
                            </Table.HeadCell>
                            <Table.HeadCell className='bg-cyan-600 text-white text-center'>
                                Salary
                            </Table.HeadCell>
                            <Table.HeadCell className='bg-cyan-600 text-white text-center'>
                                Action
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {datas !== null && datas.map((res, i) => {
                                return (
                                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={i}>
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-center">
                                            {i + 1}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {res.title}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {res.job_description ? res.job_description.slice(0, 10) + '...' : res.job_description}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {res.job_qualification ? res.job_qualification.slice(0, 10) + '...' : res.job_qualification}
                                        </Table.Cell>
                                        <Table.Cell className='text-center'>
                                            {res.job_type}
                                        </Table.Cell>
                                        <Table.Cell className='text-center'>
                                            {res.job_tenure}
                                        </Table.Cell>
                                        <Table.Cell className='text-center'>
                                            {res.job_status === 1 ? "Open" : " Close"}
                                        </Table.Cell>
                                        <Table.Cell className='text-center'>
                                            {res.company_name}
                                        </Table.Cell>
                                        <Table.Cell className='text-center'>
                                            {res.company_city}
                                        </Table.Cell>
                                        <Table.Cell className='text-center'>
                                            Rp.{res.salary_min} - {res.salary_max}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <div className="flex gap-4">
                                                <button onClick={handleEdit} type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                                                    value={res.id}>
                                                    Edit
                                                </button>
                                                <button onClick={handleDelete} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 mr-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                                    value={res.id}>
                                                    Delete
                                                </button>
                                            </div>
                                        </Table.Cell>
                                    </Table.Row>
                                )
                            })}
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default Dashboard