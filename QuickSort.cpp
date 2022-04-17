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