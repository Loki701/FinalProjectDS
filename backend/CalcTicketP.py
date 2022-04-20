from duffel_api import Duffel
from datetime import datetime
from datetime import timedelta
import QuickSort
import HeapSort
import time


class Tickets:
    def __init__(self, date, agency, price):
        self.date = date
        self.agency = agency
        self.price = price


def CalculateCheapestTicketPrice(originAirport, destAirport, startDate, endDate, numDays):
    # originAirport,destinationAirport,startDate,endDate,numDays
    outputDay = int(numDays)
    client = Duffel(
        access_token="duffel_test_vhFhSq36gKjJVF551Y6n49K4Srx4jcqR53updLFznnz")
    start = datetime.strptime(startDate, "%Y-%m-%d").date()
    end = datetime.strptime(endDate, "%Y-%m-%d").date()
    rangeOfDays = end - start
    if(rangeOfDays.days+1 < outputDay):
        outputDay = rangeOfDays.days+1
    
    list = []
    for i in range(rangeOfDays.days+1):
        day = datetime.strptime(startDate, "%Y-%m-%d").date() + timedelta(days=i)
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
            .slices(slices)
            .return_offers()
            .execute()
        )
        offers = offer_request.offers

        for i, offer in enumerate(offers):
            if offer.owner.name != "Duffel Airways":
                list.append(Tickets(offer.slices[0].segments[0].departing_at.date(), offer.owner.name, float(offer.total_amount)))
    
    HeapSort.heapSort(list)
    cheapestTicketsDict = {}
    counter = 0

    while(len(cheapestTicketsDict) < outputDay):
        if(len(cheapestTicketsDict) == 0):
            cheapestTicketsDict[list[0].date] = list[0]
        if(list[counter].date not in cheapestTicketsDict):
            cheapestTicketsDict[list[counter].date] = list[counter]
        counter += 1

    cheapestTickets = []
    for i in cheapestTicketsDict:
        cheapestTickets.append(cheapestTicketsDict[i])

    return cheapestTickets
    


# list = CalculateCheapestTicketPrice(
#     "LAX", "NYC", "2022-05-23", "2022-05-28", 5)
# for i in list:
#     print(f"{i.agency}\t{i.date}\t{i.price}")


def HeapSortTiming(list):
    before = time.perf_counter_ns()
    HeapSort.heapSort(list)
    after = time.perf_counter_ns()
    print(f"Took {after - before: 0.4f} nanoseconds")
    HeapSort.PrintHeap(list, len(list))


def QuickSortTiming(list):
    before = time.perf_counter_ns()
    #QuickSort.Sort(list, 0, len(list))
    QuickSort.quickSort(list, 0, len(list)-1)
    after = time.perf_counter_ns()
    print(f"Took {after - before: 0.4f} nanoseconds")
    QuickSort.printQ(list)


# HeapSortTiming(list)
# QuickSortTiming(list)
