import React, { useState, useEffect } from 'react';
import './App.css';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';

const App = () => {
  // Declare the state variables for transactions and filteredTransactions
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Your code for fetching the data and setting the transactions state can go here.
  // Make sure to fetch the data and update the transactions state accordingly.
  useEffect(() => {
    // Fetch the data from the file
    fetch('http://localhost:8000/transactions') // Replace the URL with the correct path to your db.json file
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Define the handleSearch function
  const handleSearch = () => {
    const filtered = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  // Update the filtered transactions when the searchTerm changes
  useEffect(() => {
    handleSearch();
  }, [searchTerm, transactions]);

  return (
    <div className="App">
      <div>
        <h1>Transactions</h1>
        <div>
          <input
            type="text"
            placeholder="Search by description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Display the fetched data (filtered transactions) */}
      {filteredTransactions && <TransactionList transaction={filteredTransactions} />}

      {/* Display the form after the fetched data */}
      <div>
        <h1>Add Transaction</h1>
        <TransactionForm />
      </div>
    </div>
  );
};

export default App;
