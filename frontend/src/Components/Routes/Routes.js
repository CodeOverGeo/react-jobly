import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from '../Home/Home';
import CompaniesList from '../Companies/CompanyList/CompanyList';
import JobList from '../Jobs/JobList/JobList';
import CompanyDetail from '../Companies/CompanyDetail/CompanyDetail';
import ProfileForm from '../ProfileForm/ProfileForm';
import LoginForm from '../Auth/LoginForm/LoginForm';
import SignupForm from '../Auth/SignupForm/SignupForm';

/** Routes for site
 *
 *
 *
 *
 *
 */

function Routing({ login, signup }) {
  return (
    <div className="pt-5">
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>

        <Route exact path="/companies" element={<CompaniesList />}></Route>

        <Route
          exact
          path="/companies/:handle"
          element={<CompanyDetail />}
        ></Route>

        <Route exact path="/jobs" element={<JobList />}></Route>

        <Route exact path="/profile" element={<ProfileForm />}></Route>

        <Route
          exact
          path="/login"
          element={<LoginForm login={login} />}
        ></Route>

        <Route
          exact
          path="/signup"
          element={<SignupForm signup={signup} />}
        ></Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default Routing;
