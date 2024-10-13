import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [datetime, setDatetime] = useState('');
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTrxns().then(setTransactions).catch((err) => console.log(err));
  }, [transactions]);

  async function getTrxns() {
    const url = 'http://localhost:5000/api/transactions';
    const responseUrl = await fetch(url);
    return await responseUrl.json();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = 'http://localhost:5000/api/trxn';
    const price = name.split(" ")[0];
    axios.post(url, { price, name: name.substring(price.length + 1), desc, datetime })
      .then(result => {
        console.log(result);
        setName('');
        setDatetime('');
        setDesc('');
      }).catch((error) => console.log(error));
  };

  let balance = 0;

  for (const trxn of transactions) {
    balance = balance + trxn.price;
  }
  balance = balance.toFixed(2);
  const fraction = balance.split('.')[1];
  balance = balance.split('.')[0];

  return (
    <main>
      <h1>Rs. {balance}<span>{fraction}</span></h1>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <input type="text" required value={name} onChange={e => setName(e.target.value)} placeholder={"+200 new nokia"} />
          <input type="datetime-local" required value={datetime} onChange={e => setDatetime(e.target.value)} />
        </div>
        <div className="desc">
          <input type="text" required value={desc} onChange={e => setDesc(e.target.value)} placeholder={"description"} />
        </div>
        <button type="submit">Add new transaction</button>
      </form>
      <div className="trxns">
        {transactions.length > 0 && transactions.map((item, value) => (
          <div key={value}>
            <div className="trxn">
              <div className="left">
                <div className="name">{item.name}</div>
                <div className="description">{item.desc}</div>
              </div>
              <div className="right">
                <div className={"price " + (item.price < 0 ? "red" : "green")}>{item.price}</div>
                <div className="datetime">{item.datetime}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
