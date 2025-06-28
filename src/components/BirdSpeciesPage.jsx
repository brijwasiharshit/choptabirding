import React, { useState } from "react";

const BirdSpeciesPage = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const choptaMandalBirds = [
    {
      id: 101,
      name: "Himalayan Monal",
      scientificName: "Lophophorus impejanus",
      description:
        "State bird of Uttarakhand, known for its iridescent plumage.",
      habitat: "Himalayan forests",
      diet: "Omnivorous",
      conservationStatus: "Least Concern",
      funFact: "Males perform elaborate courtship displays.",
    },
    {
      id: 102,
      name: "Satyr Tragopan",
      scientificName: "Tragopan satyra",
      description: "A colorful pheasant with distinctive blue facial skin.",
      habitat: "Dense forests",
      diet: "Leaves, buds, insects",
      conservationStatus: "Near Threatened",
      funFact: "Males inflate their blue throat sac during courtship.",
    },
    {
      id: 103,
      name: "Koklass Pheasant",
      scientificName: "Pucrasia macrolopha",
      description: "A shy pheasant species found in Himalayan forests.",
      habitat: "Oak and rhododendron forests",
      diet: "Seeds, insects",
      conservationStatus: "Least Concern",
      funFact: "They can fly straight up when startled.",
    },
    {
      id: 104,
      name: "Himalayan Snowcock",
      scientificName: "Tetraogallus himalayensis",
      description: "A large gamebird adapted to high altitudes.",
      habitat: "Alpine meadows",
      diet: "Plants, seeds",
      conservationStatus: "Least Concern",
      funFact: "They can survive at elevations up to 5,000m.",
    },
    {
      id: 105,
      name: "Cheer Pheasant",
      scientificName: "Catreus wallichii",
      description: "An endangered pheasant with long tail feathers.",
      habitat: "Grassy slopes",
      diet: "Seeds, insects",
      conservationStatus: "Vulnerable",
      funFact: "Named for their distinctive 'cheer' call.",
    },
    {
      id: 106,
      name: "Himalayan Rubythroat",
      scientificName: "Calliope pectoralis",
      description: "A small bird with striking ruby-red throat (males).",
      habitat: "Scrub and bushes",
      diet: "Insects",
      conservationStatus: "Least Concern",
      funFact: "Males sing from exposed perches during breeding season.",
    },
    {
      id: 107,
      name: "Fire-tailed Sunbird",
      scientificName: "Aethopyga ignicauda",
      description:
        "A brilliantly colored small bird with elongated tail feathers.",
      habitat: "Forest edges",
      diet: "Nectar, insects",
      conservationStatus: "Least Concern",
      funFact: "Males have fiery red tail feathers during breeding season.",
    },
    {
      id: 108,
      name: "Spotted Forktail",
      scientificName: "Enicurus maculatus",
      description:
        "A striking black-and-white bird that wades in mountain streams.",
      habitat: "Fast-flowing streams",
      diet: "Aquatic insects",
      conservationStatus: "Least Concern",
      funFact: "They bob their tails constantly while foraging.",
    },
    {
      id: 109,
      name: "Himalayan Bluetail",
      scientificName: "Tarsiger rufilatus",
      description: "A small, colorful bird with bright blue tail.",
      habitat: "Coniferous forests",
      diet: "Insects",
      conservationStatus: "Least Concern",
      funFact: "Formerly considered a subspecies of Red-flanked Bluetail.",
    },
    {
      id: 110,
      name: "Yellow-rumped Honeyguide",
      scientificName: "Indicator xanthonotus",
      description: "A unique bird that leads humans to bee colonies.",
      habitat: "Broadleaf forests",
      diet: "Beeswax, insects",
      conservationStatus: "Near Threatened",
      funFact: "They have a symbiotic relationship with honey hunters.",
    },
  ];

  return (
    <div
      id="bird-species"
      className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-[#2a6496]">
            Chopta Mandal Bird Species
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-lg text-gray-700">
            Explore the fascinating avian diversity of Uttarakhand's Chopta
            Mandal region
          </p>
        </div>

        {/* Bird Cards Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {choptaMandalBirds.map((bird) => (
            <div
              key={bird.id}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
                expandedCard === bird.id
                  ? "transform scale-105 z-10"
                  : "hover:shadow-lg"
              }`}>
              <div className="p-6">
                <h2 className="text-2xl font-bold font-serif text-[#2a6496] mb-1">
                  {bird.name}
                </h2>
                <p className="text-md italic text-[#e67e22] mb-4">
                  {bird.scientificName}
                </p>
                <p className="text-lg text-gray-700 mb-4">{bird.description}</p>

                {expandedCard === bird.id && (
                  <div className="mt-4 space-y-3">
                    {[
                      { label: "Habitat", value: bird.habitat },
                      { label: "Diet", value: bird.diet },
                      { label: "Fun Fact", value: bird.funFact },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-orange-500 mr-2 mt-0.5">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-md font-semibold text-gray-800">
                            {item.label}
                          </h4>
                          <p className="text-md text-gray-700">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-6">
                  <button
                    onClick={() => toggleExpand(bird.id)}
                    className="w-full flex items-center justify-center px-4 py-2 text-sm font-semibold font-serif rounded-md shadow-sm text-white bg-[#e67e22] hover:bg-[#d35400] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                    {expandedCard === bird.id ? (
                      <>
                        <svg
                          className="-ml-1 mr-2 h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                        Show Less
                      </>
                    ) : (
                      <>
                        <svg
                          className="-ml-1 mr-2 h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                        Learn More
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BirdSpeciesPage;
