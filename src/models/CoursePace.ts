/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from "./datetime";
import type { Progress } from "./Progress";

export type CoursePace = {
  /**
   * the ID of the course pace
   */
  id?: number;
  /**
   * the ID of the course
   */
  course_id?: number;
  /**
   * the ID of the user for this course pace
   */
  user_id?: number;
  /**
   * the state of the course pace
   */
  workflow_state?: string;
  /**
   * boolean value depending on exclude weekends setting
   */
  exclude_weekends?: boolean;
  /**
   * set if the end date is set from course
   */
  hard_end_dates?: boolean;
  created_at?: datetime;
  end_date?: datetime;
  updated_at?: datetime;
  published_at?: datetime;
  /**
   * the root account ID for this course pace
   */
  root_account_id?: number;
  start_date?: datetime;
  /**
   * list of modules and items for this course pace
   */
  modules?: Array<any>;
  progress?: Progress;
};
