/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from "./datetime";
import type { GradeChangeEventLinks } from "./GradeChangeEventLinks";

export type GradeChangeEvent = {
  /**
   * ID of the event.
   */
  id?: string;
  created_at?: datetime;
  /**
   * GradeChange event type
   */
  event_type?: string;
  /**
   * Boolean indicating whether the submission was excused after the change.
   */
  excused_after?: boolean;
  /**
   * Boolean indicating whether the submission was excused before the change.
   */
  excused_before?: boolean;
  /**
   * The grade after the change.
   */
  grade_after?: string;
  /**
   * The grade before the change.
   */
  grade_before?: string;
  /**
   * Boolean indicating whether the student name was visible when the grade was given. Could be null if the grade change record was created before this feature existed.
   */
  graded_anonymously?: boolean;
  /**
   * Version Number of the grade change submission.
   */
  version_number?: string;
  /**
   * The unique request id of the request during the grade change.
   */
  request_id?: string;
  links?: GradeChangeEventLinks;
};
