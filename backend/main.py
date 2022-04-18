from turtle import title
from urllib import response
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from model import Search
from model import InputData
from model import Test
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

@app.get("/api/result/////0")
async def get_default():
    return [{"date": "32-24-2434", "agency":"AAirline", "price": 100}]

@app.get("/api/result/{originAirport}/{destinationAirport}/{fromDate}/{toDate}/{numDays}")
async def get_response(originAirport,destinationAirport,fromDate,toDate,numDays):
    #Do everything and then return response
    print(title)
    response = [{"date": originAirport,
    "agency": destinationAirport,
    "price": 1000}]
    # response = await fetch_flight_data(originAirport,destinationAirport,startDate,endDate,numDays)
    if response:
        return response
    raise HTTPException(404, f"Something went wrong on the result url!")
