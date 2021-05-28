import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import ItineraryCreator from '../components/ItineraryCreator.jsx'
import ActivityCreator from '../components/ActivityCreator.jsx'

function UserContainer(props) {
  //variable?
  //variable?
  //how do I bring in the user name?
  const dispatch = useDispatch();

  useEffect(() => {
      fetch('/homepage/getItinerary')
        .then((res) => {
          console.log(res)
          return res.json();
        })
        .then(data => {
          console.log(data);
          dispatch({ type: 'UPDATE_USER', payload: data })
        })
        .catch(err => {
          console.log(err)
        })
  }, [dispatch]);

  // useSelector is the equivalent of map state to props and firstName is rendered to the screen
  const { username, currencyType } = useSelector(state => state.octo);


  return (
    <div>
        <div>
          <h1>{username}</h1>
          <p>Your home currency is:<strong> $$$ {currencyType} $$$</strong></p>
        </div>
        <div>
          <ItineraryCreator />
          <ActivityCreator />
          <br></br>
        </div>  
    </div>
  );
};

export default UserContainer;