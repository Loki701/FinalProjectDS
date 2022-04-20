import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import ListResult from './components/ListResult';
import SearchBar from './components/searchBar';

function App() {
  const [result, setResult] = useState([])
  const [originAirport, setOriginAirport] = useState('')
  const [destinationAirport, setDestinationAirport] = useState('')
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [numDays, setNumDays] = useState(1)
  const [subHeaderStyle, setSubHeaderStyle] = useState("subHeader-active")
  const [cardBody,setCardBody] = useState("card-body")
  const [resultStyle, setResultStyle] = useState("result")

  const handleStartClick =() =>{
    setSubHeaderStyle("subHeader");
    setCardBody("card-body-active")
  }
  const handleChangeInput =(e)=>{
    e.preventDefault();
    setCardBody("card-body-active")
    setResult([])
    setResultStyle("result");
  }
  const addResultHadler = (event) =>{
    event.preventDefault();
    if(originAirport === ''){
      alert("You must Select the departure Airport!")
    }
    else if(destinationAirport ===''){
      alert("You must Select the destination Airport!")
    }
    else if(originAirport=== destinationAirport){
      alert("The origin Airport cannot be the same as destination Airport!")
    }
    else if(fromDate === '' || toDate === ''){
      alert("You must Select both Dates!")
    }
    else if(Date.parse(fromDate)>Date.parse(toDate) || Date.parse(fromDate)+86400000 < Date.now()||Date.parse(toDate)< new Date()){
      alert("Error in Dates!")
    }
    else{
      axios.get(`http://localhost:8000/api/result/${originAirport}/${destinationAirport}/${fromDate}/${toDate}/${numDays}`)
        .then(res=>{
          setResult(res.data)
        });
        setResultStyle("result-active");
        setCardBody("card-body")
    }
  }
  const OutPutResult = () =>{
      if(result === undefined || result.length === 0 ){
        return(
        <div className="spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        );
      }
      else{
        return(
        <div>
          <p className='result-title'>Your Search Reasults</p>
          <ListResult result={result}/>
          <button className='searchOther' type="submit" onClick={handleChangeInput} >Search Other Dates!</button>
        </div>
        );
      }
  }
  

  return (
    <div className="App">
      <div className='header'>
        <h1>Flight Finder</h1>
      </div>
      <div className={subHeaderStyle}>
        <div className='subheadingtext'>
        <p>At Flight finder we provide users with the dates at which we find the lowest price tickets during the desire period</p>
        <p>Start you adventure at a buget!</p>
        </div>
        <button className='btt-start' onClick={handleStartClick} >Start</button>
      </div>
      <div className={cardBody}>
        <p className='search-text'>Chose your traveling destination</p>
          <form className="card-text">
            <div className='searchBoxes'>
            <div className='searchAirport'>
            <SearchBar name={"Departure Airport"} stateChanger={setOriginAirport} state={originAirport}/>
            </div>
            <div className='searchAirport'>
            <SearchBar name={"Destination Airport"} stateChanger={setDestinationAirport} state={destinationAirport}/>
            </div>
            </div>
            <p className='search-text'>Time period available for travel!</p>
            
            <div className='dates-c'>
            <input className='calendars' type="date" onChange={event => setFromDate(event.target.value)}required/>
            <div class="arrow-1"></div>
            <input className='calendars' type="date" onChange={event => setToDate(event.target.value)}required/>
            </div>
            <p className='search-text'># of days with cheapest tickets</p>
            <input className='daysInput' type="text" onChange={event => setNumDays(event.target.value)} placeholder="1"></input>
            <button className='searchButton' onClick={addResultHadler} >Search</button>
        </form>
      </div>
      <div className={resultStyle}>
        <OutPutResult />
      </div>
      <div className='footer'>
        <h5>Copyright 2022, All rights reserved &copy;</h5>
      </div>
    </div>
  );
}

export default App;
