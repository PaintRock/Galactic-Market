# API Documentation

## Overview
This API provides access to a movie-themed marketplace, where users can explore different movie universes and purchase related merchandise.

## Authentication
To access the API, you need to obtain an API key. You can request one by signing up on our platform.

## Endpoints

### Get Movie Planets
- **URL**: `/movie-planets`
- **Method**: GET
- **Description**: Retrieves a list of available movie-themed planets.
- **Parameters**:
  - None
- **Response**:
  ```json
  [
    {
      "name": "Wakanda",
      "image_url": "https://example.com/wakanda.jpg",
      "description": "Explore the technologically advanced nation of Wakanda."
    },
    {
      "name": "Mars",
      "image_url": "https://example.com/mars.jpg",
      "description": "Embark on a journey to the red planet."
    },
    ...
  ]

  Get Planet Details
URL: /movie-planets/{planet_id}
Method: GET
Description: Retrieves details of a specific movie-themed planet.
Parameters:
planet_id (required): The unique identifier of the planet.
Response:

{
  "name": "Wakanda",
  "image_url": "https://example.com/wakanda.jpg",
  "description": "Explore the technologically advanced nation of Wakanda.",
  "merchandise": [
    {
      "name": "Black Panther Action Figure",
      "price": 19.99
    },
    {
      "name": "Wakanda Forever T-Shirt",
      "price": 14.99
    },
    ...
  ]
}
Error Handling
The API returns appropriate HTTP status codes to indicate the success or failure of a request.
Error responses include a JSON object with an error message.
Rate Limits
Requests to the API are limited to prevent abuse. Please refer to our documentation for details.
Examples
JavaScript Example:

// Fetch movie planets
fetch('/movie-planets')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

