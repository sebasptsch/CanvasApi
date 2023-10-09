/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PollChoice = {
  /**
   * The unique identifier for the poll choice.
   */
  id: number;
  /**
   * The id of the poll this poll choice belongs to.
   */
  poll_id: number;
  /**
   * Specifies whether or not this poll choice is a 'correct' choice.
   */
  is_correct?: boolean;
  /**
   * The text of the poll choice.
   */
  text: string;
  /**
   * The order of the poll choice in relation to it's sibling poll choices.
   */
  position?: number;
};
