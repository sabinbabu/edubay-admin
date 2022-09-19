import React from 'react';
import Category from './Category';
import Heading from './Heading';
import Nav from './Nav';
import RequestTable from './RequestTable';
const RequestList = () => {
  return (
    <div>
      <Heading />
      <div className="container">
        <Nav />
      </div>
      <div>
        <Category />
        <RequestTable />
      </div>
    </div>
  );
};

export default RequestList;
