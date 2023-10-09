/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Result = {
  /**
   * The fully qualified URL for showing the Result
   */
  id?: string;
  /**
   * The lti_user_id or the Canvas user_id
   */
  userId?: string;
  /**
   * The score of the result as defined by Canvas, scaled to the resultMaximum
   */
  resultScore?: number;
  /**
   * Maximum possible score for this result; 1 is the default value and will be assumed if not specified otherwise. Minimum value of 0 required.
   */
  resultMaximum?: number;
  /**
   * Comment visible to the student about the result.
   */
  comment?: string;
  /**
   * URL of the line item this belongs to
   */
  scoreOf?: string;
};
