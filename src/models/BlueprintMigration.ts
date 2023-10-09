/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from "./datetime";

export type BlueprintMigration = {
  /**
   * The ID of the migration.
   */
  id?: number;
  /**
   * The ID of the template the migration belongs to. Only present when querying a blueprint course.
   */
  template_id?: number;
  /**
   * The ID of the associated course's blueprint subscription. Only present when querying a course associated with a blueprint.
   */
  subscription_id?: number;
  /**
   * The ID of the user who queued the migration.
   */
  user_id?: number;
  /**
   * Current state of the content migration: queued, exporting, imports_queued, completed, exports_failed, imports_failed
   */
  workflow_state?: string;
  created_at?: datetime;
  exports_started_at?: datetime;
  imports_queued_at?: datetime;
  imports_completed_at?: datetime;
  /**
   * User-specified comment describing changes made in this operation
   */
  comment?: string;
};
