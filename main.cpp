#include <vector>
#include <list>
#include <string>



class Airport
{
  private:
    std::string name;
    std::vector<std::pair<std::string,double>> destinationFlights; 
  public: 
  
  Airport(std::string);
  void insertFlight(std::string airline, double price){
      destinationFlights.push_back(std::make_pair(airline, price));
  } 
    
};

i
int main()
{
return 0;  


}