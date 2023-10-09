/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OutcomeRollupLinks = {
  /**
   * If an aggregate result was requested, the course field will be present. Otherwise, the user and section field will be present (Optional) The id of the course that this rollup applies to
   */
  course?: number;
  /**
   * (Optional) The id of the user that this rollup applies to
   */
  user?: number;
  /**
   * (Optional) The id of the section the user is in
   */
  section?: number;
};
