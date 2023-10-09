/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type QuizSubmissionQuestion = {
  /**
   * The ID of the QuizQuestion this answer is for.
   */
  id: number;
  /**
   * Whether this question is flagged.
   */
  flagged?: boolean;
  /**
   * The provided answer (if any) for this question. The format of this parameter depends on the type of the question, see the Appendix for more information.
   */
  answer?: string;
  /**
   * The possible answers for this question when those possible answers are necessary.  The presence of this parameter is dependent on permissions.
   */
  answers?: Array<string>;
};
