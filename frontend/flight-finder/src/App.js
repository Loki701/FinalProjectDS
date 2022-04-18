import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import ListResult from './componets/ListResult';

function App() {
  // result should have the format of {date:, agency:, price:}
  const [result, setResult] = useState([{}])
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [numDays, setNumDays] = useState(0)
  
  //Post seach Results
  const addResultHadler = (event) =>{
    event.preventDefault();
    axios.get(`http://localhost:8000/api/result/${from}/${to}/${fromDate}/${toDate}/${numDays}`)
      .then(res=>{
        setResult(res.data)
      })
  }


  return (
    <div className="App">
      <h1>Welcome to Flight finder!</h1>
      <p>At Flight finder we provide the user with the date/ticket at which we find the lowest price tickets during the desire period</p>

      <p>Start you adventure at a buget!</p>
      <button >Start</button>

      <div className="card-body">
        <p>Chose your traveling destination</p>
          <form className="card-text">
            <input type="search" placeholder="From" onChange={event => setFrom(event.target.value)} required/>
            <input type="search" placeholder="to" onChange={event => setTo(event.target.value)} required/>

            <p>Time period available for travel!</p>
            <p>From:</p>
            <input type="date" onChange={event => setFromDate(event.target.value)}required/>
            <p>to:</p>
            <input type="date" onChange={event => setToDate(event.target.value)}required/>
            <p>amount of days</p>
            <input type="range" min="0" max="10" onChange={event => setNumDays(event.target.value)}></input>
            <input type="submit" style={{'borderRadius':'50px',"fontWeight":"bold"}} onClick={addResultHadler} value="Search"/>
        </form>
      </div>
      <div>
        <p>Your Search Reasults</p>
        {console.table(result)}
        {result.map}
        <ListResult result={result}/>
      </div>

      <h6>Copyright 2022, All rights reserved &copy;</h6>
    </div>
  );
}

export default App;
