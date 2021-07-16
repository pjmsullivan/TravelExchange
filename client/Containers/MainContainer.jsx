/**
 * ************************************
 *
 * @module MainContainer
 * @author Creation Team: Phillip, Sean, Peter, Alex, and Brian, Iteration Team: Sully, Robleh, Ken, Angela, Lorenzo
 * @date 5/25/2021
 * @description MainContainer holds UserContainer & TripContainer
 *
 * ************************************
 */

// Main container is the parent component for User and Trip container. Main container also triggers a fetch request...

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import UserContainer from './UserContainer.jsx';
import TripContainer from './TripContainer.jsx';

function MainContainer() {
  // This hook returns a reference to the dispatch function from the Redux store. It accepts action objects as inputs and triggers actions to run
  const dispatch = useDispatch();
  //
  useEffect(() => {
    // consider dropping this fetch request, what
    fetch('/homepage/getItinerary')
      .then((res) => {
        console.log('Response data inside the useEffect fetch funcion', res);
        return res.json();
      })
      .then((data) => {
        console.log('this is the data I am fetching', data);
        dispatch({ type: 'UPDATE_USER', payload: data });
        // dispatch(updateName(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  useEffect(() => {
    fetch('/homepage/getActivities')
      .then((res) => res.json())
      .then((data) => {
        console.log('Response from getactivities');
        console.log(data);
        dispatch({ type: 'UPDATE_ACTIVITIES', payload: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  return (
    <div>
      <UserContainer />
      <TripContainer />
    </div>
  );
}

export default MainContainer;
