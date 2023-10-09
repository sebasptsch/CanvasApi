/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RubricRating } from "./RubricRating";

export type Outcome = {
  /**
   * the ID of the outcome
   */
  id?: number;
  /**
   * the URL for fetching/updating the outcome. should be treated as opaque
   */
  url?: string;
  /**
   * the context owning the outcome. may be null for global outcomes
   */
  context_id?: number;
  context_type?: string;
  /**
   * title of the outcome
   */
  title?: string;
  /**
   * Optional friendly name for reporting
   */
  display_name?: string;
  /**
   * description of the outcome. omitted in the abbreviated form.
   */
  description?: string;
  /**
   * A custom GUID for the learning standard.
   */
  vendor_guid?: string;
  /**
   * maximum points possible. included only if the outcome embeds a rubric criterion. omitted in the abbreviated form.
   */
  points_possible?: number;
  /**
   * points necessary to demonstrate mastery outcomes. included only if the outcome embeds a rubric criterion. omitted in the abbreviated form.
   */
  mastery_points?: number;
  /**
   * the method used to calculate a students score
   */
  calculation_method?: string;
  /**
   * this defines the variable value used by the calculation_method. included only if calculation_method uses it
   */
  calculation_int?: number;
  /**
   * possible ratings for this outcome. included only if the outcome embeds a rubric criterion. omitted in the abbreviated form.
   */
  ratings?: Array<RubricRating>;
  /**
   * whether the current user can update the outcome
   */
  can_edit?: boolean;
  /**
   * whether the outcome can be unlinked
   */
  can_unlink?: boolean;
  /**
   * whether this outcome has been used to assess a student
   */
  assessed?: boolean;
  /**
   * whether updates to this outcome will propagate to unassessed rubrics that have imported it
   */
  has_updateable_rubrics?: boolean;
};
