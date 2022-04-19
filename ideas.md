 // visualization of dataset
    // after the pandemic... airtravel was impacted. Interstate travel decreased a lot. To help visualize the public of the airflow traffic. Our program comes in by showing a beatiful GUI that allows users to select different states, with different data points popped up.

    // how big can the heap get/how many data points can we realistically store without crashing the computer

    // Can the problem be straight forward like finding the cheapest tickets from a certain airport, or would it have to be more technical, like finding the best month on average to book a flight somewhere. (Something regarding the random generic data)

    // Does the program need any real world application?

    // ranking algorithm? based on different criterias

    // Add to min heap of lowest price per day (map with heap as values, with heap holding tickets object) - heap sort based on value of price of ticket

    // implement hash table and implement min heap

    // get range from user of dates, from-to locations, asks user if they want 10/20 days of cheap tickets for each day (within the range of the user), check if the one date has the cheapest tickets of all the days (store lowest value somewhere or add the value to min heap).

    // a vector of maps/hash tables and min heap where we keep popping for x amount of unique values, storing those values somewhere. We will then store the x lowest tickets
    // loop through days in the range, we sort the value from lowest to highest (other data structure, and whatever sorting algorithm), store in a vector to have a vector of tickets of the lowest tickets per date. Sort that vector to get the lowest x amount. Compare the two


#include <vector>
#include <string>
#include <unordered_map>

class FlightMapper
{
public:
    static FlightMapper &GetInstance()
    {
        static FlightMapper instance;
        return instance;
    };
    struct FlightInfo
    {
        std::string agency, date;
        double price;
        FlightInfo(std::string agency, std::string date, double price)
            : agency(agency), date(date), price(price){};
    };

private:
    // private deconstructor might not work!
    FlightMapper() {}
    ~FlightMapper() {}

    FlightMapper(FlightMapper const &);
    void operator=(FlightMapper const &);

    // map<Airport,vector<fligts>>
    std::unordered_map<std::string, std::vector<FlightInfo *>> map;

public:
    FlightMapper(FlightMapper const &) = delete;
    void operator=(FlightMapper const &) = delete;

    void InsertDataPoint(std::string airport, std::string agency, std::string date, double price)
    {
        map[airport].push_back(new FlightInfo(agency, date, price));
    };
    // map<agency, vector avg per month>
    std::unordered_map<std::string, std::vector<double>> GetAvg(std::string airport)
    {
        std::unordered_map<std::string, std::vector<double>> result;
        // call quick sort on this std::vector<FlightInfo*>
        map[airport];
    }



    #include "QuickSort.h"

namespace QuickSort
{
  void Sort(std::unordered_map<std::string, std::vector<FlightMapper::FlightInfo *>> &map, int start, int end)
  {
    if (start >= end)
      return;

    int p = Parition(map, start, end);

    Sort(map, start, p - 1);
    Sort(map, p + 1, end);
  }
}


#include <unordered_map>
#include "FlightMapper.cpp"

namespace QuickSort
{
  void Sort(std::unordered_map<std::string, std::vector<FlightMapper::FlightInfo *>> &, int, int);
  int Parition(std::unordered_map<std::string, std::vector<FlightMapper::FlightInfo *>> &, int, int);
}

  # print(
            #    f"{idx + 1}. {offer.owner.name} flight departing at "
             #   + f"{offer.slices[0].segments[0].departing_at} "
              #  + f"{offer.total_amount} {offer.total_currency}"
            #)
            # print(f"{offer.owner.name}")
           # list1.append(Tickets(
            #    offer.owner.name, offer.slices[0].segment[0].departing_at, offer.total_amount))
            # list2.append(Tickets(
            #   offer.owner.name, offer.slices[0].segment[0].departing_at, offer.total_amount))

        # offer_index = input("\nWhich offer do you wish to book?\n").strip()




While the search of airport, do a wheel
Fix the amount of days (between range they chose)
Display days selected
Make the website look better
amount of days snap to numbers?
Make result look nicer and sort dates
Implemented search bar
User input checking (wide umbrella)
