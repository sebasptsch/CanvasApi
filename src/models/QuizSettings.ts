/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MultipleAttemptsSettings } from "./MultipleAttemptsSettings";
import type { ResultViewSettings } from "./ResultViewSettings";

export type QuizSettings = {
  /**
   * type of calculator the user will have access to during the quiz ('none', basic' or 'scientific')
   */
  calculator_type?: string;
  /**
   * whether access to the quiz should be restricted to the IP address ranges described in 'filters'
   */
  filter_ip_address?: boolean;
  /**
   * IP address ranges from which users can take the quiz, if 'filter_ip_address' is true
   */
  filters?: any;
  /**
   * whether questions should be shown all at once ('none') or one-at-a-time ('question')
   */
  one_at_a_time_type?: string;
  /**
   * whether to allow user to return to previous questions when 'one_at_a_time_type' is set to 'question'
   */
  allow_backtracking?: boolean;
  /**
   * whether answers should be shuffled during quiz
   */
  shuffle_answers?: boolean;
  /**
   * whether questions should be shuffled during quiz
   */
  shuffle_questions?: boolean;
  /**
   * whether to require an access code to take the quiz (set as 'student_access_code')
   */
  require_student_access_code?: boolean;
  /**
   * access code that is required to take the quiz if 'require_student_access_code' is true
   */
  student_access_code?: string;
  /**
   * whether the quiz has a time limit (set as 'session_time_limit_in_seconds')
   */
  has_time_limit?: boolean;
  /**
   * time limit during the quiz (in seconds)
   */
  session_time_limit_in_seconds?: number;
  multiple_attempts?: MultipleAttemptsSettings;
  result_view_settings?: ResultViewSettings;
};
