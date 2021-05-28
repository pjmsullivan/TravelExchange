import React, { useState, useEffect } from 'react'; //<-- get rid of use state and use effect?
import { useSelector, useDispatch } from 'react-redux'
import Activity from './Activity.jsx';
const Trip = (props) => {

// fetch('https://v6.exchangerate-api.com/v6/210336b0a4a601367acee4c6/latest/USD')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     //get user native currency
    const curCurrency = useSelector(state => state.octo.currencyType);
    const curRates = useSelector(state => state.octo.exchangeRate);

    const hotelexchangeRate = parseInt(props.hotel_price) / curRates[props.currency_code]
    const flightexchangeRate = parseInt(props.flight_price) / curRates[props.currency_code]

    const activities = [];
    if (props.activities){
        for (let i = 0; i < props.activities.length; i++){
            console.log("ACTIVITIES: ", props.activities[i]);
            activities.push(<Activity {...props.activities[i]} currency_code={props.currency_code}/>)
        }
    }
    return (
        <div className="trips">
            <strong>{props._id}: </strong>
            <strong>{props.country_name} Trip</strong> 
            <br></br>
            <p>Hotel: {props.hotel_name} {Number(parseFloat(props.hotel_price).toFixed(2)).toLocaleString('en')} {props.currency_code} Conversion: {Number(parseFloat(hotelexchangeRate).toFixed(2)).toLocaleString('en')} {curCurrency}   </p>
            <p>Flight: {props.flight_name} {Number(parseFloat(props.flight_price).toFixed(2)).toLocaleString('en')} {props.currency_code} Conversion: {Number(parseFloat(flightexchangeRate).toFixed(2)).toLocaleString('en')} {curCurrency} </p>
            <strong>Activities:</strong>
            {activities}
            <br></br>
            <strong>-----------------------------</strong>
        </div>
    )
}

export default Trip;
