/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from "./datetime";

/**
 * The created event data object returns all the fields that were set in the format of the following example.  If a field does not exist it was not set. The value of each field changed is in the format of [:old_value, :new_value].  The created event type also includes a created_source field to specify what triggered the creation of the course.
 */
export type CreatedEventData = {
  name?: Array<string>;
  start_at?: Array<datetime>;
  conclude_at?: Array<datetime>;
  is_public?: Array<boolean>;
  /**
   * The type of action that triggered the creation of the course.
   */
  created_source?: string;
};
