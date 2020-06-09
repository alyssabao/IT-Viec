import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import moment from 'moment'
import {Link} from 'react-router-dom'

export default function JobCard(props) {
  let job = props.job;
    return (
        <div className="jobCardFormat">
          <Link to={`/jobs/${job.id}`} className="wordColor">
          <Row>
            <Col>
              <div className="jobcard-logo">
                <img src={job.img} />
              </div>
            </Col>
            <Col xs={8}>
              <div className="jobcard-descriptions">
                <h2 className="jobcard-title">{job.title}</h2>
                <div>$ {job.salary}</div>
                <div>
                  <ul className="benefit-list">
                    {job.benefits.map(benefit => (
                      <li>{benefit}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  {job.tags.map(tag => (
                    <Badge variant="secondary" className="badge-style">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Col>
            <Col>
              <div className="date-location-box">
                {job.isHotjob ? (
                  <div className="hotJobFormat">Hot Job</div>
                ) : (
                  <div></div>
                )}
    
                <div className="jobcard-location">
                  <div>{job.city}</div>
                  <div>District {job.district}</div>
                </div>
                <div className="job-time">{moment(job.time).fromNow()}</div>
              </div>
            </Col>
          </Row>
          </Link>
        </div>
      );    
}
