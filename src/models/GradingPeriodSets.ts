/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GradingPeriodSets = {
  /**
   * The title of the grading period set.
   */
  title: string;
  /**
   * If true, the grading periods in the set are weighted.
   */
  weighted?: boolean;
  /**
   * If true, the totals for all grading periods in the set are displayed.
   */
  display_totals_for_all_grading_periods?: boolean;
};
