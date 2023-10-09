/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Grader = {
  /**
   * the user_id of the user who graded the contained submissions
   */
  id?: number;
  /**
   * the name of the user who graded the contained submissions
   */
  name?: string;
  /**
   * the assignment groups for all submissions in this response that were graded by this user.  The details are not nested inside here, but the fact that an assignment is present here means that the grader did grade submissions for this assignment on the contextual date. You can use the id of a grader and of an assignment to make another API call to find all submissions for a grader/assignment combination on a given date.
   */
  assignments?: Array<number>;
};
