/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from "./datetime";
import type { ToolSetting } from "./ToolSetting";

export type OriginalityReport = {
  /**
   * The id of the OriginalityReport
   */
  id?: number;
  /**
   * The id of the file receiving the originality score
   */
  file_id?: number;
  /**
   * A number between 0 and 100 representing the originality score
   */
  originality_score?: number;
  /**
   * The ID of the file within Canvas containing the originality report document (if provided)
   */
  originality_report_file_id?: number;
  /**
   * A non-LTI launch URL where the originality score of the file may be found.
   */
  originality_report_url?: string;
  tool_setting?: ToolSetting;
  /**
   * A message describing the error. If set, the workflow_state will become 'error.'
   */
  error_report?: string;
  submission_time?: datetime;
  /**
   * The id of the root Account associated with the OriginalityReport
   */
  root_account_id?: number;
};
