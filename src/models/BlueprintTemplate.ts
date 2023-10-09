/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BlueprintMigration } from "./BlueprintMigration";
import type { datetime } from "./datetime";

export type BlueprintTemplate = {
  /**
   * The ID of the template.
   */
  id?: number;
  /**
   * The ID of the Course the template belongs to.
   */
  course_id?: number;
  last_export_completed_at?: datetime;
  /**
   * Number of associated courses for the template
   */
  associated_course_count?: number;
  latest_migration?: BlueprintMigration;
};
