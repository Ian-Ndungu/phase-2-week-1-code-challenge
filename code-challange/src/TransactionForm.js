import React, { useState } from 'react';
import axios from 'axios';

const TransactionForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/transactions', formData) // Assuming '/transactions' is the endpoint for the JSON data
      .then((response) => {
        console.log('Transaction added:', response.data);
        // You can handle success cases here, or update the state to show the new data.
      })
      .catch((error) => {
        console.error('Error adding transaction:', error);
        // Handle error cases here.
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Date:</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" name="description" value={formData.description} onChange={handleChange} />
      </div>
      <div>
        <label>Category:</label>
        <input type="text" name="category" value={formData.category} onChange={handleChange} />
      </div>
      <div>
        <label>Amount:</label>
        <input type="number" name="amount" value={formData.amount} onChange={handleChange} />
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
