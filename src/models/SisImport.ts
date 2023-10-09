/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from "./datetime";
import type { File } from "./File";
import type { SisImportData } from "./SisImportData";
import type { SisImportStatistics } from "./SisImportStatistics";
import type { User } from "./User";

export type SisImport = {
  /**
   * The unique identifier for the SIS import.
   */
  id?: number;
  created_at?: datetime;
  ended_at?: datetime;
  updated_at?: datetime;
  /**
   * The current state of the SIS import.
   * - 'initializing': The SIS import is being created, if this gets stuck in initializing, it will not import and will continue on to next import.
   * - 'created': The SIS import has been created.
   * - 'importing': The SIS import is currently processing.
   * - 'cleanup_batch': The SIS import is currently cleaning up courses, sections, and enrollments not included in the batch for batch_mode imports.
   * - 'imported': The SIS import has completed successfully.
   * - 'imported_with_messages': The SIS import completed with errors or warnings.
   * - 'aborted': The SIS import was aborted.
   * - 'failed_with_messages': The SIS import failed with errors.
   * - 'failed': The SIS import failed.
   * - 'restoring': The SIS import is restoring states of imported items.
   * - 'partially_restored': The SIS import is restored some of the states of imported items. This is generally due to passing a param like undelete only.
   * - 'restored': The SIS import is restored all of the states of imported items.
   */
  workflow_state?: string;
  data?: SisImportData;
  statistics?: SisImportStatistics;
  /**
   * The progress of the SIS import. The progress will reset when using batch_mode and have a different progress for the cleanup stage
   */
  progress?: string;
  errors_attachment?: File;
  user?: User;
  /**
   * Only imports that are complete will get this data. An array of CSV_file/warning_message pairs.
   */
  processing_warnings?: Array<any[]>;
  /**
   * An array of CSV_file/error_message pairs.
   */
  processing_errors?: Array<any[]>;
  /**
   * Whether the import was run in batch mode.
   */
  batch_mode?: boolean;
  /**
   * The term the batch was limited to.
   */
  batch_mode_term_id?: string;
  /**
   * Enables batch mode against all terms in term file. Requires change_threshold to be set.
   */
  multi_term_batch_mode?: boolean;
  /**
   * When set the import will skip any deletes.
   */
  skip_deletes?: boolean;
  /**
   * Whether UI changes were overridden.
   */
  override_sis_stickiness?: boolean;
  /**
   * Whether stickiness was added to the batch changes.
   */
  add_sis_stickiness?: boolean;
  /**
   * Whether stickiness was cleared.
   */
  clear_sis_stickiness?: boolean;
  /**
   * Whether a diffing job failed because the threshold limit got exceeded.
   */
  diffing_threshold_exceeded?: boolean;
  /**
   * The identifier of the data set that this SIS batch diffs against
   */
  diffing_data_set_identifier?: string;
  /**
   * Whether diffing remaster data was enabled.
   */
  diffing_remaster?: boolean;
  /**
   * The ID of the SIS Import that this import was diffed against
   */
  diffed_against_import_id?: number;
  /**
   * An array of CSV files for processing
   */
  csv_attachments?: Array<any[]>;
};
