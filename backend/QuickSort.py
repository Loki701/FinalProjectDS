from ping import *


def Parition(ticketList, low, high) -> int:
    i = low - 1
    pivot = Tickets(ticketList[high].airliner, ticketList[high].startDate, ticketList[high].price)

    for j in range(low, high):
        if ticketList[high].price <= pivot.price:
            ++i
            (ticketList[i], ticketList[j]) = (ticketList[j], ticketList[i])

    (ticketList[i+1], ticketList[high]) = (ticketList[high], ticketList[i+1])
    return (i + 1)


def Sort(ticketList, low, high):
    if len(ticketList) == 1:
        return ticketList
    # as long as low doesn't pass high, we will continue to parition the array
    if low < high:
        p = Parition(ticketList, low, high)

    # we will then call QuickSort on the lower half and upper half of the way, since everything lower than the pivot is to the left and higher to the right
    Sort(ticketList, low, p - 1)
    Sort(ticketList, p + 1, high)
