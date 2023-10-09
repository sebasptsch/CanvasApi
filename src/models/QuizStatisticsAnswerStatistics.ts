/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Statistics for a specific pre-defined answer in a Multiple-Choice or True/False quiz question.
 */
export type QuizStatisticsAnswerStatistics = {
  /**
   * ID of the answer.
   */
  id?: number;
  /**
   * The text attached to the answer.
   */
  text?: string;
  /**
   * An integer to determine correctness of the answer. Incorrect answers should be 0, correct answers should 100
   */
  weight?: number;
  /**
   * Number of students who have chosen this answer.
   */
  responses?: number;
};
