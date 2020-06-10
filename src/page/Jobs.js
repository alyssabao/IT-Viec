import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import JobCard from './components/JobCard'
import {useSelector} from 'react-redux'

export default function Jobs() {
    let [jobs, setJobs] = useState(null);
    let [keyword, setKeyword] = useState(null);
    let [originalList, setOriginalList] = useState(null);
    let user = useSelector((state)=>state.user)
    const { id } = useParams();
    const getDetailData = async () => {
        let url = `${process.env.REACT_APP_BACKEND_SERVER_URL}/jobs`
        let data = await fetch(url)
        let result = await data.json()
        setOriginalList(result);
        setJobs(result);
    }
    const searchByKeyword = (e) => {
        e.preventDefault()
        console.log("keyword",keyword)
        let filteredList = originalList
        if (keyword) {
            filteredList = originalList.filter(item => item.title.toLowerCase().includes(keyword.toLowerCase()))
        }
        setJobs(filteredList)
        
    }
    useEffect(() => {
        getDetailData();
    }, [])

    if (jobs === null) {
        return <div>Loading</div>
    }
    return (
        <div className="bgHomepage">
            <div className="header">
                <img src="/images/IT-Viec-Logo.png" className="logoSize" />
                <div className="rightNav">
                    <p className="emailColor">{user.email}</p>
                    <Form inline onSubmit={(e)=>searchByKeyword(e)}>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e)=>setKeyword(e.target.value)} />
                        <Button variant="outline-danger" type="submit">Search</Button>
                    </Form>
                </div>
                
            </div>
            <Container>
                {jobs && jobs.map(job => <JobCard job={job} key={job.id} />)}
            </Container>
        </div>
    )
}
