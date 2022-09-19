import React from 'react';

const Category = () => {
  return (
    <div className="category">
      <div>
        <h6>Category :</h6>
      </div>
      <div>
        <select className="dropdown" name="cars" id="cars">
          <option value="Institution">Institution</option>
          <option value="Student">Student</option>
          <option value="Consultancy">Consultancy</option>
        </select>
      </div>
    </div>
  );
};

export default Category;
