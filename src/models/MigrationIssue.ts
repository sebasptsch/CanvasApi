/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from "./datetime";

export type MigrationIssue = {
  /**
   * the unique identifier for the issue
   */
  id?: number;
  /**
   * API url to the content migration
   */
  content_migration_url?: string;
  /**
   * Description of the issue for the end-user
   */
  description?: string;
  /**
   * Current state of the issue: active, resolved
   */
  workflow_state?: string;
  /**
   * HTML Url to the Canvas page to investigate the issue
   */
  fix_issue_html_url?: string;
  /**
   * Severity of the issue: todo, warning, error
   */
  issue_type?: string;
  /**
   * Link to a Canvas error report if present (If the requesting user has permissions)
   */
  error_report_html_url?: string;
  /**
   * Site administrator error message (If the requesting user has permissions)
   */
  error_message?: string;
  created_at?: datetime;
  updated_at?: datetime;
};
