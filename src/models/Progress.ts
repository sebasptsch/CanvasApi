/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from "./datetime";

export type Progress = {
  /**
   * the ID of the Progress object
   */
  id?: number;
  /**
   * the context owning the job.
   */
  context_id?: number;
  context_type?: string;
  /**
   * the id of the user who started the job
   */
  user_id?: number;
  /**
   * the type of operation
   */
  tag?: string;
  /**
   * percent completed
   */
  completion?: number;
  /**
   * the state of the job one of 'queued', 'running', 'completed', 'failed'
   */
  workflow_state?: string;
  created_at?: datetime;
  updated_at?: datetime;
  /**
   * optional details about the job
   */
  message?: string;
  /**
   * optional results of the job. omitted when job is still pending
   */
  results?: any;
  /**
   * url where a progress update can be retrieved with an LTI access token
   */
  url?: string;
};
