from pydantic import BaseModel

class Search(BaseModel):
    date: str
    agency: str
    price: float 

class InputData(BaseModel):
    originAirport: str
    destinationAirport: str
    startDate: str
    endDate:str
    numDays:float
class Test(BaseModel):
    title: str