/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from "./datetime";

export type AssignmentOverride = {
  /**
   * the ID of the assignment override
   */
  id?: number;
  /**
   * the ID of the assignment the override applies to
   */
  assignment_id?: number;
  /**
   * the IDs of the override's target students (present if the override targets an ad-hoc set of students)
   */
  student_ids?: Array<number>;
  /**
   * the ID of the override's target group (present if the override targets a group and the assignment is a group assignment)
   */
  group_id?: number;
  /**
   * the ID of the overrides's target section (present if the override targets a section)
   */
  course_section_id?: number;
  /**
   * the title of the override
   */
  title?: string;
  due_at?: datetime;
  /**
   * the overridden all day flag (present if due_at is overridden)
   */
  all_day?: boolean;
  all_day_date?: datetime;
  unlock_at?: datetime;
  lock_at?: datetime;
};
