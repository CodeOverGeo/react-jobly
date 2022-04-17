import { Button, Card } from 'react-bootstrap';
import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../../Auth/UserContext';
import './JobCard.css';

function JobCard({ id, title, salary, equity, companyName }) {
  const { hasAppliedToJob, applyToJob } = useContext(UserContext);
  const [applied, setApplied] = useState();

  useEffect(
    function updateAppliedStatus() {
      console.debug('JobCard useEffect updateAppliedStatus', 'id=', id);
      setApplied(hasAppliedToJob(id));
    },
    [id, hasAppliedToJob]
  );

  async function handleApply(e) {
    if (hasAppliedToJob(id)) return;
    applyToJob(id);
    setApplied(true);
  }

  return (
    <div>
      <Card className="JobCard">
        <Card.Body>
          <Card.Title>{title}</Card.Title>

          <Card.Text className="text-center">{companyName}</Card.Text>
          <Card.Text className="text-center">
            salary: ${new Intl.NumberFormat().format(salary)}
          </Card.Text>
          <Card.Text className="text-center">equity: {equity}</Card.Text>
          <Button
            className="btn btn-danger float-right"
            onClick={handleApply}
            disabled={applied}
          >
            {applied ? 'Applied' : 'Apply'}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default JobCard;
