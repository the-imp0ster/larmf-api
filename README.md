# LARMF API

## Overview
The LARMF API is a work in progress that allows users to get data about specific larmfs and filter them by various criteria such as traits, id, and stats.

## Features So Far...
- Get metadata for a specific larmf by its edition number.
- Retrieve all larmfs of a particular type.
- Find larmfs with a specific stat value.
- Get larmfs with a particular lucky number.

## Setup
1. Make sure you have Node.js installed.
2. Clone this repository.
3. Install dependencies using `npm install`.
4. Start the server with `node index.js`.

## Endpoints List
### Get Larmf by ID
- `GET /larmf/:edition`
- Retrieves the metadata for a larmf with a specific edition number.
- Example: `localhost:3000/larmf/2`

### Get Larmfs by Type
- `GET /larmfs/type/:type`
- Returns all larmfs of a specific type.
- Example: `localhost:3000/larmfs/type/Peachy`

### Get Larmfs by Stat
- `GET /larmfs/stats/:stat/:value`
- Retrieves all larmfs with a specific stat value.
- Example: `localhost:3000/larmfs/stats/slime/3`

### Get Larmfs by Lucky Number
- `GET /larmfs/luckynumber/:number`
- Returns all larmfs with a specified lucky number.
- Example: `localhost:3000/larmfs/luckynumber/7`

## Running the Server
In a terminal in your project folder, run `node index.js` to start the server. The API will be available at `http://localhost:3000`.  You are welcome to change the port.

## Data File
The API uses a JSON file (`nft_metadata.json` as a test file of 10 larmfs, `larmf_metadata.json` as the full array of 6300 larmfs) for storing larmf data. Ensure this file is correctly formatted and available in the project directory before running the program.
