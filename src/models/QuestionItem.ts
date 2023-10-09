/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { QuestionFeedback } from "./QuestionFeedback";

export type QuestionItem = {
  /**
   * the question title
   */
  title?: string;
  /**
   * the question content (can include html for rich content)
   */
  item_body?: string;
  /**
   * type of calculator the user will have access to during the question ('none', basic' or 'scientific')
   */
  calculator_type?: string;
  feedback?: QuestionFeedback;
  /**
   * can be thought of as the question type. One of 'multi-answer', 'matching', 'categorization',
   * 'file-upload', 'formula', 'ordering', 'rich-fill-blank', 'hot-spot', 'choice', 'numeric', 'true-false',
   * 'essay', or 'fill-blank' (deprecated). See Appendix: Question Types for more info about each type.
   */
  interaction_type_slug?: string;
  /**
   * an object that contains the question data. See Appendix: Question Types for more info about this field.
   */
  interaction_data?: any;
  /**
   * an object that contains additional properties for some question types. See Appendix: Question Types for more info about this field.
   */
  properties?: any;
  /**
   * describes how to score the question. See Appendix: Question Types for more info about this field.
   */
  scoring_data?: any;
  /**
   * feedback provided for each answer (rich content, only available on 'choice' question types)
   */
  answer_feedback?: any;
  /**
   * the algorithm used to score the question. See Appendix: Question Types for more info about this field.
   */
  scoring_algorithm?: string;
};
