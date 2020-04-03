/*
 *
 * LinkListContainer actions
 *
 */

import {
  REQUEST_LINKS_FAILED,
  REQUEST_LINKS_SUCCEEDED,
} from './constants';


export function requestLinksFailed(message) {
  return {
    type: REQUEST_LINKS_FAILED,
    message,
  };
}

export function requestLinksSucceeded(links) {
  return {
    type: REQUEST_LINKS_SUCCEEDED,
    links,
  };
}
