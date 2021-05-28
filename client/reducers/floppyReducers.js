/**
 * ************************************
 *
 * @module  marketsReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

// import * as types from './actions/actions.js';

const initialState = {
  id: '',
  country: '',
  username: '',
  hotel: '',
  currencyType: '',
  //  conversion_Currency : '',
  exchangeRate: [],
  // itineraries: [], // shape of data -> array of objects: [{activities: [{}]}]
  itineraries: {}, //change itineraries to this
};

const floppyReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER': {
      let newUsername = state.username;
      let newId = state.id;
      //const newItineraries = [];
      const newItineraries = {};
      const newCurrency = action.payload[0].user_currency;

      const allItineraries = action.payload;

      newUsername = action.payload[0].name;
      newId = action.payload[0].account_id;

      for (let i = 0; i < allItineraries.length; i++) {
        newItineraries[allItineraries[i]._id] = allItineraries[i];
        //newItineraries.push(allItineraries[i]);
      }


      return {
        ...state,
        id: newId,
        username: newUsername,
        currencyType: newCurrency,
        itineraries: newItineraries,
      };
    }
    
    // new function that takes activities and inserts them into appropriate itinerary
    case 'UPDATE_ACTIVITIES': {
      // make a deep copy of the itineraries object
      const newItineraries = JSON.parse(JSON.stringify(state.itineraries));
      

      //for loop for each activity
      action.payload.forEach((currentActivity) => {
        // check the activity's itinerary_id,
        const itineraryMatchId = currentActivity._id;
        console.log({itineraryMatchId});
        const itineraryMatch = newItineraries[itineraryMatchId];
        // grab the correct itinerary object
        // check if object already has an activity property (array),
        // if it does, simply push to that array
        // if it doesn't, need to add a new property called activity initialize it to an array with one activity object.

        console.log('itineraryMatch: ', itineraryMatch);
        itineraryMatch.activities ? itineraryMatch.activities.push(currentActivity) : itineraryMatch.activities = [currentActivity];
      });
      return {
        ...state,
        itineraries: newItineraries,
      }      
    }


    case 'UPDATE_CURRENCY': {
      const newExchangeRate = action.payload.conversion_rates;
      return {
        ...state,
        exchangeRate: newExchangeRate,
      };
    }
    default:
      return state;
  }
};
export default floppyReducers;
