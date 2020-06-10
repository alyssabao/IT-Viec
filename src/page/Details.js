import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import moment from 'moment'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import JobCard from './components/JobCard'
import Container from 'react-bootstrap/Container'

export default function Details() {
    let [jobs, setJobs] = useState(null)
    let user = useSelector((state)=>state.user)
    const { id } = useParams();
    const getDetailData = async () => {
        let url = `${process.env.REACT_APP_BACKEND_SERVER_URL}/jobs/${id}`
        let data = await fetch(url)
        let result = await data.json()
        setJobs(result);
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
                <div>
                    <img src="/images/IT-Viec-Logo.png" className="logoSize" />
                    <Link to={`/jobs`} className="linkFormat">Home</Link>
                </div>  
                <p className="emailColor">{user.email}</p>
            </div>
            <div className="bgGray">
                <div className="detailFormat">
                    <div>
                        <img src={jobs.img} />
                    </div>
                    <div>
                        <h1>{jobs.title}</h1>
                        <div>
                            {jobs.tags.map(tag => (
                                <Badge variant="secondary" className="badge-style">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                        <p>Salary: ${jobs.salary}</p>
                        <p>Location: {jobs.city}</p>
                        <p>{moment(jobs.time).fromNow()}</p>
                        <h2>Benefits</h2>
                        <ul className="benefit-list">
                            {jobs.benefits.map(benefit => (
                                <li>{benefit}</li>
                            ))}
                        </ul>
                        <h2>Description</h2>
                        <p>{jobs.description}</p>
                        <Button variant="danger">Apply Now</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
