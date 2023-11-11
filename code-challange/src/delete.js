import React from 'react';

function Delete({ data, setData, dataId }) {
  const handleDelete = () => {
    // Filter out the transaction with the specified id
    const updatedData = data.filter((element) => element.id !== dataId);
    // Update the state with the new data
    setData(updatedData);
  };

  return (
    <button onClick={handleDelete}>
      Delete
    </button>
  );
}

export default Delete;


