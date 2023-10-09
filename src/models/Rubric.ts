/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RubricAssessment } from "./RubricAssessment";
import type { RubricAssociation } from "./RubricAssociation";
import type { RubricCriterion } from "./RubricCriterion";

export type Rubric = {
  /**
   * the ID of the rubric
   */
  id?: number;
  /**
   * title of the rubric
   */
  title?: string;
  /**
   * the context owning the rubric
   */
  context_id?: number;
  context_type?: string;
  points_possible?: number;
  reusable?: boolean;
  read_only?: boolean;
  /**
   * whether or not free-form comments are used
   */
  free_form_criterion_comments?: boolean;
  hide_score_total?: boolean;
  /**
   * An array with all of this Rubric's grading Criteria
   */
  data?: Array<RubricCriterion>;
  /**
   * If an assessment type is included in the 'include' parameter, includes an array of rubric assessment objects for a given rubric, based on the assessment type requested. If the user does not request an assessment type this key will be absent.
   */
  assessments?: Array<RubricAssessment>;
  /**
   * If an association type is included in the 'include' parameter, includes an array of rubric association objects for a given rubric, based on the association type requested. If the user does not request an association type this key will be absent.
   */
  associations?: Array<RubricAssociation>;
};
