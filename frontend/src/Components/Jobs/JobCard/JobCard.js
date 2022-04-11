import { Card } from 'react-bootstrap';
import React, { useContext, useState } from 'react';
import './JobCard.css';

function JobCard({ id, title, salary, equity, companyName }) {
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
        </Card.Body>
      </Card>
    </div>
  );
}

export default JobCard;
