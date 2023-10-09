/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CourseAttributes } from "./CourseAttributes";
import type { SectionAssignmentOverrideAttributes } from "./SectionAssignmentOverrideAttributes";

/**
 * Some of the attributes of a section. For more details see Sections API.
 */
export type SectionAttributes = {
  /**
   * The unique identifier for the section.
   */
  id?: number;
  /**
   * The name of the section.
   */
  name?: string;
  /**
   * The sis id of the section.
   */
  sis_id?: string;
  /**
   * Optional: The integration ID of the section.
   */
  integration_id?: string;
  origin_course?: CourseAttributes;
  xlist_course?: CourseAttributes;
  override?: SectionAssignmentOverrideAttributes;
};
