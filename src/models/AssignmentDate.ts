/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from "./datetime";

/**
 * Object representing a due date for an assignment or quiz. If the due date came from an assignment override, it will have an 'id' field.
 */
export type AssignmentDate = {
  /**
   * (Optional, missing if 'base' is present) id of the assignment override this date represents
   */
  id?: number;
  /**
   * (Optional, present if 'id' is missing) whether this date represents the assignment's or quiz's default due date
   */
  base?: boolean;
  title?: string;
  due_at?: datetime;
  unlock_at?: datetime;
  lock_at?: datetime;
};
