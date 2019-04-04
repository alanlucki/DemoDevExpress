﻿"use strict";

window.RealtorApp = window.RealtorApp || {};
window.RealtorApp.data = window.RealtorApp.data || {};

RealtorApp.data.SampleData = [
    {
        ID: "1",
        Address: "652 Avonwick Gate",
        City: "Toronto",
        State: "ON",
        ZipCode: "M3A25",
        Beds: "4",
        Baths: "4",
        HouseSize: 7500,
        LotSize: "0.8",
        Price: 780000,
        Coordinates: "43.7507639, -79.3184378",
        Features: "Dishwasher, Disposal, Separate laundry room, 3/4 bath downstairs, Formal dining room, Downstairs family room, Separate family room, Breakfast Bar/Counter, Breakfast nook (eating area), Granite countertops in kitchen, Hardwood flooring in kitchen, Kitchen island, Solid surface countertops in kitchen, Entry foyer, Front living room, Ceiling fan in master bedroom, Master bedroom separate from other, Mirrored door closet in master bedroom, 2nd bedroom: 11x13, 3rd bedroom: 11x14, 4th Bedroom: 18x13, Alarm system owned, Built-in microwave, Carpet, Ceiling fan(s), Convection oven, Double built-in gas ovens, Gas cooktop, Gas stove, Marble/Stone floors",
        YearBuilt: "2008",
        Type: "0",
        Status: "1",
        Images: ["data/Homes/1a.jpg", "data/Homes/1b.jpg"],
        Agent: {
            Name: "Henry Johnson",
            Phone: "(555) 359-3477",
            Photo: "data/Persons/1.png"
        }
    },
    {
        ID: "2",
        Address: "82649 Topeka St",
        City: "Riverbank",
        State: "CA",
        ZipCode: "95360",
        Beds: "5",
        Baths: "3",
        HouseSize: 12500,
        LotSize: "1.2",
        Price: 1750000,
        Coordinates: "37.7369999,-120.9430488",
        Features: "Dishwasher, Disposal, Separate laundry room, Full bath downstairs, Formal dining room, Downstairs family room, Separate family room, Breakfast Bar/Counter, Breakfast nook (eating area), Granite countertops in kitchen, Kitchen custom cabinets, Kitchen island, Pantry, Walk-in pantry, Entry foyer, Formal living room, Rear living room, Vaulted ceiling in living room, Balcony in master bedroom, Master bedroom separate from other, Master bedroom upstairs, Sitting room in master bedroom, Walk-in closet in master bedroom, 2nd bedroom: 13X20, 3rd bedroom: 13X17, 4th Bedroom: 13X18, 5th Bedroom: 14X16, Alarm system owned, Blinds, Built-in electric oven, Built-in microwave, Carpet, Ceiling fan(s), Gas cooktop, Intercom system, Marble/Stone floors, Water conditioner owned, Water filtering system, Window Coverings Throughout",
        YearBuilt: "2009",
        Type: "0",
        Status: "0",
        Images: ["data/Homes/2a.jpg", "data/Homes/2b.jpg"],
        Agent: {
            Name: "Alice Jones",
            Phone: "(555) 671-9265",
            Photo: "data/Persons/2.png"
        }
    },
    {
        ID: "3",
        Address: "328 S Kerema Ave",
        City: "Milford",
        State: "CT",
        ZipCode: "06465",
        Beds: "4",
        Baths: "2",
        HouseSize: 8356,
        LotSize: "0.04",
        Price: 350000,
        Coordinates: "41.1957999,-73.1022988",
        Features: "Dishwasher, Disposal, Refrigerator, Separate laundry room, Washer/Dryer on 2nd floor, Full bath downstairs, Formal dining room, Downstairs family room, Separate family room, Wet bar in family room, Breakfast nook (eating area), Garden window in kitchen, Granite countertops in kitchen, Kitchen island, Marble/Stone flooring in kitchen, Pantry, Formal living room, Front living room, Master bedroom separate from other, Master bedroom upstairs, Sitting room in master bedroom, Walk-in closet in master bedroom, 2nd bedroom: 16x12, 3rd bedroom: 13x16, 4th Bedroom: 18x12, Alarm system owned, Built-in microwave, Carpet, Ceiling fan(s), Double built-in electric ovens, Gas cooktop, Marble/Stone floors",
        YearBuilt: "2010",
        Type: "0",
        Status: "0",
        Images: ["data/Homes/3a.jpg", "data/Homes/3b.jpg"],
        Agent: {
            Name: "Peter Flores",
            Phone: "(555) 679-4748",
            Photo: "data/Persons/3.png"
        }
    },
    {
        ID: "4",
        Address: "5119 Beryl Dr",
        City: "San Antonio",
        State: "TX",
        ZipCode: "78212",
        Beds: "4",
        Baths: "2",
        HouseSize: 7980,
        LotSize: "0.7",
        Price: 455000,
        Coordinates: "29.4972699,-98.5366788",
        Features: "Dishwasher, Disposal, Refrigerator, Separate laundry room, Full bath downstairs, Living/Dining room combo, Separate family room, Breakfast Bar/Counter, Breakfast nook (eating area), Granite countertops in kitchen, Kitchen custom cabinets, Kitchen island, Recessed lighting in kitchen, Tile flooring in kitchen, Walk-in pantry, Formal living room, Front living room, Ceiling fan in master bedroom, Master bedroom downstairs, Walk-in closet in master bedroom, 2nd bedroom: 15x13, 3rd bedroom: 12x12, 4th Bedroom: 14x12, Alarm system owned, Blinds, Built-in microwave, Carpet, Ceiling fan(s), Central vacuum, Convection oven, Double built-in electric ovens, Electric cooktop, Intercom system, Tile floors",
        YearBuilt: "2007",
        Type: "0",
        Status: "1",
        Images: ["data/Homes/4a.jpg", "data/Homes/4b.jpg"],
        Agent: {
            Name: "Amanda Reed",
            Phone: "(555) 322-6737",
            Photo: "data/Persons/4.png"
        }
    },
    {
        ID: "5",
        Address: "61207 16th St N",
        City: "Moorhead",
        State: "MN",
        ZipCode: "56564",
        Beds: "5",
        Baths: "4",
        HouseSize: 14250,
        LotSize: "1.1",
        Price: 1700000,
        Coordinates: "46.88933,-96.7522388",
        Features: "Dishwasher, Disposal, Separate laundry room, Washer/Dryer on 1st floor, Full bath downstairs, Formal dining room, Downstairs family room, Separate family room, Breakfast Bar/Counter, Breakfast nook (eating area), Granite countertops in kitchen, Kitchen custom cabinets, Kitchen island, Formal living room, Rear living room, Sunken living room, Vaulted ceiling in living room, Balcony in master bedroom, Ceiling fan in master bedroom, Master bedroom separate from other, Master bedroom upstairs, Walk-in closet in master bedroom, 2nd bedroom: 16X17, 3rd bedroom: 14X16, 4th Bedroom: 13X13, 5th Bedroom: 12X12, Blinds, Built-in microwave, Carpet, Ceiling fan(s), Central vacuum, Double built-in electric ovens, Gas cooktop, Marble/Stone floors, Pot shelves, Water conditioner owned, Water filtering system, Window Coverings Throughout",
        YearBuilt: "2010",
        Type: "0",
        Status: "0",
        Images: ["data/Homes/5a.jpg", "data/Homes/5b.jpg"],
        Agent: {
            Name: "Ronald Allen",
            Phone: "(555) 925-8953",
            Photo: "data/Persons/5.png"
        }
    },
    {
        ID: "6",
        Address: "8512 Tanglewood Cir",
        City: "Reform",
        State: "AL",
        ZipCode: "35487",
        Beds: "3",
        Baths: "2",
        HouseSize: 5600,
        LotSize: "0.2",
        Price: 250000,
        Coordinates: "33.3794,-87.9785788",
        Features: "Dishwasher, Disposal, Refrigerator, Separate laundry room, Full bath downstairs, Formal dining room, Built-in bookcases in family room, Downstairs family room, Separate family room, Breakfast Bar/Counter, Breakfast nook (eating area), Granite countertops in kitchen, Kitchen custom cabinets, Kitchen island, Marble/Stone flooring in kitchen, Pantry, Formal living room, Front living room, Ceiling fan in master bedroom, Master bedroom downstairs, Master bedroom separate from other, Sitting room in master bedroom, Walk-in closet in master bedroom, 2nd bedroom: 11X15, 3rd bedroom: 11X14, Alarm system owned, Blinds, Built-in microwave, Carpet, Ceiling fan(s), Double built-in electric ovens, Drapes, Electric cooktop, Marble/Stone floors, Window Coverings Throughout, Wine refrigerator",
        YearBuilt: "2011",
        Type: "0",
        Status: "0",
        Images: ["data/Homes/6a.jpg", "data/Homes/6b.jpg"],
        Agent: {
            Name: "Larry Ward",
            Phone: "(555) 764-3772",
            Photo: "data/Persons/6.png"
        }
    },
    {
        ID: "7",
        Address: "7121 Bailey St",
        City: "Worcester",
        State: "MA",
        ZipCode: "01605",
        Beds: "4",
        Baths: "3",
        HouseSize: 6900,
        LotSize: "2.1",
        Price: 555000,
        Coordinates: "42.2797,-71.8746388",
        Features: "Dishwasher, Disposal, Refrigerator, Separate laundry room, Washer/Dryer on 1st floor, Full bath downstairs, Formal dining room, Downstairs family room, Separate family room, Breakfast Bar/Counter, Breakfast nook (eating area), Kitchen island, Recessed lighting in kitchen, Tile countertops in kitchen, Walk-in pantry, Entry foyer, Formal living room, Front living room, Dressing room in master bedroom, Master bedroom separate from other, Master bedroom upstairs, Walk-in closet in master bedroom, 2nd bedroom: 14x16, 3rd bedroom: 12x13, 4th Bedroom: 13x14, Carpet, Double built-in electric ovens, Drywall, Gas cooktop, Manmade wood or laminate floors, Marble/Stone floors, Water conditioner loope",
        YearBuilt: "2008",
        Type: "0",
        Status: "1",
        Images: ["data/Homes/7a.jpg", "data/Homes/7b.jpg"],
        Agent: {
            Name: "Roy Bryant",
            Phone: "(555) 417-4776",
            Photo: "data/Persons/7.png"
        }
    },
    {
        ID: "8",
        Address: "620201 Plymouth Rd",
        City: "Detroit",
        State: "MI",
        ZipCode: " 48224",
        Beds: "4",
        Baths: "4",
        HouseSize: 7840,
        LotSize: "0.33",
        Price: 610000,
        Coordinates: "42.3716299,-83.2572188",
        Features: "Dishwasher, Disposal, Refrigerator, Separate laundry room, Full bath downstairs, Formal dining room, 2+ family rooms, Separate family room, Breakfast nook (eating area), Granite countertops in kitchen, Kitchen custom cabinets, Kitchen island, Walk-in pantry, Entry foyer, Formal living room, Rear living room, Vaulted ceiling in living room, Ceiling fan in master bedroom, Master bedroom downstairs, Walk-in closet in master bedroom, 2nd bedroom: 12x15, 3rd bedroom: 12x15, 4th Bedroom: 12x15, Blinds, Built-in microwave, Carpet, Ceiling fan(s), Electric cooktop, Shutters, Skylight(s), Water conditioner owned, Water filtering system, Window coverings partial",
        YearBuilt: "2010",
        Type: "0",
        Status: "0",
        Images: ["data/Homes/8a.jpg", "data/Homes/8b.jpg"],
        Agent: {
            Name: "Betty Watson",
            Phone: "(555) 303-0623",
            Photo: "data/Persons/8.png"
        }
    },
    {
        ID: "9",
        Address: "1198 Theresa Cir",
        City: "Whitinsville",
        State: "MA",
        ZipCode: "01582",
        Beds: "4",
        Baths: "3",
        HouseSize: 4990,
        LotSize: "0.8",
        Price: 320000,
        Coordinates: "42.1072,-71.6928888",
        Features: "Dishwasher, Disposal, Refrigerator, Separate laundry room, Washer/Dryer on 1st floor, 1/2 bath downstairs, Formal dining room, 2+ family rooms, Built-in bookcases in family room, Breakfast Bar/Counter, Granite countertops in kitchen, Kitchen island, Tile flooring in kitchen, Walk-in pantry, Entry foyer, Formal living room, Built-in bookcases in master bedroom, Built-in entertainment center in master bedroom, Ceiling fan in master bedroom, Dressing room in master bedroom, Walk-in closet in master bedroom, 2nd bedroom: 13x12, 3rd bedroom: 12x12, 4th Bedroom: 13x12, Alarm system rented, Blinds, Built-in microwave, Carpet, Ceiling fan(s), Double built-in gas ovens, Tile floors, Window Coverings Throughout",
        YearBuilt: "2011",
        Type: "0",
        Status: "0",
        Images: ["data/Homes/9a.jpg", "data/Homes/9b.jpg"],
        Agent: {
            Name: "Michael Coleman",
            Phone: "(555) 814-6792",
            Photo: "data/Persons/9.png"
        }
    },
    {
        ID: "10",
        Address: "420234 Rogge St",
        City: "Detroit",
        State: "MI",
        ZipCode: "48234",
        Beds: "4",
        Baths: "3",
        HouseSize: 6900,
        LotSize: "3.9",
        Price: 320000,
        Coordinates: "42.4359,-83.0277888",
        Features: "Dishwasher, Disposal, Separate laundry room, Full bath downstairs, Formal dining room, Downstairs family room, Separate family room, Granite countertops in kitchen, Kitchen custom cabinets, Vaulted ceiling in living room, Master bedroom downstairs, Master bedroom separate from other, 2nd bedroom: 12x15, 3rd bedroom: 13x13, 4th Bedroom: 12x14, Alarm system owned, Carpet, Ceiling fan(s), Double built-in gas ovens, Marble/Stone floors, Shutters, Window Coverings Throughout",
        YearBuilt: "2007",
        Type: "0",
        Status: "1",
        Images: ["data/Homes/10a.jpg", "data/Homes/10b.jpg"],
        Agent: {
            Name: "Anna Torres",
            Phone: "(555) 488-8358",
            Photo: "data/Persons/10.png"
        }
    },
    {
        ID: "11",
        Address: "6677 Kingsbridge Ln",
        City: "Ridgewood",
        State: "NJ",
        ZipCode: "07454",
        Beds: "5",
        Baths: "4",
        HouseSize: 14750,
        LotSize: "0.99",
        Price: 1100000,
        Coordinates: "40.98791,-74.0895488",
        Features: "Dishwasher, Disposal, Refrigerator, Separate laundry room, Washer/Dryer on 1st floor, Full bath downstairs, Dining area, Formal dining room, 2+ family rooms, Breakfast Bar/Counter, Kitchen island, Entry foyer, Rear living room, 2 master bedrooms, Balcony in master bedroom, Ceiling fan in master bedroom, Master bedroom downstairs, Master bedroom separate from other, Great room, 2nd bedroom: 15X13, 3rd bedroom: 11X12, 4th Bedroom: 11X12, 5th Bedroom: 11X10, Atrium(s), Blinds, Built-in gas oven, Carpet, Ceiling fan(s), Intercom system, Marble/Stone floors, Pot shelves",
        YearBuilt: "2009",
        Type: "0",
        Status: "0",
        Images: ["data/Homes/11a.jpg", "data/Homes/11b.jpg"],
        Agent: {
            Name: "Steven Wood",
            Phone: "(555) 564-7061",
            Photo: "data/Persons/11.png"
        }
    },
    {
        ID: "12",
        Address: "4815 Warbler Ln",
        City: "Rockport",
        State: "TX",
        ZipCode: "78388",
        Beds: "4",
        Baths: "3",
        HouseSize: 9600,
        LotSize: "1.34",
        Price: 700000,
        Coordinates: "28.0221699,-97.0792288",
        Features: "Dishwasher, Disposal, Separate laundry room, Washer/Dryer on 1st floor, Full bath downstairs, Formal dining room, Separate family room, Breakfast nook (eating area), Garden window in kitchen, Granite countertops in kitchen, Hardwood flooring in kitchen, Pantry, Entry foyer, Formal living room, Vaulted ceiling in living room, Master bedroom downstairs, Master bedroom separate from other, Walk-in closet in master bedroom, 2nd bedroom: 16X13, 3rd bedroom: 15X14, 4th Bedroom: 17X13, Blinds, Built-in electric oven, Built-in microwave, Carpet, Ceiling fan(s), Central vacuum, Double built-in electric ovens, Electric stove, Intercom system, Shutters, Water conditioner owned",
        YearBuilt: "2010",
        Type: "0",
        Status: "0",
        Images: ["data/Homes/12a.jpg", "data/Homes/12b.jpg"],
        Agent: {
            Name: "George Wilson",
            Phone: "(555) 638-8359",
            Photo: "data/Persons/12.png"
        }
    },
    {
        ID: "13",
        Address: "115636 Hodges Ln",
        City: "Moundville",
        State: "AL",
        ZipCode: "35474",
        Beds: "3",
        Baths: "3",
        HouseSize: 7550,
        LotSize: "1.6",
        Price: 450000,
        Coordinates: "33.0315799,-87.6113788",
        Features: "Dishwasher, Disposal, Separate laundry room, Washer/Dryer on 1st floor, 1/2 bath downstairs, Formal dining room, Separate family room, Breakfast Bar/Counter, Tile flooring in kitchen, Walk-in pantry, Formal living room, Front living room, Sunken living room, Ceiling fan in master bedroom, Master bedroom separate from other, Master bedroom upstairs, Sitting room in master bedroom, Walk-in closet in master bedroom, 2nd bedroom: 13X14, 3rd bedroom: 12X13, Blinds, Built-in electric oven, Carpet, Ceiling fan(s), Drapes, Drywall, Gas cooktop, Tile floors",
        YearBuilt: "2011",
        Type: "0",
        Status: "0",
        Images: ["data/Homes/13a.jpg", "data/Homes/13b.jpg"],
        Agent: {
            Name: "Shawn Murphy",
            Phone: "(555) 217-3088",
            Photo: "data/Persons/13.png"
        }
    },
    {
        ID: "14",
        Address: "6351 Forrest St",
        City: "Jersey City",
        State: "NJ",
        ZipCode: "07308",
        Beds: "4",
        Baths: "4",
        HouseSize: 10255,
        LotSize: "0.3",
        Price: 320000,
        Coordinates: "40.71295,-74.0750688",
        Features: "Dishwasher, Disposal, Refrigerator, Separate laundry room, Washer/Dryer on 1st floor, Full bath downstairs, Formal dining room, Downstairs family room, Separate family room, Granite countertops in kitchen, Kitchen custom cabinets, Kitchen island, Tile flooring in kitchen, Rear living room, Master bedroom upstairs, Walk-in closet in master bedroom, 2nd bedroom: 14x14, 3rd bedroom: 11x13, 4th Bedroom: 15x11, Carpet, Double built-in electric ovens, Marble/Stone floors, Tile floors",
        YearBuilt: "2008",
        Type: "0",
        Status: "1",
        Images: ["data/Homes/14a.jpg", "data/Homes/14b.jpg"],
        Agent: {
            Name: "Carolyn Lewis",
            Phone: "(555) 287-4304",
            Photo: "data/Persons/14.png"
        }
    },
    {
        ID: "15",
        Address: "1268 Bright St",
        City: "Jersey City",
        State: "NJ",
        ZipCode: "07308",
        Beds: "4",
        Baths: "2",
        HouseSize: 5770,
        LotSize: "1.3",
        Price: 310000,
        Coordinates: "40.71776,-74.0480788",
        Features: "Dishwasher, Disposal, Separate laundry room, Full bath downstairs, Formal dining room, Built-in bookcases in family room, Separate family room, Breakfast Bar/Counter, Breakfast nook (eating area), Garden window in kitchen, Granite countertops in kitchen, Kitchen island, Recessed lighting in kitchen, Tile flooring in kitchen, Entry foyer, Formal living room, Sunken living room, Vaulted ceiling in living room, Ceiling fan in master bedroom, Master bedroom downstairs, Master bedroom separate from other, Walk-in closet in master bedroom, 2nd bedroom: 14x14, 3rd bedroom: 14x14, 4th Bedroom: 14x14, Alarm system owned, Built-in electric oven, Built-in microwave, Carpet, Ceiling fan(s), Central vacuum, Electric cooktop, Intercom system, Marble/Stone floors, Shutters, Tile floors, Water conditioner loope, Window Coverings Throughout",
        YearBuilt: "2008",
        Type: "0",
        Status: "1",
        Images: ["data/Homes/15a.jpg", "data/Homes/15b.jpg"],
        Agent: {
            Name: "David Jackson",
            Phone: "(555) 528-1380",
            Photo: "data/Persons/15.png"
        }
    },
    {
        ID: "16",
        Address: "32125 4th St NW #2",
        City: "Washington",
        State: "DC",
        ZipCode: "20001",
        Beds: "5",
        Baths: "6",
        HouseSize: 14600,
        LotSize: "2.3",
        Price: 2800000,
        Coordinates: "38.9090899,-77.0141688",
        Features: "Washer/Dryer on 1st floor, Washer/Dryer on 2nd floor, Full bath downstairs, Breakfast room/Nook, Formal dining room, Downstairs family room, Breakfast Bar/Counter, Breakfast nook (eating area), Granite countertops in kitchen, Kitchen custom cabinets, Kitchen island, Recessed lighting in kitchen, Tile flooring in kitchen, Walk-in pantry, Built-in bookcases in living room, Entry foyer, Formal living room, Vaulted ceiling in living room, Master bedroom upstairs, Sitting room in master bedroom, Walk-in closet in master bedroom, Great room, 2nd bedroom: 20X18, 3rd bedroom: 15X14, 4th Bedroom: 22X19, 5th Bedroom: 14X16, Alarm system owned, Built-in microwave, Carpet, Intercom system, Marble/Stone floors, Shutters, Warming drawer, Water conditioner owned, Window Coverings Throughout, Wine refrigerator",
        YearBuilt: "2010",
        Type: "0",
        Status: "2",
        Images: ["data/Homes/16a.jpg", "data/Homes/16b.jpg"],
        Agent: {
            Name: "Annie Brown",
            Phone: "(555) 952-7888",
            Photo: "data/Persons/16.png"
        }
    },
    {
        ID: "17",
        Address: "7700 Elmwood Dr",
        City: "Cleveland",
        State: "OK",
        ZipCode: "74021",
        Beds: "4",
        Baths: "4",
        HouseSize: 8530,
        LotSize: "0.45",
        Price: 470000,
        Coordinates: "36.3179899,-96.4718688",
        Features: "Dishwasher, Disposal, Separate laundry room, Washer/Dryer on 1st floor, Full bath downstairs, Breakfast room/Nook, Kitchen/Dining room combo, 2+ family rooms, Upstairs &amp; Downstairs family rooms, Wet bar in family room, Breakfast Bar/Counter, Breakfast nook (eating area), Garden window in kitchen, Granite countertops in kitchen, Kitchen custom cabinets, Recessed lighting in kitchen, Tile flooring in kitchen, Walk-in pantry, Entry foyer, Formal living room, Balcony in master bedroom, Ceiling fan in master bedroom, Master bedroom downstairs, Master bedroom separate from other, Walk-in closet in master bedroom, Great room, 2nd bedroom: 14X14, 3rd bedroom: 15X15, 4th Bedroom: 16X14, Alarm system owned, Blinds, Pot shelves, Tile floors, Water conditioner owned, Water filtering system, Window Coverings Throughout, Wine refrigerator",
        YearBuilt: "2009",
        Type: "0",
        Status: "0",
        Images: ["data/Homes/17a.jpg", "data/Homes/17b.jpg"],
        Agent: {
            Name: "Juan Miller",
            Phone: "(555) 649-4437",
            Photo: "data/Persons/17.png"
        }
    },
    {
        ID: "18",
        Address: "8308 Vassar Ave",
        City: "Swarthmore",
        State: "PA",
        ZipCode: "19088",
        Beds: "5",
        Baths: "5",
        HouseSize: 14100,
        LotSize: "1.9",
        Price: 1900000,
        Coordinates: "39.8994833,-75.3427167",
        Features: "Dishwasher, Disposal, Refrigerator, Separate laundry room, Washer/Dryer on 1st floor, Full bath downstairs, Formal dining room, Built-in bookcases in family room, Separate family room, Breakfast Bar/Counter, Breakfast nook (eating area), Granite countertops in kitchen, Kitchen custom cabinets, Kitchen island, Marble/Stone flooring in kitchen, Recessed lighting in kitchen, Walk-in pantry, Built-in bookcases in living room, Built-in entertainment center, Formal living room, Vaulted ceiling in living room, 2 master bedrooms, Dressing room in master bedroom, Walk-in closet in master bedroom, 2nd bedroom: 17X13, 3rd bedroom: 16X12, 4th Bedroom: 21X21, 5th Bedroom: 12X16, Alarm system owned, Built-in microwave, Carpet, Ceiling fan(s), Central vacuum, Convection oven, Double built-in electric ovens, Gas stove",
        YearBuilt: "2009",
        Type: "0",
        Status: "0",
        Images: ["data/Homes/18a.jpg", "data/Homes/18b.jpg"],
        Agent: {
            Name: "Jessica Wright",
            Phone: "(555) 564-7427",
            Photo: "data/Persons/18.png"
        }
    },
    {
        ID: "19",
        Address: "8913 Lakeshore Dr",
        City: "Jacksons Gap",
        State: "AL",
        ZipCode: "36863",
        Beds: "4",
        Baths: "3",
        HouseSize: 12320,
        LotSize: "0.87",
        Price: 900000,
        Coordinates: "39.8992599,-75.3408188",
        Features: "Dishwasher, Disposal, Separate laundry room, Washer/Dryer on 1st floor, Full bath downstairs, Formal dining room, 2+ family rooms, Downstairs family room, Separate family room, Upstairs family room, Breakfast nook (eating area), Kitchen custom cabinets, Kitchen island, Tile countertops in kitchen, Walk-in pantry, Formal living room, Front living room, Vaulted ceiling in living room, Master bedroom downstairs, Master bedroom separate from other, Walk-in closet in master bedroom, 2nd bedroom: 16X13, 3rd bedroom: 16X13, 4th Bedroom: 20X14, Blinds, Built-in electric oven, Built-in microwave, Carpet, Gas cooktop, Pot shelves, Tile floors",
        YearBuilt: "2007",
        Type: "0",
        Status: "1",
        Images: ["data/Homes/19a.jpg", "data/Homes/19b.jpg"],
        Agent: {
            Name: "Dennis Hall",
            Phone: "(555) 613-5607",
            Photo: "data/Persons/19.png"
        }
    },
    {
        ID: "20",
        Address: "13673 Pearl Dr #7",
        City: "Monroe",
        State: "MI",
        ZipCode: "48161",
        Beds: "4",
        Baths: "2",
        HouseSize: 7300,
        LotSize: "0.3",
        Price: 399000,
        Coordinates: "41.94311,-83.3023388",
        Features: "Dishwasher, Disposal, Separate laundry room, Full bath downstairs, Formal dining room, Separate family room, Breakfast Bar/Counter, Granite countertops in kitchen, Kitchen custom cabinets, Pantry, Formal living room, Ceiling fan in master bedroom, Master bedroom separate from other, Walk-in closet in master bedroom, 2nd bedroom: 15x15, 3rd bedroom: 13x12, 4th Bedroom: 14x12, Alarm system wired, Built-in microwave, Carpet, Ceiling fan(s), Central vacuum, Double built-in electric ovens, Gas cooktop, Marble/Stone floors, Tile floors, Window coverings partial",
        YearBuilt: "2010",
        Type: "0",
        Status: "0",
        Images: ["data/Homes/20a.jpg", "data/Homes/20b.jpg"],
        Agent: {
            Name: "Diana Ward",
            Phone: "(555) 923-5371",
            Photo: "data/Persons/20.png"
        }
    },
    {
        ID: "21",
        Address: "15447 Via Viento",
        City: "Atascadero",
        State: "CA",
        ZipCode: "93420",
        Beds: "4",
        Baths: "3",
        HouseSize: 11300,
        LotSize: "1.06",
        Price: 1100000,
        Coordinates: "35.5161,-120.6975488",
        Features: "Dishwasher, Disposal, Refrigerator, Separate laundry room, Washer/Dryer on 2nd floor, 3/4 bath downstairs, Formal dining room, Downstairs family room, Breakfast nook (eating area), Granite countertops in kitchen, Hardwood flooring in kitchen, Kitchen island, Pantry, Formal living room, Front living room, Sunken living room, Vaulted ceiling in living room, Master bedroom separate from other, Master bedroom upstairs, Sitting room in master bedroom, Walk-in closet in master bedroom, 2nd bedroom: 15X11, 3rd bedroom: 12X17, 4th Bedroom: 14X18, Blinds, Built-in microwave, Carpet, Double built-in electric ovens, Drywall, Tile floors, Window Coverings Throughout",
        YearBuilt: "2007",
        Type: "0",
        Status: "1",
        Images: ["data/Homes/21a.jpg", "data/Homes/21b.jpg"],
        Agent: {
            Name: "Joe Campbell",
            Phone: "(555) 387-3795",
            Photo: "data/Persons/21.png"
        }
    },
    {
        ID: "22",
        Address: "114840 Interlake Ave N",
        City: "Seattle",
        State: "WA",
        ZipCode: "98131",
        Beds: "4",
        Baths: "2",
        HouseSize: 7990,
        LotSize: "2.2",
        Price: 400000,
        Coordinates: "47.7577899,-122.3398088",
        Features: "Dishwasher, Disposal, Refrigerator, Separate laundry room, Full bath downstairs, Formal dining room, Living/Dining room combo, Downstairs family room, Separate family room, Breakfast Bar/Counter, Garden window in kitchen, Kitchen custom cabinets, Tile countertops in kitchen, Tile flooring in kitchen, Walk-in pantry, Entry foyer, Formal living room, Front living room, Vaulted ceiling in living room, Ceiling fan in master bedroom, Master bedroom upstairs, Sitting room in master bedroom, Walk-in closet in master bedroom, 2nd bedroom: 18X15, 3rd bedroom: 18X15, 4th Bedroom: 17X11, Alarm system owned, Built-in microwave, Carpet, Ceiling fan(s), Double built-in gas ovens, Gas cooktop, Intercom system, Shutters, Tile floors, Water conditioner owned, Water filtering system",
        YearBuilt: "2007",
        Type: "0",
        Status: "1",
        Images: ["data/Homes/22a.jpg", "data/Homes/22b.jpg"],
        Agent: {
            Name: "Nancy Evans",
            Phone: "(555) 284-2436",
            Photo: "data/Persons/22.png"
        }
    },
    {
        ID: "23",
        Address: "1552 College Ave",
        City: "Winnipeg",
        State: "MB",
        ZipCode: "R2W10",
        Beds: "4",
        Baths: "2",
        HouseSize: 5200,
        LotSize: "3.66",
        Price: 330000,
        Coordinates: "49.92493,-97.1476888",
        Features: "Dishwasher, Disposal, Separate laundry room, Full bath downstairs, Formal dining room, 2+ family rooms, Separate family room, Upstairs &amp; Downstairs family rooms, Breakfast Bar/Counter, Breakfast nook (eating area), Granite countertops in kitchen, Kitchen custom cabinets, Kitchen island, Recessed lighting in kitchen, Tile flooring in kitchen, Entry foyer, Formal living room, Front living room, Vaulted ceiling in living room, Master bedroom separate from other, Walk-in closet in master bedroom, 2nd bedroom: 14X13, 3rd bedroom: 13X13, 4th Bedroom: 14X12, Blinds, Carpet, Ceiling fan(s), Double built-in electric ovens, Gas stove, Pot shelves, Tile floors",
        YearBuilt: "2008",
        Type: "0",
        Status: "1",
        Images: ["data/Homes/23a.jpg", "data/Homes/23b.jpg"],
        Agent: {
            Name: "Robert Powell",
            Phone: "(555) 630-8133",
            Photo: "data/Persons/23.png"
        }
    }
];