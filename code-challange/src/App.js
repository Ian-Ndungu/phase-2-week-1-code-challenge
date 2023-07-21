import React, { useState,useEffect } from 'react';
import './App.css';
import TransactionList from './TransactionList';

const App = () => {
  // Declare the state variables for transactions and filteredTransactions
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  // Your code for fetching the data and setting the transactions state can go here.
  // Make sure to fetch the data and update the transactions state accordingly.
  useEffect(() => {
    // Fetch the data from the file
    fetch('http://localhost:8000/transactions') // Replace the URL with the correct path to your db.json file
      .then((response) => response.json())
      .then((data) =>{
    
        setTransactions(data)})
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      
      {transactions &&<TransactionList transaction={transactions} />}
    </div>
  );
};

export default App;
