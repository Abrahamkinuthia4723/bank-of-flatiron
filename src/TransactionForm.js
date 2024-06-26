import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [description, setDescription] = useState('');
  const [Category, setcategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !Category || !amount || !date) {
      alert('Please fill out all fields');
      return;
    }

    const newTransaction = {
      id: Date.now(),
      description,
      Category,
      amount: parseFloat(amount),
      date,
    };

    addTransaction(newTransaction);
    // Clear form fields
    setDescription('');
    setcategory('')
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
     
     <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>  
      <label>
        Category:
        <input
          type="text"
          value={Category}
          onChange={(e) => setcategory(e.target.value)}
        />
      </label>  
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label> 
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;