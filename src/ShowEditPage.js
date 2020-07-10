import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const ShowEditPage = ({handleUpdate,editMsg,value,handleClose,open,handleEditForm}) => {
  return (
    <div className="edit-form">
      <div open={open} onClose={handleClose}>
        <h6 className="p-3 mb-2 bg-warning text-dark">Edit information</h6>
        <div>
          <form>
          <input
            className="my-2"
            type="text"
            name="from" 
            placeholder="Edit your name"
            onChange={(event) => handleUpdate(event)}
          />
          <input
            className="my-2"
            type="text"
            name="text" 
            onChange={(event) => handleUpdate(event)}
            placeholder="Edit your text"
          />
          <button className="btn btn-warning mx-2" onClick={handleEditForm}>
            Cancel
          </button>
          <button type="submit" className="btn btn-warning mx-2" onClick={(event) => {editMsg(event);handleClose();}}  value={value}  color="primary">
            submit
          </button>
        </form>
       </div>
       </div>
    </div>   
  );
}

export default ShowEditPage;