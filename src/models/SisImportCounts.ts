/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SisImportCounts = {
  accounts?: number;
  terms?: number;
  abstract_courses?: number;
  courses?: number;
  sections?: number;
  xlists?: number;
  users?: number;
  enrollments?: number;
  groups?: number;
  group_memberships?: number;
  grade_publishing_results?: number;
  /**
   * the number of courses that were removed because they were not included in the batch for batch_mode imports. Only included if courses were deleted
   */
  batch_courses_deleted?: number;
  /**
   * the number of sections that were removed because they were not included in the batch for batch_mode imports. Only included if sections were deleted
   */
  batch_sections_deleted?: number;
  /**
   * the number of enrollments that were removed because they were not included in the batch for batch_mode imports. Only included if enrollments were deleted
   */
  batch_enrollments_deleted?: number;
  error_count?: number;
  warning_count?: number;
};
