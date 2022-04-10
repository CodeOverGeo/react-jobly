import React, { useState, useEffect } from 'react';
import JoblyApi from '../../../api/api';
import CompanyCard from '../CompanyCard/CompanyCard';
import LoadingSpinner from '../../Common/LoadingSpinner/LoadingSpinner';

function CompaniesList() {
  const [companies, setCompanies] = useState(null);

  // When page loads, requests a list of all companies from API

  useEffect(function getCompaniesOnMount() {
    find();
  }, []);

  // On find form submit, reload company list

  async function find(name) {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }

  // Show spinner while waiting for API response

  if (!companies) return <LoadingSpinner />;

  return (
    <div>
      {companies.length ? (
        <p>
          {companies.map((company) => (
            <li>{company.name}</li>
          ))}
        </p>
      ) : (
        <p>No results match find criteria!</p>
      )}
    </div>
  );
}

export default CompaniesList;
