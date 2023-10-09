/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OutcomeAlignment = {
  /**
   * the id of the aligned learning outcome.
   */
  id?: number;
  /**
   * the id of the aligned assignment (null for live assessments).
   */
  assignment_id?: number;
  /**
   * the id of the aligned live assessment (null for assignments).
   */
  assessment_id?: number;
  /**
   * a string representing the different submission types of an aligned assignment.
   */
  submission_types?: string;
  /**
   * the URL for the aligned assignment.
   */
  url?: string;
  /**
   * the title of the aligned assignment.
   */
  title?: string;
};
