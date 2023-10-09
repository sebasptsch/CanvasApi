/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type QuizGroup = {
  /**
   * The ID of the question group.
   */
  id: number;
  /**
   * The ID of the Quiz the question group belongs to.
   */
  quiz_id: number;
  /**
   * The name of the question group.
   */
  name?: string;
  /**
   * The number of questions to pick from the group to display to the student.
   */
  pick_count?: number;
  /**
   * The amount of points allotted to each question in the group.
   */
  question_points?: number;
  /**
   * The ID of the Assessment question bank to pull questions from.
   */
  assessment_question_bank_id?: number;
  /**
   * The order in which the question group will be retrieved and displayed.
   */
  position?: number;
};
