/*
Welcome to week 2 of ACM Hack's Hack School! We'll be 
covering Javascript for this week. There are a lot of 
function templates that we'll fill out together as we
go through the workshop and learn these concepts.
*/


/*
For this function logTrip, we're passing in a trip name
(i.e. "Thanksgiving in Japan"), the number of days for this 
trip (i.e. 1), and the cost per day in dollars (i.e. 500). 
Use console.log to output the trip's name and its total cost. 
HINT: Use * to multiply two numbers, and feel free to use multiple
console.log statements. Test your function when you're done!
*/
function logTrip(tripName, tripLen, costPerDay){

}

/* Uncomment the line below to call the function. */
// logTrip("Thanksgiving in Japan", 1, 500);


/*
Below, we've created an object to represent our Japan trip.
However, things have changed — we want to stay in Japan for 3
days now, and the cost has been bumped up to $650. Edit tripObject
to reflect this new data. 
EXTRA: We have some friends joining us for our trip. Add in a new
 property to tripObject — numTravelers — and set it equal to 4.
*/
let tripObject = {
    name: "Thanksgiving in Japan",
    tripLen: 1,
    costPerDay: 500,
};

/* EDIT TRIPOBJECT HERE: */



///////////////////////////

/*
Below, we've created two tripObjects. We're on a tight budget,
so make a function called cheaperTrip that takes both tripObjects 
as inputs, and returns the tripObject that has the cheaper individual cost. 
HINT: individual cost = tripLen * costPerDay / numTravellers
HINT: use an if statement to see if tripObject1's individual cost
is bigger/smaller than tripObject2's.
*/

const tripObject1 = {
    name: "Christmas in Korea",
    tripLen: 4,
    costPerDay: 237,
    numTravellers: 3,
}

const tripObject2 = {
    name: "Christmas in Taiwan",
    tripLen: 5,
    costPerDay: 367,
    numTravellers: 6,
}
/* MAKE YOUR FUNCTION HERE */


///////////////////////////

/* Uncomment the below line to test out your function */
// console.log(cheaperTrip(tripObject1, tripObject2));

/*
Below, we've created an array of travel destinations. These
represent all the places we're going to visit. We're
interested in seeing if a certain travel destination is 
already included in this array. Create an arrow function 
called isTripIncluded that takes in this array, and some trip
destination. Return true if the trip destination is inside
the array, and false otherwise.

HINT: Use a for loop to iterate through the array, and compare 
each iteration to our target destination. 
*/

const destinations = [
    "Manila",
    "Shanghai",
    "Taipei",
    "Barcelona",
    "Munich",
    "New York",
]

/* MAKE YOUR FUNCTION HERE */


///////////////////////////

/* 
    Uncomment the below line to test out your function.
    Feel free to test whatever target destination you'd like.
*/
// console.log(isTripIncluded(destinations, ""));


/*
For our trip, we want to display the current weather for our 
selected destination. Since fetching this data is an asynchronous operation, 
we'll use a Promise to simulate retrieving the weather information. Fill 
in the below Promise code to achieve this. Then, add a then/catch statement
to either log the weather data, or an error message.
*/

async function displayWeather(destination) {
    // Here's the data we've retrieved.
    const weatherData = {
      Hawaii: 'Sunny',
      Bali: 'Humid',
      Alaska: 'Snowy',
    };
  
    try {
      // Simulate an asynchronous operation using a Promise and await
      const message = await new Promise((resolve, reject) => {
        setTimeout(() => {
          /*
            TODO HERE:See if the weather for our destination exists, 
            and make a resolve statement to return the corresponding
            weatherData, and a reject statement to return an error
            message
          */
        }, 1000);
      });
      console.log("message", message);
    } catch (error) {
      console.error('Error:', error);
    }
}
  
// Call the function with a destination
displayWeather('Bali');
displayWeather('Alaska');
displayWeather('Paris'); // This should trigger the error log.
