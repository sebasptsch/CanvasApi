/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from "./datetime";
import type { ModuleItem } from "./ModuleItem";

export type Module = {
  /**
   * the unique identifier for the module
   */
  id?: number;
  /**
   * the state of the module: 'active', 'deleted'
   */
  workflow_state?: string;
  /**
   * the position of this module in the course (1-based)
   */
  position?: number;
  /**
   * the name of this module
   */
  name?: string;
  unlock_at?: datetime;
  /**
   * Whether module items must be unlocked in order
   */
  require_sequential_progress?: boolean;
  /**
   * IDs of Modules that must be completed before this one is unlocked
   */
  prerequisite_module_ids?: Array<number>;
  /**
   * The number of items in the module
   */
  items_count?: number;
  /**
   * The API URL to retrive this module's items
   */
  items_url?: string;
  /**
   * The contents of this module, as an array of Module Items. (Present only if requested via include[]=items AND the module is not deemed too large by Canvas.)
   */
  items?: Array<ModuleItem>;
  /**
   * The state of this Module for the calling user one of 'locked', 'unlocked', 'started', 'completed' (Optional; present only if the caller is a student or if the optional parameter 'student_id' is included)
   */
  state?: string;
  completed_at?: datetime;
  /**
   * if the student's final grade for the course should be published to the SIS upon completion of this module
   */
  publish_final_grade?: boolean;
  /**
   * (Optional) Whether this module is published. This field is present only if the caller has permission to view unpublished modules.
   */
  published?: boolean;
};
