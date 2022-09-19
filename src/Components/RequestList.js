import React from 'react';
import Category from './Category';
import Heading from './Heading';
import Nav from './Nav';
const RequestList = () => {
  return (
    <div>
      <Heading />
      <div className="container">
        <Nav />
      </div>
      <div>
        <Category />
      </div>
    </div>
  );
};

export default RequestList;
