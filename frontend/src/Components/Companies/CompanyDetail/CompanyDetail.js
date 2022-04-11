import React, { useState, useEffect } from 'react';
import { Card, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import JoblyApi from '../../../api/api';
import JobCardList from '../../Jobs/JobCardList/JobCardList';
import LoadingSpinner from '../../Common/LoadingSpinner/LoadingSpinner';
import './CompanyDetail.css';

function CompanyDetail() {
  const { handle } = useParams();

  const [company, setCompany] = useState(null);

  useEffect(
    function getCompaniesAndJobs() {
      async function getCompany() {
        setCompany(await JoblyApi.getCompany(handle));
      }

      getCompany();
    },
    [handle]
  );

  if (!company) return <LoadingSpinner />;

  return (
    <div className="col-md-8 offset-md-2">
      <Card className="CompanyDetail ">
        <Card.Body>
          <Card.Title>
            {company.name}
            <Image src={company.logoUrl} />
          </Card.Title>
          <Card.Subtitle>{company.description}</Card.Subtitle>
        </Card.Body>
      </Card>

      <JobCardList jobs={company.jobs} />
    </div>
  );
}

export default CompanyDetail;
