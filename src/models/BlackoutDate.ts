/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from "./datetime";

/**
 * Blackout dates are used to prevent scheduling assignments on a given date in course pacing.
 */
export type BlackoutDate = {
  /**
   * the ID of the blackout date
   */
  id?: number;
  /**
   * the context owning the blackout date
   */
  context_id?: number;
  context_type?: string;
  start_date?: datetime;
  end_date?: datetime;
  /**
   * title of the blackout date
   */
  event_title?: string;
};
