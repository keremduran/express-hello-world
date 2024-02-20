function convertLinksToArray(links) {
    let array = [];
    for (let link of links) {
        let id = link.getAttribute("href").replace(".html", "");
        let title = link.getAttribute("title");
        let code = link.textContent.trim();

        if(!id || !title || !code) console.log("SOMETHING NOT FOUND", {id, title, code});

        let object = {id, title, code};
        array.push(object);
    }
    return array;
}

const masterIndex = [
    {
        "id": "2",
        "title": "Application",
        "code": "1.1.1.1."
    },
    {
        "id": "3",
        "title": "Climatic and Seismic Design Values",
        "code": "1.1.2.1."
    },
    {
        "id": "4",
        "title": "Depth of Frost Penetration",
        "code": "1.1.2.2."
    },
    {
        "id": "5",
        "title": "Effective Date",
        "code": "1.3.1.1."
    },
    {
        "id": "6",
        "title": "Applicable Editions",
        "code": "1.3.1.2."
    },
    {
        "id": "7",
        "title": "Abbreviations of Proper Names",
        "code": "1.3.2.1."
    },
    {
        "id": "8",
        "title": "Scope",
        "code": "3.1.1.1."
    },
    {
        "id": "9",
        "title": "Radon",
        "code": "3.1.1.2."
    },
    {
        "id": "10",
        "title": "Building in Flood Plains",
        "code": "3.1.1.3."
    },
    {
        "id": "11",
        "title": "Classification of Buildings",
        "code": "3.1.2.1."
    },
    {
        "id": "12",
        "title": "Occupancies of the Same Classification",
        "code": "3.1.2.2."
    },
    {
        "id": "13",
        "title": "Arena Type Buildings",
        "code": "3.1.2.3."
    },
    {
        "id": "14",
        "title": "Police Stations",
        "code": "3.1.2.4."
    },
    {
        "id": "15",
        "title": "Group B, Division 3 Occupancies",
        "code": "3.1.2.5."
    },
    {
        "id": "16",
        "title": "Restaurants",
        "code": "3.1.2.6."
    },
    {
        "id": "17",
        "title": "Storage of Combustible Fibres",
        "code": "3.1.2.7."
    },
    {
        "id": "18",
        "title": "Separation of Major Occupancies",
        "code": "3.1.3.1."
    },
    {
        "id": "19",
        "title": "Prohibition of Occupancy Combinations",
        "code": "3.1.3.2."
    },
    {
        "id": "20",
        "title": "Combustible Materials Permitted",
        "code": "3.1.4.1."
    },
    {
        "id": "21",
        "title": "Protection of Foamed Plastics",
        "code": "3.1.4.2."
    },
    {
        "id": "22",
        "title": "Wires and Cables",
        "code": "3.1.4.3."
    },
    {
        "id": "23",
        "title": "Nonmetallic Raceways",
        "code": "3.1.4.4."
    },
    {
        "id": "24",
        "title": "Fire-Retardant Treated Wood",
        "code": "3.1.4.5."
    },
    {
        "id": "25",
        "title": "Heavy Timber Construction Alternative",
        "code": "3.1.4.6."
    },
    {
        "id": "26",
        "title": "Heavy Timber Construction",
        "code": "3.1.4.7."
    },
    {
        "id": "27",
        "title": "Cladding",
        "code": "3.1.4.8."
    },
    {
        "id": "28",
        "title": "Combustible Piping",
        "code": "3.1.4.9."
    },
    {
        "id": "29",
        "title": "Noncombustible Materials",
        "code": "3.1.5.1."
    },
    {
        "id": "30",
        "title": "Minor Combustible Components",
        "code": "3.1.5.2."
    },
    {
        "id": "31",
        "title": "Combustible Roofing Materials",
        "code": "3.1.5.3."
    },
    {
        "id": "32",
        "title": "Combustible Glazing and Skylights",
        "code": "3.1.5.4."
    },
    {
        "id": "33",
        "title": "Combustible Components for Exterior Walls",
        "code": "3.1.5.5."
    },
    {
        "id": "34",
        "title": "Nailing Elements",
        "code": "3.1.5.6."
    },
    {
        "id": "35",
        "title": "Combustible Millwork",
        "code": "3.1.5.7."
    },
    {
        "id": "36",
        "title": "Combustible Flooring Elements",
        "code": "3.1.5.8."
    },
    {
        "id": "37",
        "title": "Combustible Stairs in Dwelling Units",
        "code": "3.1.5.9."
    },
    {
        "id": "38",
        "title": "Combustible Interior Finish",
        "code": "3.1.5.10."
    },
    {
        "id": "39",
        "title": "Gypsum Board",
        "code": "3.1.5.11."
    },
    {
        "id": "40",
        "title": "Combustible Insulation and its Protection",
        "code": "3.1.5.12."
    },
    {
        "id": "41",
        "title": "Combustible Elements in Partitions",
        "code": "3.1.5.13."
    },
    {
        "id": "42",
        "title": "Storage Lockers in Residential Buildings",
        "code": "3.1.5.14."
    },
    {
        "id": "43",
        "title": "Combustible Ducts",
        "code": "3.1.5.15."
    },
    {
        "id": "44",
        "title": "Combustible Piping Materials",
        "code": "3.1.5.16."
    },
    {
        "id": "45",
        "title": "Combustible Plumbing Fixtures",
        "code": "3.1.5.17."
    },
    {
        "id": "46",
        "title": "Wires and Cables",
        "code": "3.1.5.18."
    },
    {
        "id": "47",
        "title": "Combustible Travelling Cables for Elevators",
        "code": "3.1.5.19."
    },
    {
        "id": "48",
        "title": "Nonmetallic Raceways",
        "code": "3.1.5.20."
    },
    {
        "id": "49",
        "title": "Wires in Computer Room Floors",
        "code": "3.1.5.21."
    },
    {
        "id": "50",
        "title": "Combustible Components in Public Pools and Public Spas",
        "code": "3.1.5.22."
    },
    {
        "id": "51",
        "title": "Marquees Having Combustible Elements",
        "code": "3.1.5.23."
    },
    {
        "id": "52",
        "title": "Combustible Mezzanines",
        "code": "3.1.5.24."
    },
    {
        "id": "53",
        "title": "Wood Decorative Cladding",
        "code": "3.1.5.25."
    },
    {
        "id": "54",
        "title": "Combustible Solar Collector Systems",
        "code": "3.1.5.26."
    },
    {
        "id": "55",
        "title": "Determination of Ratings",
        "code": "3.1.7.1."
    },
    {
        "id": "56",
        "title": "Exception for Exterior Walls",
        "code": "3.1.7.2."
    },
    {
        "id": "57",
        "title": "Exposure Conditions for Rating",
        "code": "3.1.7.3."
    },
    {
        "id": "58",
        "title": "Minimum Fire-Resistance Rating",
        "code": "3.1.7.4."
    },
    {
        "id": "59",
        "title": "Rating of Supporting Construction",
        "code": "3.1.7.5."
    },
    {
        "id": "60",
        "title": "General Requirements",
        "code": "3.1.8.1."
    },
    {
        "id": "61",
        "title": "Combustible Construction Support",
        "code": "3.1.8.2."
    },
    {
        "id": "62",
        "title": "Continuity of Fire Separations",
        "code": "3.1.8.3."
    },
    {
        "id": "63",
        "title": "Determination of Ratings",
        "code": "3.1.8.4."
    },
    {
        "id": "64",
        "title": "Installation of Closures",
        "code": "3.1.8.5."
    },
    {
        "id": "65",
        "title": "Maximum Openings",
        "code": "3.1.8.6."
    },
    {
        "id": "66",
        "title": "Fire Dampers",
        "code": "3.1.8.7."
    },
    {
        "id": "67",
        "title": "Fire Dampers Waived",
        "code": "3.1.8.8."
    },
    {
        "id": "68",
        "title": "Installation of Fire Dampers",
        "code": "3.1.8.9."
    },
    {
        "id": "69",
        "title": "Twenty-Minute Closures",
        "code": "3.1.8.10."
    },
    {
        "id": "70",
        "title": "Self-Closing Devices",
        "code": "3.1.8.11."
    },
    {
        "id": "71",
        "title": "Hold-Open Devices",
        "code": "3.1.8.12."
    },
    {
        "id": "72",
        "title": "Door Latches",
        "code": "3.1.8.13."
    },
    {
        "id": "73",
        "title": "Wired Glass and Glass Block",
        "code": "3.1.8.14."
    },
    {
        "id": "74",
        "title": "Temperature Rise Limit for Doors",
        "code": "3.1.8.15."
    },
    {
        "id": "75",
        "title": "Area Limits for Wired Glass and Glass Block",
        "code": "3.1.8.16."
    },
    {
        "id": "76",
        "title": "Temperature Rise and Area Limits Waived",
        "code": "3.1.8.17."
    },
    {
        "id": "77",
        "title": "Sprinkler Protected Glazed Wall Assembly",
        "code": "3.1.8.18."
    },
    {
        "id": "78",
        "title": "Fire Stops",
        "code": "3.1.9.1."
    },
    {
        "id": "79",
        "title": "Combustibility of Service Penetrations",
        "code": "3.1.9.2."
    },
    {
        "id": "80",
        "title": "Penetration by Wires, Cables and Outlet Boxes",
        "code": "3.1.9.3."
    },
    {
        "id": "81",
        "title": "Combustible Piping Penetrations",
        "code": "3.1.9.4."
    },
    {
        "id": "82",
        "title": "Openings through a Membrane Ceiling",
        "code": "3.1.9.5."
    },
    {
        "id": "83",
        "title": "Plenums",
        "code": "3.1.9.6."
    },
    {
        "id": "84",
        "title": "Prevention of Firewall Collapse",
        "code": "3.1.10.1."
    },
    {
        "id": "85",
        "title": "Rating of Firewalls",
        "code": "3.1.10.2."
    },
    {
        "id": "86",
        "title": "Continuity of Firewalls",
        "code": "3.1.10.3."
    },
    {
        "id": "87",
        "title": "Parapets",
        "code": "3.1.10.4."
    },
    {
        "id": "88",
        "title": "Maximum Openings",
        "code": "3.1.10.5."
    },
    {
        "id": "89",
        "title": "Exposure Protection for Adjacent Walls",
        "code": "3.1.10.6."
    },
    {
        "id": "90",
        "title": "Combustible Projections",
        "code": "3.1.10.7."
    },
    {
        "id": "91",
        "title": "Separation of Concealed Spaces",
        "code": "3.1.11.1."
    },
    {
        "id": "92",
        "title": "Fire Blocks in Wall Assemblies",
        "code": "3.1.11.2."
    },
    {
        "id": "93",
        "title": "Fire Blocks between Nailing and Supporting Elements",
        "code": "3.1.11.3."
    },
    {
        "id": "94",
        "title": "Fire Blocks between Vertical and Horizontal Spaces",
        "code": "3.1.11.4."
    },
    {
        "id": "95",
        "title": "Fire Blocks in Horizontal Concealed Spaces",
        "code": "3.1.11.5."
    },
    {
        "id": "96",
        "title": "Fire Blocks in Crawl Spaces",
        "code": "3.1.11.6."
    },
    {
        "id": "97",
        "title": "Fire Block Materials",
        "code": "3.1.11.7."
    },
    {
        "id": "98",
        "title": "Determination of Ratings",
        "code": "3.1.12.1."
    },
    {
        "id": "99",
        "title": "Interior Finish Description",
        "code": "3.1.13.1."
    },
    {
        "id": "100",
        "title": "Flame-Spread Rating",
        "code": "3.1.13.2."
    },
    {
        "id": "101",
        "title": "Plumbing Fixtures and Bathrooms Finishes",
        "code": "3.1.13.3."
    },
    {
        "id": "102",
        "title": "Light Diffusers and Lenses",
        "code": "3.1.13.4."
    },
    {
        "id": "103",
        "title": "Skylights",
        "code": "3.1.13.5."
    },
    {
        "id": "104",
        "title": "Corridors",
        "code": "3.1.13.6."
    },
    {
        "id": "105",
        "title": "High Buildings",
        "code": "3.1.13.7."
    },
    {
        "id": "106",
        "title": "Noncombustible Construction",
        "code": "3.1.13.8."
    },
    {
        "id": "107",
        "title": "Underground Walkways",
        "code": "3.1.13.9."
    },
    {
        "id": "108",
        "title": "Exterior Exit Passageway",
        "code": "3.1.13.10."
    },
    {
        "id": "109",
        "title": "Elevator Cars",
        "code": "3.1.13.11."
    },
    {
        "id": "110",
        "title": "Fire-Retardant Treated Wood Roof Systems",
        "code": "3.1.14.1."
    },
    {
        "id": "111",
        "title": "Metal Roof Deck Assemblies",
        "code": "3.1.14.2."
    },
    {
        "id": "112",
        "title": "Roof Covering Classification",
        "code": "3.1.15.1."
    },
    {
        "id": "113",
        "title": "Roof Coverings",
        "code": "3.1.15.2."
    },
    {
        "id": "114",
        "title": "Fabric Awnings, Canopies and Marquees",
        "code": "3.1.16.1."
    },
    {
        "id": "115",
        "title": "Occupant Load Determination",
        "code": "3.1.17.1."
    },
    {
        "id": "116",
        "title": "Dance Floor",
        "code": "3.1.17.2."
    },
    {
        "id": "117",
        "title": "Public Pools",
        "code": "3.1.17.3."
    },
    {
        "id": "118",
        "title": "Drainage",
        "code": "3.1.18.1."
    },
    {
        "id": "119",
        "title": "Clearance to Buildings",
        "code": "3.1.19.1."
    },
    {
        "id": "120",
        "title": "Glass",
        "code": "3.1.20.1."
    },
    {
        "id": "121",
        "title": "Exceptions in Determining Building Height",
        "code": "3.2.1.1."
    },
    {
        "id": "122",
        "title": "Storage Garage Considered as a Separate Building",
        "code": "3.2.1.2."
    },
    {
        "id": "123",
        "title": "Roof Considered as a Wall",
        "code": "3.2.1.3."
    },
    {
        "id": "124",
        "title": "Floor Assembly over Basement",
        "code": "3.2.1.4."
    },
    {
        "id": "125",
        "title": "Fire Containment in Basements",
        "code": "3.2.1.5."
    },
    {
        "id": "126",
        "title": "Mezzanines",
        "code": "3.2.1.6."
    },
    {
        "id": "127",
        "title": "Application",
        "code": "3.2.2.1."
    },
    {
        "id": "128",
        "title": "Special and Unusual Structures",
        "code": "3.2.2.2."
    },
    {
        "id": "129",
        "title": "Exceptions to Structural Fire Protection",
        "code": "3.2.2.3."
    },
    {
        "id": "130",
        "title": "Buildings with Multiple Major Occupancies",
        "code": "3.2.2.4."
    },
    {
        "id": "131",
        "title": "Applicable Building Height and Area",
        "code": "3.2.2.5."
    },
    {
        "id": "132",
        "title": "Multiple Major Occupancies",
        "code": "3.2.2.6."
    },
    {
        "id": "133",
        "title": "Superimposed Major Occupancies",
        "code": "3.2.2.7."
    },
    {
        "id": "134",
        "title": "Exceptions for Major Occupancies",
        "code": "3.2.2.8."
    },
    {
        "id": "135",
        "title": "Crawl Spaces",
        "code": "3.2.2.9."
    },
    {
        "id": "136",
        "title": "Streets",
        "code": "3.2.2.10."
    },
    {
        "id": "137",
        "title": "Exterior Balconies",
        "code": "3.2.2.11."
    },
    {
        "id": "138",
        "title": "Exterior Passageways",
        "code": "3.2.2.12."
    },
    {
        "id": "139",
        "title": "Occupancy on Roof",
        "code": "3.2.2.13."
    },
    {
        "id": "140",
        "title": "Rooftop Enclosures",
        "code": "3.2.2.14."
    },
    {
        "id": "141",
        "title": "Storeys below Ground",
        "code": "3.2.2.15."
    },
    {
        "id": "142",
        "title": "Heavy Timber Roof Permitted",
        "code": "3.2.2.16."
    },
    {
        "id": "143",
        "title": "Sprinklers in Lieu of Roof Rating",
        "code": "3.2.2.17."
    },
    {
        "id": "144",
        "title": "Automatic Sprinkler System Required",
        "code": "3.2.2.18."
    },
    {
        "id": "145",
        "title": "Buildings Containing Impeded Egress Zones",
        "code": "3.2.2.19."
    },
    {
        "id": "146",
        "title": "Group A, Division 1, Any Height, Any Area, Sprinklered",
        "code": "3.2.2.20."
    },
    {
        "id": "147",
        "title": "Group A, Division 1, 1 Storey, Limited Area",
        "code": "3.2.2.21."
    },
    {
        "id": "148",
        "title": "Group A, Division 1, 1 Storey",
        "code": "3.2.2.22."
    },
    {
        "id": "149",
        "title": "Group A, Division 2, Any Height, Any Area, Sprinklered",
        "code": "3.2.2.23."
    },
    {
        "id": "150",
        "title": "Group A, Division 2, up to 6 Storeys, Any Area, Sprinklered",
        "code": "3.2.2.24."
    },
    {
        "id": "151",
        "title": "Group A, Division 2, up to 2 Storeys",
        "code": "3.2.2.25."
    },
    {
        "id": "152",
        "title": "Group A, Division 2, up to 2 Storeys, Increased Area, Sprinklered",
        "code": "3.2.2.26."
    },
    {
        "id": "153",
        "title": "Group A, Division 2, up to 2 Storeys, Sprinklered",
        "code": "3.2.2.27."
    },
    {
        "id": "154",
        "title": "Group A, Division 2, 1 Storey",
        "code": "3.2.2.28."
    },
    {
        "id": "155",
        "title": "Group A, Division 3, Any Height, Any Area",
        "code": "3.2.2.29."
    },
    {
        "id": "156",
        "title": "Group A, Division 3, up to 2 Storeys",
        "code": "3.2.2.30."
    },
    {
        "id": "157",
        "title": "Group A, Division 3, up to 2 Storeys, Sprinklered",
        "code": "3.2.2.31."
    },
    {
        "id": "158",
        "title": "Group A, Division 3, 1 Storey, Increased Area",
        "code": "3.2.2.32."
    },
    {
        "id": "159",
        "title": "Group A, Division 3, 1 Storey, Sprinklered",
        "code": "3.2.2.33."
    },
    {
        "id": "160",
        "title": "Group A, Division 3, 1 Storey",
        "code": "3.2.2.34."
    },
    {
        "id": "161",
        "title": "Group A, Division 4",
        "code": "3.2.2.35."
    },
    {
        "id": "162",
        "title": "Group B, Division 1, Any Height, Any Area, Sprinklered",
        "code": "3.2.2.36."
    },
    {
        "id": "163",
        "title": "Group B, Division 1, up to 3 Storeys, Sprinklered",
        "code": "3.2.2.37."
    },
    {
        "id": "164",
        "title": "Group B, Division 2 or Division 3, Any Height, Any Area, Sprinklered",
        "code": "3.2.2.38."
    },
    {
        "id": "165",
        "title": "Group B, Division 2 or Division 3, up to 3 Storeys, Sprinklered",
        "code": "3.2.2.39."
    },
    {
        "id": "166",
        "title": "Group B, Division 2 or Division 3, up to 2 Storeys, Sprinklered",
        "code": "3.2.2.40."
    },
    {
        "id": "167",
        "title": "Group B, Division 2 or Division 3, 1 Storey, Sprinklered",
        "code": "3.2.2.41."
    },
    {
        "id": "168",
        "title": "Group C, Any Height, Any Area, Sprinklered",
        "code": "3.2.2.42."
    },
    {
        "id": "169",
        "title": "Group C, up to 6 Storeys, Sprinklered, Noncombustible Construction",
        "code": "3.2.2.43."
    },
    {
        "id": "170",
        "title": "Group C, up to 6 Storeys, Sprinklered, Combustible Construction",
        "code": "3.2.2.43A."
    },
    {
        "id": "171",
        "title": "Group C, up to 4 Storeys, Noncombustible Construction",
        "code": "3.2.2.44."
    },
    {
        "id": "172",
        "title": "Group C, up to 4 Storeys, Sprinklered",
        "code": "3.2.2.45."
    },
    {
        "id": "173",
        "title": "Group C, up to 3 Storeys, Increased Area",
        "code": "3.2.2.46."
    },
    {
        "id": "174",
        "title": "Group C, up to 3 Storeys",
        "code": "3.2.2.47."
    },
    {
        "id": "175",
        "title": "Group C, up to 3 Storeys, Sprinklered",
        "code": "3.2.2.48."
    },
    {
        "id": "176",
        "title": "Group D, Any Height, Any Area",
        "code": "3.2.2.49."
    },
    {
        "id": "177",
        "title": "Group D, up to 6 Storeys",
        "code": "3.2.2.50."
    },
    {
        "id": "178",
        "title": "Group D, up to 6 Storeys, Sprinklered, Combustible Construction",
        "code": "3.2.2.50A."
    },
    {
        "id": "179",
        "title": "Group D, up to 6 Storeys, Sprinklered, Noncombustible Construction",
        "code": "3.2.2.51."
    },
    {
        "id": "180",
        "title": "Group D, up to 4 Storeys, Sprinklered",
        "code": "3.2.2.52."
    },
    {
        "id": "181",
        "title": "Group D, up to 3 Storeys",
        "code": "3.2.2.53."
    },
    {
        "id": "182",
        "title": "Group D, up to 3 Storeys, Sprinklered",
        "code": "3.2.2.54."
    },
    {
        "id": "183",
        "title": "Group D, up to 2 Storeys",
        "code": "3.2.2.55."
    },
    {
        "id": "184",
        "title": "Group D, up to 2 Storeys, Sprinklered",
        "code": "3.2.2.56."
    },
    {
        "id": "185",
        "title": "Group E, Any Height, Any Area, Sprinklered",
        "code": "3.2.2.57."
    },
    {
        "id": "186",
        "title": "Group E, up to 4 Storeys, Sprinklered",
        "code": "3.2.2.58."
    },
    {
        "id": "187",
        "title": "Group E, up to 3 Storeys",
        "code": "3.2.2.59."
    },
    {
        "id": "188",
        "title": "Group E, up to 3 Storeys, Sprinklered",
        "code": "3.2.2.60."
    },
    {
        "id": "189",
        "title": "Group E, up to 2 Storeys",
        "code": "3.2.2.61."
    },
    {
        "id": "190",
        "title": "Group E, up to 2 Storeys, Sprinklered",
        "code": "3.2.2.62."
    },
    {
        "id": "191",
        "title": "Group F, Division 1, up to 4 Storeys, Sprinklered",
        "code": "3.2.2.63."
    },
    {
        "id": "192",
        "title": "Group F, Division 1, up to 3 Storeys, Sprinklered",
        "code": "3.2.2.64."
    },
    {
        "id": "193",
        "title": "Group F, Division 1, up to 2 Storeys, Sprinklered",
        "code": "3.2.2.65."
    },
    {
        "id": "194",
        "title": "Group F, Division 1, 1 Storey",
        "code": "3.2.2.66."
    },
    {
        "id": "195",
        "title": "Group F, Division 2, Any Height, Any Area, Sprinklered",
        "code": "3.2.2.67."
    },
    {
        "id": "196",
        "title": "Group F, Division 2, up to 6 Storeys",
        "code": "3.2.2.68."
    },
    {
        "id": "197",
        "title": "Group F, Division 2, up to 4 Storeys, Increased Area",
        "code": "3.2.2.69."
    },
    {
        "id": "198",
        "title": "Group F, Division 2, up to 4 Storeys",
        "code": "3.2.2.70."
    },
    {
        "id": "199",
        "title": "Group F, Division 2, up to 2 Storeys",
        "code": "3.2.2.71."
    },
    {
        "id": "200",
        "title": "Group F, Division 2, up to 2 Storeys, Sprinklered",
        "code": "3.2.2.72."
    },
    {
        "id": "201",
        "title": "Group F, Division 3, Any Height, Any Area",
        "code": "3.2.2.73."
    },
    {
        "id": "202",
        "title": "Group F, Division 3, up to 6 Storeys",
        "code": "3.2.2.74."
    },
    {
        "id": "203",
        "title": "Group F, Division 3, up to 6 Storeys, Sprinklered",
        "code": "3.2.2.75."
    },
    {
        "id": "204",
        "title": "Group F, Division 3, up to 4 Storeys",
        "code": "3.2.2.76."
    },
    {
        "id": "205",
        "title": "Group F, Division 3, up to 4 Storeys, Sprinklered",
        "code": "3.2.2.77."
    },
    {
        "id": "206",
        "title": "Group F, Division 3, up to 2 Storeys",
        "code": "3.2.2.78."
    },
    {
        "id": "207",
        "title": "Group F, Division 3, up to 2 Storeys, Sprinklered",
        "code": "3.2.2.79."
    },
    {
        "id": "208",
        "title": "Group F, Division 3, 1 Storey",
        "code": "3.2.2.80."
    },
    {
        "id": "209",
        "title": "Group F, Division 3, 1 Storey, Sprinklered",
        "code": "3.2.2.81."
    },
    {
        "id": "210",
        "title": "Group F, Division 3, 1 Storey, Any Area, Low Fire Load Occupancy",
        "code": "3.2.2.82."
    },
    {
        "id": "211",
        "title": "Group F, Division 3, Storage Garages up to 22 m High",
        "code": "3.2.2.83."
    },
    {
        "id": "212",
        "title": "Limiting Distance and Area of Unprotected Openings",
        "code": "3.2.3.1."
    },
    {
        "id": "213",
        "title": "Area of Exposing Building Face",
        "code": "3.2.3.2."
    },
    {
        "id": "214",
        "title": "Wall Enclosing Attic or Roof Space",
        "code": "3.2.3.3."
    },
    {
        "id": "215",
        "title": "Reserved",
        "code": "3.2.3.4."
    },
    {
        "id": "216",
        "title": "Wall with Limiting Distance Less Than 1.2 m",
        "code": "3.2.3.5."
    },
    {
        "id": "217",
        "title": "Combustible Projections",
        "code": "3.2.3.6."
    },
    {
        "id": "218",
        "title": "Construction of Exposing Building Face",
        "code": "3.2.3.7."
    },
    {
        "id": "219",
        "title": "Protection of Exterior Building Face",
        "code": "3.2.3.8."
    },
    {
        "id": "220",
        "title": "Protection of Structural Members",
        "code": "3.2.3.9."
    },
    {
        "id": "221",
        "title": "Unlimited Unprotected Openings",
        "code": "3.2.3.10."
    },
    {
        "id": "222",
        "title": "Low Fire Load, 1 Storey Building",
        "code": "3.2.3.11."
    },
    {
        "id": "223",
        "title": "Area Increase for Unprotected Openings",
        "code": "3.2.3.12."
    },
    {
        "id": "224",
        "title": "Protection of Exit Facilities",
        "code": "3.2.3.13."
    },
    {
        "id": "225",
        "title": "Wall Exposed to Another Wall",
        "code": "3.2.3.14."
    },
    {
        "id": "226",
        "title": "Wall Exposed to Adjoining Roof",
        "code": "3.2.3.15."
    },
    {
        "id": "227",
        "title": "Protection of Soffits",
        "code": "3.2.3.16."
    },
    {
        "id": "228",
        "title": "Canopy Protection for Vertically Separated Openings",
        "code": "3.2.3.17."
    },
    {
        "id": "229",
        "title": "Covered Vehicular Passageway",
        "code": "3.2.3.18."
    },
    {
        "id": "230",
        "title": "Walkway between Buildings",
        "code": "3.2.3.19."
    },
    {
        "id": "231",
        "title": "Underground Walkway",
        "code": "3.2.3.20."
    },
    {
        "id": "232",
        "title": "Service Lines under Buildings",
        "code": "3.2.3.21."
    },
    {
        "id": "233",
        "title": "Determination of Requirement for a Fire Alarm System",
        "code": "3.2.4.1."
    },
    {
        "id": "234",
        "title": "Continuity of Fire Alarm System",
        "code": "3.2.4.2."
    },
    {
        "id": "235",
        "title": "Types of Fire Alarm Systems",
        "code": "3.2.4.3."
    },
    {
        "id": "236",
        "title": "Description of Fire Alarm Systems",
        "code": "3.2.4.4."
    },
    {
        "id": "237",
        "title": "Installation and Verification of Fire Alarm Systems",
        "code": "3.2.4.5."
    },
    {
        "id": "238",
        "title": "Commissioning of Life Safety and Fire Protection Systems",
        "code": "3.2.4.6."
    },
    {
        "id": "239",
        "title": "Silencing of Alarm Signals",
        "code": "3.2.4.7."
    },
    {
        "id": "240",
        "title": "Signals to Fire Department",
        "code": "3.2.4.8."
    },
    {
        "id": "241",
        "title": "Annunciator and Zone Indication",
        "code": "3.2.4.9."
    },
    {
        "id": "242",
        "title": "Electrical Supervision",
        "code": "3.2.4.10."
    },
    {
        "id": "243",
        "title": "Fire Detectors",
        "code": "3.2.4.11."
    },
    {
        "id": "244",
        "title": "Smoke and Heat Detectors",
        "code": "3.2.4.12."
    },
    {
        "id": "245",
        "title": "Prevention of Smoke Circulation",
        "code": "3.2.4.13."
    },
    {
        "id": "246",
        "title": "Vacuum Cleaning System Shutdown",
        "code": "3.2.4.14."
    },
    {
        "id": "247",
        "title": "Elevator Emergency Return",
        "code": "3.2.4.15."
    },
    {
        "id": "248",
        "title": "Sprinklers in Lieu of Fire Detectors",
        "code": "3.2.4.16."
    },
    {
        "id": "249",
        "title": "System Monitoring",
        "code": "3.2.4.17."
    },
    {
        "id": "250",
        "title": "Manual Pull Stations",
        "code": "3.2.4.18."
    },
    {
        "id": "251",
        "title": "Alert and Alarm Signals",
        "code": "3.2.4.19."
    },
    {
        "id": "252",
        "title": "Audibility of Alarm Systems",
        "code": "3.2.4.20."
    },
    {
        "id": "253",
        "title": "Visual Signals",
        "code": "3.2.4.21."
    },
    {
        "id": "254",
        "title": "Smoke Alarms",
        "code": "3.2.4.22."
    },
    {
        "id": "255",
        "title": "Voice Communication Systems",
        "code": "3.2.4.23."
    },
    {
        "id": "256",
        "title": "Access to Above Grade Storeys",
        "code": "3.2.5.1."
    },
    {
        "id": "257",
        "title": "Access to Basements",
        "code": "3.2.5.2."
    },
    {
        "id": "258",
        "title": "Roof Access",
        "code": "3.2.5.3."
    },
    {
        "id": "259",
        "title": "Access Routes",
        "code": "3.2.5.4."
    },
    {
        "id": "260",
        "title": "Location of Access Routes",
        "code": "3.2.5.5."
    },
    {
        "id": "261",
        "title": "Access Route Design",
        "code": "3.2.5.6."
    },
    {
        "id": "262",
        "title": "Water Supply",
        "code": "3.2.5.7."
    },
    {
        "id": "263",
        "title": "Reserved",
        "code": "3.2.5.8."
    },
    {
        "id": "264",
        "title": "Reserved",
        "code": "3.2.5.9."
    },
    {
        "id": "265",
        "title": "Reserved",
        "code": "3.2.5.10."
    },
    {
        "id": "266",
        "title": "Reserved",
        "code": "3.2.5.11."
    },
    {
        "id": "267",
        "title": "Reserved",
        "code": "3.2.5.12."
    },
    {
        "id": "268",
        "title": "Automatic Sprinkler Systems",
        "code": "3.2.5.13."
    },
    {
        "id": "269",
        "title": "Combustible Sprinkler Piping",
        "code": "3.2.5.14."
    },
    {
        "id": "270",
        "title": "Sprinklered Service Space",
        "code": "3.2.5.15."
    },
    {
        "id": "271",
        "title": "Fire Department Connections",
        "code": "3.2.5.16."
    },
    {
        "id": "272",
        "title": "Portable Fire Extinguishers",
        "code": "3.2.5.17."
    },
    {
        "id": "273",
        "title": "Protection from Freezing",
        "code": "3.2.5.18."
    },
    {
        "id": "274",
        "title": "Fire Pumps",
        "code": "3.2.5.19."
    },
    {
        "id": "275",
        "title": "Application",
        "code": "3.2.6.1."
    },
    {
        "id": "276",
        "title": "Limits to Smoke Movement",
        "code": "3.2.6.2."
    },
    {
        "id": "277",
        "title": "Connected Buildings",
        "code": "3.2.6.3."
    },
    {
        "id": "278",
        "title": "Emergency Operation of Elevators",
        "code": "3.2.6.4."
    },
    {
        "id": "279",
        "title": "Elevator for Use by Firefighters",
        "code": "3.2.6.5."
    },
    {
        "id": "280",
        "title": "Venting to Aid Firefighting",
        "code": "3.2.6.6."
    },
    {
        "id": "281",
        "title": "Central Alarm and Control Facility",
        "code": "3.2.6.7."
    },
    {
        "id": "282",
        "title": "Voice Communication System",
        "code": "3.2.6.8."
    },
    {
        "id": "283",
        "title": "Testing",
        "code": "3.2.6.9."
    },
    {
        "id": "284",
        "title": "Minimum Lighting Requirements",
        "code": "3.2.7.1."
    },
    {
        "id": "285",
        "title": "Recessed Lighting Fixtures",
        "code": "3.2.7.2."
    },
    {
        "id": "286",
        "title": "Emergency Lighting",
        "code": "3.2.7.3."
    },
    {
        "id": "287",
        "title": "Emergency Power for Lighting",
        "code": "3.2.7.4."
    },
    {
        "id": "288",
        "title": "Emergency Power Supply Installation",
        "code": "3.2.7.5."
    },
    {
        "id": "289",
        "title": "Emergency Power for Hospitals",
        "code": "3.2.7.6."
    },
    {
        "id": "290",
        "title": "Fuel Supply Shut-off Valves and Exhaust Pipes",
        "code": "3.2.7.7."
    },
    {
        "id": "291",
        "title": "Emergency Power for Fire Alarm Systems",
        "code": "3.2.7.8."
    },
    {
        "id": "292",
        "title": "Emergency Power for Building Services",
        "code": "3.2.7.9."
    },
    {
        "id": "293",
        "title": "Protection of Electrical Conductors",
        "code": "3.2.7.10."
    },
    {
        "id": "294",
        "title": "Application",
        "code": "3.2.8.1."
    },
    {
        "id": "295",
        "title": "Exceptions to Special Protection",
        "code": "3.2.8.2."
    },
    {
        "id": "296",
        "title": "Configuration",
        "code": "3.2.8.3."
    },
    {
        "id": "297",
        "title": "Exits",
        "code": "3.2.8.4."
    },
    {
        "id": "298",
        "title": "Elevators",
        "code": "3.2.8.5."
    },
    {
        "id": "299",
        "title": "Group B Sleeping Rooms",
        "code": "3.2.8.6."
    },
    {
        "id": "300",
        "title": "Sprinklers",
        "code": "3.2.8.7."
    },
    {
        "id": "301",
        "title": "Fire Alarm and Detection System",
        "code": "3.2.8.8."
    },
    {
        "id": "302",
        "title": "Smoke Control",
        "code": "3.2.8.9."
    },
    {
        "id": "303",
        "title": "Emergency Power Supply",
        "code": "3.2.8.10."
    },
    {
        "id": "304",
        "title": "Testing",
        "code": "3.2.8.11."
    },
    {
        "id": "305",
        "title": "Where Required",
        "code": "3.2.9.1."
    },
    {
        "id": "306",
        "title": "Standpipe System Design",
        "code": "3.2.9.2."
    },
    {
        "id": "307",
        "title": "Hose Connections",
        "code": "3.2.9.3."
    },
    {
        "id": "308",
        "title": "Hose Stations",
        "code": "3.2.9.4."
    },
    {
        "id": "309",
        "title": "Supervisory Signal Annunciation for Valves",
        "code": "3.2.9.5."
    },
    {
        "id": "310",
        "title": "Water Supply for 38 mm Hose Connections",
        "code": "3.2.9.6."
    },
    {
        "id": "311",
        "title": "Water Supply for 65 mm Hose Connections",
        "code": "3.2.9.7."
    },
    {
        "id": "312",
        "title": "Separation of Suites",
        "code": "3.3.1.1."
    },
    {
        "id": "313",
        "title": "Hazardous Substances, Equipment and Processes",
        "code": "3.3.1.2."
    },
    {
        "id": "314",
        "title": "Means of Egress",
        "code": "3.3.1.3."
    },
    {
        "id": "315",
        "title": "Public Corridor Separations",
        "code": "3.3.1.4."
    },
    {
        "id": "316",
        "title": "Egress Doorways",
        "code": "3.3.1.5."
    },
    {
        "id": "317",
        "title": "Travel Distance",
        "code": "3.3.1.6."
    },
    {
        "id": "318",
        "title": "Protection on Floor Areas with a Barrier-Free Path of Travel",
        "code": "3.3.1.7."
    },
    {
        "id": "319",
        "title": "Headroom Clearance",
        "code": "3.3.1.8."
    },
    {
        "id": "320",
        "title": "Corridors",
        "code": "3.3.1.9."
    },
    {
        "id": "321",
        "title": "Door Swing",
        "code": "3.3.1.10."
    },
    {
        "id": "322",
        "title": "Sliding Doors",
        "code": "3.3.1.11."
    },
    {
        "id": "323",
        "title": "Doors and Door Hardware",
        "code": "3.3.1.12."
    },
    {
        "id": "324",
        "title": "Ramps and Stairways",
        "code": "3.3.1.13."
    },
    {
        "id": "325",
        "title": "Exterior Passageways",
        "code": "3.3.1.14."
    },
    {
        "id": "326",
        "title": "Curved or Spiral Stairs",
        "code": "3.3.1.15."
    },
    {
        "id": "327",
        "title": "Capacity of Access to Exits",
        "code": "3.3.1.16."
    },
    {
        "id": "328",
        "title": "Guards",
        "code": "3.3.1.17."
    },
    {
        "id": "329",
        "title": "Transparent Doors and Panels",
        "code": "3.3.1.18."
    },
    {
        "id": "330",
        "title": "Exhaust Ventilation",
        "code": "3.3.1.19."
    },
    {
        "id": "331",
        "title": "Janitors’ Rooms",
        "code": "3.3.1.20."
    },
    {
        "id": "332",
        "title": "Common Laundry Rooms",
        "code": "3.3.1.21."
    },
    {
        "id": "333",
        "title": "Obstructions",
        "code": "3.3.1.22."
    },
    {
        "id": "334",
        "title": "Signs in Service Spaces",
        "code": "3.3.1.23."
    },
    {
        "id": "335",
        "title": "Welding and Cutting",
        "code": "3.3.1.24."
    },
    {
        "id": "336",
        "title": "Scope",
        "code": "3.3.2.1."
    },
    {
        "id": "337",
        "title": "Fire Separations",
        "code": "3.3.2.2."
    },
    {
        "id": "338",
        "title": "Fixed Seats",
        "code": "3.3.2.3."
    },
    {
        "id": "339",
        "title": "Aisles",
        "code": "3.3.2.4."
    },
    {
        "id": "340",
        "title": "Corridors",
        "code": "3.3.2.5."
    },
    {
        "id": "341",
        "title": "Doors",
        "code": "3.3.2.6."
    },
    {
        "id": "342",
        "title": "Fixed Bench-Type Seats without Arms",
        "code": "3.3.2.7."
    },
    {
        "id": "343",
        "title": "Guards",
        "code": "3.3.2.8."
    },
    {
        "id": "344",
        "title": "Outdoor Places of Assembly",
        "code": "3.3.2.9."
    },
    {
        "id": "345",
        "title": "Bleachers",
        "code": "3.3.2.10."
    },
    {
        "id": "346",
        "title": "Libraries",
        "code": "3.3.2.11."
    },
    {
        "id": "347",
        "title": "Stages for Theatrical Performances",
        "code": "3.3.2.12."
    },
    {
        "id": "348",
        "title": "Risers for Stairs",
        "code": "3.3.2.13."
    },
    {
        "id": "349",
        "title": "Storage Rooms",
        "code": "3.3.2.14."
    },
    {
        "id": "350",
        "title": "Scope",
        "code": "3.3.3.1."
    },
    {
        "id": "351",
        "title": "Fire Separations",
        "code": "3.3.3.2."
    },
    {
        "id": "352",
        "title": "Corridors",
        "code": "3.3.3.3."
    },
    {
        "id": "353",
        "title": "Doorway Width",
        "code": "3.3.3.4."
    },
    {
        "id": "354",
        "title": "Hospitals and Long-Term Care Homes",
        "code": "3.3.3.5."
    },
    {
        "id": "355",
        "title": "Protection for Special Care and Treatment Facilities",
        "code": "3.3.3.6."
    },
    {
        "id": "356",
        "title": "Contained Use Areas",
        "code": "3.3.3.7."
    },
    {
        "id": "357",
        "title": "Handrails",
        "code": "3.3.3.8."
    },
    {
        "id": "358",
        "title": "Scope",
        "code": "3.3.4.1."
    },
    {
        "id": "359",
        "title": "Fire Separations",
        "code": "3.3.4.2."
    },
    {
        "id": "360",
        "title": "Storage Rooms",
        "code": "3.3.4.3."
    },
    {
        "id": "361",
        "title": "Egress from Dwelling Units",
        "code": "3.3.4.4."
    },
    {
        "id": "362",
        "title": "Automatic Locking Prohibition",
        "code": "3.3.4.5."
    },
    {
        "id": "363",
        "title": "Sound Transmission",
        "code": "3.3.4.6."
    },
    {
        "id": "364",
        "title": "Stairs, Ramps, Landings, Handrails and Guards for Dwelling Units",
        "code": "3.3.4.7."
    },
    {
        "id": "365",
        "title": "Protection of Openable Windows",
        "code": "3.3.4.8."
    },
    {
        "id": "366",
        "title": "Stud Wall Reinforcement",
        "code": "3.3.4.9."
    },
    {
        "id": "367",
        "title": "Resistance to Forced Entry",
        "code": "3.3.4.10."
    },
    {
        "id": "368",
        "title": "Scope",
        "code": "3.3.5.1."
    },
    {
        "id": "369",
        "title": "Fire Extinguishing Systems",
        "code": "3.3.5.2."
    },
    {
        "id": "370",
        "title": "Basements",
        "code": "3.3.5.3."
    },
    {
        "id": "371",
        "title": "Repair and Storage Garages",
        "code": "3.3.5.4."
    },
    {
        "id": "372",
        "title": "Repair Garage Separation",
        "code": "3.3.5.5."
    },
    {
        "id": "373",
        "title": "Storage Garage Separation",
        "code": "3.3.5.6."
    },
    {
        "id": "374",
        "title": "Vestibules",
        "code": "3.3.5.7."
    },
    {
        "id": "375",
        "title": "Toe-Boards Required",
        "code": "3.3.5.8."
    },
    {
        "id": "376",
        "title": "Application",
        "code": "3.3.6.1."
    },
    {
        "id": "377",
        "title": "Storage of Explosives",
        "code": "3.3.6.2."
    },
    {
        "id": "378",
        "title": "Indoor Storage of Compressed Gases",
        "code": "3.3.6.3."
    },
    {
        "id": "379",
        "title": "Storage and Dispensing Rooms for Flammable Liquids and Combustible Liquids",
        "code": "3.3.6.4."
    },
    {
        "id": "380",
        "title": "Tire Storage",
        "code": "3.3.6.5."
    },
    {
        "id": "381",
        "title": "Ammonium Nitrate Storage",
        "code": "3.3.6.6."
    },
    {
        "id": "382",
        "title": "Flooring Materials",
        "code": "3.3.6.7."
    },
    {
        "id": "383",
        "title": "Fire Separations in Process Plants",
        "code": "3.3.6.8."
    },
    {
        "id": "384",
        "title": "Basements and Pits",
        "code": "3.3.6.9."
    },
    {
        "id": "385",
        "title": "Scope",
        "code": "3.4.1.1."
    },
    {
        "id": "386",
        "title": "Separation of Exits",
        "code": "3.4.1.2."
    },
    {
        "id": "387",
        "title": "Access to Exits",
        "code": "3.4.1.3."
    },
    {
        "id": "388",
        "title": "Types of Exit",
        "code": "3.4.1.4."
    },
    {
        "id": "389",
        "title": "Exterior Exit Passageways",
        "code": "3.4.1.5."
    },
    {
        "id": "390",
        "title": "Restricted Use of Horizontal Exits",
        "code": "3.4.1.6."
    },
    {
        "id": "391",
        "title": "Slide Escapes",
        "code": "3.4.1.7."
    },
    {
        "id": "392",
        "title": "Transparent Doors and Panels",
        "code": "3.4.1.8."
    },
    {
        "id": "393",
        "title": "Mirrors near Exits",
        "code": "3.4.1.9."
    },
    {
        "id": "394",
        "title": "Combustible Glazing in Exits",
        "code": "3.4.1.10."
    },
    {
        "id": "395",
        "title": "Exterior Stairway for Long-Term Care Homes",
        "code": "3.4.1.11."
    },
    {
        "id": "396",
        "title": "Minimum Number of Exits",
        "code": "3.4.2.1."
    },
    {
        "id": "397",
        "title": "Mezzanine Exiting",
        "code": "3.4.2.2."
    },
    {
        "id": "398",
        "title": "Distance between Exits",
        "code": "3.4.2.3."
    },
    {
        "id": "399",
        "title": "Travel Distance",
        "code": "3.4.2.4."
    },
    {
        "id": "400",
        "title": "Location of Exits",
        "code": "3.4.2.5."
    },
    {
        "id": "401",
        "title": "Principal Entrance",
        "code": "3.4.2.6."
    },
    {
        "id": "402",
        "title": "Exit Width Based on Occupant Load",
        "code": "3.4.3.1."
    },
    {
        "id": "403",
        "title": "Exit Width",
        "code": "3.4.3.2."
    },
    {
        "id": "404",
        "title": "Exits from Interconnected Floor Space",
        "code": "3.4.3.3."
    },
    {
        "id": "405",
        "title": "Exit Width Reduction",
        "code": "3.4.3.4."
    },
    {
        "id": "406",
        "title": "Headroom Clearance",
        "code": "3.4.3.5."
    },
    {
        "id": "407",
        "title": "Fire-Resistance Rating of Exit Separations",
        "code": "3.4.4.1."
    },
    {
        "id": "408",
        "title": "Exits through Lobbies",
        "code": "3.4.4.2."
    },
    {
        "id": "409",
        "title": "Exterior Passageway Exceptions",
        "code": "3.4.4.3."
    },
    {
        "id": "410",
        "title": "Integrity of Exits",
        "code": "3.4.4.4."
    },
    {
        "id": "411",
        "title": "Exit Signage",
        "code": "3.4.5.1."
    },
    {
        "id": "412",
        "title": "Signs within Exit Facilities",
        "code": "3.4.5.2."
    },
    {
        "id": "413",
        "title": "Surface Finish of Ramps and Stairs",
        "code": "3.4.6.1."
    },
    {
        "id": "414",
        "title": "Minimum Number of Risers",
        "code": "3.4.6.2."
    },
    {
        "id": "415",
        "title": "Maximum Vertical Rise of Stair Flights and Required Landings",
        "code": "3.4.6.3."
    },
    {
        "id": "416",
        "title": "Dimensions of Landings",
        "code": "3.4.6.4."
    },
    {
        "id": "417",
        "title": "Handrails",
        "code": "3.4.6.5."
    },
    {
        "id": "418",
        "title": "Guards",
        "code": "3.4.6.6."
    },
    {
        "id": "419",
        "title": "Ramp Slope",
        "code": "3.4.6.7."
    },
    {
        "id": "420",
        "title": "Treads and Risers",
        "code": "3.4.6.8."
    },
    {
        "id": "421",
        "title": "Curved Stairs",
        "code": "3.4.6.9."
    },
    {
        "id": "422",
        "title": "Horizontal Exits",
        "code": "3.4.6.10."
    },
    {
        "id": "423",
        "title": "Doors",
        "code": "3.4.6.11."
    },
    {
        "id": "424",
        "title": "Direction of Door Swing",
        "code": "3.4.6.12."
    },
    {
        "id": "425",
        "title": "Self-Closing Devices",
        "code": "3.4.6.13."
    },
    {
        "id": "426",
        "title": "Sliding Doors",
        "code": "3.4.6.14."
    },
    {
        "id": "427",
        "title": "Revolving Doors",
        "code": "3.4.6.15."
    },
    {
        "id": "428",
        "title": "Door Release Hardware",
        "code": "3.4.6.16."
    },
    {
        "id": "429",
        "title": "Reserved",
        "code": "3.4.6.17."
    },
    {
        "id": "430",
        "title": "Emergency Access to Floor Areas",
        "code": "3.4.6.18."
    },
    {
        "id": "431",
        "title": "Floor Numbering",
        "code": "3.4.6.19."
    },
    {
        "id": "432",
        "title": "Scope",
        "code": "3.4.7.1."
    },
    {
        "id": "433",
        "title": "Fire Escape Construction",
        "code": "3.4.7.2."
    },
    {
        "id": "434",
        "title": "Access to Fire Escapes",
        "code": "3.4.7.3."
    },
    {
        "id": "435",
        "title": "Protection of Fire Escapes",
        "code": "3.4.7.4."
    },
    {
        "id": "436",
        "title": "Stairs",
        "code": "3.4.7.5."
    },
    {
        "id": "437",
        "title": "Guards and Railings",
        "code": "3.4.7.6."
    },
    {
        "id": "438",
        "title": "Landings",
        "code": "3.4.7.7."
    },
    {
        "id": "439",
        "title": "Scope",
        "code": "3.5.1.1."
    },
    {
        "id": "440",
        "title": "Required Elevator",
        "code": "3.5.2.1."
    },
    {
        "id": "441",
        "title": "Barrier-Free Design",
        "code": "3.5.2.2."
    },
    {
        "id": "442",
        "title": "Fire Separations for Elevator Hoistways",
        "code": "3.5.3.1."
    },
    {
        "id": "443",
        "title": "Vertical Service Spaces for Dumbwaiters",
        "code": "3.5.3.2."
    },
    {
        "id": "444",
        "title": "Fire Separations for Elevator Machine Rooms",
        "code": "3.5.3.3."
    },
    {
        "id": "445",
        "title": "Elevator Car Dimensions",
        "code": "3.5.4.1."
    },
    {
        "id": "446",
        "title": "Scope",
        "code": "3.6.1.1."
    },
    {
        "id": "447",
        "title": "Reserved",
        "code": "3.6.1.2."
    },
    {
        "id": "448",
        "title": "Storage Use Prohibition",
        "code": "3.6.1.3."
    },
    {
        "id": "449",
        "title": "Reserved",
        "code": "3.6.1.4."
    },
    {
        "id": "450",
        "title": "Fixed Access Ladders",
        "code": "3.6.1.5."
    },
    {
        "id": "451",
        "title": "Fire Separations around Service Rooms",
        "code": "3.6.2.1."
    },
    {
        "id": "452",
        "title": "Service Rooms under Exits",
        "code": "3.6.2.2."
    },
    {
        "id": "453",
        "title": "Service Equipment",
        "code": "3.6.2.3."
    },
    {
        "id": "454",
        "title": "Incinerator Rooms",
        "code": "3.6.2.4."
    },
    {
        "id": "455",
        "title": "Combustible Refuse Storage",
        "code": "3.6.2.5."
    },
    {
        "id": "456",
        "title": "Door Swing for Service Rooms",
        "code": "3.6.2.6."
    },
    {
        "id": "457",
        "title": "Electrical Equipment Vaults",
        "code": "3.6.2.7."
    },
    {
        "id": "458",
        "title": "Emergency Power Installations",
        "code": "3.6.2.8."
    },
    {
        "id": "459",
        "title": "Storage of Oxygen Containers",
        "code": "3.6.2.9."
    },
    {
        "id": "460",
        "title": "Fire Separations for Vertical Service Spaces",
        "code": "3.6.3.1."
    },
    {
        "id": "461",
        "title": "Foamed Plastic Protection",
        "code": "3.6.3.2."
    },
    {
        "id": "462",
        "title": "Linen and Refuse Chutes",
        "code": "3.6.3.3."
    },
    {
        "id": "463",
        "title": "Exhaust Duct Negative Pressure",
        "code": "3.6.3.4."
    },
    {
        "id": "464",
        "title": "Scope",
        "code": "3.6.4.1."
    },
    {
        "id": "465",
        "title": "Fire Separations for Horizontal Service Spaces",
        "code": "3.6.4.2."
    },
    {
        "id": "466",
        "title": "Plenum Requirements",
        "code": "3.6.4.3."
    },
    {
        "id": "467",
        "title": "Attic or Roof Space Access",
        "code": "3.6.4.4."
    },
    {
        "id": "468",
        "title": "Horizontal Service Space Access",
        "code": "3.6.4.5."
    },
    {
        "id": "469",
        "title": "Crawl Space Access",
        "code": "3.6.4.6."
    },
    {
        "id": "470",
        "title": "Room and Space Height",
        "code": "3.7.1.1."
    },
    {
        "id": "471",
        "title": "Residential Room Dimensions",
        "code": "3.7.1.2."
    },
    {
        "id": "472",
        "title": "Sleeping Areas in Group B and Child Care Facilities",
        "code": "3.7.1.3."
    },
    {
        "id": "473",
        "title": "Sleeping Areas in Camps",
        "code": "3.7.1.4."
    },
    {
        "id": "474",
        "title": "Window Areas",
        "code": "3.7.2.1."
    },
    {
        "id": "475",
        "title": "Plumbing and Drainage Systems",
        "code": "3.7.4.1."
    },
    {
        "id": "476",
        "title": "Plumbing Fixtures, General",
        "code": "3.7.4.2."
    },
    {
        "id": "477",
        "title": "Plumbing Fixtures for Assembly Occupancies",
        "code": "3.7.4.3."
    },
    {
        "id": "478",
        "title": "Plumbing Fixtures for Care, Care and Treatment or Detention Occupancies",
        "code": "3.7.4.4."
    },
    {
        "id": "479",
        "title": "Plumbing Facilities for Dwelling Units",
        "code": "3.7.4.5."
    },
    {
        "id": "480",
        "title": "Plumbing Fixtures for Other Residential Occupancies",
        "code": "3.7.4.6."
    },
    {
        "id": "481",
        "title": "Plumbing Fixtures for Business and Personal Services Occupancies",
        "code": "3.7.4.7."
    },
    {
        "id": "482",
        "title": "Plumbing Fixtures for Mercantile Occupancies",
        "code": "3.7.4.8."
    },
    {
        "id": "483",
        "title": "Plumbing Fixtures for Industrial Occupancies",
        "code": "3.7.4.9."
    },
    {
        "id": "484",
        "title": "Plumbing Fixtures for Mobile Home Facilities",
        "code": "3.7.4.10."
    },
    {
        "id": "485",
        "title": "Safety Glass",
        "code": "3.7.4.11."
    },
    {
        "id": "486",
        "title": "Surface Protection",
        "code": "3.7.4.12."
    },
    {
        "id": "487",
        "title": "Floor Drains",
        "code": "3.7.4.13."
    },
    {
        "id": "488",
        "title": "Grab Bar Installation",
        "code": "3.7.4.14."
    },
    {
        "id": "489",
        "title": "Clearances for Water Closets",
        "code": "3.7.4.15."
    },
    {
        "id": "490",
        "title": "Privacy",
        "code": "3.7.4.16."
    },
    {
        "id": "491",
        "title": "Water Temperature Control",
        "code": "3.7.4.17."
    },
    {
        "id": "492",
        "title": "Drinking Water",
        "code": "3.7.4.18."
    },
    {
        "id": "493",
        "title": "Pharmacies",
        "code": "3.7.4.19."
    },
    {
        "id": "494",
        "title": "Electrical Systems",
        "code": "3.7.5.1."
    },
    {
        "id": "495",
        "title": "Medical Gas Piping",
        "code": "3.7.5.2."
    },
    {
        "id": "496",
        "title": "Shielding of X-Ray Equipment",
        "code": "3.7.5.3."
    },
    {
        "id": "497",
        "title": "Application",
        "code": "3.7.6.1."
    },
    {
        "id": "498",
        "title": "Room Finishes",
        "code": "3.7.6.2."
    },
    {
        "id": "499",
        "title": "Location of Plumbing Fixtures",
        "code": "3.7.6.3."
    },
    {
        "id": "500",
        "title": "Lavatories, Appliances and Sinks",
        "code": "3.7.6.4."
    },
    {
        "id": "501",
        "title": "Hot and Cold Water Supply",
        "code": "3.7.6.5."
    },
    {
        "id": "502",
        "title": "Employee Facilities",
        "code": "3.7.6.6."
    },
    {
        "id": "503",
        "title": "Sleeping Quarters",
        "code": "3.7.6.7."
    },
    {
        "id": "504",
        "title": "Application",
        "code": "3.8.1.1."
    },
    {
        "id": "505",
        "title": "Entrances",
        "code": "3.8.1.2."
    },
    {
        "id": "506",
        "title": "Barrier-Free Path of Travel",
        "code": "3.8.1.3."
    },
    {
        "id": "507",
        "title": "Escalators and Moving Walks",
        "code": "3.8.1.4."
    },
    {
        "id": "508",
        "title": "Controls",
        "code": "3.8.1.5."
    },
    {
        "id": "509",
        "title": "Illumination",
        "code": "3.8.1.6."
    },
    {
        "id": "510",
        "title": "Areas Requiring Barrier-Free Path of Travel",
        "code": "3.8.2.1."
    },
    {
        "id": "511",
        "title": "Access to Parking Areas",
        "code": "3.8.2.2."
    },
    {
        "id": "512",
        "title": "Washrooms Required to be Barrier-Free",
        "code": "3.8.2.3."
    },
    {
        "id": "513",
        "title": "Hotels",
        "code": "3.8.2.4."
    },
    {
        "id": "514",
        "title": "Accessibility Signs",
        "code": "3.8.3.1."
    },
    {
        "id": "515",
        "title": "Exterior Walks",
        "code": "3.8.3.2."
    },
    {
        "id": "516",
        "title": "Doorways and Doors",
        "code": "3.8.3.3."
    },
    {
        "id": "517",
        "title": "Ramps",
        "code": "3.8.3.4."
    },
    {
        "id": "518",
        "title": "Passenger Elevating Devices",
        "code": "3.8.3.5."
    },
    {
        "id": "519",
        "title": "Wheelchair Spaces and Adaptable Seating",
        "code": "3.8.3.6."
    },
    {
        "id": "520",
        "title": "Assistive Listening Devices",
        "code": "3.8.3.7."
    },
    {
        "id": "521",
        "title": "Water Closet Stalls",
        "code": "3.8.3.8."
    },
    {
        "id": "522",
        "title": "Water Closets",
        "code": "3.8.3.9."
    },
    {
        "id": "523",
        "title": "Urinals",
        "code": "3.8.3.10."
    },
    {
        "id": "524",
        "title": "Lavatories",
        "code": "3.8.3.11."
    },
    {
        "id": "525",
        "title": "Universal Washrooms",
        "code": "3.8.3.12."
    },
    {
        "id": "526",
        "title": "Showers and Bathtubs",
        "code": "3.8.3.13."
    },
    {
        "id": "527",
        "title": "Reserved",
        "code": "3.8.3.14."
    },
    {
        "id": "528",
        "title": "Shelves or Counters for Telephones",
        "code": "3.8.3.15."
    },
    {
        "id": "529",
        "title": "Drinking Fountains",
        "code": "3.8.3.16."
    },
    {
        "id": "530",
        "title": "Platforms",
        "code": "3.8.3.17."
    },
    {
        "id": "531",
        "title": "Tactile Attention Indicators",
        "code": "3.8.3.18."
    },
    {
        "id": "532",
        "title": "Application",
        "code": "3.9.1.1."
    },
    {
        "id": "533",
        "title": "Heating Systems",
        "code": "3.9.1.2."
    },
    {
        "id": "534",
        "title": "Flame-Spread Ratings",
        "code": "3.9.2.1."
    },
    {
        "id": "535",
        "title": "Building Areas",
        "code": "3.9.3.1."
    },
    {
        "id": "536",
        "title": "Spatial Separations",
        "code": "3.9.3.2."
    },
    {
        "id": "537",
        "title": "Fire Alarm Systems",
        "code": "3.9.3.3."
    },
    {
        "id": "538",
        "title": "Provisions for Firefighting",
        "code": "3.9.3.4."
    },
    {
        "id": "539",
        "title": "Portable Fire Extinguishers",
        "code": "3.9.3.5."
    },
    {
        "id": "540",
        "title": "Means of Egress",
        "code": "3.9.3.6."
    },
    {
        "id": "541",
        "title": "Fuel-Fired Appliances",
        "code": "3.9.3.7."
    },
    {
        "id": "542",
        "title": "Washroom Facilities",
        "code": "3.9.3.8."
    },
    {
        "id": "543",
        "title": "Barrier-Free Access",
        "code": "3.9.3.9."
    },
    {
        "id": "544",
        "title": "Application",
        "code": "3.10.1.1."
    },
    {
        "id": "545",
        "title": "Occupancy Classification",
        "code": "3.10.2.1."
    },
    {
        "id": "546",
        "title": "Occupant Load",
        "code": "3.10.2.2."
    },
    {
        "id": "547",
        "title": "Structural Fire Protection",
        "code": "3.10.2.3."
    },
    {
        "id": "548",
        "title": "Safety Requirements Within Floor Areas",
        "code": "3.10.2.4."
    },
    {
        "id": "549",
        "title": "Exit Requirements",
        "code": "3.10.2.5."
    },
    {
        "id": "550",
        "title": "Service Facilities",
        "code": "3.10.2.6."
    },
    {
        "id": "551",
        "title": "Sanitary Facilities",
        "code": "3.10.2.7."
    },
    {
        "id": "552",
        "title": "Application",
        "code": "3.10.3.1."
    },
    {
        "id": "553",
        "title": "Spatial Separations",
        "code": "3.10.3.2."
    },
    {
        "id": "554",
        "title": "Fire Alarm Systems",
        "code": "3.10.3.3."
    },
    {
        "id": "555",
        "title": "Provisions for Firefighting",
        "code": "3.10.3.4."
    },
    {
        "id": "556",
        "title": "Standpipe Systems",
        "code": "3.10.3.5."
    },
    {
        "id": "557",
        "title": "Application",
        "code": "3.10.4.1."
    },
    {
        "id": "558",
        "title": "Building Area",
        "code": "3.10.4.2."
    },
    {
        "id": "559",
        "title": "Spatial Separations",
        "code": "3.10.4.3."
    },
    {
        "id": "560",
        "title": "Fire Alarm Systems",
        "code": "3.10.4.4."
    },
    {
        "id": "561",
        "title": "Provisions for Firefighting",
        "code": "3.10.4.5."
    },
    {
        "id": "562",
        "title": "Application",
        "code": "3.11.1.1."
    },
    {
        "id": "563",
        "title": "Pool Designations",
        "code": "3.11.2.1."
    },
    {
        "id": "564",
        "title": "Construction Requirements",
        "code": "3.11.3.1."
    },
    {
        "id": "565",
        "title": "Barrier-Free Path of Travel for Outdoor Pool Deck",
        "code": "3.11.3.2."
    },
    {
        "id": "566",
        "title": "Access into Public Pools",
        "code": "3.11.3.3."
    },
    {
        "id": "567",
        "title": "Diving Boards or Platforms",
        "code": "3.11.4.1."
    },
    {
        "id": "568",
        "title": "Ramps into Public Pools",
        "code": "3.11.5.1."
    },
    {
        "id": "569",
        "title": "Public Pools in Group B, Division 2 or 3 Major Occupancies",
        "code": "3.11.5.2."
    },
    {
        "id": "570",
        "title": "Construction Requirements",
        "code": "3.11.6.1."
    },
    {
        "id": "571",
        "title": "Construction Requirements",
        "code": "3.11.7.1."
    },
    {
        "id": "572",
        "title": "Recirculation Systems",
        "code": "3.11.8.1."
    },
    {
        "id": "573",
        "title": "Dressing Rooms and Sanitary Facilities",
        "code": "3.11.9.1."
    },
    {
        "id": "574",
        "title": "Lighting and Emergency Provisions",
        "code": "3.11.10.1."
    },
    {
        "id": "575",
        "title": "Service Rooms and Storage Facilities",
        "code": "3.11.11.1."
    },
    {
        "id": "576",
        "title": "Application",
        "code": "3.12.1.1."
    },
    {
        "id": "577",
        "title": "Construction Requirements",
        "code": "3.12.2.1."
    },
    {
        "id": "578",
        "title": "Ramps into Public Spas",
        "code": "3.12.3.1."
    },
    {
        "id": "579",
        "title": "Access into Public Spas",
        "code": "3.12.3.2."
    },
    {
        "id": "580",
        "title": "Water Circulation Systems",
        "code": "3.12.4.1."
    },
    {
        "id": "581",
        "title": "Lighting and Emergency Provisions",
        "code": "3.12.5.1."
    },
    {
        "id": "582",
        "title": "Service Rooms and Storage Facilities",
        "code": "3.12.6.1."
    },
    {
        "id": "583",
        "title": "Scope",
        "code": "3.13.1.1."
    },
    {
        "id": "584",
        "title": "Definitions",
        "code": "3.13.1.2."
    },
    {
        "id": "585",
        "title": "Requirements for Stations",
        "code": "3.13.2.1."
    },
    {
        "id": "586",
        "title": "Application",
        "code": "3.13.3.1."
    },
    {
        "id": "587",
        "title": "Booths and Kiosks",
        "code": "3.13.3.2."
    },
    {
        "id": "588",
        "title": "Service Rooms and Ancillary Spaces",
        "code": "3.13.3.3."
    },
    {
        "id": "589",
        "title": "Leased Areas",
        "code": "3.13.3.4."
    },
    {
        "id": "590",
        "title": "Vehicle Terminal",
        "code": "3.13.3.5."
    },
    {
        "id": "591",
        "title": "Access to Adjacent Building",
        "code": "3.13.3.6."
    },
    {
        "id": "592",
        "title": "Emergency Lighting",
        "code": "3.13.3.7."
    },
    {
        "id": "593",
        "title": "Occupant Load",
        "code": "3.13.4.1."
    },
    {
        "id": "594",
        "title": "General Requirements",
        "code": "3.13.4.2."
    },
    {
        "id": "595",
        "title": "Number and Location of Means of Egress",
        "code": "3.13.4.3."
    },
    {
        "id": "596",
        "title": "Egress Capacity",
        "code": "3.13.4.4."
    },
    {
        "id": "597",
        "title": "Width of Means of Egress",
        "code": "3.13.4.5."
    },
    {
        "id": "598",
        "title": "Egress Facilities",
        "code": "3.13.4.6."
    },
    {
        "id": "599",
        "title": "Fire Alarm System",
        "code": "3.13.5.1."
    },
    {
        "id": "600",
        "title": "Exceptions",
        "code": "3.13.5.2."
    },
    {
        "id": "601",
        "title": "Fire Detectors",
        "code": "3.13.5.3."
    },
    {
        "id": "602",
        "title": "Central Supervising Station",
        "code": "3.13.5.4."
    },
    {
        "id": "603",
        "title": "Annunciators",
        "code": "3.13.5.5."
    },
    {
        "id": "604",
        "title": "Annunciator Indication",
        "code": "3.13.5.6."
    },
    {
        "id": "605",
        "title": "Emergency Power",
        "code": "3.13.5.7."
    },
    {
        "id": "606",
        "title": "Communication Systems",
        "code": "3.13.5.8."
    },
    {
        "id": "607",
        "title": "Emergency Reporting Devices",
        "code": "3.13.5.9."
    },
    {
        "id": "608",
        "title": "Sprinkler Systems",
        "code": "3.13.5.10."
    },
    {
        "id": "609",
        "title": "Standpipe and Hose Systems",
        "code": "3.13.5.11."
    },
    {
        "id": "610",
        "title": "Application",
        "code": "3.13.6.1."
    },
    {
        "id": "611",
        "title": "Washrooms Required",
        "code": "3.13.6.2."
    },
    {
        "id": "612",
        "title": "Application",
        "code": "3.13.7.1."
    },
    {
        "id": "613",
        "title": "Application",
        "code": "3.13.8.1."
    },
    {
        "id": "614",
        "title": "Exception",
        "code": "3.13.8.2."
    },
    {
        "id": "615",
        "title": "Elevator Requirements",
        "code": "3.13.8.3."
    },
    {
        "id": "616",
        "title": "Emergency Operation of Elevators",
        "code": "3.13.8.4."
    },
    {
        "id": "617",
        "title": "Washrooms Required to be Barrier-Free",
        "code": "3.13.8.5."
    },
    {
        "id": "618",
        "title": "Application",
        "code": "3.14.1.1."
    },
    {
        "id": "619",
        "title": "General",
        "code": "3.14.1.2."
    },
    {
        "id": "620",
        "title": "Means of Egress",
        "code": "3.14.1.3."
    },
    {
        "id": "621",
        "title": "Clearance to Other Structures",
        "code": "3.14.1.4."
    },
    {
        "id": "622",
        "title": "Clearances to Flammable Material",
        "code": "3.14.1.5."
    },
    {
        "id": "623",
        "title": "Flame Resistance",
        "code": "3.14.1.6."
    },
    {
        "id": "624",
        "title": "Bleachers",
        "code": "3.14.1.7."
    },
    {
        "id": "625",
        "title": "Sanitary Facilities",
        "code": "3.14.1.8."
    },
    {
        "id": "626",
        "title": "Provision for Firefighting",
        "code": "3.14.1.9."
    },
    {
        "id": "627",
        "title": "Electrical Systems",
        "code": "3.14.1.10."
    },
    {
        "id": "628",
        "title": "Application",
        "code": "3.14.2.1."
    },
    {
        "id": "629",
        "title": "General",
        "code": "3.14.2.2."
    },
    {
        "id": "630",
        "title": "Spatial Separation",
        "code": "3.14.2.3."
    },
    {
        "id": "631",
        "title": "Clearances to Flammable Material",
        "code": "3.14.2.4."
    },
    {
        "id": "632",
        "title": "Flame Resistance",
        "code": "3.14.2.5."
    },
    {
        "id": "633",
        "title": "Emergency Air Supply",
        "code": "3.14.2.6."
    },
    {
        "id": "634",
        "title": "Electrical Systems",
        "code": "3.14.2.7."
    },
    {
        "id": "635",
        "title": "Application",
        "code": "3.15.1.1."
    },
    {
        "id": "636",
        "title": "Exceptions",
        "code": "3.15.1.2."
    },
    {
        "id": "637",
        "title": "Exceptions for Alterations",
        "code": "3.15.2.1."
    },
    {
        "id": "638",
        "title": "Structural Design",
        "code": "3.15.3.1."
    },
    {
        "id": "639",
        "title": "Combustible Sign Faces",
        "code": "3.15.4.1."
    },
    {
        "id": "640",
        "title": "Obstructions not Permitted",
        "code": "3.15.5.1."
    },
    {
        "id": "641",
        "title": "Clearance for Exterior Signs",
        "code": "3.15.5.2."
    },
    {
        "id": "642",
        "title": "Application",
        "code": "3.16.1.1."
    },
    {
        "id": "643",
        "title": "General",
        "code": "3.16.1.2."
    },
    {
        "id": "644",
        "title": "Construction",
        "code": "3.16.1.3."
    },
    {
        "id": "645",
        "title": "Signs",
        "code": "3.16.1.4."
    },
    {
        "id": "646",
        "title": "Lighting",
        "code": "3.16.1.5."
    },
    {
        "id": "647",
        "title": "Sprinkler System",
        "code": "3.16.1.6."
    },
    {
        "id": "648",
        "title": "Exits and Means of Egress",
        "code": "3.16.1.7."
    },
    {
        "id": "649",
        "title": "Application",
        "code": "3.16.2.1."
    },
    {
        "id": "650",
        "title": "Construction",
        "code": "3.16.2.2."
    },
    {
        "id": "651",
        "title": "Application",
        "code": "3.16.3.1."
    },
    {
        "id": "652",
        "title": "Construction",
        "code": "3.16.3.2."
    },
    {
        "id": "653",
        "title": "Application",
        "code": "3.17.1.1."
    },
    {
        "id": "654",
        "title": "Change of Use and Compensating Construction",
        "code": "3.17.2.1."
    },
    {
        "id": "655",
        "title": "Performance Level and Compensating Construction",
        "code": "3.17.2.2."
    },
    {
        "id": "656",
        "title": "Scope",
        "code": "4.1.1.1."
    },
    {
        "id": "657",
        "title": "Reserved",
        "code": "4.1.1.2."
    },
    {
        "id": "658",
        "title": "Design Requirements",
        "code": "4.1.1.3."
    },
    {
        "id": "659",
        "title": "Design Basis",
        "code": "4.1.1.4."
    },
    {
        "id": "660",
        "title": "Loads and Effects",
        "code": "4.1.2.1."
    },
    {
        "id": "661",
        "title": "Loads Not Listed",
        "code": "4.1.2.2."
    },
    {
        "id": "662",
        "title": "Definitions",
        "code": "4.1.3.1."
    },
    {
        "id": "663",
        "title": "Strength and Stability",
        "code": "4.1.3.2."
    },
    {
        "id": "664",
        "title": "Fatigue",
        "code": "4.1.3.3."
    },
    {
        "id": "665",
        "title": "Serviceability",
        "code": "4.1.3.4."
    },
    {
        "id": "666",
        "title": "Deflection",
        "code": "4.1.3.5."
    },
    {
        "id": "667",
        "title": "Vibration",
        "code": "4.1.3.6."
    },
    {
        "id": "668",
        "title": "Dead Loads",
        "code": "4.1.4.1."
    },
    {
        "id": "669",
        "title": "Loads Due to Use of Floors and Roofs",
        "code": "4.1.5.1."
    },
    {
        "id": "670",
        "title": "Uses Not Stipulated",
        "code": "4.1.5.2."
    },
    {
        "id": "671",
        "title": "Full and Partial Loading",
        "code": "4.1.5.3."
    },
    {
        "id": "672",
        "title": "Loads for Occupancy Served",
        "code": "4.1.5.4."
    },
    {
        "id": "673",
        "title": "Loads on Exterior Areas",
        "code": "4.1.5.5."
    },
    {
        "id": "674",
        "title": "Loads for Dining Areas",
        "code": "4.1.5.6."
    },
    {
        "id": "675",
        "title": "More Than One Occupancy",
        "code": "4.1.5.7."
    },
    {
        "id": "676",
        "title": "Variation with Tributary Area",
        "code": "4.1.5.8."
    },
    {
        "id": "677",
        "title": "Concentrated Loads",
        "code": "4.1.5.9."
    },
    {
        "id": "678",
        "title": "Sway Forces in Assembly Occupancies",
        "code": "4.1.5.10."
    },
    {
        "id": "679",
        "title": "Crane-Supporting Structures and Impact of Machinery and Equipment",
        "code": "4.1.5.11."
    },
    {
        "id": "680",
        "title": "Bleachers",
        "code": "4.1.5.12."
    },
    {
        "id": "681",
        "title": "Helicopter Landing Areas",
        "code": "4.1.5.13."
    },
    {
        "id": "682",
        "title": "Loads on Guards",
        "code": "4.1.5.14."
    },
    {
        "id": "683",
        "title": "Loads on Vehicle Guardrails",
        "code": "4.1.5.15."
    },
    {
        "id": "684",
        "title": "Loads on Walls Acting As Guards",
        "code": "4.1.5.16."
    },
    {
        "id": "685",
        "title": "Firewalls",
        "code": "4.1.5.17."
    },
    {
        "id": "686",
        "title": "Specified Load Due to Rain or to Snow and Associated Rain",
        "code": "4.1.6.1."
    },
    {
        "id": "687",
        "title": "Specified Snow Load",
        "code": "4.1.6.2."
    },
    {
        "id": "688",
        "title": "Full and Partial Loading",
        "code": "4.1.6.3."
    },
    {
        "id": "689",
        "title": "Specified Rain Load",
        "code": "4.1.6.4."
    },
    {
        "id": "690",
        "title": "Specified Wind Load",
        "code": "4.1.7.1."
    },
    {
        "id": "691",
        "title": "Dynamic Effects of Wind",
        "code": "4.1.7.2."
    },
    {
        "id": "692",
        "title": "Full and Partial Loading",
        "code": "4.1.7.3."
    },
    {
        "id": "693",
        "title": "Interior Walls and Partitions",
        "code": "4.1.7.4."
    },
    {
        "id": "694",
        "title": "Analysis",
        "code": "4.1.8.1."
    },
    {
        "id": "695",
        "title": "Notation",
        "code": "4.1.8.2."
    },
    {
        "id": "696",
        "title": "General Requirements",
        "code": "4.1.8.3."
    },
    {
        "id": "697",
        "title": "Site Properties",
        "code": "4.1.8.4."
    },
    {
        "id": "698",
        "title": "Importance Factor",
        "code": "4.1.8.5."
    },
    {
        "id": "699",
        "title": "Structural Configuration",
        "code": "4.1.8.6."
    },
    {
        "id": "700",
        "title": "Methods of Analysis",
        "code": "4.1.8.7."
    },
    {
        "id": "701",
        "title": "Direction of Loading",
        "code": "4.1.8.8."
    },
    {
        "id": "702",
        "title": "SFRS Force Reduction Factors, System Overstrength Factors, and General Restrictions",
        "code": "4.1.8.9."
    },
    {
        "id": "703",
        "title": "Additional System Restrictions",
        "code": "4.1.8.10."
    },
    {
        "id": "704",
        "title": "Equivalent Static Force Procedure for Structures Satisfying the Conditions of Article 4.1.8.7.",
        "code": "4.1.8.11."
    },
    {
        "id": "705",
        "title": "Dynamic Analysis Procedure",
        "code": "4.1.8.12."
    },
    {
        "id": "706",
        "title": "Deflections and Drift Limits",
        "code": "4.1.8.13."
    },
    {
        "id": "707",
        "title": "Structural Separation",
        "code": "4.1.8.14."
    },
    {
        "id": "708",
        "title": "Design Provisions",
        "code": "4.1.8.15."
    },
    {
        "id": "709",
        "title": "Foundation Provisions",
        "code": "4.1.8.16."
    },
    {
        "id": "710",
        "title": "Site Stability",
        "code": "4.1.8.17."
    },
    {
        "id": "711",
        "title": "Elements of Structures, Non-structural Components and Equipment",
        "code": "4.1.8.18."
    },
    {
        "id": "712",
        "title": "Application",
        "code": "4.2.1.1."
    },
    {
        "id": "713",
        "title": "Subsurface Investigation",
        "code": "4.2.2.1."
    },
    {
        "id": "714",
        "title": "Field Review",
        "code": "4.2.2.2."
    },
    {
        "id": "715",
        "title": "Altered Subsurface Condition",
        "code": "4.2.2.3."
    },
    {
        "id": "716",
        "title": "Wood",
        "code": "4.2.3.1."
    },
    {
        "id": "717",
        "title": "Preservation Treatment of Wood",
        "code": "4.2.3.2."
    },
    {
        "id": "718",
        "title": "Plain and Reinforced Masonry",
        "code": "4.2.3.3."
    },
    {
        "id": "719",
        "title": "Prevention of Deterioration of Masonry",
        "code": "4.2.3.4."
    },
    {
        "id": "720",
        "title": "Concrete",
        "code": "4.2.3.5."
    },
    {
        "id": "721",
        "title": "Protection Against Chemical Attack",
        "code": "4.2.3.6."
    },
    {
        "id": "722",
        "title": "Steel",
        "code": "4.2.3.7."
    },
    {
        "id": "723",
        "title": "Steel Piles",
        "code": "4.2.3.8."
    },
    {
        "id": "724",
        "title": "High Strength Steel Tendons",
        "code": "4.2.3.9."
    },
    {
        "id": "725",
        "title": "Corrosion of Steel",
        "code": "4.2.3.10."
    },
    {
        "id": "726",
        "title": "Design Basis",
        "code": "4.2.4.1."
    },
    {
        "id": "727",
        "title": "Subsurface Investigation",
        "code": "4.2.4.2."
    },
    {
        "id": "728",
        "title": "Identification",
        "code": "4.2.4.3."
    },
    {
        "id": "729",
        "title": "Depth of Foundations",
        "code": "4.2.4.4."
    },
    {
        "id": "730",
        "title": "Sloping Ground",
        "code": "4.2.4.5."
    },
    {
        "id": "731",
        "title": "Eccentric and Inclined Loads",
        "code": "4.2.4.6."
    },
    {
        "id": "732",
        "title": "Dynamic Loading",
        "code": "4.2.4.7."
    },
    {
        "id": "733",
        "title": "Hydrostatic Uplift",
        "code": "4.2.4.8."
    },
    {
        "id": "734",
        "title": "Groundwater Level Change",
        "code": "4.2.4.9."
    },
    {
        "id": "735",
        "title": "Permafrost",
        "code": "4.2.4.10."
    },
    {
        "id": "736",
        "title": "Swelling and Shrinking Soils",
        "code": "4.2.4.11."
    },
    {
        "id": "737",
        "title": "Expanding and Deteriorating Rock",
        "code": "4.2.4.12."
    },
    {
        "id": "738",
        "title": "Construction on Fill",
        "code": "4.2.4.13."
    },
    {
        "id": "739",
        "title": "Structural Design",
        "code": "4.2.4.14."
    },
    {
        "id": "740",
        "title": "Design of Excavations",
        "code": "4.2.5.1."
    },
    {
        "id": "741",
        "title": "Excavation Construction",
        "code": "4.2.5.2."
    },
    {
        "id": "742",
        "title": "Supported Excavations",
        "code": "4.2.5.3."
    },
    {
        "id": "743",
        "title": "Unsupported Excavations",
        "code": "4.2.5.4."
    },
    {
        "id": "744",
        "title": "Control of Water Around Excavations",
        "code": "4.2.5.5."
    },
    {
        "id": "745",
        "title": "Loss of Ground",
        "code": "4.2.5.6."
    },
    {
        "id": "746",
        "title": "Protection and Maintenance at Excavations",
        "code": "4.2.5.7."
    },
    {
        "id": "747",
        "title": "Backfilling",
        "code": "4.2.5.8."
    },
    {
        "id": "748",
        "title": "Design of Shallow Foundations",
        "code": "4.2.6.1."
    },
    {
        "id": "749",
        "title": "Support of Shallow Foundations",
        "code": "4.2.6.2."
    },
    {
        "id": "750",
        "title": "Incorrect Placement of Shallow Foundations",
        "code": "4.2.6.3."
    },
    {
        "id": "751",
        "title": "Damaged Shallow Foundations",
        "code": "4.2.6.4."
    },
    {
        "id": "752",
        "title": "General",
        "code": "4.2.7.1."
    },
    {
        "id": "753",
        "title": "Design for Deep Foundations",
        "code": "4.2.7.2."
    },
    {
        "id": "754",
        "title": "Tolerance in Alignment and Location",
        "code": "4.2.7.3."
    },
    {
        "id": "755",
        "title": "Incorrect Alignment and Location",
        "code": "4.2.7.4."
    },
    {
        "id": "756",
        "title": "Installation of Deep Foundations",
        "code": "4.2.7.5."
    },
    {
        "id": "757",
        "title": "Damaged Deep Foundation Units",
        "code": "4.2.7.6."
    },
    {
        "id": "758",
        "title": "General",
        "code": "4.2.8.1."
    },
    {
        "id": "759",
        "title": "Use of Existing Foundations",
        "code": "4.2.8.2."
    },
    {
        "id": "760",
        "title": "Design Basis for Wood",
        "code": "4.3.1.1."
    },
    {
        "id": "761",
        "title": "Glue-Laminated Members",
        "code": "4.3.1.2."
    },
    {
        "id": "762",
        "title": "Termites",
        "code": "4.3.1.3."
    },
    {
        "id": "763",
        "title": "Design Basis for Plain and Reinforced Masonry",
        "code": "4.3.2.1."
    },
    {
        "id": "764",
        "title": "Design Basis for Plain, Reinforced and Prestressed Concrete",
        "code": "4.3.3.1."
    },
    {
        "id": "765",
        "title": "Design Basis for Structural Steel",
        "code": "4.3.4.1."
    },
    {
        "id": "766",
        "title": "Design Basis for Cold Formed Steel",
        "code": "4.3.4.2."
    },
    {
        "id": "767",
        "title": "Steel Building Systems",
        "code": "4.3.4.3."
    },
    {
        "id": "768",
        "title": "Design Basis for Aluminium",
        "code": "4.3.5.1."
    },
    {
        "id": "769",
        "title": "Design Basis for Glass",
        "code": "4.3.6.1."
    },
    {
        "id": "770",
        "title": "Design Basis for Air-Supported Structures",
        "code": "4.4.1.1."
    },
    {
        "id": "771",
        "title": "Design Basis for Parking Structures",
        "code": "4.4.2.1."
    },
    {
        "id": "772",
        "title": "Guards over Retaining Walls",
        "code": "4.4.3.1."
    },
    {
        "id": "773",
        "title": "Anchor Systems on Building Exterior",
        "code": "4.4.4.1."
    },
    {
        "id": "774",
        "title": "Liquid Manure Storage Tanks",
        "code": "4.4.5.1."
    },
    {
        "id": "775",
        "title": "Scope",
        "code": "5.1.1.1."
    },
    {
        "id": "776",
        "title": "Exposure to Exterior Space or the Ground and Separation of Dissimilar Environments",
        "code": "5.1.2.1."
    },
    {
        "id": "777",
        "title": "Reserved",
        "code": "5.1.3.1."
    },
    {
        "id": "778",
        "title": "Structural and Environmental Loads",
        "code": "5.1.4.1."
    },
    {
        "id": "779",
        "title": "Resistance to Deterioration",
        "code": "5.1.4.2."
    },
    {
        "id": "780",
        "title": "Requirements in other Parts of the Code",
        "code": "5.1.5.1."
    },
    {
        "id": "781",
        "title": "Exterior Environmental Loads",
        "code": "5.2.1.1."
    },
    {
        "id": "782",
        "title": "Interior Environmental Loads",
        "code": "5.2.1.2."
    },
    {
        "id": "783",
        "title": "Environmental Load and Transfer Calculations",
        "code": "5.2.1.3."
    },
    {
        "id": "784",
        "title": "Determination of Structural Loads and Effects",
        "code": "5.2.2.1."
    },
    {
        "id": "785",
        "title": "Determination of Wind Load",
        "code": "5.2.2.2."
    },
    {
        "id": "786",
        "title": "Design Procedures",
        "code": "5.2.2.3."
    },
    {
        "id": "787",
        "title": "Required Resistance to Heat Transfer",
        "code": "5.3.1.1."
    },
    {
        "id": "788",
        "title": "Properties to Resist Heat Transfer or Dissipate Heat",
        "code": "5.3.1.2."
    },
    {
        "id": "789",
        "title": "Location and Installation of Materials Providing Thermal Resistance",
        "code": "5.3.1.3."
    },
    {
        "id": "790",
        "title": "Required Resistance to Air Leakage",
        "code": "5.4.1.1."
    },
    {
        "id": "791",
        "title": "Air Barrier System Properties",
        "code": "5.4.1.2."
    },
    {
        "id": "792",
        "title": "Required Resistance to Vapour Diffusion",
        "code": "5.5.1.1."
    },
    {
        "id": "793",
        "title": "Vapour Barrier Properties and Installation",
        "code": "5.5.1.2."
    },
    {
        "id": "794",
        "title": "Required Protection from Precipitation",
        "code": "5.6.1.1."
    },
    {
        "id": "795",
        "title": "Installation of Protective Materials",
        "code": "5.6.1.2."
    },
    {
        "id": "796",
        "title": "Sealing and Drainage",
        "code": "5.6.2.1."
    },
    {
        "id": "797",
        "title": "Accumulation and Disposal",
        "code": "5.6.2.2."
    },
    {
        "id": "798",
        "title": "Solar Collector Systems",
        "code": "5.6.2.3."
    },
    {
        "id": "799",
        "title": "Prevention of Accumulation and Ingress",
        "code": "5.7.1.1."
    },
    {
        "id": "800",
        "title": "Required Drainage",
        "code": "5.8.1.1."
    },
    {
        "id": "801",
        "title": "Drainage Materials and Installation",
        "code": "5.8.1.2."
    },
    {
        "id": "802",
        "title": "Required Moisture Protection",
        "code": "5.8.2.1."
    },
    {
        "id": "803",
        "title": "Protective Material and Component Properties",
        "code": "5.8.2.2."
    },
    {
        "id": "804",
        "title": "Installation of Moisture Protection",
        "code": "5.8.2.3."
    },
    {
        "id": "805",
        "title": "Sound Transmission Class",
        "code": "5.9.1.1."
    },
    {
        "id": "806",
        "title": "Required Protection from Noise",
        "code": "5.9.1.2."
    },
    {
        "id": "807",
        "title": "Compliance with Applicable Standards",
        "code": "5.10.1.1."
    },
    {
        "id": "808",
        "title": "General",
        "code": "5.10.2.1."
    },
    {
        "id": "809",
        "title": "Applicable Standards",
        "code": "5.10.2.2."
    },
    {
        "id": "810",
        "title": "Structural Loads, Air Leakage and Water Penetration",
        "code": "5.10.2.3."
    },
    {
        "id": "811",
        "title": "Heat Transfer",
        "code": "5.10.2.4."
    },
    {
        "id": "812",
        "title": "Applicable Standards",
        "code": "5.10.3.1."
    },
    {
        "id": "813",
        "title": "Scope",
        "code": "6.1.1.1."
    },
    {
        "id": "814",
        "title": "Application",
        "code": "6.1.1.2."
    },
    {
        "id": "815",
        "title": "Good Engineering Practice",
        "code": "6.2.1.1."
    },
    {
        "id": "816",
        "title": "Design Indoor Air Temperatures",
        "code": "6.2.1.2."
    },
    {
        "id": "817",
        "title": "Structural Movement",
        "code": "6.2.1.3."
    },
    {
        "id": "818",
        "title": "Installation Standards",
        "code": "6.2.1.4."
    },
    {
        "id": "819",
        "title": "Fireplaces",
        "code": "6.2.1.5."
    },
    {
        "id": "820",
        "title": "Heat Recovery Ventilators",
        "code": "6.2.1.6."
    },
    {
        "id": "821",
        "title": "Outside Design Conditions",
        "code": "6.2.1.7."
    },
    {
        "id": "822",
        "title": "Installation – General",
        "code": "6.2.1.8."
    },
    {
        "id": "823",
        "title": "Expansion, Contraction and System Pressure",
        "code": "6.2.1.9."
    },
    {
        "id": "824",
        "title": "Asbestos",
        "code": "6.2.1.10."
    },
    {
        "id": "825",
        "title": "Access Openings",
        "code": "6.2.1.11."
    },
    {
        "id": "826",
        "title": "Combustible Tubing",
        "code": "6.2.1.12."
    },
    {
        "id": "827",
        "title": "Required Ventilation",
        "code": "6.2.2.1."
    },
    {
        "id": "828",
        "title": "Natural Ventilation",
        "code": "6.2.2.2."
    },
    {
        "id": "829",
        "title": "Ventilation of Storage and Repair Garages",
        "code": "6.2.2.3."
    },
    {
        "id": "830",
        "title": "Air Contaminants",
        "code": "6.2.2.4."
    },
    {
        "id": "831",
        "title": "Hazardous Gases, Dusts or Liquids",
        "code": "6.2.2.5."
    },
    {
        "id": "832",
        "title": "Commercial Cooking Equipment",
        "code": "6.2.2.6."
    },
    {
        "id": "833",
        "title": "Crawl Spaces and Attic or Roof Spaces",
        "code": "6.2.2.7."
    },
    {
        "id": "834",
        "title": "Application",
        "code": "6.2.3.1."
    },
    {
        "id": "835",
        "title": "Materials in Air Duct Systems",
        "code": "6.2.3.2."
    },
    {
        "id": "836",
        "title": "Connections and Openings in Air Duct Systems",
        "code": "6.2.3.3."
    },
    {
        "id": "837",
        "title": "Duct Coverings, Linings, Adhesives and Insulation",
        "code": "6.2.3.4."
    },
    {
        "id": "838",
        "title": "Underground Ducts",
        "code": "6.2.3.5."
    },
    {
        "id": "839",
        "title": "Fire Dampers",
        "code": "6.2.3.6."
    },
    {
        "id": "840",
        "title": "Smoke Detector Control",
        "code": "6.2.3.7."
    },
    {
        "id": "841",
        "title": "Exhaust Ducts and Outlets",
        "code": "6.2.3.8."
    },
    {
        "id": "842",
        "title": "Interconnection of Systems",
        "code": "6.2.3.9."
    },
    {
        "id": "843",
        "title": "Ducts in Exits",
        "code": "6.2.3.10."
    },
    {
        "id": "844",
        "title": "Make-up Air",
        "code": "6.2.3.11."
    },
    {
        "id": "845",
        "title": "Supply, Return, Intake and Exhaust Air Openings",
        "code": "6.2.3.12."
    },
    {
        "id": "846",
        "title": "Filters and Odour Removal Equipment",
        "code": "6.2.3.13."
    },
    {
        "id": "847",
        "title": "Air Washers and Evaporative Cooling Sections or Towers",
        "code": "6.2.3.14."
    },
    {
        "id": "848",
        "title": "Fans and Associated Air Handling Equipment",
        "code": "6.2.3.15."
    },
    {
        "id": "849",
        "title": "Vibration Isolation Connectors",
        "code": "6.2.3.16."
    },
    {
        "id": "850",
        "title": "Tape",
        "code": "6.2.3.17."
    },
    {
        "id": "851",
        "title": "Construction and Installation of Ducts and Plenums",
        "code": "6.2.3.18."
    },
    {
        "id": "852",
        "title": "Clearances of Ducts and Plenums",
        "code": "6.2.3.19."
    },
    {
        "id": "853",
        "title": "Return-Air System",
        "code": "6.2.3.20."
    },
    {
        "id": "854",
        "title": "Application",
        "code": "6.2.4.1."
    },
    {
        "id": "855",
        "title": "Duct Design",
        "code": "6.2.4.2."
    },
    {
        "id": "856",
        "title": "Construction and Installation of Ducts and Plenums",
        "code": "6.2.4.3."
    },
    {
        "id": "857",
        "title": "Warm-Air Supply Outlets",
        "code": "6.2.4.4."
    },
    {
        "id": "858",
        "title": "Reserved",
        "code": "6.2.4.5."
    },
    {
        "id": "859",
        "title": "Adjustable Dampers and Balance Stops",
        "code": "6.2.4.6."
    },
    {
        "id": "860",
        "title": "Return-Air System",
        "code": "6.2.4.7."
    },
    {
        "id": "861",
        "title": "Coverings, Linings and Insulation",
        "code": "6.2.4.8."
    },
    {
        "id": "862",
        "title": "Tape",
        "code": "6.2.4.9."
    },
    {
        "id": "863",
        "title": "Clearances of Ducts and Plenums",
        "code": "6.2.4.10."
    },
    {
        "id": "864",
        "title": "Exhaust Ducts and Outlets",
        "code": "6.2.4.11."
    },
    {
        "id": "865",
        "title": "Make-up Air",
        "code": "6.2.4.12."
    },
    {
        "id": "866",
        "title": "Supply, Return, Intake and Exhaust Air Openings",
        "code": "6.2.4.13."
    },
    {
        "id": "867",
        "title": "Air Filters and Equipment",
        "code": "6.2.4.14."
    },
    {
        "id": "868",
        "title": "Location of Appliances",
        "code": "6.2.5.1."
    },
    {
        "id": "869",
        "title": "Appliances Installed Outside the Building",
        "code": "6.2.5.2."
    },
    {
        "id": "870",
        "title": "Applicable Standard",
        "code": "6.2.6.1."
    },
    {
        "id": "871",
        "title": "Clearances",
        "code": "6.2.7.1."
    },
    {
        "id": "872",
        "title": "Lining or Backing",
        "code": "6.2.8.1."
    },
    {
        "id": "873",
        "title": "Piping Materials and Installation",
        "code": "6.2.9.1."
    },
    {
        "id": "874",
        "title": "Insulation and Coverings",
        "code": "6.2.9.2."
    },
    {
        "id": "875",
        "title": "Clearances",
        "code": "6.2.9.3."
    },
    {
        "id": "876",
        "title": "Surface Temperature",
        "code": "6.2.9.4."
    },
    {
        "id": "877",
        "title": "Protection",
        "code": "6.2.9.5."
    },
    {
        "id": "878",
        "title": "Piping in Shafts",
        "code": "6.2.9.6."
    },
    {
        "id": "879",
        "title": "Cooling Units",
        "code": "6.2.10.1."
    },
    {
        "id": "880",
        "title": "Storage Bins",
        "code": "6.2.11.1."
    },
    {
        "id": "881",
        "title": "Ash Storage Bins",
        "code": "6.2.11.2."
    },
    {
        "id": "882",
        "title": "Application",
        "code": "6.2.12.1."
    },
    {
        "id": "883",
        "title": "Location of Carbon Monoxide Alarms",
        "code": "6.2.12.2."
    },
    {
        "id": "884",
        "title": "Installation and Conformance to Standards",
        "code": "6.2.12.3."
    },
    {
        "id": "885",
        "title": "Application",
        "code": "6.2.13.1."
    },
    {
        "id": "886",
        "title": "General Ventilation",
        "code": "6.2.13.2."
    },
    {
        "id": "887",
        "title": "Power-Ventilated Enclosure",
        "code": "6.2.13.3."
    },
    {
        "id": "888",
        "title": "Enclosure Exhaust Ventilation",
        "code": "6.2.13.4."
    },
    {
        "id": "889",
        "title": "Enclosure Construction",
        "code": "6.2.13.5."
    },
    {
        "id": "890",
        "title": "Requirement for Venting",
        "code": "6.3.1.1."
    },
    {
        "id": "891",
        "title": "Masonry or Concrete Chimneys",
        "code": "6.3.1.2."
    },
    {
        "id": "892",
        "title": "Metal Smoke Stacks",
        "code": "6.3.1.3."
    },
    {
        "id": "893",
        "title": "Reserved",
        "code": "6.3.1.4."
    },
    {
        "id": "894",
        "title": "Access Ladders",
        "code": "6.3.1.5."
    },
    {
        "id": "895",
        "title": "Scope",
        "code": "7.1.1.1."
    },
    {
        "id": "896",
        "title": "Application",
        "code": "7.1.2.1."
    },
    {
        "id": "897",
        "title": "Definitions",
        "code": "7.1.3.1."
    },
    {
        "id": "898",
        "title": "Facilities Required",
        "code": "7.1.4.1."
    },
    {
        "id": "899",
        "title": "Floor Drains",
        "code": "7.1.4.2."
    },
    {
        "id": "900",
        "title": "Sanitary Drainage Systems",
        "code": "7.1.5.1."
    },
    {
        "id": "901",
        "title": "Storm Drainage Systems",
        "code": "7.1.5.2."
    },
    {
        "id": "902",
        "title": "Water Distribution Systems",
        "code": "7.1.5.3."
    },
    {
        "id": "903",
        "title": "Separate Services",
        "code": "7.1.5.4."
    },
    {
        "id": "904",
        "title": "Private Sewers and Private Water Supply",
        "code": "7.1.5.5."
    },
    {
        "id": "905",
        "title": "Lighting and Ventilation Requirements",
        "code": "7.1.6.1."
    },
    {
        "id": "906",
        "title": "Accessibility",
        "code": "7.1.6.2."
    },
    {
        "id": "907",
        "title": "Structural Movement",
        "code": "7.1.7.1."
    },
    {
        "id": "908",
        "title": "Exposure of Materials",
        "code": "7.2.1.1."
    },
    {
        "id": "909",
        "title": "Restrictions on Re-Use",
        "code": "7.2.1.2."
    },
    {
        "id": "910",
        "title": "Identification and Certification",
        "code": "7.2.1.3."
    },
    {
        "id": "911",
        "title": "Pipe or Piping",
        "code": "7.2.1.4."
    },
    {
        "id": "912",
        "title": "Withstanding Pressure",
        "code": "7.2.1.5."
    },
    {
        "id": "913",
        "title": "Surface Requirements",
        "code": "7.2.2.1."
    },
    {
        "id": "914",
        "title": "Conformance to Standards",
        "code": "7.2.2.2."
    },
    {
        "id": "915",
        "title": "Showers",
        "code": "7.2.2.3."
    },
    {
        "id": "916",
        "title": "Concealed Overflows",
        "code": "7.2.2.4."
    },
    {
        "id": "917",
        "title": "Water Closets in Public Washrooms",
        "code": "7.2.2.5."
    },
    {
        "id": "918",
        "title": "Lavatories",
        "code": "7.2.2.6."
    },
    {
        "id": "919",
        "title": "Trough Urinals",
        "code": "7.2.2.7."
    },
    {
        "id": "920",
        "title": "Traps",
        "code": "7.2.3.1."
    },
    {
        "id": "921",
        "title": "Interceptors",
        "code": "7.2.3.2."
    },
    {
        "id": "922",
        "title": "Tubular Traps",
        "code": "7.2.3.3."
    },
    {
        "id": "923",
        "title": "T and Cross Fittings",
        "code": "7.2.4.1."
    },
    {
        "id": "924",
        "title": "Sanitary T Fittings",
        "code": "7.2.4.2."
    },
    {
        "id": "925",
        "title": "90° Elbows",
        "code": "7.2.4.3."
    },
    {
        "id": "926",
        "title": "Fittings Restricted in Use",
        "code": "7.2.4.4."
    },
    {
        "id": "927",
        "title": "Assembled Pipe or Tubing",
        "code": "7.2.4.5."
    },
    {
        "id": "928",
        "title": "Asbestos-Cement Drainage Pipe and Fittings",
        "code": "7.2.5.1."
    },
    {
        "id": "929",
        "title": "Reserved",
        "code": "7.2.5.2."
    },
    {
        "id": "930",
        "title": "Concrete Pipe and Fittings",
        "code": "7.2.5.3."
    },
    {
        "id": "931",
        "title": "Vitrified Clay Pipe and Fittings",
        "code": "7.2.5.4."
    },
    {
        "id": "932",
        "title": "Polyethylene Pipe and Fittings",
        "code": "7.2.5.5."
    },
    {
        "id": "933",
        "title": "Polyethylene Pipe Used Underground",
        "code": "7.2.5.6."
    },
    {
        "id": "934",
        "title": "Crosslinked Polyethylene Pipe and Fittings",
        "code": "7.2.5.7."
    },
    {
        "id": "935",
        "title": "PVC Pipe and Fittings",
        "code": "7.2.5.8."
    },
    {
        "id": "936",
        "title": "CPVC Pipe, Fittings and Solvent Cements",
        "code": "7.2.5.9."
    },
    {
        "id": "937",
        "title": "Plastic Pipe, Fittings and Solvent Cement Used Underground",
        "code": "7.2.5.10."
    },
    {
        "id": "938",
        "title": "Transition Solvent Cement",
        "code": "7.2.5.11."
    },
    {
        "id": "939",
        "title": "Plastic Pipe, Fittings and Solvent Cement Used in Buildings",
        "code": "7.2.5.12."
    },
    {
        "id": "940",
        "title": "Polyethylene/Aluminum/Polyethylene Composite Pipe and Fittings",
        "code": "7.2.5.13."
    },
    {
        "id": "941",
        "title": "Crosslinked Polyethylene/Aluminum/Polyethylene Composite Pipe and Fittings",
        "code": "7.2.5.14."
    },
    {
        "id": "942",
        "title": "Polypropylene Pipe and Fittings",
        "code": "7.2.5.15."
    },
    {
        "id": "943",
        "title": "Cast Iron Drainage and Vent Pipe and Fittings",
        "code": "7.2.6.1."
    },
    {
        "id": "944",
        "title": "Cast Iron Fittings for Asbestos-Cement Drainage Pipe",
        "code": "7.2.6.2."
    },
    {
        "id": "945",
        "title": "Threaded Cast Iron Drainage Fittings",
        "code": "7.2.6.3."
    },
    {
        "id": "946",
        "title": "Cast Iron Water Pipe",
        "code": "7.2.6.4."
    },
    {
        "id": "947",
        "title": "Screwed Cast Iron Water Fittings",
        "code": "7.2.6.5."
    },
    {
        "id": "948",
        "title": "Screwed Malleable Iron Water Fittings",
        "code": "7.2.6.6."
    },
    {
        "id": "949",
        "title": "Steel Pipe",
        "code": "7.2.6.7."
    },
    {
        "id": "950",
        "title": "Corrugated Steel Pipe and Couplings",
        "code": "7.2.6.8."
    },
    {
        "id": "951",
        "title": "Sheet Metal Leaders",
        "code": "7.2.6.9."
    },
    {
        "id": "952",
        "title": "Copper and Brass Pipe",
        "code": "7.2.7.1."
    },
    {
        "id": "953",
        "title": "Brass or Bronze Pipe Flanges and Flanged Fittings",
        "code": "7.2.7.2."
    },
    {
        "id": "954",
        "title": "Brass or Bronze Threaded Water Fittings",
        "code": "7.2.7.3."
    },
    {
        "id": "955",
        "title": "Copper Tube",
        "code": "7.2.7.4."
    },
    {
        "id": "956",
        "title": "Solder-Joint Drainage Fittings",
        "code": "7.2.7.5."
    },
    {
        "id": "957",
        "title": "Solder-Joint Water Fittings",
        "code": "7.2.7.6."
    },
    {
        "id": "958",
        "title": "Flared-Joint Fittings for Copper Tube Water Systems",
        "code": "7.2.7.7."
    },
    {
        "id": "959",
        "title": "Lead Waste Pipe and Fittings",
        "code": "7.2.7.8."
    },
    {
        "id": "960",
        "title": "Pipe and Fittings",
        "code": "7.2.8.1."
    },
    {
        "id": "961",
        "title": "Cement-Mortar",
        "code": "7.2.9.1."
    },
    {
        "id": "962",
        "title": "Solder and Fluxes",
        "code": "7.2.9.2."
    },
    {
        "id": "963",
        "title": "Floor Flanges",
        "code": "7.2.10.1."
    },
    {
        "id": "964",
        "title": "Screws, Bolts, Nuts and Washers",
        "code": "7.2.10.2."
    },
    {
        "id": "965",
        "title": "Cleanout Fittings",
        "code": "7.2.10.3."
    },
    {
        "id": "966",
        "title": "Mechanical Couplings",
        "code": "7.2.10.4."
    },
    {
        "id": "967",
        "title": "Saddle Hubs",
        "code": "7.2.10.5."
    },
    {
        "id": "968",
        "title": "Supply and Waste Fittings",
        "code": "7.2.10.6."
    },
    {
        "id": "969",
        "title": "Linings and Coatings of Domestic Water Tanks",
        "code": "7.2.10.7."
    },
    {
        "id": "970",
        "title": "Direct Flush Valves",
        "code": "7.2.10.8."
    },
    {
        "id": "971",
        "title": "Drinking Fountain Bubblers",
        "code": "7.2.10.9."
    },
    {
        "id": "972",
        "title": "Back-Siphonage Preventers and Backflow Preventers",
        "code": "7.2.10.10."
    },
    {
        "id": "973",
        "title": "Relief Valves",
        "code": "7.2.10.11."
    },
    {
        "id": "974",
        "title": "Reducing Valves",
        "code": "7.2.10.12."
    },
    {
        "id": "975",
        "title": "Solar Domestic Hot Water",
        "code": "7.2.10.13."
    },
    {
        "id": "976",
        "title": "Vent Pipe Flashing",
        "code": "7.2.10.14."
    },
    {
        "id": "977",
        "title": "Water Hammer Arresters",
        "code": "7.2.10.15."
    },
    {
        "id": "978",
        "title": "Air Admittance Valves",
        "code": "7.2.10.16."
    },
    {
        "id": "979",
        "title": "Drinking Water Treatment Systems",
        "code": "7.2.10.17."
    },
    {
        "id": "980",
        "title": "Design, Construction, Installation and Testing",
        "code": "7.2.11.1."
    },
    {
        "id": "981",
        "title": "Certification or Conformance",
        "code": "7.2.11.2."
    },
    {
        "id": "982",
        "title": "Tracer Wire",
        "code": "7.2.11.3."
    },
    {
        "id": "983",
        "title": "Required Check Valve",
        "code": "7.2.11.4."
    },
    {
        "id": "984",
        "title": "Application",
        "code": "7.3.1.1."
    },
    {
        "id": "985",
        "title": "Caulked Lead Drainage Joints",
        "code": "7.3.2.1."
    },
    {
        "id": "986",
        "title": "Wiped Joints",
        "code": "7.3.2.2."
    },
    {
        "id": "987",
        "title": "Screwed Joints",
        "code": "7.3.2.3."
    },
    {
        "id": "988",
        "title": "Solder Joints",
        "code": "7.3.2.4."
    },
    {
        "id": "989",
        "title": "Flared Joints",
        "code": "7.3.2.5."
    },
    {
        "id": "990",
        "title": "Mechanical Joints",
        "code": "7.3.2.6."
    },
    {
        "id": "991",
        "title": "Cold-Caulked Joints",
        "code": "7.3.2.7."
    },
    {
        "id": "992",
        "title": "Drilled and Tapped Joints",
        "code": "7.3.3.1."
    },
    {
        "id": "993",
        "title": "Reserved",
        "code": "7.3.3.2."
    },
    {
        "id": "994",
        "title": "Prohibition of Welding of Pipes and Fittings",
        "code": "7.3.3.3."
    },
    {
        "id": "995",
        "title": "Unions and Slip Joints",
        "code": "7.3.3.4."
    },
    {
        "id": "996",
        "title": "Increaser or Reducer",
        "code": "7.3.3.5."
    },
    {
        "id": "997",
        "title": "Connection of Dissimilar Materials",
        "code": "7.3.3.6."
    },
    {
        "id": "998",
        "title": "Connection of Roof Drain to Leader",
        "code": "7.3.3.7."
    },
    {
        "id": "999",
        "title": "Connection of Floor Outlet Fixtures",
        "code": "7.3.3.8."
    },
    {
        "id": "1000",
        "title": "Expansion and Contraction",
        "code": "7.3.3.9."
    },
    {
        "id": "1001",
        "title": "Copper Tube",
        "code": "7.3.3.10."
    },
    {
        "id": "1002",
        "title": "Indirect Connections",
        "code": "7.3.3.11."
    },
    {
        "id": "1003",
        "title": "Copper Joints Used Underground",
        "code": "7.3.3.12."
    },
    {
        "id": "1004",
        "title": "Capability of Support",
        "code": "7.3.4.1."
    },
    {
        "id": "1005",
        "title": "Independence of Support",
        "code": "7.3.4.2."
    },
    {
        "id": "1006",
        "title": "Insulation of Support",
        "code": "7.3.4.3."
    },
    {
        "id": "1007",
        "title": "Support for Vertical Piping",
        "code": "7.3.4.4."
    },
    {
        "id": "1008",
        "title": "Support for Horizontal Piping",
        "code": "7.3.4.5."
    },
    {
        "id": "1009",
        "title": "Support for Underground Horizontal Piping",
        "code": "7.3.4.6."
    },
    {
        "id": "1010",
        "title": "Support for Vent Pipe Above a Roof",
        "code": "7.3.4.7."
    },
    {
        "id": "1011",
        "title": "Compression Fittings",
        "code": "7.3.4.8."
    },
    {
        "id": "1012",
        "title": "Thrust Restraint of Water Service Pipes",
        "code": "7.3.4.9."
    },
    {
        "id": "1013",
        "title": "Backfill of Pipe Trench",
        "code": "7.3.5.1."
    },
    {
        "id": "1014",
        "title": "Protection of Non-Metallic Pipe",
        "code": "7.3.5.2."
    },
    {
        "id": "1015",
        "title": "Isolation from Loads",
        "code": "7.3.5.3."
    },
    {
        "id": "1016",
        "title": "Protection from Frost",
        "code": "7.3.5.4."
    },
    {
        "id": "1017",
        "title": "Protection from Mechanical Damage",
        "code": "7.3.5.5."
    },
    {
        "id": "1018",
        "title": "Protection from Condensation",
        "code": "7.3.5.6."
    },
    {
        "id": "1019",
        "title": "Spatial Separation",
        "code": "7.3.5.7."
    },
    {
        "id": "1020",
        "title": "Tests and Inspection of Drainage or Venting Systems",
        "code": "7.3.6.1."
    },
    {
        "id": "1021",
        "title": "Tests of Pipes in Drainage Systems",
        "code": "7.3.6.2."
    },
    {
        "id": "1022",
        "title": "Tests of Venting Systems",
        "code": "7.3.6.3."
    },
    {
        "id": "1023",
        "title": "Water Tests in Drain, Waste and Vent Systems",
        "code": "7.3.6.4."
    },
    {
        "id": "1024",
        "title": "Air Tests",
        "code": "7.3.6.5."
    },
    {
        "id": "1025",
        "title": "Final Tests",
        "code": "7.3.6.6."
    },
    {
        "id": "1026",
        "title": "Ball Tests",
        "code": "7.3.6.7."
    },
    {
        "id": "1027",
        "title": "Application of Tests",
        "code": "7.3.7.1."
    },
    {
        "id": "1028",
        "title": "Tests of Potable Water Systems",
        "code": "7.3.7.2."
    },
    {
        "id": "1029",
        "title": "Water Tests",
        "code": "7.3.7.3."
    },
    {
        "id": "1030",
        "title": "Application of Drainage Systems",
        "code": "7.4.1.1."
    },
    {
        "id": "1031",
        "title": "Connections to Sanitary Drainage Systems",
        "code": "7.4.2.1."
    },
    {
        "id": "1032",
        "title": "Connection of Overflows from Rainwater Tanks",
        "code": "7.4.2.2."
    },
    {
        "id": "1033",
        "title": "Direct Connections",
        "code": "7.4.2.3."
    },
    {
        "id": "1034",
        "title": "Plumbing Fixtures",
        "code": "7.4.3.1."
    },
    {
        "id": "1035",
        "title": "Restricted Locations of Indirect Connections and Traps",
        "code": "7.4.3.2."
    },
    {
        "id": "1036",
        "title": "Equipment Restrictions Upstream of Interceptors",
        "code": "7.4.3.3."
    },
    {
        "id": "1037",
        "title": "Fixtures Located in Chemical Storage Locations",
        "code": "7.4.3.4."
    },
    {
        "id": "1038",
        "title": "Macerating Toilet System",
        "code": "7.4.3.5."
    },
    {
        "id": "1039",
        "title": "Drains Serving Elevator Pits",
        "code": "7.4.3.6."
    },
    {
        "id": "1040",
        "title": "Sewage Treatment",
        "code": "7.4.4.1."
    },
    {
        "id": "1041",
        "title": "Protection for Drainage System",
        "code": "7.4.4.2."
    },
    {
        "id": "1042",
        "title": "Interceptors",
        "code": "7.4.4.3."
    },
    {
        "id": "1043",
        "title": "Neutralizing and Dilution Tanks",
        "code": "7.4.4.4."
    },
    {
        "id": "1044",
        "title": "Traps for Sanitary Drainage Systems",
        "code": "7.4.5.1."
    },
    {
        "id": "1045",
        "title": "Traps for Storm Drainage Systems",
        "code": "7.4.5.2."
    },
    {
        "id": "1046",
        "title": "Connection of Subsoil Drainage Pipe to a Sanitary Drainage System",
        "code": "7.4.5.3."
    },
    {
        "id": "1047",
        "title": "Location and Cleanout for Building Traps",
        "code": "7.4.5.4."
    },
    {
        "id": "1048",
        "title": "Trap Seals",
        "code": "7.4.5.5."
    },
    {
        "id": "1049",
        "title": "Separate Systems",
        "code": "7.4.6.1."
    },
    {
        "id": "1050",
        "title": "Location of Soil or Waste Pipes",
        "code": "7.4.6.2."
    },
    {
        "id": "1051",
        "title": "Sumps or Tanks",
        "code": "7.4.6.3."
    },
    {
        "id": "1052",
        "title": "Protection from Backflow",
        "code": "7.4.6.4."
    },
    {
        "id": "1053",
        "title": "Mobile Home Sewer Service",
        "code": "7.4.6.5."
    },
    {
        "id": "1054",
        "title": "Building Drain Ends",
        "code": "7.4.6.6."
    },
    {
        "id": "1055",
        "title": "Cleanouts for Drainage Systems",
        "code": "7.4.7.1."
    },
    {
        "id": "1056",
        "title": "Size and Spacing of Cleanouts",
        "code": "7.4.7.2."
    },
    {
        "id": "1057",
        "title": "Manholes",
        "code": "7.4.7.3."
    },
    {
        "id": "1058",
        "title": "Location of Cleanouts",
        "code": "7.4.7.4."
    },
    {
        "id": "1059",
        "title": "Minimum Slope",
        "code": "7.4.8.1."
    },
    {
        "id": "1060",
        "title": "Length of Fixture Outlet Pipes",
        "code": "7.4.8.2."
    },
    {
        "id": "1061",
        "title": "No Reduction in Size",
        "code": "7.4.9.1."
    },
    {
        "id": "1062",
        "title": "Serving Water Closets",
        "code": "7.4.9.2."
    },
    {
        "id": "1063",
        "title": "Size of Fixture Outlet Pipes",
        "code": "7.4.9.3."
    },
    {
        "id": "1064",
        "title": "Minimum Size of Building Drains and Sewers",
        "code": "7.4.9.4."
    },
    {
        "id": "1065",
        "title": "Total Load on a Pipe",
        "code": "7.4.10.1."
    },
    {
        "id": "1066",
        "title": "Hydraulic Loads for Fixtures",
        "code": "7.4.10.2."
    },
    {
        "id": "1067",
        "title": "Hydraulic Loads from Fixtures with Continuous or Semi-continuous Flow",
        "code": "7.4.10.3."
    },
    {
        "id": "1068",
        "title": "Hydraulic Loads from Roofs or Paved Surfaces",
        "code": "7.4.10.4."
    },
    {
        "id": "1069",
        "title": "Conversion of Fixture Units to Litres and Gal/min",
        "code": "7.4.10.5."
    },
    {
        "id": "1070",
        "title": "Hydraulic Loads to Soil or Waste Pipes",
        "code": "7.4.10.6."
    },
    {
        "id": "1071",
        "title": "Hydraulic Loads on Branches",
        "code": "7.4.10.7."
    },
    {
        "id": "1072",
        "title": "Hydraulic Loads on Sanitary Horizontal Drain",
        "code": "7.4.10.8."
    },
    {
        "id": "1073",
        "title": "Hydraulic Loads on Horizontal Storm Drains",
        "code": "7.4.10.9."
    },
    {
        "id": "1074",
        "title": "Rain Leaders",
        "code": "7.4.10.10."
    },
    {
        "id": "1075",
        "title": "Venting for Traps",
        "code": "7.5.1.1."
    },
    {
        "id": "1076",
        "title": "Wet Venting",
        "code": "7.5.2.1."
    },
    {
        "id": "1077",
        "title": "Circuit Venting",
        "code": "7.5.3.1."
    },
    {
        "id": "1078",
        "title": "Stack Vents",
        "code": "7.5.4.1."
    },
    {
        "id": "1079",
        "title": "Vent Stacks",
        "code": "7.5.4.2."
    },
    {
        "id": "1080",
        "title": "Yoke Vents",
        "code": "7.5.4.3."
    },
    {
        "id": "1081",
        "title": "Offset Relief Vents",
        "code": "7.5.4.4."
    },
    {
        "id": "1082",
        "title": "Fixtures Draining into Vent Pipes",
        "code": "7.5.4.5."
    },
    {
        "id": "1083",
        "title": "Venting of Sanitary Sewage Sumps",
        "code": "7.5.5.1."
    },
    {
        "id": "1084",
        "title": "Venting of Interceptors",
        "code": "7.5.5.2."
    },
    {
        "id": "1085",
        "title": "Venting of Corrosive Drain Piping and Dilution Tanks",
        "code": "7.5.5.3."
    },
    {
        "id": "1086",
        "title": "Fresh Air Inlets",
        "code": "7.5.5.4."
    },
    {
        "id": "1087",
        "title": "Provision for Future Installations",
        "code": "7.5.5.5."
    },
    {
        "id": "1088",
        "title": "Drainage of Vent Pipes",
        "code": "7.5.6.1."
    },
    {
        "id": "1089",
        "title": "Vent Pipe Connections",
        "code": "7.5.6.2."
    },
    {
        "id": "1090",
        "title": "Location of Vent Pipes",
        "code": "7.5.6.3."
    },
    {
        "id": "1091",
        "title": "Connection of Vents above Fixtures Served",
        "code": "7.5.6.4."
    },
    {
        "id": "1092",
        "title": "Terminals",
        "code": "7.5.6.5."
    },
    {
        "id": "1093",
        "title": "General",
        "code": "7.5.7.1."
    },
    {
        "id": "1094",
        "title": "Size Restriction",
        "code": "7.5.7.2."
    },
    {
        "id": "1095",
        "title": "Additional Circuit Vents and Relief Vents",
        "code": "7.5.7.3."
    },
    {
        "id": "1096",
        "title": "Offset Relief Vents",
        "code": "7.5.7.4."
    },
    {
        "id": "1097",
        "title": "Yoke Vents",
        "code": "7.5.7.5."
    },
    {
        "id": "1098",
        "title": "Vent Pipes for Manholes",
        "code": "7.5.7.6."
    },
    {
        "id": "1099",
        "title": "Vents for Sanitary Sewage Sumps or Tanks, Dilution Tanks and Macerating Toilet Systems",
        "code": "7.5.7.7."
    },
    {
        "id": "1100",
        "title": "Hydraulic Loads Draining to Wet Vents",
        "code": "7.5.8.1."
    },
    {
        "id": "1101",
        "title": "Individual Vents and Dual Vents",
        "code": "7.5.8.2."
    },
    {
        "id": "1102",
        "title": "Branch Vents, Headers, Continuous Vents and Circuit Vents",
        "code": "7.5.8.3."
    },
    {
        "id": "1103",
        "title": "Vent Stacks, or Stack Vents",
        "code": "7.5.8.4."
    },
    {
        "id": "1104",
        "title": "Lengths for other Vent Pipes",
        "code": "7.5.8.5."
    },
    {
        "id": "1105",
        "title": "Air Admittance Valve as a Vent Terminal",
        "code": "7.5.9.1."
    },
    {
        "id": "1106",
        "title": "Air Admittance Valves",
        "code": "7.5.9.2."
    },
    {
        "id": "1107",
        "title": "Installation Conditions",
        "code": "7.5.9.3."
    },
    {
        "id": "1108",
        "title": "Design",
        "code": "7.6.1.1."
    },
    {
        "id": "1109",
        "title": "Drainage",
        "code": "7.6.1.2."
    },
    {
        "id": "1110",
        "title": "Control and Shut-off Valves",
        "code": "7.6.1.3."
    },
    {
        "id": "1111",
        "title": "Shut-off Valves",
        "code": "7.6.1.4."
    },
    {
        "id": "1112",
        "title": "Water Closets",
        "code": "7.6.1.5."
    },
    {
        "id": "1113",
        "title": "Suites",
        "code": "7.6.1.6."
    },
    {
        "id": "1114",
        "title": "Public Washrooms",
        "code": "7.6.1.7."
    },
    {
        "id": "1115",
        "title": "Tanks",
        "code": "7.6.1.8."
    },
    {
        "id": "1116",
        "title": "Protection for Exterior Water Supply",
        "code": "7.6.1.9."
    },
    {
        "id": "1117",
        "title": "Check Valves",
        "code": "7.6.1.10."
    },
    {
        "id": "1118",
        "title": "Flushing Devices",
        "code": "7.6.1.11."
    },
    {
        "id": "1119",
        "title": "Relief Valves",
        "code": "7.6.1.12."
    },
    {
        "id": "1120",
        "title": "Solar Domestic Hot Water Systems",
        "code": "7.6.1.13."
    },
    {
        "id": "1121",
        "title": "Water Hammer",
        "code": "7.6.1.14."
    },
    {
        "id": "1122",
        "title": "Mobile Home Water Service",
        "code": "7.6.1.15."
    },
    {
        "id": "1123",
        "title": "Thermal Expansion",
        "code": "7.6.1.16."
    },
    {
        "id": "1124",
        "title": "Connection of Systems",
        "code": "7.6.2.1."
    },
    {
        "id": "1125",
        "title": "Back-Siphonage",
        "code": "7.6.2.2."
    },
    {
        "id": "1126",
        "title": "Protection from Backflow",
        "code": "7.6.2.3."
    },
    {
        "id": "1127",
        "title": "Backflow from Fire Protection Systems",
        "code": "7.6.2.4."
    },
    {
        "id": "1128",
        "title": "Backflow from Buildings with a Solar Domestic Hot Water System",
        "code": "7.6.2.5."
    },
    {
        "id": "1129",
        "title": "Premise Isolation",
        "code": "7.6.2.6."
    },
    {
        "id": "1130",
        "title": "Reserved",
        "code": "7.6.2.7."
    },
    {
        "id": "1131",
        "title": "Cleaning of Systems",
        "code": "7.6.2.8."
    },
    {
        "id": "1132",
        "title": "Air Gap",
        "code": "7.6.2.9."
    },
    {
        "id": "1133",
        "title": "Vacuum Breakers and Flood Levels",
        "code": "7.6.2.10."
    },
    {
        "id": "1134",
        "title": "Design, Construction and Installation",
        "code": "7.6.3.1."
    },
    {
        "id": "1135",
        "title": "Hydraulic Load",
        "code": "7.6.3.2."
    },
    {
        "id": "1136",
        "title": "Static Pressure",
        "code": "7.6.3.3."
    },
    {
        "id": "1137",
        "title": "Size",
        "code": "7.6.3.4."
    },
    {
        "id": "1138",
        "title": "Velocity",
        "code": "7.6.3.5."
    },
    {
        "id": "1139",
        "title": "Water Supply Fittings",
        "code": "7.6.4.1."
    },
    {
        "id": "1140",
        "title": "Plumbing Fixtures",
        "code": "7.6.4.2."
    },
    {
        "id": "1141",
        "title": "Maximum Temperature of Hot Water",
        "code": "7.6.5.1."
    },
    {
        "id": "1142",
        "title": "Showers",
        "code": "7.6.5.2."
    },
    {
        "id": "1143",
        "title": "Temperature Control Devices",
        "code": "7.6.5.3."
    },
    {
        "id": "1144",
        "title": "Non-Potable Connection",
        "code": "7.7.1.1."
    },
    {
        "id": "1145",
        "title": "Markings Required",
        "code": "7.7.2.1."
    },
    {
        "id": "1146",
        "title": "Pipes",
        "code": "7.7.3.1."
    },
    {
        "id": "1147",
        "title": "Outlets",
        "code": "7.7.3.2."
    },
    {
        "id": "1148",
        "title": "Conformance to Standards",
        "code": "7.7.4.1."
    },
    {
        "id": "1149",
        "title": "Scope",
        "code": "8.1.1.1."
    },
    {
        "id": "1150",
        "title": "Definitions",
        "code": "8.1.1.2."
    },
    {
        "id": "1151",
        "title": "Classification of Systems",
        "code": "8.1.2.1."
    },
    {
        "id": "1152",
        "title": "Operation and Maintenance",
        "code": "8.1.2.2."
    },
    {
        "id": "1153",
        "title": "Discharge",
        "code": "8.1.3.1."
    },
    {
        "id": "1154",
        "title": "Scope",
        "code": "8.2.1.1."
    },
    {
        "id": "1155",
        "title": "Site Evaluation",
        "code": "8.2.1.2."
    },
    {
        "id": "1156",
        "title": "Sewage System Design Flows",
        "code": "8.2.1.3."
    },
    {
        "id": "1157",
        "title": "Clearances",
        "code": "8.2.1.4."
    },
    {
        "id": "1158",
        "title": "Clearance Distances for Class 1, 2 and 3 Sewage Systems",
        "code": "8.2.1.5."
    },
    {
        "id": "1159",
        "title": "Clearances for a Class 4 or 5 Sewage System",
        "code": "8.2.1.6."
    },
    {
        "id": "1160",
        "title": "Application",
        "code": "8.2.2.1."
    },
    {
        "id": "1161",
        "title": "Tanks",
        "code": "8.2.2.2."
    },
    {
        "id": "1162",
        "title": "Septic Tanks",
        "code": "8.2.2.3."
    },
    {
        "id": "1163",
        "title": "Holding Tanks",
        "code": "8.2.2.4."
    },
    {
        "id": "1164",
        "title": "Scope",
        "code": "8.3.1.1."
    },
    {
        "id": "1165",
        "title": "Application",
        "code": "8.3.1.2."
    },
    {
        "id": "1166",
        "title": "Construction Requirements",
        "code": "8.3.2.1."
    },
    {
        "id": "1167",
        "title": "Construction Requirements",
        "code": "8.3.3.1."
    },
    {
        "id": "1168",
        "title": "Construction Requirements",
        "code": "8.3.4.1."
    },
    {
        "id": "1169",
        "title": "Construction Requirements",
        "code": "8.3.5.1."
    },
    {
        "id": "1170",
        "title": "Scope",
        "code": "8.4.1.1."
    },
    {
        "id": "1171",
        "title": "Application",
        "code": "8.4.1.2."
    },
    {
        "id": "1172",
        "title": "Construction Requirements",
        "code": "8.4.2.1."
    },
    {
        "id": "1173",
        "title": "Maximum Sewage Flow",
        "code": "8.4.2.2."
    },
    {
        "id": "1174",
        "title": "Sizing",
        "code": "8.4.2.3."
    },
    {
        "id": "1175",
        "title": "Scope",
        "code": "8.5.1.1."
    },
    {
        "id": "1176",
        "title": "Application",
        "code": "8.5.1.2."
    },
    {
        "id": "1177",
        "title": "Construction Requirements",
        "code": "8.5.2.1."
    },
    {
        "id": "1178",
        "title": "Scope",
        "code": "8.6.1.1."
    },
    {
        "id": "1179",
        "title": "General Requirements",
        "code": "8.6.1.2."
    },
    {
        "id": "1180",
        "title": "Pumps and Siphons",
        "code": "8.6.1.3."
    },
    {
        "id": "1181",
        "title": "Septic Tank Systems",
        "code": "8.6.2.1."
    },
    {
        "id": "1182",
        "title": "Other Treatment Units",
        "code": "8.6.2.2."
    },
    {
        "id": "1183",
        "title": "Scope",
        "code": "8.7.1.1."
    },
    {
        "id": "1184",
        "title": "Limitation on Installation",
        "code": "8.7.1.2."
    },
    {
        "id": "1185",
        "title": "General Requirements",
        "code": "8.7.2.1."
    },
    {
        "id": "1186",
        "title": "Distribution Pipes within Leaching Beds",
        "code": "8.7.2.2."
    },
    {
        "id": "1187",
        "title": "Length of Distribution Pipe",
        "code": "8.7.3.1."
    },
    {
        "id": "1188",
        "title": "Absorption Trenches",
        "code": "8.7.3.2."
    },
    {
        "id": "1189",
        "title": "Distribution Pipe",
        "code": "8.7.3.3."
    },
    {
        "id": "1190",
        "title": "Loading Requirements",
        "code": "8.7.4.1."
    },
    {
        "id": "1191",
        "title": "Construction Requirements",
        "code": "8.7.4.2."
    },
    {
        "id": "1192",
        "title": "Application",
        "code": "8.7.5.1."
    },
    {
        "id": "1193",
        "title": "Loading Requirements",
        "code": "8.7.5.2."
    },
    {
        "id": "1194",
        "title": "Construction Requirements",
        "code": "8.7.5.3."
    },
    {
        "id": "1195",
        "title": "Construction Requirements",
        "code": "8.7.6.1."
    },
    {
        "id": "1196",
        "title": "Construction Requirements",
        "code": "8.7.7.1."
    },
    {
        "id": "1197",
        "title": "General Requirements",
        "code": "8.7.8.1."
    },
    {
        "id": "1198",
        "title": "Construction Requirements",
        "code": "8.7.8.2."
    },
    {
        "id": "1199",
        "title": "Design Requirements",
        "code": "8.7.8.3."
    },
    {
        "id": "1200",
        "title": "Prohibited Installation",
        "code": "8.8.1.1."
    },
    {
        "id": "1201",
        "title": "Acceptable Installation",
        "code": "8.8.1.2."
    },
    {
        "id": "1202",
        "title": "Construction Requirements",
        "code": "8.8.2.1."
    },
    {
        "id": "1203",
        "title": "Sizing of Holding Tanks",
        "code": "8.8.2.2."
    },
    {
        "id": "1204",
        "title": "Scope",
        "code": "8.9.1.1."
    },
    {
        "id": "1205",
        "title": "General Requirements for Operation and Maintenance",
        "code": "8.9.1.2."
    },
    {
        "id": "1206",
        "title": "Scope",
        "code": "8.9.2.1."
    },
    {
        "id": "1207",
        "title": "General",
        "code": "8.9.2.2."
    },
    {
        "id": "1208",
        "title": "Class 4 Sewage Systems",
        "code": "8.9.2.3."
    },
    {
        "id": "1209",
        "title": "Sampling of Treatment Units",
        "code": "8.9.2.4."
    },
    {
        "id": "1210",
        "title": "Class 5 Sewage Systems",
        "code": "8.9.2.5."
    },
    {
        "id": "1211",
        "title": "Scope",
        "code": "8.9.3.1."
    },
    {
        "id": "1212",
        "title": "General",
        "code": "8.9.3.2."
    },
    {
        "id": "1213",
        "title": "Interceptors",
        "code": "8.9.3.3."
    },
    {
        "id": "1214",
        "title": "Class 4 Sewage Systems",
        "code": "8.9.3.4."
    },
    {
        "id": "1215",
        "title": "Pressurized Distribution Systems",
        "code": "8.9.3.5."
    },
    {
        "id": "1216",
        "title": "Scope",
        "code": "9.1.1.1."
    },
    {
        "id": "1217",
        "title": "Signs",
        "code": "9.1.1.2."
    },
    {
        "id": "1218",
        "title": "Self-Service Storage Buildings",
        "code": "9.1.1.3."
    },
    {
        "id": "1219",
        "title": "Tents and Air-Supported Structures",
        "code": "9.1.1.4."
    },
    {
        "id": "1220",
        "title": "Proximity to Existing above Ground Electrical Conductors",
        "code": "9.1.1.5."
    },
    {
        "id": "1221",
        "title": "Food Premises",
        "code": "9.1.1.6."
    },
    {
        "id": "1222",
        "title": "Radon",
        "code": "9.1.1.7."
    },
    {
        "id": "1223",
        "title": "Building in Flood Plains",
        "code": "9.1.1.8."
    },
    {
        "id": "1224",
        "title": "Site Assembled and Factory-Built Buildings",
        "code": "9.1.1.9."
    },
    {
        "id": "1225",
        "title": "Public Pools and Public Spas",
        "code": "9.1.1.10."
    },
    {
        "id": "1226",
        "title": "Shelf and Rack Storage Systems",
        "code": "9.1.1.11."
    },
    {
        "id": "1227",
        "title": "General",
        "code": "9.3.1.1."
    },
    {
        "id": "1228",
        "title": "Cement",
        "code": "9.3.1.2."
    },
    {
        "id": "1229",
        "title": "Concrete in Contact with Sulfate Soil",
        "code": "9.3.1.3."
    },
    {
        "id": "1230",
        "title": "Aggregates",
        "code": "9.3.1.4."
    },
    {
        "id": "1231",
        "title": "Water",
        "code": "9.3.1.5."
    },
    {
        "id": "1232",
        "title": "Compressive Strength",
        "code": "9.3.1.6."
    },
    {
        "id": "1233",
        "title": "Concrete Mixes",
        "code": "9.3.1.7."
    },
    {
        "id": "1234",
        "title": "Admixtures",
        "code": "9.3.1.8."
    },
    {
        "id": "1235",
        "title": "Cold Weather Requirements",
        "code": "9.3.1.9."
    },
    {
        "id": "1236",
        "title": "Grade Marking",
        "code": "9.3.2.1."
    },
    {
        "id": "1237",
        "title": "Lumber Grades",
        "code": "9.3.2.2."
    },
    {
        "id": "1238",
        "title": "Machine Stress Rated Lumber",
        "code": "9.3.2.3."
    },
    {
        "id": "1239",
        "title": "OSB, Waferboard and Plywood Marking",
        "code": "9.3.2.4."
    },
    {
        "id": "1240",
        "title": "Moisture Content",
        "code": "9.3.2.5."
    },
    {
        "id": "1241",
        "title": "Lumber Dimensions",
        "code": "9.3.2.6."
    },
    {
        "id": "1242",
        "title": "Panel Thickness Tolerances",
        "code": "9.3.2.7."
    },
    {
        "id": "1243",
        "title": "Undersized Lumber",
        "code": "9.3.2.8."
    },
    {
        "id": "1244",
        "title": "Termite and Decay Protection",
        "code": "9.3.2.9."
    },
    {
        "id": "1245",
        "title": "Sheet Metal Thickness",
        "code": "9.3.3.1."
    },
    {
        "id": "1246",
        "title": "Galvanized Sheet Steel",
        "code": "9.3.3.2."
    },
    {
        "id": "1247",
        "title": "General",
        "code": "9.4.1.1."
    },
    {
        "id": "1248",
        "title": "Application",
        "code": "9.4.2.1."
    },
    {
        "id": "1249",
        "title": "Specified Snow Loads",
        "code": "9.4.2.2."
    },
    {
        "id": "1250",
        "title": "Platforms Subject to Snow and Occupancy Loads",
        "code": "9.4.2.3."
    },
    {
        "id": "1251",
        "title": "Attics and Roof Spaces",
        "code": "9.4.2.4."
    },
    {
        "id": "1252",
        "title": "Deflections",
        "code": "9.4.3.1."
    },
    {
        "id": "1253",
        "title": "Allowable Bearing Pressures",
        "code": "9.4.4.1."
    },
    {
        "id": "1254",
        "title": "Foundation Capacity in Weaker Soil and Rock",
        "code": "9.4.4.2."
    },
    {
        "id": "1255",
        "title": "High Water Table",
        "code": "9.4.4.3."
    },
    {
        "id": "1256",
        "title": "Soil Movement",
        "code": "9.4.4.4."
    },
    {
        "id": "1257",
        "title": "Reserved",
        "code": "9.4.4.5."
    },
    {
        "id": "1258",
        "title": "Walls Supporting Drained Earth",
        "code": "9.4.4.6."
    },
    {
        "id": "1259",
        "title": "Application",
        "code": "9.5.1.1."
    },
    {
        "id": "1260",
        "title": "Method of Measurement",
        "code": "9.5.1.2."
    },
    {
        "id": "1261",
        "title": "Floor Areas",
        "code": "9.5.1.3."
    },
    {
        "id": "1262",
        "title": "Combination Rooms",
        "code": "9.5.1.4."
    },
    {
        "id": "1263",
        "title": "Lesser Areas and Dimensions",
        "code": "9.5.1.5."
    },
    {
        "id": "1264",
        "title": "General",
        "code": "9.5.2.1."
    },
    {
        "id": "1265",
        "title": "Protection on Floor Areas with a Barrier-Free Path of Travel",
        "code": "9.5.2.2."
    },
    {
        "id": "1266",
        "title": "Stud Wall Reinforcement",
        "code": "9.5.2.3."
    },
    {
        "id": "1267",
        "title": "Ceiling Heights of Rooms or Spaces",
        "code": "9.5.3.1."
    },
    {
        "id": "1268",
        "title": "Mezzanines",
        "code": "9.5.3.2."
    },
    {
        "id": "1269",
        "title": "Storage Garages",
        "code": "9.5.3.3."
    },
    {
        "id": "1270",
        "title": "Areas of Living Rooms and Spaces",
        "code": "9.5.4.1."
    },
    {
        "id": "1271",
        "title": "Area of Dining Rooms or Spaces",
        "code": "9.5.5.1."
    },
    {
        "id": "1272",
        "title": "Kitchen Areas",
        "code": "9.5.6.1."
    },
    {
        "id": "1273",
        "title": "Areas of Bedrooms",
        "code": "9.5.7.1."
    },
    {
        "id": "1274",
        "title": "Areas of Master Bedrooms",
        "code": "9.5.7.2."
    },
    {
        "id": "1275",
        "title": "Areas of Combination Bedrooms",
        "code": "9.5.7.3."
    },
    {
        "id": "1276",
        "title": "Areas of Other Sleeping Rooms",
        "code": "9.5.7.4."
    },
    {
        "id": "1277",
        "title": "Recreational Camps",
        "code": "9.5.7.5."
    },
    {
        "id": "1278",
        "title": "Camps for Housing Workers",
        "code": "9.5.7.6."
    },
    {
        "id": "1279",
        "title": "Combined Living, Dining, Bedroom and Kitchen Spaces",
        "code": "9.5.8.1."
    },
    {
        "id": "1280",
        "title": "Space to Accommodate Fixtures",
        "code": "9.5.9.1."
    },
    {
        "id": "1281",
        "title": "Doors to Rooms Containing Water Closets",
        "code": "9.5.9.2."
    },
    {
        "id": "1282",
        "title": "Hallway Width",
        "code": "9.5.10.1."
    },
    {
        "id": "1283",
        "title": "Doorway Opening Sizes",
        "code": "9.5.11.1."
    },
    {
        "id": "1284",
        "title": "Doors to Public Water Closet Rooms",
        "code": "9.5.11.2."
    },
    {
        "id": "1285",
        "title": "Doors to Bathrooms",
        "code": "9.5.11.3."
    },
    {
        "id": "1286",
        "title": "Application",
        "code": "9.6.1.1."
    },
    {
        "id": "1287",
        "title": "Material Standards for Glass",
        "code": "9.6.1.2."
    },
    {
        "id": "1288",
        "title": "Structural Sufficiency of Glass",
        "code": "9.6.1.3."
    },
    {
        "id": "1289",
        "title": "Types of Glass and Protection of Glass",
        "code": "9.6.1.4."
    },
    {
        "id": "1290",
        "title": "Application",
        "code": "9.7.1.1."
    },
    {
        "id": "1291",
        "title": "Entrance Doors",
        "code": "9.7.2.1."
    },
    {
        "id": "1292",
        "title": "Other Requirements for Windows, Doors and Skylights",
        "code": "9.7.2.2."
    },
    {
        "id": "1293",
        "title": "Minimum Window Areas",
        "code": "9.7.2.3."
    },
    {
        "id": "1294",
        "title": "General Performance Criteria",
        "code": "9.7.3.1."
    },
    {
        "id": "1295",
        "title": "Heat Transfer Performance",
        "code": "9.7.3.2."
    },
    {
        "id": "1296",
        "title": "Thermal Characteristics of Windows, Doors and Skylights",
        "code": "9.7.3.3."
    },
    {
        "id": "1297",
        "title": "Application",
        "code": "9.7.4.1."
    },
    {
        "id": "1298",
        "title": "General",
        "code": "9.7.4.2."
    },
    {
        "id": "1299",
        "title": "Performance Requirements",
        "code": "9.7.4.3."
    },
    {
        "id": "1300",
        "title": "Application and Compliance",
        "code": "9.7.5.1."
    },
    {
        "id": "1301",
        "title": "Resistance to Forced Entry for Doors",
        "code": "9.7.5.2."
    },
    {
        "id": "1302",
        "title": "Resistance to Forced Entry for Windows",
        "code": "9.7.5.3."
    },
    {
        "id": "1303",
        "title": "Installation of Windows, Doors and Skylights",
        "code": "9.7.6.1."
    },
    {
        "id": "1304",
        "title": "Sealants, Trim and Flashing",
        "code": "9.7.6.2."
    },
    {
        "id": "1305",
        "title": "General",
        "code": "9.8.1.1."
    },
    {
        "id": "1306",
        "title": "Stairs, Ramps, Landings, Handrails and Guards in Garages",
        "code": "9.8.1.2."
    },
    {
        "id": "1307",
        "title": "Exit Stairs, Ramps and Landings",
        "code": "9.8.1.3."
    },
    {
        "id": "1308",
        "title": "Escalators and Moving Walks",
        "code": "9.8.1.4."
    },
    {
        "id": "1309",
        "title": "Stair Width",
        "code": "9.8.2.1."
    },
    {
        "id": "1310",
        "title": "Height over Stairs",
        "code": "9.8.2.2."
    },
    {
        "id": "1311",
        "title": "Straight and Curved Runs in Stairs",
        "code": "9.8.3.1."
    },
    {
        "id": "1312",
        "title": "Minimum Number of Risers",
        "code": "9.8.3.2."
    },
    {
        "id": "1313",
        "title": "Maximum Height of Stairs",
        "code": "9.8.3.3."
    },
    {
        "id": "1314",
        "title": "Dimensions for Risers",
        "code": "9.8.4.1."
    },
    {
        "id": "1315",
        "title": "Dimensions for Rectangular Runs and Treads",
        "code": "9.8.4.2."
    },
    {
        "id": "1316",
        "title": "Dimensions for Angled Treads",
        "code": "9.8.4.3."
    },
    {
        "id": "1317",
        "title": "Uniformity and Tolerances for Risers and Treads",
        "code": "9.8.4.4."
    },
    {
        "id": "1318",
        "title": "Winders",
        "code": "9.8.4.5."
    },
    {
        "id": "1319",
        "title": "Leading Edges of Treads",
        "code": "9.8.4.6."
    },
    {
        "id": "1320",
        "title": "Interior Stairs Extending through the Roof",
        "code": "9.8.4.7."
    },
    {
        "id": "1321",
        "title": "Application",
        "code": "9.8.5.1."
    },
    {
        "id": "1322",
        "title": "Ramp Width",
        "code": "9.8.5.2."
    },
    {
        "id": "1323",
        "title": "Height over Ramps",
        "code": "9.8.5.3."
    },
    {
        "id": "1324",
        "title": "Slope",
        "code": "9.8.5.4."
    },
    {
        "id": "1325",
        "title": "Maximum Rise",
        "code": "9.8.5.5."
    },
    {
        "id": "1326",
        "title": "Application",
        "code": "9.8.6.1."
    },
    {
        "id": "1327",
        "title": "Required Landings",
        "code": "9.8.6.2."
    },
    {
        "id": "1328",
        "title": "Dimensions of Landings",
        "code": "9.8.6.3."
    },
    {
        "id": "1329",
        "title": "Height over Landings",
        "code": "9.8.6.4."
    },
    {
        "id": "1330",
        "title": "Required Handrails",
        "code": "9.8.7.1."
    },
    {
        "id": "1331",
        "title": "Continuity of Handrails",
        "code": "9.8.7.2."
    },
    {
        "id": "1332",
        "title": "Termination of Handrails",
        "code": "9.8.7.3."
    },
    {
        "id": "1333",
        "title": "Height of Handrails",
        "code": "9.8.7.4."
    },
    {
        "id": "1334",
        "title": "Ergonomic Design",
        "code": "9.8.7.5."
    },
    {
        "id": "1335",
        "title": "Projections into Stairs and Ramps",
        "code": "9.8.7.6."
    },
    {
        "id": "1336",
        "title": "Design and Attachment of Handrails",
        "code": "9.8.7.7."
    },
    {
        "id": "1337",
        "title": "Required Guards",
        "code": "9.8.8.1."
    },
    {
        "id": "1338",
        "title": "Loads on Guards",
        "code": "9.8.8.2."
    },
    {
        "id": "1339",
        "title": "Height of Guards",
        "code": "9.8.8.3."
    },
    {
        "id": "1340",
        "title": "Guards for Floors and Ramps in Garages",
        "code": "9.8.8.4."
    },
    {
        "id": "1341",
        "title": "Openings in Guards",
        "code": "9.8.8.5."
    },
    {
        "id": "1342",
        "title": "Guards Designed Not to Facilitate Climbing",
        "code": "9.8.8.6."
    },
    {
        "id": "1343",
        "title": "Glass in Guards",
        "code": "9.8.8.7."
    },
    {
        "id": "1344",
        "title": "Loads on Stairs and Ramps",
        "code": "9.8.9.1."
    },
    {
        "id": "1345",
        "title": "Exterior Concrete Stairs",
        "code": "9.8.9.2."
    },
    {
        "id": "1346",
        "title": "Exterior Wood Steps",
        "code": "9.8.9.3."
    },
    {
        "id": "1347",
        "title": "Wooden Stair Stringers",
        "code": "9.8.9.4."
    },
    {
        "id": "1348",
        "title": "Treads",
        "code": "9.8.9.5."
    },
    {
        "id": "1349",
        "title": "Finish for Treads, Landings and Ramps",
        "code": "9.8.9.6."
    },
    {
        "id": "1350",
        "title": "Design",
        "code": "9.8.10.1."
    },
    {
        "id": "1351",
        "title": "Anchorage",
        "code": "9.8.10.2."
    },
    {
        "id": "1352",
        "title": "Prevention of Damage Due to Frost",
        "code": "9.8.10.3."
    },
    {
        "id": "1353",
        "title": "Application",
        "code": "9.9.1.1."
    },
    {
        "id": "1354",
        "title": "Fire Protection",
        "code": "9.9.1.2."
    },
    {
        "id": "1355",
        "title": "Occupant Load",
        "code": "9.9.1.3."
    },
    {
        "id": "1356",
        "title": "Types of Exits",
        "code": "9.9.2.1."
    },
    {
        "id": "1357",
        "title": "Purpose of Exits",
        "code": "9.9.2.2."
    },
    {
        "id": "1358",
        "title": "Elevators, Slide Escapes and Windows as Means of Egress",
        "code": "9.9.2.3."
    },
    {
        "id": "1359",
        "title": "Principal Entrances",
        "code": "9.9.2.4."
    },
    {
        "id": "1360",
        "title": "Front Edge of Stair Treads",
        "code": "9.9.2.5."
    },
    {
        "id": "1361",
        "title": "Exterior Exit Stairs that Serve a Hotel",
        "code": "9.9.2.6."
    },
    {
        "id": "1362",
        "title": "Application",
        "code": "9.9.3.1."
    },
    {
        "id": "1363",
        "title": "Exit Width",
        "code": "9.9.3.2."
    },
    {
        "id": "1364",
        "title": "Width of Corridors",
        "code": "9.9.3.3."
    },
    {
        "id": "1365",
        "title": "Clear Height",
        "code": "9.9.3.4."
    },
    {
        "id": "1366",
        "title": "Application",
        "code": "9.9.4.1."
    },
    {
        "id": "1367",
        "title": "Fire Separation for Exits",
        "code": "9.9.4.2."
    },
    {
        "id": "1368",
        "title": "Wired Glass or Glass Block",
        "code": "9.9.4.3."
    },
    {
        "id": "1369",
        "title": "Openings Near Unenclosed Exit Stairs and Ramps",
        "code": "9.9.4.4."
    },
    {
        "id": "1370",
        "title": "Openings in Exterior Walls of Exits",
        "code": "9.9.4.5."
    },
    {
        "id": "1371",
        "title": "Openings near Exit Doors",
        "code": "9.9.4.6."
    },
    {
        "id": "1372",
        "title": "Stairways in Group D or E Buildings",
        "code": "9.9.4.7."
    },
    {
        "id": "1373",
        "title": "Application",
        "code": "9.9.5.1."
    },
    {
        "id": "1374",
        "title": "Occupancies in Corridors",
        "code": "9.9.5.2."
    },
    {
        "id": "1375",
        "title": "Obstructions in Public Corridors",
        "code": "9.9.5.3."
    },
    {
        "id": "1376",
        "title": "Obstructions in Exits",
        "code": "9.9.5.4."
    },
    {
        "id": "1377",
        "title": "Obstructions in Means of Egress",
        "code": "9.9.5.5."
    },
    {
        "id": "1378",
        "title": "Mirrors or Draperies",
        "code": "9.9.5.6."
    },
    {
        "id": "1379",
        "title": "Fuel-Fired Appliances",
        "code": "9.9.5.7."
    },
    {
        "id": "1380",
        "title": "Service Rooms",
        "code": "9.9.5.8."
    },
    {
        "id": "1381",
        "title": "Ancillary Rooms",
        "code": "9.9.5.9."
    },
    {
        "id": "1382",
        "title": "Obstructions by Doors",
        "code": "9.9.6.1."
    },
    {
        "id": "1383",
        "title": "Clear Opening Height at Doorways",
        "code": "9.9.6.2."
    },
    {
        "id": "1384",
        "title": "Clear Opening Width at Doorways",
        "code": "9.9.6.3."
    },
    {
        "id": "1385",
        "title": "Door Action",
        "code": "9.9.6.4."
    },
    {
        "id": "1386",
        "title": "Direction of Door Swing",
        "code": "9.9.6.5."
    },
    {
        "id": "1387",
        "title": "Proximity of Doors to Stairs",
        "code": "9.9.6.6."
    },
    {
        "id": "1388",
        "title": "Door Latching, Locking and Opening Mechanisms",
        "code": "9.9.6.7."
    },
    {
        "id": "1389",
        "title": "Effort Required to Open",
        "code": "9.9.6.8."
    },
    {
        "id": "1390",
        "title": "Egress from Roof Area, Podiums, Terraces, Platforms and Contained Open Spaces",
        "code": "9.9.7.1."
    },
    {
        "id": "1391",
        "title": "Means of Egress from Suites",
        "code": "9.9.7.2."
    },
    {
        "id": "1392",
        "title": "Dead-End Corridors",
        "code": "9.9.7.3."
    },
    {
        "id": "1393",
        "title": "Number and Spacing of Egress Doors",
        "code": "9.9.7.4."
    },
    {
        "id": "1394",
        "title": "Independent Access to Exit",
        "code": "9.9.7.5."
    },
    {
        "id": "1395",
        "title": "Travel Distance within Rooms and Suites",
        "code": "9.9.7.6."
    },
    {
        "id": "1396",
        "title": "Measurement of Travel Distance",
        "code": "9.9.8.1."
    },
    {
        "id": "1397",
        "title": "Number of Required Exits",
        "code": "9.9.8.2."
    },
    {
        "id": "1398",
        "title": "Contribution of Each Exit",
        "code": "9.9.8.3."
    },
    {
        "id": "1399",
        "title": "Location of Exits",
        "code": "9.9.8.4."
    },
    {
        "id": "1400",
        "title": "Exiting through a Lobby",
        "code": "9.9.8.5."
    },
    {
        "id": "1401",
        "title": "Mezzanine Means of Egress",
        "code": "9.9.8.6."
    },
    {
        "id": "1402",
        "title": "Travel Limit to Exits or Egress Doors",
        "code": "9.9.9.1."
    },
    {
        "id": "1403",
        "title": "Two Separate Exits",
        "code": "9.9.9.2."
    },
    {
        "id": "1404",
        "title": "Shared Egress Facilities",
        "code": "9.9.9.3."
    },
    {
        "id": "1405",
        "title": "Egress Windows or Doors for Bedrooms",
        "code": "9.9.10.1."
    },
    {
        "id": "1406",
        "title": "Application",
        "code": "9.9.11.1."
    },
    {
        "id": "1407",
        "title": "Visibility of Exits",
        "code": "9.9.11.2."
    },
    {
        "id": "1408",
        "title": "Exit Signs",
        "code": "9.9.11.3."
    },
    {
        "id": "1409",
        "title": "Signs for Stairs and Ramps at Exit Level",
        "code": "9.9.11.4."
    },
    {
        "id": "1410",
        "title": "Floor Numbering",
        "code": "9.9.11.5."
    },
    {
        "id": "1411",
        "title": "Application",
        "code": "9.9.12.1."
    },
    {
        "id": "1412",
        "title": "Required Lighting in Egress Facilities",
        "code": "9.9.12.2."
    },
    {
        "id": "1413",
        "title": "Emergency Lighting",
        "code": "9.9.12.3."
    },
    {
        "id": "1414",
        "title": "Support of Noncombustible Construction",
        "code": "9.10.1.1."
    },
    {
        "id": "1415",
        "title": "Sloped Roofs",
        "code": "9.10.1.2."
    },
    {
        "id": "1416",
        "title": "Items Under Part 3 Jurisdiction",
        "code": "9.10.1.3."
    },
    {
        "id": "1417",
        "title": "Items Under Part 6 Jurisdiction",
        "code": "9.10.1.4."
    },
    {
        "id": "1418",
        "title": "Occupancy Classification",
        "code": "9.10.2.1."
    },
    {
        "id": "1419",
        "title": "Reserved",
        "code": "9.10.2.2."
    },
    {
        "id": "1420",
        "title": "Major Occupancies above Other Major Occupancies",
        "code": "9.10.2.3."
    },
    {
        "id": "1421",
        "title": "Buildings Containing More Than One Major Occupancy",
        "code": "9.10.2.4."
    },
    {
        "id": "1422",
        "title": "Fire-Resistance and Fire-Protection Ratings",
        "code": "9.10.3.1."
    },
    {
        "id": "1423",
        "title": "Flame-Spread Rating",
        "code": "9.10.3.2."
    },
    {
        "id": "1424",
        "title": "Fire Exposure",
        "code": "9.10.3.3."
    },
    {
        "id": "1425",
        "title": "Suspended Membrane Ceiling",
        "code": "9.10.3.4."
    },
    {
        "id": "1426",
        "title": "Mezzanines not Considered as Storeys",
        "code": "9.10.4.1."
    },
    {
        "id": "1427",
        "title": "More Than One Level of Mezzanine",
        "code": "9.10.4.2."
    },
    {
        "id": "1428",
        "title": "Basement Storage Garages",
        "code": "9.10.4.3."
    },
    {
        "id": "1429",
        "title": "Rooftop Enclosures",
        "code": "9.10.4.4."
    },
    {
        "id": "1430",
        "title": "Permitted Openings in Wall and Ceiling Membranes",
        "code": "9.10.5.1."
    },
    {
        "id": "1431",
        "title": "Combustible Elements in Noncombustible Construction",
        "code": "9.10.6.1."
    },
    {
        "id": "1432",
        "title": "Heavy Timber Construction",
        "code": "9.10.6.2."
    },
    {
        "id": "1433",
        "title": "Protection of Structural Steel Members",
        "code": "9.10.7.1."
    },
    {
        "id": "1434",
        "title": "Fire-Resistance Ratings for Floors and Roofs",
        "code": "9.10.8.1."
    },
    {
        "id": "1435",
        "title": "Fire-Resistance Ratings in Sprinklered Buildings",
        "code": "9.10.8.2."
    },
    {
        "id": "1436",
        "title": "Fire-Resistance Ratings for Walls, Columns and Arches",
        "code": "9.10.8.3."
    },
    {
        "id": "1437",
        "title": "Automatic Sprinkler Systems",
        "code": "9.10.8.4."
    },
    {
        "id": "1438",
        "title": "Service Rooms",
        "code": "9.10.8.5."
    },
    {
        "id": "1439",
        "title": "Mezzanines",
        "code": "9.10.8.6."
    },
    {
        "id": "1440",
        "title": "Roofs Supporting an Occupancy",
        "code": "9.10.8.7."
    },
    {
        "id": "1441",
        "title": "Floors of Exterior Passageways",
        "code": "9.10.8.8."
    },
    {
        "id": "1442",
        "title": "Crawl Spaces",
        "code": "9.10.8.9."
    },
    {
        "id": "1443",
        "title": "Application to Houses",
        "code": "9.10.8.10."
    },
    {
        "id": "1444",
        "title": "Part 3 as an Alternative",
        "code": "9.10.8.11."
    },
    {
        "id": "1445",
        "title": "Application",
        "code": "9.10.9.1."
    },
    {
        "id": "1446",
        "title": "Continuous Barrier",
        "code": "9.10.9.2."
    },
    {
        "id": "1447",
        "title": "Openings to be Protected With Closures",
        "code": "9.10.9.3."
    },
    {
        "id": "1448",
        "title": "Floor Assemblies",
        "code": "9.10.9.4."
    },
    {
        "id": "1449",
        "title": "Interconnected Floor Spaces",
        "code": "9.10.9.5."
    },
    {
        "id": "1450",
        "title": "Penetration of Fire Separations",
        "code": "9.10.9.6."
    },
    {
        "id": "1451",
        "title": "Combustible Piping",
        "code": "9.10.9.7."
    },
    {
        "id": "1452",
        "title": "Collapse of Combustible Construction",
        "code": "9.10.9.8."
    },
    {
        "id": "1453",
        "title": "Reduction in Thickness of Fire Separation by Beams and Joists",
        "code": "9.10.9.9."
    },
    {
        "id": "1454",
        "title": "Concealed Spaces above Fire Separations",
        "code": "9.10.9.10."
    },
    {
        "id": "1455",
        "title": "Separation of Residential Occupancies",
        "code": "9.10.9.11."
    },
    {
        "id": "1456",
        "title": "Residential Suites, Live/Work Units and Industrial Buildings",
        "code": "9.10.9.12."
    },
    {
        "id": "1457",
        "title": "Separation of Suites",
        "code": "9.10.9.13."
    },
    {
        "id": "1458",
        "title": "Separation of Residential Suites",
        "code": "9.10.9.14."
    },
    {
        "id": "1459",
        "title": "Separation of Public Corridors",
        "code": "9.10.9.15."
    },
    {
        "id": "1460",
        "title": "Separation of Storage Garages",
        "code": "9.10.9.16."
    },
    {
        "id": "1461",
        "title": "Separation of Repair Garages",
        "code": "9.10.9.17."
    },
    {
        "id": "1462",
        "title": "Exhaust Ducts Serving More Than One Fire Compartment",
        "code": "9.10.9.18."
    },
    {
        "id": "1463",
        "title": "Central Vacuum Systems",
        "code": "9.10.9.19."
    },
    {
        "id": "1464",
        "title": "Application",
        "code": "9.10.10.1."
    },
    {
        "id": "1465",
        "title": "Service Room Floors",
        "code": "9.10.10.2."
    },
    {
        "id": "1466",
        "title": "Separation of Service Rooms",
        "code": "9.10.10.3."
    },
    {
        "id": "1467",
        "title": "Appliances and Equipment to be Located in a Service Room",
        "code": "9.10.10.4."
    },
    {
        "id": "1468",
        "title": "Incinerators",
        "code": "9.10.10.5."
    },
    {
        "id": "1469",
        "title": "Storage Rooms",
        "code": "9.10.10.6."
    },
    {
        "id": "1470",
        "title": "Emergency Power Installations",
        "code": "9.10.10.7."
    },
    {
        "id": "1471",
        "title": "Required Firewalls",
        "code": "9.10.11.1."
    },
    {
        "id": "1472",
        "title": "Firewalls Not Required",
        "code": "9.10.11.2."
    },
    {
        "id": "1473",
        "title": "Construction of Firewalls",
        "code": "9.10.11.3."
    },
    {
        "id": "1474",
        "title": "Firewalls in Detached Garages",
        "code": "9.10.11.4."
    },
    {
        "id": "1475",
        "title": "Termination of Floors or Mezzanines",
        "code": "9.10.12.1."
    },
    {
        "id": "1476",
        "title": "Location of Skylights",
        "code": "9.10.12.2."
    },
    {
        "id": "1477",
        "title": "Exterior Walls Meeting at an Angle",
        "code": "9.10.12.3."
    },
    {
        "id": "1478",
        "title": "Protection of Soffits",
        "code": "9.10.12.4."
    },
    {
        "id": "1479",
        "title": "Closures",
        "code": "9.10.13.1."
    },
    {
        "id": "1480",
        "title": "Solid Core Wood Door as a Closure",
        "code": "9.10.13.2."
    },
    {
        "id": "1481",
        "title": "Unrated Wood Door Frames",
        "code": "9.10.13.3."
    },
    {
        "id": "1482",
        "title": "Doors as a Means of Egress",
        "code": "9.10.13.4."
    },
    {
        "id": "1483",
        "title": "Wired Glass as a Closure",
        "code": "9.10.13.5."
    },
    {
        "id": "1484",
        "title": "Steel Door Frames",
        "code": "9.10.13.6."
    },
    {
        "id": "1485",
        "title": "Glass Block as a Closure",
        "code": "9.10.13.7."
    },
    {
        "id": "1486",
        "title": "Maximum Size of Opening",
        "code": "9.10.13.8."
    },
    {
        "id": "1487",
        "title": "Door Latch",
        "code": "9.10.13.9."
    },
    {
        "id": "1488",
        "title": "Self-Closing Device",
        "code": "9.10.13.10."
    },
    {
        "id": "1489",
        "title": "Hold-Open Devices",
        "code": "9.10.13.11."
    },
    {
        "id": "1490",
        "title": "Service Room Doors",
        "code": "9.10.13.12."
    },
    {
        "id": "1491",
        "title": "Fire Dampers",
        "code": "9.10.13.13."
    },
    {
        "id": "1492",
        "title": "Fire Stop Flaps",
        "code": "9.10.13.14."
    },
    {
        "id": "1493",
        "title": "Doors Between Garages and Dwelling Units",
        "code": "9.10.13.15."
    },
    {
        "id": "1494",
        "title": "Door Stops",
        "code": "9.10.13.16."
    },
    {
        "id": "1495",
        "title": "Application",
        "code": "9.10.14.1."
    },
    {
        "id": "1496",
        "title": "Area and Location of Exposing Building Face",
        "code": "9.10.14.2."
    },
    {
        "id": "1497",
        "title": "Inadequate Firefighting Facilities",
        "code": "9.10.14.3."
    },
    {
        "id": "1498",
        "title": "Openings in Exposing Building Face",
        "code": "9.10.14.4."
    },
    {
        "id": "1499",
        "title": "Construction of Exposing Building Face and Walls above Exposing Building Face",
        "code": "9.10.14.5."
    },
    {
        "id": "1500",
        "title": "Minor Openings in Exposing Building Face",
        "code": "9.10.14.6."
    },
    {
        "id": "1501",
        "title": "Application",
        "code": "9.10.15.1."
    },
    {
        "id": "1502",
        "title": "Area and Location of Exposing Building Face",
        "code": "9.10.15.2."
    },
    {
        "id": "1503",
        "title": "Inadequate Firefighting Facilities",
        "code": "9.10.15.3."
    },
    {
        "id": "1504",
        "title": "Glazed Openings in Exposing Building Face",
        "code": "9.10.15.4."
    },
    {
        "id": "1505",
        "title": "Construction of Exposing Building Face of Houses",
        "code": "9.10.15.5."
    },
    {
        "id": "1506",
        "title": "Required Fire Blocks in Concealed Spaces",
        "code": "9.10.16.1."
    },
    {
        "id": "1507",
        "title": "Required Fire Blocks in Wall Assemblies",
        "code": "9.10.16.2."
    },
    {
        "id": "1508",
        "title": "Fire Block Materials",
        "code": "9.10.16.3."
    },
    {
        "id": "1509",
        "title": "Penetration of Fire Blocks",
        "code": "9.10.16.4."
    },
    {
        "id": "1510",
        "title": "Flame-Spread Rating of Interior Surfaces",
        "code": "9.10.17.1."
    },
    {
        "id": "1511",
        "title": "Ceilings in Exits or Public Corridors",
        "code": "9.10.17.2."
    },
    {
        "id": "1512",
        "title": "Walls in Exits",
        "code": "9.10.17.3."
    },
    {
        "id": "1513",
        "title": "Exterior Exit Passageways",
        "code": "9.10.17.4."
    },
    {
        "id": "1514",
        "title": "Walls in Public Corridors",
        "code": "9.10.17.5."
    },
    {
        "id": "1515",
        "title": "Calculation of Wall and Ceiling Areas",
        "code": "9.10.17.6."
    },
    {
        "id": "1516",
        "title": "Corridors Containing an Occupancy",
        "code": "9.10.17.7."
    },
    {
        "id": "1517",
        "title": "Light Diffusers and Lenses",
        "code": "9.10.17.8."
    },
    {
        "id": "1518",
        "title": "Combustible Skylights",
        "code": "9.10.17.9."
    },
    {
        "id": "1519",
        "title": "Protection of Foamed Plastics",
        "code": "9.10.17.10."
    },
    {
        "id": "1520",
        "title": "Walls and Ceilings in Bathrooms",
        "code": "9.10.17.11."
    },
    {
        "id": "1521",
        "title": "Coverings or Linings of Ducts",
        "code": "9.10.17.12."
    },
    {
        "id": "1522",
        "title": "Access Provided through a Firewall",
        "code": "9.10.18.1."
    },
    {
        "id": "1523",
        "title": "Fire Alarm System Required",
        "code": "9.10.18.2."
    },
    {
        "id": "1524",
        "title": "Design and Installation Requirements",
        "code": "9.10.18.3."
    },
    {
        "id": "1525",
        "title": "Rooms and Spaces Requiring Heat Detectors or Smoke Detectors",
        "code": "9.10.18.4."
    },
    {
        "id": "1526",
        "title": "Smoke Detectors in Recirculating Air Handling Systems",
        "code": "9.10.18.5."
    },
    {
        "id": "1527",
        "title": "Portions of Buildings Considered as Separate Buildings",
        "code": "9.10.18.6."
    },
    {
        "id": "1528",
        "title": "Central Vacuum Systems",
        "code": "9.10.18.7."
    },
    {
        "id": "1529",
        "title": "Open-Air Storage Garages",
        "code": "9.10.18.8."
    },
    {
        "id": "1530",
        "title": "Fire Alarm System in a Hotel",
        "code": "9.10.18.9."
    },
    {
        "id": "1531",
        "title": "Commissioning of Life Safety and Fire Protection Systems",
        "code": "9.10.18.10."
    },
    {
        "id": "1532",
        "title": "Required Smoke Alarms",
        "code": "9.10.19.1."
    },
    {
        "id": "1533",
        "title": "Sound Patterns of Smoke Alarms",
        "code": "9.10.19.2."
    },
    {
        "id": "1534",
        "title": "Location of Smoke Alarms",
        "code": "9.10.19.3."
    },
    {
        "id": "1535",
        "title": "Power Supply",
        "code": "9.10.19.4."
    },
    {
        "id": "1536",
        "title": "Interconnection of Smoke Alarms",
        "code": "9.10.19.5."
    },
    {
        "id": "1537",
        "title": "Silencing of Smoke Alarms",
        "code": "9.10.19.6."
    },
    {
        "id": "1538",
        "title": "Instructions for Maintenance and Care",
        "code": "9.10.19.7."
    },
    {
        "id": "1539",
        "title": "Windows or Access Panels Required",
        "code": "9.10.20.1."
    },
    {
        "id": "1540",
        "title": "Access to Basements",
        "code": "9.10.20.2."
    },
    {
        "id": "1541",
        "title": "Fire Department Access to Buildings",
        "code": "9.10.20.3."
    },
    {
        "id": "1542",
        "title": "Portable Fire Extinguishers",
        "code": "9.10.20.4."
    },
    {
        "id": "1543",
        "title": "Freeze Protection for Fire Protection Systems",
        "code": "9.10.20.5."
    },
    {
        "id": "1544",
        "title": "Separation of Sleeping Rooms",
        "code": "9.10.21.2."
    },
    {
        "id": "1545",
        "title": "Floor Assemblies Between the First and Second Storey",
        "code": "9.10.21.3."
    },
    {
        "id": "1546",
        "title": "Walkways Connecting Buildings",
        "code": "9.10.21.4."
    },
    {
        "id": "1547",
        "title": "Spatial Separations",
        "code": "9.10.21.5."
    },
    {
        "id": "1548",
        "title": "Flame-Spread Ratings",
        "code": "9.10.21.6."
    },
    {
        "id": "1549",
        "title": "Smoke Detectors",
        "code": "9.10.21.7."
    },
    {
        "id": "1550",
        "title": "Portable Fire Extinguishers",
        "code": "9.10.21.8."
    },
    {
        "id": "1551",
        "title": "Hose Stations",
        "code": "9.10.21.9."
    },
    {
        "id": "1552",
        "title": "Installation of Ranges",
        "code": "9.10.22.1."
    },
    {
        "id": "1553",
        "title": "Vertical Clearances above Cooktops",
        "code": "9.10.22.2."
    },
    {
        "id": "1554",
        "title": "Protection Around Cooktops",
        "code": "9.10.22.3."
    },
    {
        "id": "1555",
        "title": "Determination of Sound Transmission Class Ratings",
        "code": "9.11.1.1."
    },
    {
        "id": "1556",
        "title": "Minimum Sound Transmission Class Ratings",
        "code": "9.11.2.1."
    },
    {
        "id": "1557",
        "title": "Building Services in an Assembly",
        "code": "9.11.2.2."
    },
    {
        "id": "1558",
        "title": "Removal of Topsoil and Organic Matter",
        "code": "9.12.1.1."
    },
    {
        "id": "1559",
        "title": "Standing Water",
        "code": "9.12.1.2."
    },
    {
        "id": "1560",
        "title": "Protection from Freezing",
        "code": "9.12.1.3."
    },
    {
        "id": "1561",
        "title": "Precautions During Excavation",
        "code": "9.12.1.4."
    },
    {
        "id": "1562",
        "title": "Excavation to Undisturbed Soil",
        "code": "9.12.2.1."
    },
    {
        "id": "1563",
        "title": "Minimum Depth of Foundations",
        "code": "9.12.2.2."
    },
    {
        "id": "1564",
        "title": "Placement of Backfill",
        "code": "9.12.3.1."
    },
    {
        "id": "1565",
        "title": "Grading of Backfill",
        "code": "9.12.3.2."
    },
    {
        "id": "1566",
        "title": "Deleterious Debris and Boulders",
        "code": "9.12.3.3."
    },
    {
        "id": "1567",
        "title": "Lateral Support of Foundation Wall",
        "code": "9.12.3.4."
    },
    {
        "id": "1568",
        "title": "Compacting or Filling With Concrete",
        "code": "9.12.4.1."
    },
    {
        "id": "1569",
        "title": "Application",
        "code": "9.13.1.1."
    },
    {
        "id": "1570",
        "title": "Dampproofing",
        "code": "9.13.2.1."
    },
    {
        "id": "1571",
        "title": "Material Standards",
        "code": "9.13.2.2."
    },
    {
        "id": "1572",
        "title": "Standards for Application",
        "code": "9.13.2.3."
    },
    {
        "id": "1573",
        "title": "Preparation of Surface",
        "code": "9.13.2.4."
    },
    {
        "id": "1574",
        "title": "Application of Dampproofing Material",
        "code": "9.13.2.5."
    },
    {
        "id": "1575",
        "title": "Moisture Protection for Interior Finishes",
        "code": "9.13.2.6."
    },
    {
        "id": "1576",
        "title": "Dampproofing of Floors-on-Ground",
        "code": "9.13.2.7."
    },
    {
        "id": "1577",
        "title": "Dampproofing of Preserved Wood Foundation Walls",
        "code": "9.13.2.8."
    },
    {
        "id": "1578",
        "title": "Required Waterproofing",
        "code": "9.13.3.1."
    },
    {
        "id": "1579",
        "title": "Material Standards",
        "code": "9.13.3.2."
    },
    {
        "id": "1580",
        "title": "Standards for Application",
        "code": "9.13.3.3."
    },
    {
        "id": "1581",
        "title": "Preparation of Surface",
        "code": "9.13.3.4."
    },
    {
        "id": "1582",
        "title": "Application of Waterproofing Membranes",
        "code": "9.13.3.5."
    },
    {
        "id": "1583",
        "title": "Floor Waterproofing System",
        "code": "9.13.3.6."
    },
    {
        "id": "1584",
        "title": "Soil Gas Control",
        "code": "9.13.4.1."
    },
    {
        "id": "1585",
        "title": "Required Soil Gas Control",
        "code": "9.13.4.2."
    },
    {
        "id": "1586",
        "title": "Material Standards",
        "code": "9.13.4.3."
    },
    {
        "id": "1587",
        "title": "Application",
        "code": "9.14.1.1."
    },
    {
        "id": "1588",
        "title": "Crawl Spaces",
        "code": "9.14.1.2."
    },
    {
        "id": "1589",
        "title": "Floors-on-Ground",
        "code": "9.14.1.3."
    },
    {
        "id": "1590",
        "title": "Foundation Wall Drainage",
        "code": "9.14.2.1."
    },
    {
        "id": "1591",
        "title": "Material Standards",
        "code": "9.14.3.1."
    },
    {
        "id": "1592",
        "title": "Minimum Size",
        "code": "9.14.3.2."
    },
    {
        "id": "1593",
        "title": "Installation",
        "code": "9.14.3.3."
    },
    {
        "id": "1594",
        "title": "Type of Granular Material",
        "code": "9.14.4.1."
    },
    {
        "id": "1595",
        "title": "Installation",
        "code": "9.14.4.2."
    },
    {
        "id": "1596",
        "title": "Grading",
        "code": "9.14.4.3."
    },
    {
        "id": "1597",
        "title": "Wet Site Conditions",
        "code": "9.14.4.4."
    },
    {
        "id": "1598",
        "title": "Drainage Disposal",
        "code": "9.14.5.1."
    },
    {
        "id": "1599",
        "title": "Sump Pits",
        "code": "9.14.5.2."
    },
    {
        "id": "1600",
        "title": "Dry Wells",
        "code": "9.14.5.3."
    },
    {
        "id": "1601",
        "title": "Surface Drainage",
        "code": "9.14.6.1."
    },
    {
        "id": "1602",
        "title": "Drainage away from Wells or Leaching Beds",
        "code": "9.14.6.2."
    },
    {
        "id": "1603",
        "title": "Window Wells",
        "code": "9.14.6.3."
    },
    {
        "id": "1604",
        "title": "Catch Basin",
        "code": "9.14.6.4."
    },
    {
        "id": "1605",
        "title": "Downspouts",
        "code": "9.14.6.5."
    },
    {
        "id": "1606",
        "title": "General",
        "code": "9.15.1.1."
    },
    {
        "id": "1607",
        "title": "Permafrost",
        "code": "9.15.1.2."
    },
    {
        "id": "1608",
        "title": "Foundations for Deformation Resistant Buildings",
        "code": "9.15.1.3."
    },
    {
        "id": "1609",
        "title": "Concrete",
        "code": "9.15.2.1."
    },
    {
        "id": "1610",
        "title": "Unit Masonry Construction",
        "code": "9.15.2.2."
    },
    {
        "id": "1611",
        "title": "Pier Type Foundations",
        "code": "9.15.2.3."
    },
    {
        "id": "1612",
        "title": "Wood Frame Foundations",
        "code": "9.15.2.4."
    },
    {
        "id": "1613",
        "title": "Footings Required",
        "code": "9.15.3.1."
    },
    {
        "id": "1614",
        "title": "Support of Footings",
        "code": "9.15.3.2."
    },
    {
        "id": "1615",
        "title": "Application of Footing Width and Area Requirements",
        "code": "9.15.3.3."
    },
    {
        "id": "1616",
        "title": "Basic Footing Widths and Areas",
        "code": "9.15.3.4."
    },
    {
        "id": "1617",
        "title": "Adjustments to Footing Widths for Exterior Walls",
        "code": "9.15.3.5."
    },
    {
        "id": "1618",
        "title": "Adjustments to Footing Widths for Interior Walls",
        "code": "9.15.3.6."
    },
    {
        "id": "1619",
        "title": "Adjustments to Footing Area for Columns",
        "code": "9.15.3.7."
    },
    {
        "id": "1620",
        "title": "Footing Thickness",
        "code": "9.15.3.8."
    },
    {
        "id": "1621",
        "title": "Step Footings",
        "code": "9.15.3.9."
    },
    {
        "id": "1622",
        "title": "Permanent Form Material",
        "code": "9.15.4.1."
    },
    {
        "id": "1623",
        "title": "Foundation Wall Thickness and Required Lateral Support",
        "code": "9.15.4.2."
    },
    {
        "id": "1624",
        "title": "Foundation Walls Considered to be Laterally Supported at the Top",
        "code": "9.15.4.3."
    },
    {
        "id": "1625",
        "title": "Foundation Walls Considered to be Laterally Supported at the Bottom",
        "code": "9.15.4.4."
    },
    {
        "id": "1626",
        "title": "Reinforcement for Flat Insulating Concrete Form Foundation Walls",
        "code": "9.15.4.5."
    },
    {
        "id": "1627",
        "title": "Extension above Ground Level",
        "code": "9.15.4.6."
    },
    {
        "id": "1628",
        "title": "Reduction in Thickness",
        "code": "9.15.4.7."
    },
    {
        "id": "1629",
        "title": "Corbelling",
        "code": "9.15.4.8."
    },
    {
        "id": "1630",
        "title": "Crack Control Joints",
        "code": "9.15.4.9."
    },
    {
        "id": "1631",
        "title": "Interior Masonry Walls",
        "code": "9.15.4.10."
    },
    {
        "id": "1632",
        "title": "Support of Floor Joists",
        "code": "9.15.5.1."
    },
    {
        "id": "1633",
        "title": "Support of Beams",
        "code": "9.15.5.2."
    },
    {
        "id": "1634",
        "title": "Pilasters",
        "code": "9.15.5.3."
    },
    {
        "id": "1635",
        "title": "Foundation Walls Below Ground",
        "code": "9.15.6.1."
    },
    {
        "id": "1636",
        "title": "Foundation Walls Above Ground",
        "code": "9.15.6.2."
    },
    {
        "id": "1637",
        "title": "Form Ties",
        "code": "9.15.6.3."
    },
    {
        "id": "1638",
        "title": "Application",
        "code": "9.16.1.1."
    },
    {
        "id": "1639",
        "title": "Structural Floor Slabs",
        "code": "9.16.1.2."
    },
    {
        "id": "1640",
        "title": "Required Floors-on-Ground",
        "code": "9.16.1.3."
    },
    {
        "id": "1641",
        "title": "Dampproofing and Waterproofing",
        "code": "9.16.1.4."
    },
    {
        "id": "1642",
        "title": "Required Installation of Granular Fill",
        "code": "9.16.2.1."
    },
    {
        "id": "1643",
        "title": "Support of Floors",
        "code": "9.16.2.2."
    },
    {
        "id": "1644",
        "title": "Control of Water Ingress",
        "code": "9.16.3.1."
    },
    {
        "id": "1645",
        "title": "Hydrostatic Pressure",
        "code": "9.16.3.2."
    },
    {
        "id": "1646",
        "title": "Floor Drains",
        "code": "9.16.3.3."
    },
    {
        "id": "1647",
        "title": "Surface Finish",
        "code": "9.16.4.1."
    },
    {
        "id": "1648",
        "title": "Topping Course",
        "code": "9.16.4.2."
    },
    {
        "id": "1649",
        "title": "Thickness",
        "code": "9.16.4.3."
    },
    {
        "id": "1650",
        "title": "Bond Break",
        "code": "9.16.4.4."
    },
    {
        "id": "1651",
        "title": "Compressive Strength",
        "code": "9.16.4.5."
    },
    {
        "id": "1652",
        "title": "Wood Frame Floors",
        "code": "9.16.5.1."
    },
    {
        "id": "1653",
        "title": "Application",
        "code": "9.17.1.1."
    },
    {
        "id": "1654",
        "title": "Location",
        "code": "9.17.2.1."
    },
    {
        "id": "1655",
        "title": "Lateral Support",
        "code": "9.17.2.2."
    },
    {
        "id": "1656",
        "title": "Size and Thickness",
        "code": "9.17.3.1."
    },
    {
        "id": "1657",
        "title": "End Bearing Plates",
        "code": "9.17.3.2."
    },
    {
        "id": "1658",
        "title": "Paint",
        "code": "9.17.3.3."
    },
    {
        "id": "1659",
        "title": "Design of Adjustable Steel Columns",
        "code": "9.17.3.4."
    },
    {
        "id": "1660",
        "title": "Column Sizes",
        "code": "9.17.4.1."
    },
    {
        "id": "1661",
        "title": "Materials",
        "code": "9.17.4.2."
    },
    {
        "id": "1662",
        "title": "Columns in Contact with Concrete",
        "code": "9.17.4.3."
    },
    {
        "id": "1663",
        "title": "Wood Column Termite Protection",
        "code": "9.17.4.4."
    },
    {
        "id": "1664",
        "title": "Materials",
        "code": "9.17.5.1."
    },
    {
        "id": "1665",
        "title": "Sizes",
        "code": "9.17.5.2."
    },
    {
        "id": "1666",
        "title": "Materials",
        "code": "9.17.6.1."
    },
    {
        "id": "1667",
        "title": "Sizes",
        "code": "9.17.6.2."
    },
    {
        "id": "1668",
        "title": "Application",
        "code": "9.18.1.1."
    },
    {
        "id": "1669",
        "title": "Foundations",
        "code": "9.18.1.2."
    },
    {
        "id": "1670",
        "title": "Heated and Unheated Crawl Spaces",
        "code": "9.18.1.3."
    },
    {
        "id": "1671",
        "title": "Access Openings",
        "code": "9.18.2.1."
    },
    {
        "id": "1672",
        "title": "Ventilation of Unheated Crawl Spaces",
        "code": "9.18.3.1."
    },
    {
        "id": "1673",
        "title": "Ventilation of Heated Crawl Spaces",
        "code": "9.18.3.2."
    },
    {
        "id": "1674",
        "title": "Access Way to Services",
        "code": "9.18.4.1."
    },
    {
        "id": "1675",
        "title": "Drainage",
        "code": "9.18.5.1."
    },
    {
        "id": "1676",
        "title": "Ground Cover in Unheated Crawl Spaces",
        "code": "9.18.6.1."
    },
    {
        "id": "1677",
        "title": "Ground Cover in Heated Crawl Spaces",
        "code": "9.18.6.2."
    },
    {
        "id": "1678",
        "title": "Crawl Spaces as Warm Air Plenums",
        "code": "9.18.7.1."
    },
    {
        "id": "1679",
        "title": "Required Venting",
        "code": "9.19.1.1."
    },
    {
        "id": "1680",
        "title": "Vent Requirements",
        "code": "9.19.1.2."
    },
    {
        "id": "1681",
        "title": "Clearances",
        "code": "9.19.1.3."
    },
    {
        "id": "1682",
        "title": "Mansard or Gambrel Roof",
        "code": "9.19.1.4."
    },
    {
        "id": "1683",
        "title": "Access",
        "code": "9.19.2.1."
    },
    {
        "id": "1684",
        "title": "General",
        "code": "9.20.1.1."
    },
    {
        "id": "1685",
        "title": "Earthquake Reinforcement",
        "code": "9.20.1.2."
    },
    {
        "id": "1686",
        "title": "Masonry Unit Standards",
        "code": "9.20.2.1."
    },
    {
        "id": "1687",
        "title": "Used Brick",
        "code": "9.20.2.2."
    },
    {
        "id": "1688",
        "title": "Glass Blocks",
        "code": "9.20.2.3."
    },
    {
        "id": "1689",
        "title": "Cellular Concrete",
        "code": "9.20.2.4."
    },
    {
        "id": "1690",
        "title": "Stone",
        "code": "9.20.2.5."
    },
    {
        "id": "1691",
        "title": "Concrete Units Exposed to the Weather",
        "code": "9.20.2.6."
    },
    {
        "id": "1692",
        "title": "Compressive Strength",
        "code": "9.20.2.7."
    },
    {
        "id": "1693",
        "title": "Mortar Materials",
        "code": "9.20.3.1."
    },
    {
        "id": "1694",
        "title": "Mortar and Grout Mixes",
        "code": "9.20.3.2."
    },
    {
        "id": "1695",
        "title": "Thickness",
        "code": "9.20.4.1."
    },
    {
        "id": "1696",
        "title": "Solid Masonry Units",
        "code": "9.20.4.2."
    },
    {
        "id": "1697",
        "title": "Hollow Masonry Units",
        "code": "9.20.4.3."
    },
    {
        "id": "1698",
        "title": "Masonry Support",
        "code": "9.20.5.1."
    },
    {
        "id": "1699",
        "title": "Lintels or Arches",
        "code": "9.20.5.2."
    },
    {
        "id": "1700",
        "title": "Thickness of Exterior Walls",
        "code": "9.20.6.1."
    },
    {
        "id": "1701",
        "title": "Cavity Walls",
        "code": "9.20.6.2."
    },
    {
        "id": "1702",
        "title": "Thickness of Interior Walls",
        "code": "9.20.6.3."
    },
    {
        "id": "1703",
        "title": "Masonry Veneer",
        "code": "9.20.6.4."
    },
    {
        "id": "1704",
        "title": "Parapet Walls",
        "code": "9.20.6.5."
    },
    {
        "id": "1705",
        "title": "Stone or Concrete Facings",
        "code": "9.20.6.6."
    },
    {
        "id": "1706",
        "title": "Maximum Dimensions",
        "code": "9.20.7.1."
    },
    {
        "id": "1707",
        "title": "Minimum Wall Thickness",
        "code": "9.20.7.2."
    },
    {
        "id": "1708",
        "title": "Separation of Chases and Recesses",
        "code": "9.20.7.3."
    },
    {
        "id": "1709",
        "title": "Non-Conforming Chases or Recesses",
        "code": "9.20.7.4."
    },
    {
        "id": "1710",
        "title": "Chases or Recesses Cut into Walls",
        "code": "9.20.7.5."
    },
    {
        "id": "1711",
        "title": "Capping of Hollow Masonry Walls",
        "code": "9.20.8.1."
    },
    {
        "id": "1712",
        "title": "Cavity Walls Supporting Framing Members",
        "code": "9.20.8.2."
    },
    {
        "id": "1713",
        "title": "Bearing of Beams and Joists",
        "code": "9.20.8.3."
    },
    {
        "id": "1714",
        "title": "Support of Beams and Columns",
        "code": "9.20.8.4."
    },
    {
        "id": "1715",
        "title": "Distance to Edge of Supporting Members",
        "code": "9.20.8.5."
    },
    {
        "id": "1716",
        "title": "Joints to be Offset or Reinforced",
        "code": "9.20.9.1."
    },
    {
        "id": "1717",
        "title": "Bonding or Tying of Other than Masonry Veneer",
        "code": "9.20.9.2."
    },
    {
        "id": "1718",
        "title": "Bonding",
        "code": "9.20.9.3."
    },
    {
        "id": "1719",
        "title": "Tying",
        "code": "9.20.9.4."
    },
    {
        "id": "1720",
        "title": "Ties for Masonry Veneer",
        "code": "9.20.9.5."
    },
    {
        "id": "1721",
        "title": "Reinforcing for Glass Block",
        "code": "9.20.9.6."
    },
    {
        "id": "1722",
        "title": "Lateral Support Required",
        "code": "9.20.10.1."
    },
    {
        "id": "1723",
        "title": "Anchorage of Floor or Roof Assemblies",
        "code": "9.20.11.1."
    },
    {
        "id": "1724",
        "title": "Bonding and Tying of Intersecting Walls",
        "code": "9.20.11.2."
    },
    {
        "id": "1725",
        "title": "Wood Frame Walls Intersecting Masonry Walls",
        "code": "9.20.11.3."
    },
    {
        "id": "1726",
        "title": "Wood Frame Roof Systems",
        "code": "9.20.11.4."
    },
    {
        "id": "1727",
        "title": "Cornices, Sills and Trim",
        "code": "9.20.11.5."
    },
    {
        "id": "1728",
        "title": "Piers",
        "code": "9.20.11.6."
    },
    {
        "id": "1729",
        "title": "Corbelling",
        "code": "9.20.12.1."
    },
    {
        "id": "1730",
        "title": "Corbelling for Cavity Walls",
        "code": "9.20.12.2."
    },
    {
        "id": "1731",
        "title": "Corbelling for Masonry Veneer",
        "code": "9.20.12.3."
    },
    {
        "id": "1732",
        "title": "Materials for Flashing",
        "code": "9.20.13.1."
    },
    {
        "id": "1733",
        "title": "Fastening of Flashing",
        "code": "9.20.13.2."
    },
    {
        "id": "1734",
        "title": "Location of Flashing",
        "code": "9.20.13.3."
    },
    {
        "id": "1735",
        "title": "Extension of Flashing",
        "code": "9.20.13.4."
    },
    {
        "id": "1736",
        "title": "Flashing for Weep Holes in Masonry Veneer/Masonry Walls",
        "code": "9.20.13.5."
    },
    {
        "id": "1737",
        "title": "Flashing for Weep Holes in Masonry Veneer",
        "code": "9.20.13.6."
    },
    {
        "id": "1738",
        "title": "Flashing Joints",
        "code": "9.20.13.7."
    },
    {
        "id": "1739",
        "title": "Required Weep Holes",
        "code": "9.20.13.8."
    },
    {
        "id": "1740",
        "title": "Protection of Interior Finish",
        "code": "9.20.13.9."
    },
    {
        "id": "1741",
        "title": "Mortar Droppings",
        "code": "9.20.13.10."
    },
    {
        "id": "1742",
        "title": "Caulking at Door and Window Frames",
        "code": "9.20.13.11."
    },
    {
        "id": "1743",
        "title": "Drips Beneath Window Sills",
        "code": "9.20.13.12."
    },
    {
        "id": "1744",
        "title": "Laying Temperature of Mortar and Masonry",
        "code": "9.20.14.1."
    },
    {
        "id": "1745",
        "title": "Protection from Weather",
        "code": "9.20.14.2."
    },
    {
        "id": "1746",
        "title": "Amount of Reinforcement",
        "code": "9.20.15.1."
    },
    {
        "id": "1747",
        "title": "Installation Standard",
        "code": "9.20.15.2."
    },
    {
        "id": "1748",
        "title": "Corrosion Resistance of Connectors",
        "code": "9.20.16.1."
    },
    {
        "id": "1749",
        "title": "Thickness of Flat Insulating Concrete Form Walls",
        "code": "9.20.17.1."
    },
    {
        "id": "1750",
        "title": "Reinforcement for Flat Insulating Concrete Form Walls",
        "code": "9.20.17.2."
    },
    {
        "id": "1751",
        "title": "Openings in Non-Loadbearing Flat Insulating Concrete Form Walls",
        "code": "9.20.17.3."
    },
    {
        "id": "1752",
        "title": "Openings in Loadbearing Flat Insulating Concrete Form Walls",
        "code": "9.20.17.4."
    },
    {
        "id": "1753",
        "title": "Framing Supported on Flat Insulating Concrete Form Walls",
        "code": "9.20.17.5."
    },
    {
        "id": "1754",
        "title": "Anchoring of Roof Framing to Top of Flat Insulating Concrete Form Walls",
        "code": "9.20.17.6."
    },
    {
        "id": "1755",
        "title": "Protection from Precipitation and Damage",
        "code": "9.20.17.7."
    },
    {
        "id": "1756",
        "title": "Application",
        "code": "9.21.1.1."
    },
    {
        "id": "1757",
        "title": "Factory-Built Chimneys",
        "code": "9.21.1.2."
    },
    {
        "id": "1758",
        "title": "Flue Pipes",
        "code": "9.21.1.3."
    },
    {
        "id": "1759",
        "title": "Chimney or Flue Pipe Walls",
        "code": "9.21.1.4."
    },
    {
        "id": "1760",
        "title": "Chimney Flue Limitations",
        "code": "9.21.2.1."
    },
    {
        "id": "1761",
        "title": "Connections of More Than One Appliance",
        "code": "9.21.2.2."
    },
    {
        "id": "1762",
        "title": "Inclined Chimney Flues",
        "code": "9.21.2.3."
    },
    {
        "id": "1763",
        "title": "Size of Chimney Flues",
        "code": "9.21.2.4."
    },
    {
        "id": "1764",
        "title": "Fireplace Chimneys",
        "code": "9.21.2.5."
    },
    {
        "id": "1765",
        "title": "Oval Chimney Flues",
        "code": "9.21.2.6."
    },
    {
        "id": "1766",
        "title": "Lining Materials",
        "code": "9.21.3.1."
    },
    {
        "id": "1767",
        "title": "Joints in Chimney Liners",
        "code": "9.21.3.2."
    },
    {
        "id": "1768",
        "title": "Clay Liners",
        "code": "9.21.3.3."
    },
    {
        "id": "1769",
        "title": "Firebrick Liners",
        "code": "9.21.3.4."
    },
    {
        "id": "1770",
        "title": "Concrete Liners",
        "code": "9.21.3.5."
    },
    {
        "id": "1771",
        "title": "Metal Liners",
        "code": "9.21.3.6."
    },
    {
        "id": "1772",
        "title": "Installation of Chimney Liners",
        "code": "9.21.3.7."
    },
    {
        "id": "1773",
        "title": "Spaces Between Liners and Surrounding Masonry",
        "code": "9.21.3.8."
    },
    {
        "id": "1774",
        "title": "Mortar for Chimney Liners",
        "code": "9.21.3.9."
    },
    {
        "id": "1775",
        "title": "Extension of Chimney Liners",
        "code": "9.21.3.10."
    },
    {
        "id": "1776",
        "title": "Unit Masonry",
        "code": "9.21.4.1."
    },
    {
        "id": "1777",
        "title": "Concrete",
        "code": "9.21.4.2."
    },
    {
        "id": "1778",
        "title": "Footings",
        "code": "9.21.4.3."
    },
    {
        "id": "1779",
        "title": "Height of Chimney Flues",
        "code": "9.21.4.4."
    },
    {
        "id": "1780",
        "title": "Lateral Stability",
        "code": "9.21.4.5."
    },
    {
        "id": "1781",
        "title": "Chimney Caps",
        "code": "9.21.4.6."
    },
    {
        "id": "1782",
        "title": "Cleanout",
        "code": "9.21.4.7."
    },
    {
        "id": "1783",
        "title": "Wall Thickness",
        "code": "9.21.4.8."
    },
    {
        "id": "1784",
        "title": "Separation of Flue Liners",
        "code": "9.21.4.9."
    },
    {
        "id": "1785",
        "title": "Flashing",
        "code": "9.21.4.10."
    },
    {
        "id": "1786",
        "title": "Clearance from Combustible Materials",
        "code": "9.21.5.1."
    },
    {
        "id": "1787",
        "title": "Sealing of Spaces",
        "code": "9.21.5.2."
    },
    {
        "id": "1788",
        "title": "Support of Joists or Beams",
        "code": "9.21.5.3."
    },
    {
        "id": "1789",
        "title": "Application",
        "code": "9.22.1.1."
    },
    {
        "id": "1790",
        "title": "Masonry and Concrete",
        "code": "9.22.1.2."
    },
    {
        "id": "1791",
        "title": "Footings",
        "code": "9.22.1.3."
    },
    {
        "id": "1792",
        "title": "Combustion Air",
        "code": "9.22.1.4."
    },
    {
        "id": "1793",
        "title": "Brick or Steel Liners",
        "code": "9.22.2.1."
    },
    {
        "id": "1794",
        "title": "Firebrick Liners",
        "code": "9.22.2.2."
    },
    {
        "id": "1795",
        "title": "Steel Liners",
        "code": "9.22.2.3."
    },
    {
        "id": "1796",
        "title": "Thickness of Walls",
        "code": "9.22.3.1."
    },
    {
        "id": "1797",
        "title": "Fire Chamber Dimensions",
        "code": "9.22.4.1."
    },
    {
        "id": "1798",
        "title": "Hearth Extension",
        "code": "9.22.5.1."
    },
    {
        "id": "1799",
        "title": "Support of Hearth",
        "code": "9.22.5.2."
    },
    {
        "id": "1800",
        "title": "Required Damper and Size",
        "code": "9.22.6.1."
    },
    {
        "id": "1801",
        "title": "Slope of Smoke Chamber",
        "code": "9.22.7.1."
    },
    {
        "id": "1802",
        "title": "Wall Thickness",
        "code": "9.22.7.2."
    },
    {
        "id": "1803",
        "title": "Conformance to Standard",
        "code": "9.22.8.1."
    },
    {
        "id": "1804",
        "title": "Clearance to the Fireplace Opening",
        "code": "9.22.9.1."
    },
    {
        "id": "1805",
        "title": "Metal Exposed to the Interior",
        "code": "9.22.9.2."
    },
    {
        "id": "1806",
        "title": "Clearance to Combustible Framing",
        "code": "9.22.9.3."
    },
    {
        "id": "1807",
        "title": "Heat Circulating Duct Openings",
        "code": "9.22.9.4."
    },
    {
        "id": "1808",
        "title": "Appliance Standard",
        "code": "9.22.10.1."
    },
    {
        "id": "1809",
        "title": "Installation",
        "code": "9.22.10.2."
    },
    {
        "id": "1810",
        "title": "Limitations",
        "code": "9.23.1.1."
    },
    {
        "id": "1811",
        "title": "Strength and Rigidity",
        "code": "9.23.2.1."
    },
    {
        "id": "1812",
        "title": "Protection from Decay",
        "code": "9.23.2.2."
    },
    {
        "id": "1813",
        "title": "Protection from Dampness",
        "code": "9.23.2.3."
    },
    {
        "id": "1814",
        "title": "Lumber",
        "code": "9.23.2.4."
    },
    {
        "id": "1815",
        "title": "Termite Protection",
        "code": "9.23.2.5."
    },
    {
        "id": "1816",
        "title": "Standards for Nails and Screws",
        "code": "9.23.3.1."
    },
    {
        "id": "1817",
        "title": "Length of Nails",
        "code": "9.23.3.2."
    },
    {
        "id": "1818",
        "title": "Prevention of Splitting",
        "code": "9.23.3.3."
    },
    {
        "id": "1819",
        "title": "Nailing of Framing",
        "code": "9.23.3.4."
    },
    {
        "id": "1820",
        "title": "Fastening for Sheathing or Subflooring",
        "code": "9.23.3.5."
    },
    {
        "id": "1821",
        "title": "Application",
        "code": "9.23.4.1."
    },
    {
        "id": "1822",
        "title": "Spans for Joists, Rafters and Beams",
        "code": "9.23.4.2."
    },
    {
        "id": "1823",
        "title": "Steel Beams",
        "code": "9.23.4.3."
    },
    {
        "id": "1824",
        "title": "Concrete Topping",
        "code": "9.23.4.4."
    },
    {
        "id": "1825",
        "title": "Heavy Roofing Materials",
        "code": "9.23.4.5."
    },
    {
        "id": "1826",
        "title": "Holes Drilled in Framing Members",
        "code": "9.23.5.1."
    },
    {
        "id": "1827",
        "title": "Notching of Framing Members",
        "code": "9.23.5.2."
    },
    {
        "id": "1828",
        "title": "Wall Studs",
        "code": "9.23.5.3."
    },
    {
        "id": "1829",
        "title": "Top Plates",
        "code": "9.23.5.4."
    },
    {
        "id": "1830",
        "title": "Roof Trusses",
        "code": "9.23.5.5."
    },
    {
        "id": "1831",
        "title": "Anchorage of Building Frames",
        "code": "9.23.6.1."
    },
    {
        "id": "1832",
        "title": "Anchorage of Columns and Posts",
        "code": "9.23.6.2."
    },
    {
        "id": "1833",
        "title": "Anchorage of Smaller Buildings",
        "code": "9.23.6.3."
    },
    {
        "id": "1834",
        "title": "Size of Sill Plates",
        "code": "9.23.7.1."
    },
    {
        "id": "1835",
        "title": "Levelling of Sill Plates",
        "code": "9.23.7.2."
    },
    {
        "id": "1836",
        "title": "Bearing for Beams",
        "code": "9.23.8.1."
    },
    {
        "id": "1837",
        "title": "Priming of Steel Beams",
        "code": "9.23.8.2."
    },
    {
        "id": "1838",
        "title": "Built-up Wood Beams",
        "code": "9.23.8.3."
    },
    {
        "id": "1839",
        "title": "End Bearing for Joists",
        "code": "9.23.9.1."
    },
    {
        "id": "1840",
        "title": "Joists Supported by Beams",
        "code": "9.23.9.2."
    },
    {
        "id": "1841",
        "title": "Restraint of Joist Bottoms",
        "code": "9.23.9.3."
    },
    {
        "id": "1842",
        "title": "Strapping and Bridging in Tables A-1 and A-2",
        "code": "9.23.9.4."
    },
    {
        "id": "1843",
        "title": "Header Joists",
        "code": "9.23.9.5."
    },
    {
        "id": "1844",
        "title": "Trimmer Joists",
        "code": "9.23.9.6."
    },
    {
        "id": "1845",
        "title": "Support of Tail and Header Joists",
        "code": "9.23.9.7."
    },
    {
        "id": "1846",
        "title": "Support of Walls",
        "code": "9.23.9.8."
    },
    {
        "id": "1847",
        "title": "Cantilevered Floor Joists",
        "code": "9.23.9.9."
    },
    {
        "id": "1848",
        "title": "Stud Size and Spacing",
        "code": "9.23.10.1."
    },
    {
        "id": "1849",
        "title": "Bracing and Lateral Support",
        "code": "9.23.10.2."
    },
    {
        "id": "1850",
        "title": "Orientation of Studs",
        "code": "9.23.10.3."
    },
    {
        "id": "1851",
        "title": "Continuity of Studs",
        "code": "9.23.10.4."
    },
    {
        "id": "1852",
        "title": "Support for Cladding Materials",
        "code": "9.23.10.5."
    },
    {
        "id": "1853",
        "title": "Studs at Sides of Openings",
        "code": "9.23.10.6."
    },
    {
        "id": "1854",
        "title": "Stud Posts Built into Walls",
        "code": "9.23.10.7."
    },
    {
        "id": "1855",
        "title": "Size of Wall Plates",
        "code": "9.23.11.1."
    },
    {
        "id": "1856",
        "title": "Bottom Wall Plates",
        "code": "9.23.11.2."
    },
    {
        "id": "1857",
        "title": "Top Plates",
        "code": "9.23.11.3."
    },
    {
        "id": "1858",
        "title": "Joints in Top Plates",
        "code": "9.23.11.4."
    },
    {
        "id": "1859",
        "title": "Openings in Non-Loadbearing Walls",
        "code": "9.23.12.1."
    },
    {
        "id": "1860",
        "title": "Openings in Loadbearing Walls",
        "code": "9.23.12.2."
    },
    {
        "id": "1861",
        "title": "Lintel Spans and Sizes",
        "code": "9.23.12.3."
    },
    {
        "id": "1862",
        "title": "Continuity of Rafters and Joists",
        "code": "9.23.13.1."
    },
    {
        "id": "1863",
        "title": "Framing around Openings",
        "code": "9.23.13.2."
    },
    {
        "id": "1864",
        "title": "End Bearing Length",
        "code": "9.23.13.3."
    },
    {
        "id": "1865",
        "title": "Location and Attachment of Rafters",
        "code": "9.23.13.4."
    },
    {
        "id": "1866",
        "title": "Shaping of Rafters",
        "code": "9.23.13.5."
    },
    {
        "id": "1867",
        "title": "Hip and Valley Rafters",
        "code": "9.23.13.6."
    },
    {
        "id": "1868",
        "title": "Intermediate Support for Rafters and Joists",
        "code": "9.23.13.7."
    },
    {
        "id": "1869",
        "title": "Ridge Support",
        "code": "9.23.13.8."
    },
    {
        "id": "1870",
        "title": "Restraint of Joist Bottoms",
        "code": "9.23.13.9."
    },
    {
        "id": "1871",
        "title": "Ceiling Joists Supporting Roof Load",
        "code": "9.23.13.10."
    },
    {
        "id": "1872",
        "title": "Wood Roof Trusses",
        "code": "9.23.13.11."
    },
    {
        "id": "1873",
        "title": "Subflooring Required",
        "code": "9.23.14.1."
    },
    {
        "id": "1874",
        "title": "Material Standards",
        "code": "9.23.14.2."
    },
    {
        "id": "1875",
        "title": "Edge Support",
        "code": "9.23.14.3."
    },
    {
        "id": "1876",
        "title": "Direction of Installation",
        "code": "9.23.14.4."
    },
    {
        "id": "1877",
        "title": "Subfloor Thickness or Rating",
        "code": "9.23.14.5."
    },
    {
        "id": "1878",
        "title": "Annular Grooved Nails",
        "code": "9.23.14.6."
    },
    {
        "id": "1879",
        "title": "Lumber Subflooring",
        "code": "9.23.14.7."
    },
    {
        "id": "1880",
        "title": "Required Roof Sheathing",
        "code": "9.23.15.1."
    },
    {
        "id": "1881",
        "title": "Material Standards",
        "code": "9.23.15.2."
    },
    {
        "id": "1882",
        "title": "Direction of Installation",
        "code": "9.23.15.3."
    },
    {
        "id": "1883",
        "title": "Joints in Panel-Type Sheathing",
        "code": "9.23.15.4."
    },
    {
        "id": "1884",
        "title": "Lumber Roof Sheathing",
        "code": "9.23.15.5."
    },
    {
        "id": "1885",
        "title": "Edge Support",
        "code": "9.23.15.6."
    },
    {
        "id": "1886",
        "title": "Thickness or Rating",
        "code": "9.23.15.7."
    },
    {
        "id": "1887",
        "title": "Required Sheathing",
        "code": "9.23.16.1."
    },
    {
        "id": "1888",
        "title": "Thickness, Rating and Material Standards",
        "code": "9.23.16.2."
    },
    {
        "id": "1889",
        "title": "Attachment of Cladding to Sheathing",
        "code": "9.23.16.3."
    },
    {
        "id": "1890",
        "title": "Lumber Sheathing",
        "code": "9.23.16.4."
    },
    {
        "id": "1891",
        "title": "Joints in Panel-Type Sheathing",
        "code": "9.23.16.5."
    },
    {
        "id": "1892",
        "title": "Mansard Style Roofs",
        "code": "9.23.16.6."
    },
    {
        "id": "1893",
        "title": "Application",
        "code": "9.24.1.1."
    },
    {
        "id": "1894",
        "title": "Material Standards",
        "code": "9.24.1.2."
    },
    {
        "id": "1895",
        "title": "Metal Thickness",
        "code": "9.24.1.3."
    },
    {
        "id": "1896",
        "title": "Screws",
        "code": "9.24.1.4."
    },
    {
        "id": "1897",
        "title": "Cladding, Sheathing and Interior Finish Required",
        "code": "9.24.1.5."
    },
    {
        "id": "1898",
        "title": "Size and Spacing of Studs in Interior Walls",
        "code": "9.24.2.1."
    },
    {
        "id": "1899",
        "title": "Thickness of Studs",
        "code": "9.24.2.2."
    },
    {
        "id": "1900",
        "title": "Runners",
        "code": "9.24.2.3."
    },
    {
        "id": "1901",
        "title": "Openings in Fire Separations",
        "code": "9.24.2.4."
    },
    {
        "id": "1902",
        "title": "Size and Spacing of Studs in Exterior Walls",
        "code": "9.24.2.5."
    },
    {
        "id": "1903",
        "title": "Installation of Runners",
        "code": "9.24.3.1."
    },
    {
        "id": "1904",
        "title": "Fire-Rated Walls",
        "code": "9.24.3.2."
    },
    {
        "id": "1905",
        "title": "Orientation of Studs",
        "code": "9.24.3.3."
    },
    {
        "id": "1906",
        "title": "Support for Cladding Materials",
        "code": "9.24.3.4."
    },
    {
        "id": "1907",
        "title": "Framing around Openings",
        "code": "9.24.3.5."
    },
    {
        "id": "1908",
        "title": "Attachment of Studs to Runners",
        "code": "9.24.3.6."
    },
    {
        "id": "1909",
        "title": "Openings for Fire Dampers",
        "code": "9.24.3.7."
    },
    {
        "id": "1910",
        "title": "Scope and Application",
        "code": "9.25.1.1."
    },
    {
        "id": "1911",
        "title": "Required Insulation",
        "code": "9.25.2.1."
    },
    {
        "id": "1912",
        "title": "Insulation Materials",
        "code": "9.25.2.2."
    },
    {
        "id": "1913",
        "title": "Installation of Thermal Insulation",
        "code": "9.25.2.3."
    },
    {
        "id": "1914",
        "title": "Installation of Loose-Fill Insulation",
        "code": "9.25.2.4."
    },
    {
        "id": "1915",
        "title": "Installation of Spray-Applied Polyurethane",
        "code": "9.25.2.5."
    },
    {
        "id": "1916",
        "title": "Required Barrier to Air Leakage",
        "code": "9.25.3.1."
    },
    {
        "id": "1917",
        "title": "Air Barrier System Properties",
        "code": "9.25.3.2."
    },
    {
        "id": "1918",
        "title": "Continuity of the Air Barrier System",
        "code": "9.25.3.3."
    },
    {
        "id": "1919",
        "title": "Vapour Barriers Used as Air Barriers",
        "code": "9.25.3.4."
    },
    {
        "id": "1920",
        "title": "Required Barrier to Vapour Diffusion",
        "code": "9.25.4.1."
    },
    {
        "id": "1921",
        "title": "Vapour Barrier Materials",
        "code": "9.25.4.2."
    },
    {
        "id": "1922",
        "title": "Installation of Vapour Barriers",
        "code": "9.25.4.3."
    },
    {
        "id": "1923",
        "title": "General",
        "code": "9.25.5.1."
    },
    {
        "id": "1924",
        "title": "Position of Low Permeance Materials",
        "code": "9.25.5.2."
    },
    {
        "id": "1925",
        "title": "Purpose of Roofing",
        "code": "9.26.1.1."
    },
    {
        "id": "1926",
        "title": "Alternate Installation Methods",
        "code": "9.26.1.2."
    },
    {
        "id": "1927",
        "title": "Solar Collector Systems",
        "code": "9.26.1.3."
    },
    {
        "id": "1928",
        "title": "Material Standards",
        "code": "9.26.2.1."
    },
    {
        "id": "1929",
        "title": "Nails",
        "code": "9.26.2.2."
    },
    {
        "id": "1930",
        "title": "Staples",
        "code": "9.26.2.3."
    },
    {
        "id": "1931",
        "title": "Slope",
        "code": "9.26.3.1."
    },
    {
        "id": "1932",
        "title": "Required Flashing at Intersections",
        "code": "9.26.4.1."
    },
    {
        "id": "1933",
        "title": "Materials",
        "code": "9.26.4.2."
    },
    {
        "id": "1934",
        "title": "Valley Flashing",
        "code": "9.26.4.3."
    },
    {
        "id": "1935",
        "title": "Intersection of Shingle Roofs and Masonry",
        "code": "9.26.4.4."
    },
    {
        "id": "1936",
        "title": "Intersection of Shingle Roofs and Walls Other Than Masonry",
        "code": "9.26.4.5."
    },
    {
        "id": "1937",
        "title": "Intersection of Built-Up Roofs and Masonry",
        "code": "9.26.4.6."
    },
    {
        "id": "1938",
        "title": "Intersection of Built-Up Roofs and Walls other than Masonry",
        "code": "9.26.4.7."
    },
    {
        "id": "1939",
        "title": "Chimney Saddles",
        "code": "9.26.4.8."
    },
    {
        "id": "1940",
        "title": "Required Eave Protection",
        "code": "9.26.5.1."
    },
    {
        "id": "1941",
        "title": "Materials",
        "code": "9.26.5.2."
    },
    {
        "id": "1942",
        "title": "Materials",
        "code": "9.26.6.1."
    },
    {
        "id": "1943",
        "title": "Installation",
        "code": "9.26.6.2."
    },
    {
        "id": "1944",
        "title": "Coverage",
        "code": "9.26.7.1."
    },
    {
        "id": "1945",
        "title": "Starter Strip",
        "code": "9.26.7.2."
    },
    {
        "id": "1946",
        "title": "Head Lap",
        "code": "9.26.7.3."
    },
    {
        "id": "1947",
        "title": "Fasteners",
        "code": "9.26.7.4."
    },
    {
        "id": "1948",
        "title": "Securing of Tabs",
        "code": "9.26.7.5."
    },
    {
        "id": "1949",
        "title": "Hips and Ridges",
        "code": "9.26.7.6."
    },
    {
        "id": "1950",
        "title": "Eave Protection",
        "code": "9.26.7.7."
    },
    {
        "id": "1951",
        "title": "Flashing",
        "code": "9.26.7.8."
    },
    {
        "id": "1952",
        "title": "Coverage",
        "code": "9.26.8.1."
    },
    {
        "id": "1953",
        "title": "Starter Strip",
        "code": "9.26.8.2."
    },
    {
        "id": "1954",
        "title": "Securing of Tabs",
        "code": "9.26.8.3."
    },
    {
        "id": "1955",
        "title": "Securing of Shingle Courses",
        "code": "9.26.8.4."
    },
    {
        "id": "1956",
        "title": "Hips and Ridges",
        "code": "9.26.8.5."
    },
    {
        "id": "1957",
        "title": "Flashing",
        "code": "9.26.8.6."
    },
    {
        "id": "1958",
        "title": "Fastening",
        "code": "9.26.8.7."
    },
    {
        "id": "1959",
        "title": "Decking",
        "code": "9.26.9.1."
    },
    {
        "id": "1960",
        "title": "Grade",
        "code": "9.26.9.2."
    },
    {
        "id": "1961",
        "title": "Size",
        "code": "9.26.9.3."
    },
    {
        "id": "1962",
        "title": "Spacing and Joints",
        "code": "9.26.9.4."
    },
    {
        "id": "1963",
        "title": "Fastening",
        "code": "9.26.9.5."
    },
    {
        "id": "1964",
        "title": "Exposure",
        "code": "9.26.9.6."
    },
    {
        "id": "1965",
        "title": "Flashing",
        "code": "9.26.9.7."
    },
    {
        "id": "1966",
        "title": "Eave Protection",
        "code": "9.26.9.8."
    },
    {
        "id": "1967",
        "title": "Size and Thickness",
        "code": "9.26.10.1."
    },
    {
        "id": "1968",
        "title": "Underlay",
        "code": "9.26.10.2."
    },
    {
        "id": "1969",
        "title": "Spacing and Joints",
        "code": "9.26.10.3."
    },
    {
        "id": "1970",
        "title": "Fastening",
        "code": "9.26.10.4."
    },
    {
        "id": "1971",
        "title": "Exposure",
        "code": "9.26.10.5."
    },
    {
        "id": "1972",
        "title": "Flashing",
        "code": "9.26.10.6."
    },
    {
        "id": "1973",
        "title": "Eave Protection",
        "code": "9.26.10.7."
    },
    {
        "id": "1974",
        "title": "Grade",
        "code": "9.26.10.8."
    },
    {
        "id": "1975",
        "title": "Quantity of Materials",
        "code": "9.26.11.1."
    },
    {
        "id": "1976",
        "title": "Coal-Tar and Asphalt Products",
        "code": "9.26.11.2."
    },
    {
        "id": "1977",
        "title": "Roof Felts",
        "code": "9.26.11.3."
    },
    {
        "id": "1978",
        "title": "Aggregate Surfacing",
        "code": "9.26.11.4."
    },
    {
        "id": "1979",
        "title": "Flashing",
        "code": "9.26.11.5."
    },
    {
        "id": "1980",
        "title": "Number of Layers",
        "code": "9.26.11.6."
    },
    {
        "id": "1981",
        "title": "Installation of Layers",
        "code": "9.26.11.7."
    },
    {
        "id": "1982",
        "title": "Roofing over Wood-Based Sheathing",
        "code": "9.26.11.8."
    },
    {
        "id": "1983",
        "title": "Attachment to Decking",
        "code": "9.26.11.9."
    },
    {
        "id": "1984",
        "title": "Cant Strips",
        "code": "9.26.11.10."
    },
    {
        "id": "1985",
        "title": "Double Coverage",
        "code": "9.26.12.1."
    },
    {
        "id": "1986",
        "title": "Joints",
        "code": "9.26.12.2."
    },
    {
        "id": "1987",
        "title": "Thickness",
        "code": "9.26.13.1."
    },
    {
        "id": "1988",
        "title": "Support",
        "code": "9.26.13.2."
    },
    {
        "id": "1989",
        "title": "Support",
        "code": "9.26.14.1."
    },
    {
        "id": "1990",
        "title": "Installation",
        "code": "9.26.15.1."
    },
    {
        "id": "1991",
        "title": "Installation",
        "code": "9.26.16.1."
    },
    {
        "id": "1992",
        "title": "Installation",
        "code": "9.26.17.1."
    },
    {
        "id": "1993",
        "title": "Roof Drains",
        "code": "9.26.18.1."
    },
    {
        "id": "1994",
        "title": "Downspouts",
        "code": "9.26.18.2."
    },
    {
        "id": "1995",
        "title": "General",
        "code": "9.27.1.1."
    },
    {
        "id": "1996",
        "title": "Minimizing and Preventing Ingress and Damage",
        "code": "9.27.2.1."
    },
    {
        "id": "1997",
        "title": "Minimum Protection from Precipitation Ingress",
        "code": "9.27.2.2."
    },
    {
        "id": "1998",
        "title": "First and Second Planes of Protection",
        "code": "9.27.2.3."
    },
    {
        "id": "1999",
        "title": "Protection of Cladding from Moisture",
        "code": "9.27.2.4."
    },
    {
        "id": "2000",
        "title": "Elements of the Second Plane of Protection",
        "code": "9.27.3.1."
    },
    {
        "id": "2001",
        "title": "Sheathing Membrane Material Standard",
        "code": "9.27.3.2."
    },
    {
        "id": "2002",
        "title": "Required Sheathing Membrane and Installation",
        "code": "9.27.3.3."
    },
    {
        "id": "2003",
        "title": "Insulating Sheathing in Lieu of Sheathing Membrane",
        "code": "9.27.3.4."
    },
    {
        "id": "2004",
        "title": "Sheathing Membranes in Lieu of Sheathing",
        "code": "9.27.3.5."
    },
    {
        "id": "2005",
        "title": "Face Sealed Cladding",
        "code": "9.27.3.6."
    },
    {
        "id": "2006",
        "title": "Flashing Materials",
        "code": "9.27.3.7."
    },
    {
        "id": "2007",
        "title": "Flashing Installation",
        "code": "9.27.3.8."
    },
    {
        "id": "2008",
        "title": "Required Sealants",
        "code": "9.27.4.1."
    },
    {
        "id": "2009",
        "title": "Materials",
        "code": "9.27.4.2."
    },
    {
        "id": "2010",
        "title": "Attachment",
        "code": "9.27.5.1."
    },
    {
        "id": "2011",
        "title": "Blocking",
        "code": "9.27.5.2."
    },
    {
        "id": "2012",
        "title": "Furring",
        "code": "9.27.5.3."
    },
    {
        "id": "2013",
        "title": "Size and Spacing of Fasteners",
        "code": "9.27.5.4."
    },
    {
        "id": "2014",
        "title": "Fastener Materials",
        "code": "9.27.5.5."
    },
    {
        "id": "2015",
        "title": "Expansion and Contraction",
        "code": "9.27.5.6."
    },
    {
        "id": "2016",
        "title": "Penetration of Fasteners",
        "code": "9.27.5.7."
    },
    {
        "id": "2017",
        "title": "Materials",
        "code": "9.27.6.1."
    },
    {
        "id": "2018",
        "title": "Thickness and Width",
        "code": "9.27.6.2."
    },
    {
        "id": "2019",
        "title": "Joints",
        "code": "9.27.6.3."
    },
    {
        "id": "2020",
        "title": "Materials",
        "code": "9.27.7.1."
    },
    {
        "id": "2021",
        "title": "Width",
        "code": "9.27.7.2."
    },
    {
        "id": "2022",
        "title": "Fasteners",
        "code": "9.27.7.3."
    },
    {
        "id": "2023",
        "title": "Offsetting of Joints",
        "code": "9.27.7.4."
    },
    {
        "id": "2024",
        "title": "Fastening to Lath",
        "code": "9.27.7.5."
    },
    {
        "id": "2025",
        "title": "Exposure and Thickness",
        "code": "9.27.7.6."
    },
    {
        "id": "2026",
        "title": "Material Standards",
        "code": "9.27.8.1."
    },
    {
        "id": "2027",
        "title": "Thickness",
        "code": "9.27.8.2."
    },
    {
        "id": "2028",
        "title": "Edge Treatment",
        "code": "9.27.8.3."
    },
    {
        "id": "2029",
        "title": "Panel Cladding",
        "code": "9.27.8.4."
    },
    {
        "id": "2030",
        "title": "Lapped Strip Siding",
        "code": "9.27.8.5."
    },
    {
        "id": "2031",
        "title": "Material Standards",
        "code": "9.27.9.1."
    },
    {
        "id": "2032",
        "title": "Thickness",
        "code": "9.27.9.2."
    },
    {
        "id": "2033",
        "title": "Panel Cladding",
        "code": "9.27.9.3."
    },
    {
        "id": "2034",
        "title": "Lapped Strip Siding",
        "code": "9.27.9.4."
    },
    {
        "id": "2035",
        "title": "Clearance",
        "code": "9.27.9.5."
    },
    {
        "id": "2036",
        "title": "Material Standard",
        "code": "9.27.10.1."
    },
    {
        "id": "2037",
        "title": "Thickness",
        "code": "9.27.10.2."
    },
    {
        "id": "2038",
        "title": "Panel Cladding",
        "code": "9.27.10.3."
    },
    {
        "id": "2039",
        "title": "Clearance",
        "code": "9.27.10.4."
    },
    {
        "id": "2040",
        "title": "Material Standards",
        "code": "9.27.11.1."
    },
    {
        "id": "2041",
        "title": "Material Standard",
        "code": "9.27.12.1."
    },
    {
        "id": "2042",
        "title": "Attachment",
        "code": "9.27.12.2."
    },
    {
        "id": "2043",
        "title": "Application",
        "code": "9.27.13.1."
    },
    {
        "id": "2044",
        "title": "Materials",
        "code": "9.27.13.2."
    },
    {
        "id": "2045",
        "title": "Design and Installation",
        "code": "9.27.13.3."
    },
    {
        "id": "2046",
        "title": "Sheathing Beneath Stucco",
        "code": "9.28.1.1."
    },
    {
        "id": "2047",
        "title": "Lath and Reinforcing",
        "code": "9.28.1.2."
    },
    {
        "id": "2048",
        "title": "Concrete Masonry Units",
        "code": "9.28.1.3."
    },
    {
        "id": "2049",
        "title": "Clearance over Ground Level",
        "code": "9.28.1.4."
    },
    {
        "id": "2050",
        "title": "Flashing and Sealants",
        "code": "9.28.1.5."
    },
    {
        "id": "2051",
        "title": "Portland Cement",
        "code": "9.28.2.1."
    },
    {
        "id": "2052",
        "title": "Aggregate",
        "code": "9.28.2.2."
    },
    {
        "id": "2053",
        "title": "Water",
        "code": "9.28.2.3."
    },
    {
        "id": "2054",
        "title": "Materials",
        "code": "9.28.3.1."
    },
    {
        "id": "2055",
        "title": "Nails and Staples",
        "code": "9.28.3.2."
    },
    {
        "id": "2056",
        "title": "Materials",
        "code": "9.28.4.1."
    },
    {
        "id": "2057",
        "title": "No Sheathing Required",
        "code": "9.28.4.2."
    },
    {
        "id": "2058",
        "title": "Stucco Lath Specifications",
        "code": "9.28.4.3."
    },
    {
        "id": "2059",
        "title": "Self-Furring Devices",
        "code": "9.28.4.4."
    },
    {
        "id": "2060",
        "title": "Application of Stucco Lath",
        "code": "9.28.4.5."
    },
    {
        "id": "2061",
        "title": "Fastening",
        "code": "9.28.4.6."
    },
    {
        "id": "2062",
        "title": "Mixes",
        "code": "9.28.5.1."
    },
    {
        "id": "2063",
        "title": "Pigments",
        "code": "9.28.5.2."
    },
    {
        "id": "2064",
        "title": "Mixing",
        "code": "9.28.5.3."
    },
    {
        "id": "2065",
        "title": "Low Temperature Conditions",
        "code": "9.28.6.1."
    },
    {
        "id": "2066",
        "title": "Number of Coats and Total Thickness",
        "code": "9.28.6.2."
    },
    {
        "id": "2067",
        "title": "First Coat",
        "code": "9.28.6.3."
    },
    {
        "id": "2068",
        "title": "Second Coat",
        "code": "9.28.6.4."
    },
    {
        "id": "2069",
        "title": "Finish Coat",
        "code": "9.28.6.5."
    },
    {
        "id": "2070",
        "title": "Fire Protection and Sound Control",
        "code": "9.29.1.1."
    },
    {
        "id": "2071",
        "title": "Where Required",
        "code": "9.29.2.1."
    },
    {
        "id": "2072",
        "title": "Materials",
        "code": "9.29.2.2."
    },
    {
        "id": "2073",
        "title": "Size and Spacing of Furring",
        "code": "9.29.3.1."
    },
    {
        "id": "2074",
        "title": "Fastening",
        "code": "9.29.3.2."
    },
    {
        "id": "2075",
        "title": "Application",
        "code": "9.29.4.1."
    },
    {
        "id": "2076",
        "title": "Application",
        "code": "9.29.5.1."
    },
    {
        "id": "2077",
        "title": "Materials",
        "code": "9.29.5.2."
    },
    {
        "id": "2078",
        "title": "Maximum Spacing of Supports",
        "code": "9.29.5.3."
    },
    {
        "id": "2079",
        "title": "Support of Insulation",
        "code": "9.29.5.4."
    },
    {
        "id": "2080",
        "title": "Length of Fasteners",
        "code": "9.29.5.5."
    },
    {
        "id": "2081",
        "title": "Nails",
        "code": "9.29.5.6."
    },
    {
        "id": "2082",
        "title": "Screws",
        "code": "9.29.5.7."
    },
    {
        "id": "2083",
        "title": "Spacing of Nails",
        "code": "9.29.5.8."
    },
    {
        "id": "2084",
        "title": "Spacing of Screws",
        "code": "9.29.5.9."
    },
    {
        "id": "2085",
        "title": "Low Temperature Conditions",
        "code": "9.29.5.10."
    },
    {
        "id": "2086",
        "title": "Thickness",
        "code": "9.29.6.1."
    },
    {
        "id": "2087",
        "title": "Grooved Plywood",
        "code": "9.29.6.2."
    },
    {
        "id": "2088",
        "title": "Nails and Staples",
        "code": "9.29.6.3."
    },
    {
        "id": "2089",
        "title": "Edge Support",
        "code": "9.29.6.4."
    },
    {
        "id": "2090",
        "title": "Material Standard",
        "code": "9.29.7.1."
    },
    {
        "id": "2091",
        "title": "Thickness",
        "code": "9.29.7.2."
    },
    {
        "id": "2092",
        "title": "Nails",
        "code": "9.29.7.3."
    },
    {
        "id": "2093",
        "title": "Edge Support",
        "code": "9.29.7.4."
    },
    {
        "id": "2094",
        "title": "Material Standard",
        "code": "9.29.8.1."
    },
    {
        "id": "2095",
        "title": "Thickness",
        "code": "9.29.8.2."
    },
    {
        "id": "2096",
        "title": "Nails",
        "code": "9.29.8.3."
    },
    {
        "id": "2097",
        "title": "Edge Support",
        "code": "9.29.8.4."
    },
    {
        "id": "2098",
        "title": "Material Standard",
        "code": "9.29.9.1."
    },
    {
        "id": "2099",
        "title": "Minimum Thickness",
        "code": "9.29.9.2."
    },
    {
        "id": "2100",
        "title": "Nails",
        "code": "9.29.9.3."
    },
    {
        "id": "2101",
        "title": "Edge Support",
        "code": "9.29.9.4."
    },
    {
        "id": "2102",
        "title": "Tile Application",
        "code": "9.29.10.1."
    },
    {
        "id": "2103",
        "title": "Mortar Base",
        "code": "9.29.10.2."
    },
    {
        "id": "2104",
        "title": "Adhesives",
        "code": "9.29.10.3."
    },
    {
        "id": "2105",
        "title": "Moisture Resistant Backing",
        "code": "9.29.10.4."
    },
    {
        "id": "2106",
        "title": "Joints between Tiles and Bathtub",
        "code": "9.29.10.5."
    },
    {
        "id": "2107",
        "title": "Required Finish Flooring",
        "code": "9.30.1.1."
    },
    {
        "id": "2108",
        "title": "Water Resistance",
        "code": "9.30.1.2."
    },
    {
        "id": "2109",
        "title": "Sleepers",
        "code": "9.30.1.3."
    },
    {
        "id": "2110",
        "title": "Finish Quality",
        "code": "9.30.1.4."
    },
    {
        "id": "2111",
        "title": "Required Underlay",
        "code": "9.30.2.1."
    },
    {
        "id": "2112",
        "title": "Materials and Thickness",
        "code": "9.30.2.2."
    },
    {
        "id": "2113",
        "title": "Fastening",
        "code": "9.30.2.3."
    },
    {
        "id": "2114",
        "title": "Joints Offset",
        "code": "9.30.2.4."
    },
    {
        "id": "2115",
        "title": "Surface Defects",
        "code": "9.30.2.5."
    },
    {
        "id": "2116",
        "title": "Thickness",
        "code": "9.30.3.1."
    },
    {
        "id": "2117",
        "title": "Strip Direction and End Joints",
        "code": "9.30.3.2."
    },
    {
        "id": "2118",
        "title": "Nailing",
        "code": "9.30.3.3."
    },
    {
        "id": "2119",
        "title": "Staples",
        "code": "9.30.3.4."
    },
    {
        "id": "2120",
        "title": "Adhesive",
        "code": "9.30.4.1."
    },
    {
        "id": "2121",
        "title": "Materials",
        "code": "9.30.5.1."
    },
    {
        "id": "2122",
        "title": "Substrate",
        "code": "9.30.6.1."
    },
    {
        "id": "2123",
        "title": "Application",
        "code": "9.31.1.1."
    },
    {
        "id": "2124",
        "title": "General",
        "code": "9.31.2.1."
    },
    {
        "id": "2125",
        "title": "Corrosion Protection",
        "code": "9.31.2.2."
    },
    {
        "id": "2126",
        "title": "Grab Bars",
        "code": "9.31.2.3."
    },
    {
        "id": "2127",
        "title": "Required Water Supply",
        "code": "9.31.3.1."
    },
    {
        "id": "2128",
        "title": "Required Connections",
        "code": "9.31.3.2."
    },
    {
        "id": "2129",
        "title": "Required Fixtures",
        "code": "9.31.4.1."
    },
    {
        "id": "2130",
        "title": "Laundry Fixtures",
        "code": "9.31.4.2."
    },
    {
        "id": "2131",
        "title": "Hot Water Supply",
        "code": "9.31.4.3."
    },
    {
        "id": "2132",
        "title": "Floor Drains",
        "code": "9.31.4.4."
    },
    {
        "id": "2133",
        "title": "Hot Water Temperature",
        "code": "9.31.6.1."
    },
    {
        "id": "2134",
        "title": "Equipment and Installation",
        "code": "9.31.6.2."
    },
    {
        "id": "2135",
        "title": "Corrosion-Resistant Coating",
        "code": "9.31.6.3."
    },
    {
        "id": "2136",
        "title": "Fuel-Burning Heaters",
        "code": "9.31.6.4."
    },
    {
        "id": "2137",
        "title": "Heating Coils",
        "code": "9.31.6.5."
    },
    {
        "id": "2138",
        "title": "Application",
        "code": "9.32.1.1."
    },
    {
        "id": "2139",
        "title": "Mechanical Ventilation for Dwelling Units",
        "code": "9.32.1.2."
    },
    {
        "id": "2140",
        "title": "Ventilation of Rooms and Spaces",
        "code": "9.32.1.3."
    },
    {
        "id": "2141",
        "title": "Natural Ventilation Area",
        "code": "9.32.2.1."
    },
    {
        "id": "2142",
        "title": "Protection from Weather and Insects",
        "code": "9.32.2.2."
    },
    {
        "id": "2143",
        "title": "General",
        "code": "9.32.3.1."
    },
    {
        "id": "2144",
        "title": "Required Mechanical Ventilation",
        "code": "9.32.3.2."
    },
    {
        "id": "2145",
        "title": "Total Ventilation Capacity",
        "code": "9.32.3.3."
    },
    {
        "id": "2146",
        "title": "Principal Exhaust",
        "code": "9.32.3.4."
    },
    {
        "id": "2147",
        "title": "Supplemental Exhaust",
        "code": "9.32.3.5."
    },
    {
        "id": "2148",
        "title": "Ventilation Systems Coupled with Forced Air Heating Systems",
        "code": "9.32.3.6."
    },
    {
        "id": "2149",
        "title": "Ventilation Systems Not Coupled with Forced Air Heating Systems",
        "code": "9.32.3.7."
    },
    {
        "id": "2150",
        "title": "Protection Against Depressurization",
        "code": "9.32.3.8."
    },
    {
        "id": "2151",
        "title": "Fan Ratings",
        "code": "9.32.3.9."
    },
    {
        "id": "2152",
        "title": "Ducts",
        "code": "9.32.3.10."
    },
    {
        "id": "2153",
        "title": "Heat Recovery Ventilators",
        "code": "9.32.3.11."
    },
    {
        "id": "2154",
        "title": "Outdoor Intake and Exhaust Openings",
        "code": "9.32.3.12."
    },
    {
        "id": "2155",
        "title": "Installation",
        "code": "9.32.3.13."
    },
    {
        "id": "2156",
        "title": "Design and Installation Requirements",
        "code": "9.33.1.1."
    },
    {
        "id": "2157",
        "title": "Solid Fuel-Burning Appliances",
        "code": "9.33.1.2."
    },
    {
        "id": "2158",
        "title": "Structural Movement",
        "code": "9.33.1.3."
    },
    {
        "id": "2159",
        "title": "Residential Heating Systems",
        "code": "9.33.2.1."
    },
    {
        "id": "2160",
        "title": "Equipment Sizing",
        "code": "9.33.2.2."
    },
    {
        "id": "2161",
        "title": "Indoor Design Temperatures",
        "code": "9.33.3.1."
    },
    {
        "id": "2162",
        "title": "Outdoor Design Temperatures",
        "code": "9.33.3.2."
    },
    {
        "id": "2163",
        "title": "Application",
        "code": "9.33.4.1."
    },
    {
        "id": "2164",
        "title": "Location of Carbon Monoxide Alarms",
        "code": "9.33.4.2."
    },
    {
        "id": "2165",
        "title": "Installation and Conformance to Standards",
        "code": "9.33.4.3."
    },
    {
        "id": "2166",
        "title": "Reserved",
        "code": "9.34.1.1."
    },
    {
        "id": "2167",
        "title": "Required Facilities",
        "code": "9.34.1.2."
    },
    {
        "id": "2168",
        "title": "Location of Equipment in Public Areas",
        "code": "9.34.1.3."
    },
    {
        "id": "2169",
        "title": "Recessed Lighting Fixtures",
        "code": "9.34.1.4."
    },
    {
        "id": "2170",
        "title": "Wiring and Cables",
        "code": "9.34.1.5."
    },
    {
        "id": "2171",
        "title": "Lighting of Entrances",
        "code": "9.34.2.1."
    },
    {
        "id": "2172",
        "title": "Outlets in Dwelling Units",
        "code": "9.34.2.2."
    },
    {
        "id": "2173",
        "title": "Stairways",
        "code": "9.34.2.3."
    },
    {
        "id": "2174",
        "title": "Basements",
        "code": "9.34.2.4."
    },
    {
        "id": "2175",
        "title": "Storage Rooms",
        "code": "9.34.2.5."
    },
    {
        "id": "2176",
        "title": "Garages and Carports",
        "code": "9.34.2.6."
    },
    {
        "id": "2177",
        "title": "Public and Service Areas",
        "code": "9.34.2.7."
    },
    {
        "id": "2178",
        "title": "Emergency Lighting",
        "code": "9.34.3.1."
    },
    {
        "id": "2179",
        "title": "Application",
        "code": "9.35.1.1."
    },
    {
        "id": "2180",
        "title": "Construction Requirements",
        "code": "9.35.1.2."
    },
    {
        "id": "2181",
        "title": "Carport Considered to be Garage",
        "code": "9.35.2.1."
    },
    {
        "id": "2182",
        "title": "Garage Floor",
        "code": "9.35.2.2."
    },
    {
        "id": "2183",
        "title": "Foundation Required",
        "code": "9.35.3.1."
    },
    {
        "id": "2184",
        "title": "Protection from Damage due to Soil Movement",
        "code": "9.35.3.2."
    },
    {
        "id": "2185",
        "title": "Small Garages",
        "code": "9.35.3.3."
    },
    {
        "id": "2186",
        "title": "Column Piers",
        "code": "9.35.3.4."
    },
    {
        "id": "2187",
        "title": "Interior Finish",
        "code": "9.35.4.1."
    },
    {
        "id": "2188",
        "title": "Columns",
        "code": "9.35.4.2."
    },
    {
        "id": "2189",
        "title": "Anchorage",
        "code": "9.35.4.3."
    },
    {
        "id": "2190",
        "title": "Application",
        "code": "9.36.1.1."
    },
    {
        "id": "2191",
        "title": "Exclusions",
        "code": "9.36.2.1."
    },
    {
        "id": "2192",
        "title": "Foundations",
        "code": "9.36.2.2."
    },
    {
        "id": "2193",
        "title": "Waterproofing and Dampproofing",
        "code": "9.36.2.3."
    },
    {
        "id": "2194",
        "title": "Smoke Alarms",
        "code": "9.36.2.4."
    },
    {
        "id": "2195",
        "title": "Buildings for Seasonal Tourist Accommodation or for Rent",
        "code": "9.36.3.1."
    },
    {
        "id": "2196",
        "title": "Material Requirements",
        "code": "9.37.1.1."
    },
    {
        "id": "2197",
        "title": "Requirement for Wood Preservative",
        "code": "9.37.1.2."
    },
    {
        "id": "2198",
        "title": "Exterior Joints",
        "code": "9.37.1.3."
    },
    {
        "id": "2199",
        "title": "Logs",
        "code": "9.37.2.1."
    },
    {
        "id": "2200",
        "title": "Attachment of Logs",
        "code": "9.37.2.2."
    },
    {
        "id": "2201",
        "title": "Joining Logs",
        "code": "9.37.2.3."
    },
    {
        "id": "2202",
        "title": "Vertical Logs",
        "code": "9.37.2.4."
    },
    {
        "id": "2203",
        "title": "Plates",
        "code": "9.37.2.5."
    },
    {
        "id": "2204",
        "title": "Support Over Openings",
        "code": "9.37.3.1."
    },
    {
        "id": "2205",
        "title": "Clearance",
        "code": "9.37.3.2."
    },
    {
        "id": "2206",
        "title": "Application",
        "code": "9.38.1.1."
    },
    {
        "id": "2207",
        "title": "General",
        "code": "9.38.2.1."
    },
    {
        "id": "2208",
        "title": "Other Building Components",
        "code": "9.38.3.1."
    },
    {
        "id": "2209",
        "title": "Spatial Separation",
        "code": "9.38.3.2."
    },
    {
        "id": "2210",
        "title": "Foundations and Anchorage",
        "code": "9.38.3.3."
    },
    {
        "id": "2211",
        "title": "Proximity to Above Ground Electrical Conductors",
        "code": "9.38.3.4."
    },
    {
        "id": "2212",
        "title": "Application",
        "code": "9.39.1.1."
    },
    {
        "id": "2213",
        "title": "Concrete",
        "code": "9.39.1.2."
    },
    {
        "id": "2214",
        "title": "Reinforcing Steel",
        "code": "9.39.1.3."
    },
    {
        "id": "2215",
        "title": "Slab Construction",
        "code": "9.39.1.4."
    },
    {
        "id": "2216",
        "title": "Application",
        "code": "9.40.1.1."
    },
    {
        "id": "2217",
        "title": "Change of Use and Compensating Construction",
        "code": "9.40.2.1."
    },
    {
        "id": "2218",
        "title": "Performance Level Evaluation and Compensating Construction",
        "code": "9.40.2.2."
    },
    {
        "id": "2219",
        "title": "Scope",
        "code": "10.1.1.1."
    },
    {
        "id": "2220",
        "title": "Change in Major Occupancy",
        "code": "10.1.1.2."
    },
    {
        "id": "2221",
        "title": "Classification of Major Occupancy",
        "code": "10.2.1.1."
    },
    {
        "id": "2222",
        "title": "Classification According to Construction and Occupancy",
        "code": "10.2.1.2."
    },
    {
        "id": "2223",
        "title": "Building Size and Construction",
        "code": "10.2.1.3."
    },
    {
        "id": "2224",
        "title": "General",
        "code": "10.3.1.1."
    },
    {
        "id": "2225",
        "title": "General",
        "code": "10.3.2.1."
    },
    {
        "id": "2226",
        "title": "Reduction in Performance Level",
        "code": "10.3.2.2."
    },
    {
        "id": "2227",
        "title": "Substitution",
        "code": "10.4.1.1."
    },
    {
        "id": "2228",
        "title": "Scope",
        "code": "11.1.1.1."
    },
    {
        "id": "2229",
        "title": "Definitions",
        "code": "11.1.1.2."
    },
    {
        "id": "2230",
        "title": "Construction Index and Hazard Index",
        "code": "11.2.1.1."
    },
    {
        "id": "2231",
        "title": "Multiple Occupancies",
        "code": "11.2.1.2."
    },
    {
        "id": "2232",
        "title": "Prohibition of Occupancy Combinations",
        "code": "11.2.1.3."
    },
    {
        "id": "2233",
        "title": "Material Alteration or Repair of a Building System",
        "code": "11.3.1.1."
    },
    {
        "id": "2234",
        "title": "New Building Systems and Extension of Existing Building Systems",
        "code": "11.3.1.2."
    },
    {
        "id": "2235",
        "title": "Portion of Extended Buildings",
        "code": "11.3.2.1."
    },
    {
        "id": "2236",
        "title": "Basic Renovation",
        "code": "11.3.3.1."
    },
    {
        "id": "2237",
        "title": "Extensive Renovation",
        "code": "11.3.3.2."
    },
    {
        "id": "2238",
        "title": "Extension, Material Alteration or Repair",
        "code": "11.3.4.1."
    },
    {
        "id": "2239",
        "title": "Existing Septic Tanks",
        "code": "11.3.5.1."
    },
    {
        "id": "2240",
        "title": "Vertical Separations and Existing Sewage Sys",
        "code": "11.3.5.2."
    },
    {
        "id": "2241",
        "title": "Performance Level",
        "code": "11.4.1.1."
    },
    {
        "id": "2242",
        "title": "Structural",
        "code": "11.4.2.1."
    },
    {
        "id": "2243",
        "title": "Increase in Occupant Load",
        "code": "11.4.2.2."
    },
    {
        "id": "2244",
        "title": "Change of Major Occupancy",
        "code": "11.4.2.3."
    },
    {
        "id": "2245",
        "title": "Plumbing",
        "code": "11.4.2.4."
    },
    {
        "id": "2246",
        "title": "Sewage Systems",
        "code": "11.4.2.5."
    },
    {
        "id": "2247",
        "title": "Extension of Buildings of Combustible Construction",
        "code": "11.4.2.6."
    },
    {
        "id": "2248",
        "title": "General",
        "code": "11.4.3.1."
    },
    {
        "id": "2249",
        "title": "Structural",
        "code": "11.4.3.2."
    },
    {
        "id": "2250",
        "title": "Increase in Occupant Load",
        "code": "11.4.3.3."
    },
    {
        "id": "2251",
        "title": "Change in Major Occupancy",
        "code": "11.4.3.4."
    },
    {
        "id": "2252",
        "title": "Plumbing",
        "code": "11.4.3.5."
    },
    {
        "id": "2253",
        "title": "Sewage Systems",
        "code": "11.4.3.6."
    },
    {
        "id": "2254",
        "title": "Extension of Buildings of Combustible Construction",
        "code": "11.4.3.7."
    },
    {
        "id": "2255",
        "title": "Compliance Alternatives",
        "code": "11.5.1.1."
    },
    {
        "id": "2256",
        "title": "Scope",
        "code": "12.1.1.1."
    },
    {
        "id": "2257",
        "title": "Application",
        "code": "12.1.1.2."
    },
    {
        "id": "2258",
        "title": "Energy Efficiency Design Before January 1, 2017",
        "code": "12.2.1.1."
    },
    {
        "id": "2259",
        "title": "Energy Efficiency Design After December 31, 2016",
        "code": "12.2.1.2."
    },
    {
        "id": "2260",
        "title": "Carbon Dioxide Equivalents",
        "code": "12.2.2.1."
    },
    {
        "id": "2261",
        "title": "Peak Electric Demand",
        "code": "12.2.3.1."
    },
    {
        "id": "2262",
        "title": "Application",
        "code": "12.3.1.1."
    },
    {
        "id": "2263",
        "title": "Windows and Sliding Glass Doors",
        "code": "12.3.1.2."
    },
    {
        "id": "2264",
        "title": "Temperature Control in Dwelling Units",
        "code": "12.3.1.3."
    },
    {
        "id": "2265",
        "title": "Hot Water Piping Insulation",
        "code": "12.3.1.4."
    },
    {
        "id": "2266",
        "title": "Residential Furnaces After December 31, 2014",
        "code": "12.3.1.5."
    },
    {
        "id": "2267",
        "title": "Energy Supply for Kitchen and Laundry Facilities After December 31, 2014",
        "code": "12.3.1.6."
    }
]

exports.masterIndex = masterIndex;

