/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from "./datetime";
import type { StudentAttributes } from "./StudentAttributes";

/**
 * Attributes of assignment overrides that apply to users.  See Assignments API for more details
 */
export type UserAssignmentOverrideAttributes = {
  /**
   * The unique Canvas identifier for the assignment override
   */
  id?: number;
  /**
   * The title of the assignment override.
   */
  title?: string;
  due_at?: datetime;
  unlock_at?: datetime;
  lock_at?: datetime;
  /**
   * Includes attributes of a student for convenience. For more details see Users API.
   */
  students?: Array<StudentAttributes>;
};
