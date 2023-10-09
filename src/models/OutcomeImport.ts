/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from "./datetime";
import type { OutcomeImportData } from "./OutcomeImportData";
import type { User } from "./User";

export type OutcomeImport = {
  /**
   * The unique identifier for the outcome import.
   */
  id?: number;
  /**
   * The unique identifier for the group into which the outcomes will be imported to, or NULL.
   */
  learning_outcome_group_id?: number;
  created_at?: datetime;
  ended_at?: datetime;
  updated_at?: datetime;
  /**
   * The current state of the outcome import.
   * - 'created': The outcome import has been created.
   * - 'importing': The outcome import is currently processing.
   * - 'succeeded': The outcome import has completed successfully.
   * - 'failed': The outcome import failed.
   */
  workflow_state?: string;
  data?: OutcomeImportData;
  /**
   * The progress of the outcome import.
   */
  progress?: string;
  user?: User;
  /**
   * An array of row number / error message pairs. Returns the first 25 errors.
   */
  processing_errors?: Array<any[]>;
};
