import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

const ItineraryCreator = (props) => {

    return (
        <div>
            <form method="POST" action='/homepage/itinerary'>
                <label>
                    Where would you like to go?
                    <input name="countryName" type="text" placeholder="addCountry" />
                    <input name="countryCode" type="text" placeholder="USD?" />
                </label>
                <br></br>
                <label>
                    What you flying?
                    <input name="flightName" type="text" placeholder="flight information" />
                    <input name="flightPrice" type="number" placeholder="flight cost" />
                </label>
                <br></br>
                <label>
                    Where you staying?
                    <input name="hotelName" type="text" placeholder="hotel name" />
                    <input name="hotelPrice" type="number" placeholder="hotel cost" />
                </label>
                <br></br>
                {/* {inputArrays} */}
                {/* <br></br>
                <label>
                    Add Activity
                    <input name="activity" type="text" placeholder ="activity"/>
                    <input name="activityCost" type="number" placeholder="amount" />
                </label> */}
                {/* <button onClick={setCount(count + 1)}>Add Activity</button>
                <button onClick={setCount(count - 1)}>Delete Activity</button> */}
                {/* <br></br> */}
                <input type="submit" value="Submit" />
            </form>
        </div>

    )
}

export default ItineraryCreator;