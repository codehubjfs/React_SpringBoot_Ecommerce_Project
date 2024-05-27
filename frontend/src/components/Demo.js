import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

function Demo() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Santhosh',
    email: 'santhosh7@gmail.com',
    // Add other fields here with their initial values
  });

  const handleEdit = (field) => {
    setIsEditing((prevState) => field !== undefined ? true : !prevState);
    console.log('clicked'); // Toggle the editing state for the respective field
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData(prevFormData => {
      const updatedFormData = {
        ...prevFormData,
        [id]: value
      };
      console.log(updatedFormData); // Log updatedFormData after updating
      return updatedFormData; // Return the updated state
    });
  };
  
  
  return (
    <form style={{ marginTop: '100px' }} className="container">
      <div className="row">
      <div className="form-group col-md-6">
  <label htmlFor="name">Name:</label> {/* Changed "names" to "name" */}
  <div className="input-group">
    {isEditing ? (
      <input
        type="text"
        className="form-control"
        id="name" 
        value={formData.name}
        onChange={handleChange}
      />
    ) : (
      <p>{formData.name}</p>
    )}
    {isEditing && (
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={() => handleEdit('name')} // Pass the field name to handleEdit
        >
          <FontAwesomeIcon icon={faPencilAlt} />
        </button>
      </div>
    )}
  </div>
</div>

        <div className="form-group col-md-6">
          <label htmlFor="email">Email:</label>
          <div className="input-group">
            {isEditing ? (
              <input
                type="email"
                className="form-control"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            ) : (
              <p>{formData.email}</p>
            )}
            {isEditing && (
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={() => handleEdit('email')} // Pass the field name to handleEdit
                >
                  <FontAwesomeIcon icon={faPencilAlt} />
                </button>
              </div>
            )}
          </div>
        </div>
        {/* Add other fields similarly */}
      </div>
      <div className="row justify-content-center" style={{ marginTop: '20px' }}>
        <div className="col-md-6 text-right">
          {isEditing ? (
            <button type="button" className="btn btn-secondary btn-md" style={{ marginRight: '20px' }} onClick={() => handleEdit()}>Cancel</button>
          ) : (
            <button type="button" className="btn btn-secondary btn-md" style={{ marginRight: '20px' }} onClick={() => handleEdit()}>Edit</button>
          )}
          <button type="submit" className="btn btn-primary btn-md" disabled={!isEditing}>Save</button>
        </div>
      </div>
    </form>
  );
}

export default Demo;
