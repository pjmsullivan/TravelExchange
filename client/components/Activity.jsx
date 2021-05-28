import React, { useState, useEffect } from 'react'; //<-- get rid of use state and use effect?
import { useSelector, useDispatch } from 'react-redux'

const Activity = (props) => {

    const curCurrency = useSelector(state => state.octo.currencyType);
    const curRates = useSelector(state => state.octo.exchangeRate);

    const activityExchangeRate = parseInt(props.activity_price) * curRates[props.currency_code]
    return (
        <div>
            <span><strong>{props.activity_name} </strong></span>
            <span>{props.activity_price} {curCurrency} </span>
            <span>{Number(parseFloat(activityExchangeRate).toFixed(2)).toLocaleString('en')} {props.currency_code}</span>
        </div>
    )
}

export default Activity;
