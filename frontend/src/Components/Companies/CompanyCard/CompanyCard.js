import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Card, Image } from 'react-bootstrap';
import './CompanyCard.css';

function CompanyCard({ name, description, logoUrl, handle }) {
  return (
    <LinkContainer to={`/companies/${handle}`}>
      <Card style={{ width: '70vw' }} className="CompanyCard">
        <Card.Body>
          <Card.Title>
            {name} <Image src={logoUrl} />
          </Card.Title>

          <Card.Text className="text-center">{description}</Card.Text>
        </Card.Body>
      </Card>
    </LinkContainer>
  );
}

export default CompanyCard;
