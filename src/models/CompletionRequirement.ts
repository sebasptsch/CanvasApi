/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CompletionRequirement = {
  /**
   * one of 'must_view', 'must_submit', 'must_contribute', 'min_score', 'must_mark_done'
   */
  type?: string;
  /**
   * minimum score required to complete (only present when type == 'min_score')
   */
  min_score?: number;
  /**
   * whether the calling user has met this requirement (Optional; present only if the caller is a student or if the optional parameter 'student_id' is included)
   */
  completed?: boolean;
};
