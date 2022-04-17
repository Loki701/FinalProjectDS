#include <unordered_map>
#include "FlightMapper.cpp"

namespace QuickSort
{
  void Sort(std::unordered_map<std::string, std::vector<FlightMapper::FlightInfo *>> &, int, int);
  int Parition(std::unordered_map<std::string, std::vector<FlightMapper::FlightInfo *>> &, int, int);
}