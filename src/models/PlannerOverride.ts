/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from "./datetime";

/**
 * User-controlled setting for whether an item should be displayed on the planner or not
 */
export type PlannerOverride = {
  /**
   * The ID of the planner override
   */
  id?: number;
  /**
   * The type of the associated object for the planner override
   */
  plannable_type?: string;
  /**
   * The id of the associated object for the planner override
   */
  plannable_id?: number;
  /**
   * The id of the associated user for the planner override
   */
  user_id?: number;
  /**
   * The id of the plannable's associated assignment, if it has one
   */
  assignment_id?: number;
  /**
   * The current published state of the item, synced with the associated object
   */
  workflow_state?: string;
  /**
   * Controls whether or not the associated plannable item is marked complete on the planner
   */
  marked_complete?: boolean;
  /**
   * Controls whether or not the associated plannable item shows up in the opportunities list
   */
  dismissed?: boolean;
  created_at?: datetime;
  updated_at?: datetime;
  deleted_at?: datetime;
};
