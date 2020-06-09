import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import JobCard from './components/JobCard'

export default function Jobs() {
    let [jobs, setJobs] = useState(null);
    const { id } = useParams();
    const getDetailData = async () => {
        let url = `http://localhost:3001/jobs`
        let data = await fetch(url)
        let result = await data.json()
        setJobs(result);
    }
    useEffect(() => {
        getDetailData();
    }, [])
    return (
        <div>
            <div className="header">
                <img src="/images/IT-Viec-Logo.png" className="logoSize"/>
            </div>
            <Container>
                {jobs && jobs.map(job => <JobCard job={job} key={job.id} />)}
            </Container>
        </div>
    )
}
