/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from './datetime';

/**
 * A planner note
 */
export type PlannerNote = {
    /**
     * The ID of the planner note
     */
    id?: number;
    /**
     * The title for a planner note
     */
    title?: string;
    /**
     * The description of the planner note
     */
    description?: string;
    /**
     * The id of the associated user creating the planner note
     */
    user_id?: number;
    /**
     * The current published state of the planner note
     */
    workflow_state?: string;
    /**
     * The course that the note is in relation too, if applicable
     */
    course_id?: number;
    todo_date?: datetime;
    /**
     * the type of the linked learning object
     */
    linked_object_type?: string;
    /**
     * the id of the linked learning object
     */
    linked_object_id?: number;
    /**
     * the Canvas web URL of the linked learning object
     */
    linked_object_html_url?: string;
    /**
     * the API URL of the linked learning object
     */
    linked_object_url?: string;
};

