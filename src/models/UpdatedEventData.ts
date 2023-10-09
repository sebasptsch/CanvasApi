/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from "./datetime";

/**
 * The updated event data object returns all the fields that have changed in the format of the following example.  If a field does not exist it was not changed.  The value is an array that contains the before and after values for the change as in [:old_value, :new_value].
 */
export type UpdatedEventData = {
  name?: Array<string>;
  start_at?: Array<datetime>;
  conclude_at?: Array<datetime>;
  is_public?: Array<boolean>;
};
