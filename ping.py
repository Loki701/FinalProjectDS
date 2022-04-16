from duffel_api import Duffel
from datetime import date
from datetime import  timedelta


index = 0
for i in range(365):
    if __name__ == "__main__":
        print("Duffel Flights API - Python Example")
        client = Duffel(access_token="duffel_test_vhFhSq36gKjJVF551Y6n49K4Srx4jcqR53updLFznnz")

        today = date.today() + timedelta(days=i)
        departure_date = today.strftime("%Y-%m-%d")

        #destination = input("\nWhere do you want to go?\n").strip()
        destination = "LAX"
        #origin = input("\nFrom where?\n").strip()
        origin = "JFk"
        #departure_date = input("\nOn what date? (YYYY-MM-DD)\n").strip()

        print("\nSearching flights...")

        slices = [
            {
                "origin": origin,
                "destination": destination,
                "departure_date": departure_date,
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

        for idx, offer in enumerate(offers):
            index += 1
            print(
                f"{idx + 1}. {offer.owner.name} flight departing at "
                + f"{offer.slices[0].segments[0].departing_at} "
                + f"{offer.total_amount} {offer.total_currency}"
            )
            print(index)

        # offer_index = input("\nWhich offer do you wish to book?\n").strip()

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