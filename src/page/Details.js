import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import JobCard from './components/JobCard'
import Container from 'react-bootstrap/Container'

export default function Details() {
    let [jobs, setJobs] = useState(null)
    const { id } = useParams();
    const getDetailData = async () => {
        let url = `http://localhost:3001/jobs/${id}`
        let data = await fetch(url)
        let result = await data.json()
        setJobs(result);
        console.log("uygh",result)
    }
    useEffect(() => {
        getDetailData();
    }, [])
    if (jobs === null) {
        return <div>Loading</div>
    }
    return (
        <div>
            <div className="header">
                <img src="/images/IT-Viec-Logo.png" className="logoSize"/>
            </div>
            <h1>This is Details page.</h1>
            <h2>Your ID is {id}.</h2>
            <img src={jobs.img} />
            <h1>{jobs.title}</h1>
            <div>
                  {jobs.tags.map(tag => (
                    <Badge variant="secondary" className="badge-style">
                      {tag}
                    </Badge>
                  ))}
                </div>
        </div>
    )
}
