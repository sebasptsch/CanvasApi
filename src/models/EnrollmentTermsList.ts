/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnrollmentTerm } from "./EnrollmentTerm";

export type EnrollmentTermsList = {
  /**
   * a paginated list of all terms in the account
   */
  enrollment_terms?: Array<EnrollmentTerm>;
};
