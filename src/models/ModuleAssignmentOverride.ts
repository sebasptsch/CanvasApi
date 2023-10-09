/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OverrideTarget } from "./OverrideTarget";

export type ModuleAssignmentOverride = {
  /**
   * the ID of the assignment override
   */
  id?: number;
  /**
   * the ID of the module the override applies to
   */
  context_module_id?: number;
  /**
   * the title of the override
   */
  title?: string;
  students?: OverrideTarget;
  course_section?: OverrideTarget;
};
