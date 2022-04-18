import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import ListResult from './componets/ListResult';
import SearchBar from './componets/searchBar';
function App() {
  // result should have the format of {date:, agency:, price:}
  const [result, setResult] = useState([{}])
  const [originAirport, setOriginAirport] = useState('')
  const [destinationAirport, setDestinationAirport] = useState('')
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [numDays, setNumDays] = useState(0)
  const [subHeaderStyle, setSubHeaderStyle] = useState("subHeader-active")
  const [cardBody,setCardBody] = useState("card-body")
  const [resultStyle, setResultStyle] = useState("result")
  
  //Post seach Results
  
  
  const handleStartClick =() =>{
    setSubHeaderStyle("subHeader");
    setCardBody("card-body-active")
  }
  const addResultHadler = (event) =>{
    event.preventDefault();
    // if(handleValidation){
    //   alert("Searching...");
    //   axios.get(`http://localhost:8000/api/result/${originAirport}/${destinationAirport}/${fromDate}/${toDate}/${numDays}`)
    //     .then(res=>{
    //       setResult(res.data)
    //     });
    // }else{
    //   alert("Invalid Input!");
    // }
    axios.get(`http://localhost:8000/api/result/${originAirport}/${destinationAirport}/${fromDate}/${toDate}/${numDays}`)
      .then(res=>{
        setResult(res.data)
      });
    setResultStyle("result-active");
  }
  

  return (
    <div className="App">
      <div className='header'>
        <h1>Welcome to Flight Finder!</h1>
      </div>
      <div className={subHeaderStyle}>
        <p>At Flight finder we provide the user with the date/ticket at which we find the lowest price tickets during the desire period</p>
        <p>Start you adventure at a buget!</p>
        <button className='btt-start' onClick={handleStartClick} >Start</button>
      </div>
      <div className={cardBody}>
        <p>Chose your traveling destination</p>
          <form className="card-text">
            <div className='searchBoxes'>
            <div className='searchAirport'>
            <SearchBar stateChanger={setOriginAirport} state={originAirport}/>
            </div>
            <div className='searchAirport'>
            <SearchBar stateChanger={setDestinationAirport} state={destinationAirport}/>
            </div>
            </div>
            <p>Time period available for travel!</p>
            <p>From:</p>
            <input type="date" onChange={event => setFromDate(event.target.value)}required/>
            <p>to:</p>
            <input type="date" onChange={event => setToDate(event.target.value)}required/>
            <p>amount of days</p>
            <input type="range" min="0" max="=5" onChange={event => setNumDays(event.target.value)}></input>
            <input type="submit" style={{'borderRadius':'50px',"fontWeight":"bold"}} onClick={addResultHadler} value="Search"/>
        </form>
      </div>
      <div className={resultStyle}>
        <p>Your Search Reasults</p>
        <ListResult result={result}/>
      </div>
      <div className='footer'>
        <h6>Copyright 2022, All rights reserved &copy;</h6>
      </div>
    </div>
  );
}

export default App;
