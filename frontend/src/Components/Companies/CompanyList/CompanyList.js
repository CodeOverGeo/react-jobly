import React, { useState, useEffect } from 'react';
import JoblyApi from '../../../api/api';
import CompanyCard from '../CompanyCard/CompanyCard';
import LoadingSpinner from '../../Common/LoadingSpinner/LoadingSpinner';

function CompaniesList() {
  return (
    <div>
      <LoadingSpinner></LoadingSpinner>
    </div>
  );
}

export default CompaniesList;
