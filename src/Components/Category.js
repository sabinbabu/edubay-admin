import React from 'react';

const Category = () => {
  return (
    <div className="category">
      <h6>Category :</h6>
      <select className="dropdown" name="cars" id="cars">
        <option value="Student">Student</option>
        <option value="Institution">Institution</option>
        <option value="Consultancy">Consultancy</option>
      </select>
    </div>
  );
};

export default Category;
