import React from "react";

const trips = [
  {
    title: "Sattal, Chopta and Ranikhet Bird Photography Tour (8N/9D)",
    itinerary: [
      {
        day: "DAY 1",
        details:
          "Arrive at Kathgodam at noon and drive to Sattal, evening session at my bird hide in Sattal. Overnight at Sattal.",
      },
      {
        day: "DAY 2",
        details:
          "Morning session at my bird hide in Sattal and evening session at Chafi river. Overnight at Sattal.",
      },
      {
        day: "DAY 3",
        details:
          "Morning session at Ranikhet Cheer Point and later drive to Mandal (8-9 hour drive). Chance of spotting Himalayan Griffon, Lammergeier, and Golden Eagle. Overnight at Mandal.",
      },
      {
        day: "DAY 4",
        details:
          "Full day birding at Mandal (small village near Chopta inside Kedarnath Wildlife Sanctuary). Overnight at Mandal.",
      },
      {
        day: "DAY 5",
        details:
          "Early morning drive to Chopta (30 min). Morning, afternoon, and evening birding sessions in Chopta. Overnight at Chopta.",
      },
      {
        day: "DAY 6",
        details:
          "Early morning trek to Tungnath Temple, birding enroute. Evening birding session at Chopta. Overnight at Chopta.",
      },
      {
        day: "DAY 7",
        details:
          "Early morning drive to Sattal. Reach Sattal by late evening and rest. Overnight at Sattal.",
      },
      {
        day: "DAY 8",
        details:
          "Morning birding session at Shyamkhet (30 min drive). Later drive to Kathgodam for evening Shatabdi to Delhi. Services end.",
      },
    ],
    price: [
      "Rs 37,500/person (Minimum 4 Members)",
      "Rs 45,000/person (Minimum 3 Members)",
      "Rs 52,000/person (Minimum 2 Members)",
    ],
    includes: [
      "Accommodation in Sattal, Chopta, and Mandal",
      "All meals from Day 1 Lunch to Day 8 Breakfast",
      "2 hide birding sessions at Sattal",
      "Services of a professional bird guide",
      "Dedicated transportation throughout the tour in a non-AC car (Maruti Ertiga or similar)",
    ],
  },
  {
    title: "Chopta Bird Photography Trip (Dehradun to Dehradun) 4N/5D",
    itinerary: [
      {
        day: "DAY 1",
        details:
          "Arrive at Jolly Grant Airport, Dehradun early morning and drive to Mandal (7-8 hours). Reach Mandal in evening and rest. Overnight at Mandal.",
      },
      {
        day: "DAY 2",
        details:
          "Full day birding at Mandal (a small village near Chopta inside Kedarnath Wildlife Sanctuary). Overnight at Mandal.",
      },
      {
        day: "DAY 3",
        details:
          "Early morning drive to Chopta (30 min). Trek to Tungnath for photographing Monal and Koklass Pheasant. Afternoon/evening birding session in Chopta. Overnight at Chopta.",
      },
      {
        day: "DAY 4",
        details:
          "Full day birding in Chopta and Tungnath. Overnight at Chopta.",
      },
      {
        day: "DAY 5",
        details:
          "Early morning checkout from Chopta and drive back to Dehradun Airport. Services end.",
      },
    ],
    price: ["Rs 27,000/person (Minimum 4 Members)"],
    includes: [
      "Accommodation at Chopta and Mandal for 4 Nights (double sharing)",
      "All meals from Day 1 Dinner to Day 4 Breakfast",
      "All transportation during the tour (Maruti Ertiga or similar) Dehradun to Dehradun",
      "Services of a professional bird guide",
      "All permits and camera fee",
    ],
  },
];

const ItineraryCard = ({ day, details }) => (
  <div className="flex flex-col md:flex-row items-start md:items-center bg-gray-100 shadow-md rounded-xl mb-4 overflow-hidden">
    <div className="bg-gray-200  text-[#2a6496] text-xl font-bold p-6 md:w-1/4 text-center">
      {day}
    </div>
    <div className="bg-green-100 text-gray-800 p-6 md:w-3/4">{details}</div>
  </div>
);

const TripSection = ({ title, itinerary, price, includes }) => (
  <div className="max-w-4xl mx-auto py-10 px-4">
    <h2 className="text-3xl font-bold text-center mb-6  text-[#2a6496]">
      {title}
    </h2>
    {itinerary.map((item, idx) => (
      <ItineraryCard key={idx} day={item.day} details={item.details} />
    ))}
    <div className=" rounded-3xl px-12 hover:shadow-2xl  transition-all duration-500  py-5  bg-orange-50">
      <div className="mt-6 ">
        <h3 className="text-xl font-semibold   text-green-700">Trip Price:</h3>
        <ul className="list-disc pl-5 text-gray-700">
          {price.map((p, idx) => (
            <li key={idx}>{p}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-green-700">
          Service Includes:
        </h3>
        <ul className="list-disc pl-5 text-gray-700">
          {includes.map((inc, idx) => (
            <li key={idx}>{inc}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const CombinedItineraryPage = () => (
  <div className="md:flex px-4 sm:px-6 lg:px-8 font-serif">
    {trips.map((trip, idx) => (
      <TripSection
        key={idx}
        title={trip.title}
        itinerary={trip.itinerary}
        price={trip.price}
        includes={trip.includes}
      />
    ))}
  </div>
);

export default CombinedItineraryPage;
