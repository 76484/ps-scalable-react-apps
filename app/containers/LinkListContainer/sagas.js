// import { take, call, put, select } from 'redux-saga/effects';
import { call } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { SELECT_TOPIC } from '../NavigationContainer/constants';

function fetchLinksFromServer(topic) {
  return fetch(`http://localhost:3000/api/topics/${topic.name}/links`)
    .then(response => response.json());
}

export function* fetchLinks(action) {
  try {
    const links = yield call(fetchLinksFromServer, action.topic);
    // TODO: dispatch action to store links
    console.log('LINKS FROM SERVER:', links);
  } catch (e) {
    // TODO: dispatch action to store error
  }
}

export function* defaultSaga() {
  yield* takeLatest(SELECT_TOPIC, fetchLinks);
}

// All sagas to be loaded
export default [
  defaultSaga,
];
