import React from 'react';
import Category from './Category';

import RequestTable from './RequestTable';
const RequestList = () => {
  return (
    <div>
      {/* <div className="container">
        <Nav />
      </div> */}
      <div className="container-box">
        <Category />
        <RequestTable />
      </div>
    </div>
  );
};

export default RequestList;
