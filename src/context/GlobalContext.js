import React, { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import axios from 'axios'

export const GlobalContext = createContext()

export const GlobalProvider = (props) => {

    let navigate = useNavigate()

    const [currentId, setCurrentId] = useState(-1)
    const [datas, setDatas] = useState(null)
    const [fetchStatus, setFetchStatus] = useState(true)
    const [input, setInput] = useState({
        title: "",
        job_description: "",
        job_qualification: "",
        job_type: "",
        job_tenure: "",
        job_status: "",
        company_name: "",
        company_image_url: "",
        company_city: "",
        salary_min: "",
        salary_max: ""
    })

    const handleLogout = () => {
        Cookies.remove('user')
        Cookies.remove('token')
        navigate('/login')
    }

    let state = {
        datas, setDatas,
        fetchStatus, setFetchStatus,
        input, setInput,
        currentId, setCurrentId
    }

    const handleInput = (e) => {
        let { value, name } = e.target
        setInput({ ...input, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let {
            title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max
        } = input

        if (currentId === -1) {
            axios.post('https://dev-example.sanbercloud.com/api/job-vacancy', {
                title,
                job_description,
                job_qualification,
                job_type,
                job_tenure,
                job_status,
                company_name,
                company_image_url,
                company_city,
                salary_min,
                salary_max
            }, { headers: { "Authorization": "Bearer" + Cookies.get('token') } })
                .then(() => {
                    setFetchStatus(true)
                })
        } else {
            axios.put(`https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`, {
                title,
                job_description,
                job_qualification,
                job_type,
                job_tenure,
                job_status,
                company_name,
                company_image_url,
                company_city,
                salary_min,
                salary_max
            }, { headers: { "Authorization": "Bearer " + Cookies.get('token') } })
                .then(() => {
                    setFetchStatus(true)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        setCurrentId(-1)
        navigate('/dashboard/list-job-vacancy')
    }


    let handleFunction = {
        handleLogout, handleInput, handleSubmit
    }

    return (
        <GlobalContext.Provider value={
            {
                state, handleFunction
            }
        }>
            {props.children}
        </GlobalContext.Provider>
    )
}