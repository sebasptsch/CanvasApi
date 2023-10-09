/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BankItem = {
  /**
   * the title of the bank
   */
  title?: string;
  /**
   * whether the bank is archived
   */
  archived?: boolean;
  /**
   * the number of items in the bank, including stimuli
   */
  entry_count?: number;
  /**
   * the number of items in the bank, excluding stimuli
   */
  item_entry_count?: number;
};
