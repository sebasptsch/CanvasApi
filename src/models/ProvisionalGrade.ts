/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from "./datetime";

export type ProvisionalGrade = {
  /**
   * The identifier for the provisional grade
   */
  provisional_grade_id?: number;
  /**
   * The numeric score
   */
  score?: number;
  /**
   * The grade
   */
  grade?: string;
  /**
   * Whether the grade was applied to the most current submission (false if the student resubmitted after grading)
   */
  grade_matches_current_submission?: boolean;
  graded_at?: datetime;
  /**
   * Whether this is the 'final' provisional grade created by the moderator
   */
  final?: boolean;
  /**
   * A link to view this provisional grade in SpeedGrader™
   */
  speedgrader_url?: string;
};
