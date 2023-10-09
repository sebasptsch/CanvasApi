/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from "./datetime";

export type EnrollmentTerm = {
  /**
   * The unique identifier for the enrollment term.
   */
  id?: number;
  /**
   * The SIS id of the term. Only included if the user has permission to view SIS information.
   */
  sis_term_id?: string;
  /**
   * the unique identifier for the SIS import. This field is only included if the user has permission to manage SIS information.
   */
  sis_import_id?: number;
  /**
   * The name of the term.
   */
  name?: string;
  start_at?: datetime;
  end_at?: datetime;
  /**
   * The state of the term. Can be 'active' or 'deleted'.
   */
  workflow_state?: string;
  /**
   * Term date overrides for specific enrollment types
   */
  overrides?: any;
  /**
   * The number of courses in the term (available via include)
   */
  course_count?: number;
};
