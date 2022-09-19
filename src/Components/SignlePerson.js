import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const SignlePerson = () => {
  const { id } = useParams();
  console.log(typeof id);
  console.log(data);
  const single = data.find((item) => item.id === Number(id));
  console.log(single);
  const { person_name, institution_name, address } = single;
  return (
    <div className="container-request">
      <section>
        <h5 Style="margin-bottom:5px; font-weight:bold; ">
          Institution Details
        </h5>
        <hr />
        <div>
          <article className="division">
            <h6 className="titlesHeading">Person Name:</h6>
            <span className="items">{person_name}</span>
          </article>
          <article className="division">
            <h6 className="titlesHeading">Institution Name:</h6>
            <span className="items">{institution_name}</span>
          </article>
          <article className="division">
            <h6 className="titlesHeading">Address:</h6>{' '}
            <span className="items">{address}</span>
          </article>

          <h6 className="titlesHeading">ABN:</h6>
          <h6 className="titlesHeading">ACN:</h6>
          <h6 className="titlesHeading">Website:</h6>
          <h6 className="titlesHeading">Email:</h6>
          <h6 className="titlesHeading">Proof:</h6>
        </div>
      </section>
      <div className="buttons">
        <button className="btn_accept">
          <FontAwesomeIcon icon="fa-solid fa-check" />
          Accept
        </button>
        <button className="btn_reject">
          <FontAwesomeIcon icon="fa-solid fa-check" />
          Reject
        </button>
      </div>
    </div>
  );
};

export default SignlePerson;
