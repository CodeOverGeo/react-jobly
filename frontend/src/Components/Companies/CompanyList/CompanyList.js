import React, { useState, useEffect } from 'react';
import JoblyApi from '../../../api/api';
import CompanyCard from '../CompanyCard/CompanyCard';
import SearchForm from '../../Common/SearchForm/SearchForm';
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
    <div className="CompanyList col-md-8 offset-md-2">
      <SearchForm find={find} />
      {companies.length ? (
        <div>
          {companies.map((c) => (
            <CompanyCard
              key={c.handle}
              name={c.name}
              description={c.description}
              logoUrl={c.logoUrl}
              handle={c.handle}
            />
          ))}
        </div>
      ) : (
        <p>No results match find criteria!</p>
      )}
    </div>
  );
}

export default CompaniesList;
