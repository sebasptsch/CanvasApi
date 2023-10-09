/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Generic statistics for all submissions for a quiz.
 */
export type QuizStatisticsSubmissionStatistics = {
  /**
   * The number of students who have taken the quiz.
   */
  unique_count?: number;
  /**
   * The mean of the student submission scores.
   */
  score_average?: number;
  /**
   * The highest submission score.
   */
  score_high?: number;
  /**
   * The lowest submission score.
   */
  score_low?: number;
  /**
   * Standard deviation of the submission scores.
   */
  score_stdev?: number;
  /**
   * A percentile distribution of the student scores, each key is the percentile (ranges between 0 and 100%) while the value is the number of students who received that score.
   */
  scores?: any;
  /**
   * The mean of the number of questions answered correctly by each student.
   */
  correct_count_average?: number;
  /**
   * The mean of the number of questions answered incorrectly by each student.
   */
  incorrect_count_average?: number;
  /**
   * The average time spent by students while taking the quiz.
   */
  duration_average?: number;
};
