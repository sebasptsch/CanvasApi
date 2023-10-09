/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PollSubmission } from "./PollSubmission";

export type PollSession = {
  /**
   * The unique identifier for the poll session.
   */
  id: number;
  /**
   * The id of the Poll this poll session is associated with
   */
  poll_id: number;
  /**
   * The id of the Course this poll session is associated with
   */
  course_id: number;
  /**
   * The id of the Course Section this poll session is associated with
   */
  course_section_id?: number;
  /**
   * Specifies whether or not this poll session has been published for students to participate in.
   */
  is_published?: boolean;
  /**
   * Specifies whether the results are viewable by students.
   */
  has_public_results?: boolean;
  /**
   * The time at which the poll session was created.
   */
  created_at?: string;
  /**
   * The results of the submissions of the poll. Each key is the poll choice id, and the value is the count of submissions.
   */
  results?: any;
  poll_submissions?: PollSubmission;
};
