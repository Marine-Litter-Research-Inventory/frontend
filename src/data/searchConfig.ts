export type OptionType = {
  pattern: string;
  title: string;
};

export type SearchConfigType = {
  column: string;
  operator: string;
  options: OptionType[];
};

function formatOption<Option>(pattern: string, title: string) {
  return { pattern, title };
}

export const searchConfig = {
  "Exclude Regional": {
    column: "Geographical Scale",
    operator: "regexp",
    options: [formatOption("Country", "Exclude Regional Paper")],
  },
  "Country/Territory1": {
    column: "Location/Territory studied",
    operator: "regexp",
    options: [
      formatOption("Brunei", "Brunei"),
      formatOption("Cambodia", "Cambodia"),
      formatOption("China", "China"),
      formatOption("Indonesia", "Indonesia"),
      formatOption("Korea", "RO Korea"),
      formatOption("Japan", "Japan"),
      formatOption("Laos", "Laos"),
    ],
  },
  "Country/Territory2": {
    column: "Location/Territory studied",
    operator: "regexp",
    options: [
      formatOption("Malaysia", "Malaysia"),
      formatOption("Myanmar", "Myanmar"),
      formatOption("Philippines", "Philippines"),
      formatOption("Singapore", "Singapore"),
      formatOption("Taiwan", "Taiwan, POC"),
      formatOption("Thailand", "Thailand"),
      formatOption("Vietnam", "Vietnam"),
    ],
  },
  "Water Body1": {
    column: "Relevant Water Body_General",
    operator: "regexp",
    options: [
      formatOption("Andaman Sea", "Andaman Sea"),
      formatOption("Ayeyarwady River Basin", "Ayeyarwady River Basin"),
      formatOption("East Sea", "East Sea"),
      formatOption("East China Sea", "East China Sea"),
      formatOption("Indian Ocean", "Indian Ocean"),
      formatOption("Java Seas", "Java Seas"),
    ],
  },
  "Water Body2": {
    column: "Relevant Water Body_General",
    operator: "regexp",
    options: [
      formatOption("Mekong Delta", "Mekong Delta"),
      formatOption("Pacific Ocean", "Pacific Ocean"),
      formatOption("South China Sea", "South China Sea"),
      formatOption(
        "Straits of Malacca and Singapore",
        "Straits of Malacca and Singapore"
      ),
      formatOption("Sulu and Celebes Seas", "Sulu and Celebes Seas"),
      formatOption("Taiwan Strait", "Taiwan Strait"),
    ],
  },
  "Plastic Examined_Size or Type": {
    column: "Plastic Examined_Size or Type",
    operator: "regexp",
    options: [
      formatOption("Microplastic", "Micro plastic"),
      formatOption("Macroplastic", "Macro plastic"),
      formatOption("Nanoplastic", "Nano plastic"),
    ],
  },
  "Plastic Polymer Identification Technique": {
    column: "Research Methodology Methodologies Used",
    operator: "regexp",
    options: [
      formatOption("FTIR spectroscopy", "FTIR Expertise and Equipment"),
      formatOption("Raman", "Raman Expertise"),
    ],
  },
  "Plastic Polymer Characterisation (Colour and/or Shape)": {
    column: "Plastic Characterisation_Conducted",
    operator: "regexp",
    options: [
      formatOption(
        "Yes",
        "Plastic Polymer Characterisation (Colour and/or Shape)"
      ),
    ],
  },
  "Field Sampling": {
    column: "Field Sampling_Compartment",
    operator: "regexp",
    options: [
      formatOption("Sediment", "Sediment Sampling"),
      formatOption("Seabed", "Seabed Sampling"),
      formatOption("Water Column", "Water Column Sampling"),
      formatOption("Water Surface", "Water Surface Sampling"),
      formatOption("Seagrass", "Seagrass Sampling"),
      formatOption("Mangrove/Mudflat", "Mangrove/Mudflat Sampling"),
      formatOption("Atmosphere", "Atmosphere Sampling"),
      formatOption("Coral reef", "Coral Reef Sampling"),
    ],
  },
  "Biota Sampling and Analysis": {
    column: "Biota_Applied",
    operator: "regexp",
    options: [
      formatOption(
        "Bony Fish|Cartilaginous Fish",
        "Bony Fish and Cartilaginous Fish"
      ),
      formatOption("Clam|Mussel|Oyster", "Clam, Mussel and Oysters"),
      formatOption("Bacteria", "Bacteria"),
      formatOption("Phytoplankton|Algae", "Phytoplankton and Algae"),
      formatOption(
        "^(?!(Bony Fish|Cartilaginous Fish|Clam|Mussel|Oyster|Bacteria|Phytoplankton|Algae)$).*",
        "Other Invertebrates"
      ),
    ],
  },
  "Microbes and pathogens": {
    column: "W:CF",
    operator: "regexp",
    options: [
      formatOption("Microbe|Microbial|Pathogen", "Microbes and pathogens"),
    ],
  },
  "POPs and Heavy Metals": {
    column: "Contaminants Examined",
    operator: "regexp",
    options: [formatOption("Organic pollutant", "POPs and Heavy Metals")],
  },
  Modelling: {
    column: "Modelling_Conducted",
    operator: "regexp",
    options: [formatOption("Yes", "Modelling")],
  },
  "Geospatial Methods": {
    column: "W:CF",
    operator: "regexp",
    options: [
      formatOption(
        "Satellite",
        "Satellite and drone for marine plastic occurrence"
      ),
      formatOption("GIS", "GIS Mapping"),
    ],
  },
  "Literature Review": {
    column: "Literature Review_Conducted",
    operator: "regexp",
    options: [formatOption("Yes", "Literature Review")],
  },
  "Recording of presence and absence in the marine environment": {
    column: "Research Topics",
    operator: "regexp",
    options: [
      formatOption(
        "Survey and monitoring/pollution status",
        "Survey and monitoring/pollution status"
      ),
    ],
  },
  "Sources and pathways": {
    column: "Research Topics",
    operator: "regexp",
    options: [
      formatOption("Contribution from rivers", "Contribution from rivers"),
      formatOption(
        "Contribution from fisheries/ALDFG",
        "Contribution from fisheries/ALDFG"
      ),
      formatOption(
        "Discharge from offshore infrastructures and shipping",
        "Discharge from offshore infrastructures and shipping"
      ),
      formatOption("Port reception facilities", "Port reception facilities"),
      formatOption(
        "Fibreglass-reinforced plastic vessels",
        "Fibreglass-reinforced plastic vessels"
      ),
      formatOption(
        "Hull scraping and marine coating",
        "Hull scraping and marine coating"
      ),
      formatOption(
        "Land-based/upstream research/waste management",
        "Land-based/upstream research/waste management"
      ),
      formatOption(
        "Differentiation between plastic sources",
        "Differentiation between plastic sources"
      ),
      formatOption(
        "Movement of plastics in water bodies",
        "Movement of plastics in water bodies"
      ),
      formatOption(
        "Fragmentation and degradation",
        "Fragmentation and degradation"
      ),
      formatOption(
        "Accumulation zones and hotspots",
        "Accumulation zones and hotspots"
      ),
    ],
  },
  "Ecological and environmental impacts": {
    column: "Research Topics",
    operator: "regexp",
    options: [
      formatOption(
        "Ingestion of plastic in the wild",
        "Ingestion of plastic in the wild"
      ),
      formatOption(
        "Branchial uptake of plastic in the wild",
        "Branchial uptake of plastic in the wild"
      ),
      formatOption(
        "Entanglement by plastic in the wild",
        "Entanglement by plastic in the wild"
      ),
      formatOption("Microbial assemblages", "Microbial assemblages"),
      formatOption(
        "Experimental studies of physicochemical impacts",
        "Experimental studies of physicochemical impacts"
      ),
      formatOption(
        "Impact on endangered species",
        "Impact on endangered species"
      ),
      formatOption(
        "Trophic transfer of plastic",
        "Trophic transfer of plastic"
      ),
      formatOption(
        "Marine plastics as pathways for introduction of alien/non-native/invasive species",
        "Marine plastics as pathways for introduction of alien/non-native/invasive species"
      ),
    ],
  },
  "Contaminants associated with marine plastics": {
    column: "Research Topics",
    operator: "regexp",
    options: [
      formatOption(
        "POP/heavy metal as pollutants from marine plastic debris",
        "POP/heavy metal as pollutants from marine plastic debris"
      ),
      formatOption(
        "Adsorption-desorption of chemicals/pollutants",
        "Adsorption-desorption of chemicals/pollutants"
      ),
      formatOption(
        "Plastics as transport vector/medium",
        "Plastics as transport vector/medium"
      ),
    ],
  },
  "Socio-economic impacts, damage and opportunity": {
    column: "Research Topics",
    operator: "regexp",
    options: [
      formatOption("Human health/food safety", "Human health/food safety"),
      formatOption("Economic loss and cost", "Economic loss and cost"),
      formatOption(
        "Social and cultural non-monetary cost and loss",
        "Social and cultural non-monetary cost and loss"
      ),
      formatOption(
        "Other socio-economic topics",
        "Other socio-economic topics"
      ),
    ],
  },
  "Research methodology/approach 1": {
    column: "Research Topics",
    operator: "regexp",
    options: [
      formatOption(
        "Guidelines, standards and manuals for survey, monitoring and assessment",
        "Guidelines, standards and manuals for survey, monitoring and assessment"
      ),
      formatOption(
        "Data comparability and standardisation",
        "Data comparability and standardisation"
      ),
    ],
  },
  "Research methodology/approach 2": {
    column: "Research Topics",
    operator: "regexp",
    options: [
      formatOption(
        "Research framework and coordination",
        "Research framework and coordination"
      ),
      formatOption("Plastic data repositories", "Plastic data repositories"),
    ],
  },
  "Discussions on methodology testing and effectiveness": {
    column: "Research Topics",
    operator: "regexp",
    options: [
      formatOption(
        "Methodologies and technologies for research on marine macroplastic",
        "Methodologies and technologies for research on marine macroplastic"
      ),
      formatOption(
        "Methodologies and technologies for research on marine microplastic",
        "Methodologies and technologies for research on marine microplastic"
      ),
      formatOption(
        "'New' or 'emerging' technologies for marine plastic",
        "'New' or 'emerging' technologies for marine plastic"
      ),
      formatOption(
        "Methodologies and technologies for marine plastic removal and clean-up",
        "Methodologies and technologies for marine plastic removal and clean-up"
      ),
    ],
  },
  "Laws, administrative measures": {
    column: "Research Topics",
    operator: "regexp",
    options: [
      formatOption(
        "Legal and regulatory analysis",
        "Legal and regulatory analysis"
      ),
      formatOption("Action Plans", "Action Plans"),
      formatOption(
        "Compliance and implementation",
        "Compliance and implementation"
      ),
    ],
  },
  "Economic measures": {
    column: "Research Topics",
    operator: "regexp",
    options: [
      formatOption(
        "Re-use, recycle and other mitigation measures",
        "Re-use, recycle and other mitigation measures"
      ),
      formatOption(
        "Other market-based measures",
        "Other market-based measures"
      ),
    ],
  },
  "Policy response": {
    column: "Research Topics",
    operator: "regexp",
    options: [
      formatOption(
        "Social perceptions/Social behavioural studies",
        "Social perceptions/Social behavioural studies"
      ),
      formatOption("Policy", "Policy"),
    ],
  },
  "Education, outreach and communication": {
    column: "Research Topics",
    operator: "regexp",
    options: [
      formatOption("Citizen science", "Citizen science"),
      formatOption(
        "Communication and coverage of marine plastic",
        "Communication and coverage of marine plastic"
      ),
      formatOption(
        "Language and cultural barrier",
        "Language and cultural barrier"
      ),
    ],
  },
  // NOTE: The two belows go together as an item
  "New or emerging technologies for marine plastic": {
    column: "Research Topics",
    operator: "regexp",
    options: [
      formatOption(
        "New or emerging technologies for marine plastic",
        "New or emerging technologies for marine plastic"
      ),
    ],
  },
  "Satellite and drone research including for marine plastic occurrence": {
    column: "W:CF",
    operator: "regexp",
    options: [
      formatOption(
        "satellite|drone",
        "Satellite and drone research including for marine plastic occurrence"
      ),
    ],
  },
  "Fishing Gear/ALDFG": {
    column: "Fishing Gear Examined",
    operator: "regexp",
    options: [formatOption("Yes", "Fishing Gear/ALDFG")],
  },
  Aquaculture: {
    column: "Source of Plastics",
    operator: "regexp",
    options: [formatOption("aquaculture", "Aquaculture")],
  },
  "Single-use plastics": {
    column: "W:CF",
    operator: "regexp",
    options: [
      formatOption(
        "single use plastics|single-use plastics",
        "Single-use plastics"
      ),
    ],
  },
  "Plastisphere, Microbes and pathogens": {
    column: "W:CF",
    operator: "regexp",
    options: [
      formatOption(
        "Microbe|Microbial|Pathogen|Plastisphere",
        "Plastisphere, Microbes and pathogens"
      ),
    ],
  },
  // NOTE: 2 belows come together
  Atmosphere: {
    column: "Field Sampling_Compartment",
    operator: "regexp",
    options: [formatOption("Atmosphere", "Atmosphere")],
  },
  "Airborne plastic into the marine environment": {
    column: "W:CF",
    operator: "regexp",
    options: [
      formatOption("airborne", "Airborne plastic into the marine environment"),
    ],
  },
  Toxicity: {
    column: "W:CF",
    operator: "regexp",
    options: [formatOption("Toxic", "Toxicity")],
  },
  "Abundance, concentration and hotspots": {
    column: "Research Topics",
    operator: "regexp",
    options: [
      formatOption(
        "Accumulation zones and hotspots",
        "Abundance, concentration and hotspots"
      ),
    ],
  },
  "Extended Producer Responsibility (EPR)": {
    column: "W:CF",
    operator: "regexp",
    options: [
      formatOption(
        "(?:W|^)EPR(?:W|$)|Extended Producer Responsibility",
        "Extended Producer Responsibility (EPR)"
      ),
    ],
  },
  "Economic loss and cost": {
    column: "Research Topics",
    operator: "regexp",
    options: [formatOption("Economic loss and cost", "Economic loss and cost")],
  },
  "Policy response measures": {
    column: "Research Topics",
    operator: "regexp",
    options: [
      formatOption(
        "Laws, administrative measures|Legal and regulatory analysis|Action Plans|Compliance and implementation",
        "Policy response measures"
      ),
    ],
  },
};
