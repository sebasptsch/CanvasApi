/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from "./datetime";

export type AuthenticationEvent = {
  created_at?: datetime;
  /**
   * authentication event type ('login' or 'logout')
   */
  event_type?: string;
  /**
   * ID of the pseudonym (login) associated with the event
   */
  pseudonym_id?: number;
  /**
   * ID of the account associated with the event. will match the account_id in the associated pseudonym.
   */
  account_id?: number;
  /**
   * ID of the user associated with the event will match the user_id in the associated pseudonym.
   */
  user_id?: number;
};
