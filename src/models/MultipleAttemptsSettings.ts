/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MultipleAttemptsSettings = {
  /**
   * whether to allow multiple attempts
   */
  multiple_attempts_enabled?: boolean;
  /**
   * whether to limit the number of attempts if 'multiple_attempts_enabled' is true. Unlimited attempts if false.
   */
  attempt_limit?: boolean;
  /**
   * number of attempts to allow if 'multiple_attempts_enabled' and 'attempt_limit' are true
   */
  max_attempts?: number;
  /**
   * specifies which score to keep after attempts ('average', 'first', 'highest', or 'latest')
   */
  score_to_keep?: string;
  /**
   * whether to enforce a waiting period after an attempt (set as 'cooling_period_seconds')
   */
  cooling_period?: boolean;
  /**
   * required waiting period (in seconds) between attempts. Enforced if 'cooling_period' is true.
   */
  cooling_period_seconds?: number;
};
