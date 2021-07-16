import React, { useState, useEffect } from 'react'; // <-- get rid of use state and use effect?
import { useSelector, useDispatch } from 'react-redux';

const ItineraryCreator = (props) => (
  <div>
    <h3>Add an Itinerary!</h3>
    <form method="POST" action="/homepage/itinerary">
      <div className="form-group">
        <label>
          <strong>Where would you like to go?</strong>
        </label>
        <br />
        <input name="countryName" type="text" placeholder="addCountry" />
        <span> </span>
        <input name="countryCode" type="text" placeholder="USD?" />
      </div>
      <div className="form-group">
        <label>
          <strong>What you flying?</strong>
        </label>
        <br />
        <input name="flightName" type="text" placeholder="flight information" />
        <span> </span>
        <input name="flightPrice" type="number" placeholder="flight cost" />
      </div>
      <div className="form-group">
        <label>
          <strong>Where you staying?</strong>
        </label>
        <br />
        <input name="hotelName" type="text" placeholder="hotel name" />
        <span> </span>
        <input name="hotelPrice" type="number" placeholder="hotel cost" />
      </div>
      <br />
      <input type="submit" value="Submit" className="btn btn-primary btn-sm" />
    </form>
  </div>
);
export default ItineraryCreator;

/*
// renders a form to the screen to gather user input and send to /homepage/itinerary

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

const ItineraryCreator = (props) => {

// opporutniy to add ReactRouters
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label>
                    Where would you like to go?
                    <input name="countryName" type="text" placeholder="addCountry" id="country" />
                    <input name="countryCode" type="text" placeholder="USD?" id="countryCode" />
                </label>
                <br></br>
                <label>
                    What you flying?
                    <input name="flightName" type="text" placeholder="flight information" id="flight" />
                    <input name="flightPrice" type="number" placeholder="flight cost" id="flightCost" />
                </label>
                <br></br>
                <label>
                    Where you staying?
                    <input name="hotelName" type="text" placeholder="hotel name" id="hotel" />
                    <input name="hotelPrice" type="number" placeholder="hotel cost" id="hotelPrice" />
                </label>
                <br></br>
                {/* {inputArrays} */
{
  /* <br></br>
                <label>
                    Add Activity
                    <input name="activity" type="text" placeholder ="activity"/>
                    <input name="activityCost" type="number" placeholder="amount" />
                </label> */
}
{
  /* <button onClick={setCount(count + 1)}>Add Activity</button>
                <button onClick={setCount(count - 1)}>Delete Activity</button> */
}
{
  /* <br></br> */
}
//                 <input type="submit" value="Submit" />
//             </form>
//         </div>

//     )
// }

// export default ItineraryCreator;
