import React, { useState, useEffect } from 'react';
import SearchForm from '../../Common/SearchForm/SearchForm';
import JoblyApi from '../../../api/api';
import JobCardList from '../JobCardList/JobCardList';
import LoadingSpinner from '../../Common/LoadingSpinner/LoadingSpinner';

function JobList() {
  const [jobs, setJobs] = useState(null);

  useEffect(function getAllJobsOnMount() {
    search();
  }, []);

  async function search(title) {
    let jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }

  if (!jobs) return <LoadingSpinner />;

  return (
    <div className="JobList col-md-8 offset-md-2">
      <SearchForm searchFor={search} />
      {jobs.length ? (
        <JobCardList jobs={jobs} />
      ) : (
        <p>Sorry, no results were found!</p>
      )}
    </div>
  );
}

export default JobList;
