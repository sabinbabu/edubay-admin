import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { data } from './data';
const RequestTable = () => {
  //   const onClickHandler = () => {
  //     const { id } = useParams;
  //   };
  return (
    <div className="table__container">
      <table className="table">
        <tr>
          <th>ID</th>
          <th>Person Name</th>
          <th>Institution Name</th>
          <th>Address</th>
          <th>Details</th>
          <th>Options</th>
        </tr>
        {data.map((record) => (
          <tr>
            {/* <Link to={`requestList/${record.id}`}> */}
            <td>{record.id}</td>
            <td>{record.person_name}</td>
            <td>{record.institution_name}</td>
            <td>{record.address}</td>
            {/* </Link> */}
            <td>
              <button className="btn_details">
                <FontAwesomeIcon icon="fa-solid fa-check" />
                <NavLink to={`/requestList/${record.id}`}>Details</NavLink>
              </button>
            </td>
            <td>
              <button className="btn_accept">
                <FontAwesomeIcon icon="fa-solid fa-check" />
                Accept
              </button>
              <button className="btn_reject">
                <FontAwesomeIcon icon="fa-solid fa-check" />
                Reject
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default RequestTable;
