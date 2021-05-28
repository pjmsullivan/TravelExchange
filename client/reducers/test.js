const state = {
  itineraries: {
    1: {
      id: 1,
      trip: 'Europe',
      activities: [ {
          activity: 'hotdog eating contest'
        },
        {
          activity: 'baseball game'
        }
      ]
    },
    2: {
      id: 2,
      trip: 'Mexico'
    },
    3: {
      id: 3,
      trip: 'Japan'

    }
  }
}

const newItineraries = JSON.parse(JSON.stringify({ ...state.itineraries }));

// {...state.itineraries[activities]: [...state.itineraries.activities]}
// const newItineraries = { ...state.itineraries, ...state.itineraries.activities: [...state.itineraries.activities]};
console.log(newItineraries[1].activities === state.itineraries[1].activities);
console.log(newItineraries);