/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ItemProperties } from "./ItemProperties";
import { QuestionItem } from "./QuestionItem";

/**
 * Individual items within a quiz, whether they're questions, stimuli, banked content, or question banks.
 */
export type QuizItem = {
  /**
   * the ID of the quiz item
   */
  id?: string;
  /**
   * the position of the item within the quiz. The first item in a quiz is given position 1.
   */
  position?: number;
  /**
   * the number of points available to score on this item
   */
  points_possible?: number;
  /**
   * the type of the item. One of 'Item', 'Stimulus', 'BankEntry', or 'Bank'.
   */
  entry_type?: string;
  /**
   * whether the current user can edit the item -- used internally, no need to set
   */
  entry_editable?: boolean;
  /**
   * the ID of the stimulus that this item is associated with. null if not associated with any stimuli.
   */
  stimulus_quiz_entry_id?: string;
  /**
   * status of the item. one of 'mutable' or 'immutable'.  Used internally, no need to set
   */
  status?: string;
  properties?: ItemProperties;
  entry?: QuestionItem;
};
