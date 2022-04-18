from duffel_api import Duffel
from datetime import date
from datetime import datetime
from datetime import timedelta
# from QuickSort import *
import MinHeap
import time


class Tickets:
    def __init__(self, airliner, departDate, price):
        self.airliner = airliner
        self.departDate = departDate
        self.price = price



def CalculateCheapestTicketPrice(originAirport, destAirport, startDate, endDate, numDays):
    # originAirport,destinationAirport,startDate,endDate,numDays
    list = []
    start = datetime.strptime(startDate, "%Y-%m-%d").date()
    end = datetime.strptime(endDate, "%Y-%m-%d").date()
    rangeOfDays = end - start
    for i in range(rangeOfDays.days):
        client = Duffel(
            access_token="duffel_test_vhFhSq36gKjJVF551Y6n49K4Srx4jcqR53updLFznnz")
        day = datetime.strptime(
            startDate, "%Y-%m-%d").date() + timedelta(days=i)

       # departure_date = date.strftime("%Y-%m-%d")

        # destination = input("\nWhere do you want to go?\n").strip()
        #destination = originAirport
        # origin = input("\nFrom where?\n").strip()
        #origin = destAirport
        # departure_date = input("\nOn what date? (YYYY-MM-DD)\n").strip()
        # """

        # print("\nSearching flights...")

        slices = [
            {
                "origin": originAirport,
                "destination": destAirport,
                "departure_date": day.strftime("%Y-%m-%d"),
            },
        ]
        offer_request = (
            client.offer_requests.create()
            .passengers([{"type": "adult"}])
            .cabin_class("economy")
            .slices(slices)
            .return_offers()
            .execute()
        )
        offers = offer_request.offers

        for idx, offer in enumerate(offers):
            list.append(Tickets(
                offer.owner.name, offer.slices[0].segments[0].departing_at.date(), offer.total_amount))
    return list    
         

list = CalculateCheapestTicketPrice("LAX", "JFK", "2022-05-22", "2022-05-23", 0)

def HeapSortTiming(list):
    heap = MinHeap()
    before = time.perf_counter_ns()
    for i in list:
        heap.insert(i)
    after = time.perf_counter_ns()
    print (f"Took {after - before: 0.4f} nanoseconds")

""" 
def QuickSortTiming(list1):
    before = time.perf_counter_ns()
    Sort(list1, 0, len(list1))
    after = time.perf_counter_ns()
    return (f"Took {after - before: 0.4f} nanoseconds")
 """



""" from duffel_api import Duffel
import json
client = Duffel(access_token="duffel_test_vhFhSq36gKjJVF551Y6n49K4Srx4jcqR53updLFznnz")

# duffel.offer_requests.get("Test1")

offer_requests = client.offer_requests.list()
print(type(offer_requests))
print(json.dump(offer_requests))
for offer_request in offer_requests:
    print(offer_request.id) """


""" slices = [

  {

    "origin": "NYC",

    "destination": "ATL",

    "departure_date": "2021-06-21"

  },

  {

    "origin": "ATL",

    "destination": "NYC",

    "departure_date": "2021-07-21"

  }

]

passengers = [{ "type": "adult" }, { "type": "adult" }, { "age": 1 }]

duffel.offer_requests.create()

.slices(slices)

.passengers(passengers)

.cabin_class("business")

.execute() """
