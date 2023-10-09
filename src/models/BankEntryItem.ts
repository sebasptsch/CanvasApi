/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { QuestionItem } from "./QuestionItem";

export type BankEntryItem = {
  /**
   * the type of the item. Either 'Item' or 'Stimulus'.
   */
  entry_type?: string;
  /**
   * whether the banked item is archived
   */
  archived?: boolean;
  entry?: QuestionItem;
};
