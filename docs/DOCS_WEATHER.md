# Weather

### **URL**:  https://localhost:3000/**weather?q=Pale**

Current weather. See more info [here](https://openweathermap.org/current).

### **URL**:  https://localhost:3000/**forecast?q=Pale**

5 days forecast. See more info [here](https://openweathermap.org/current).

### **URL**:  https://localhost:3000/**forecast/daily?q=Pale**

16 days forecast. See more info [here](https://openweathermap.org/forecast16).


**Parameters**

* **q** city name and country code divided by comma, use ISO 3166 country codes
* **id** City ID
* **lat**, **lon** coordinates of the location of your interest
* **zip** zip code

`There's more parameters, follow link at the bottom of the page.`

Returns a JSON object or xml.

Response:

```{
     "coord": {
       "lon": 145.77,
       "lat": -16.92
     },
     "weather": [
       {
         "id": 802,
         "main": "Clouds",
         "description": "scattered clouds",
         "icon": "03n"
       }
     ],
     "base": "stations",
     "main": {
       "temp": 300.15,
       "pressure": 1007,
       "humidity": 74,
       "temp_min": 300.15,
       "temp_max": 300.15
     },
     "visibility": 10000,
     "wind": {
       "speed": 3.6,
       "deg": 160
     },
     "clouds": {
       "all": 40
     },
     "dt": 1485790200,
     "sys": {
       "type": 1,
       "id": 8166,
       "message": 0.2064,
       "country": "AU",
       "sunrise": 1485720272,
       "sunset": 1485766550
     },
     "id": 2172797,
     "name": "Cairns",
     "cod": 200
   }
```

More info about openWeatherMap [here](https://openweathermap.org/api).
