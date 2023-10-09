/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type QuizExtension = {
  /**
   * The ID of the Quiz the quiz extension belongs to.
   */
  quiz_id: number;
  /**
   * The ID of the Student that needs the quiz extension.
   */
  user_id: number;
  /**
   * Number of times the student is allowed to re-take the quiz over the multiple-attempt limit.
   */
  extra_attempts?: number;
  /**
   * Amount of extra time allowed for the quiz submission, in minutes.
   */
  extra_time?: number;
  /**
   * The student can take the quiz even if it's locked for everyone else
   */
  manually_unlocked?: boolean;
  /**
   * The time at which the quiz submission will be overdue, and be flagged as a late submission.
   */
  end_at?: string;
};
