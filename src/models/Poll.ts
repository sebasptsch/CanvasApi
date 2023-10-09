/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Poll = {
  /**
   * The unique identifier for the poll.
   */
  id: number;
  /**
   * The question/title of the poll.
   */
  question: string;
  /**
   * A short description of the poll.
   */
  description?: string;
  /**
   * The time at which the poll was created.
   */
  created_at?: string;
  /**
   * The unique identifier for the user that created the poll.
   */
  user_id?: number;
  /**
   * An aggregate of the results of all associated poll sessions, with the poll choice id as the key, and the aggregated submission count as the value.
   */
  total_results?: any;
};
