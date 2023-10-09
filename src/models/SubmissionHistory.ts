/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubmissionVersion } from "./SubmissionVersion";

export type SubmissionHistory = {
  /**
   * the id of the submission
   */
  submission_id?: number;
  /**
   * an array of all the versions of this submission
   */
  versions?: Array<SubmissionVersion>;
};
