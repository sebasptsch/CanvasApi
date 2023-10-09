/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A simple assessment that collects pass/fail results for a student
 */
export type Assessment = {
  /**
   * A unique identifier for this live assessment
   */
  id?: string;
  /**
   * A client specified unique identifier for the assessment
   */
  key?: string;
  /**
   * A human readable title for the assessment
   */
  title?: string;
};
