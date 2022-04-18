from urllib import response
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import CalcTicketP
#from model import Todo



# document {}
async def fetch_flight_data(originAirport,destinationAirport,startDate,endDate,numDays):
    document = {}
    return document

app = FastAPI()

origins = [
    "http://localhost:3000",
]
 
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/result/////")
async def get_default():
    print("hello")
    return [{'date':'rewwewer', 'agency': 'Airline', 'price':100},{'date':'rewwewer', 'agency': 'Airline', 'price':69}]

@app.get("/api/result/{originAirport}/{destinationAirport}/{fromDate}/{toDate}/{numDays}")
async def get_response(originAirport,destinationAirport,fromDate,toDate,numDays):
    #Do everything and then return response
    #print(f"Date:",{fromDate})
    #list = CalcTicketP.CalculateCheapestTicketPrice(originAirport,destinationAirport,fromDate,toDate,numDays)
    print(len(list))
    #response = CalcTicketP.CalculateCheapestTicketPrice(originAirport,destinationAirport,fromDate,toDate,numDays)
    # response = await fetch_flight_data(originAirport,destinationAirport,startDate,endDate,numDays)
    response = [{'date':'rewwewer', 'agency': 'Airline', 'price':100},{'date':'rewwewer', 'agency': 'Airline', 'price':69}]
    
    if response:
        return response
    raise HTTPException(404, f"Something went wrong on the result url!")
