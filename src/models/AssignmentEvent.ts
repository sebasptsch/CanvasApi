/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Assignment } from './Assignment';
import type { AssignmentOverride } from './AssignmentOverride';
import type { datetime } from './datetime';

export type AssignmentEvent = {
    /**
     * A synthetic ID for the assignment
     */
    id?: string;
    /**
     * The title of the assignment
     */
    title?: string;
    start_at?: datetime;
    end_at?: datetime;
    /**
     * The HTML description of the assignment
     */
    description?: string;
    /**
     * the context code of the (course) calendar this assignment belongs to
     */
    context_code?: string;
    /**
     * Current state of the assignment ('published' or 'deleted')
     */
    workflow_state?: string;
    /**
     * URL for this assignment (note that updating/deleting should be done via the Assignments API)
     */
    url?: string;
    /**
     * URL for a user to view this assignment
     */
    html_url?: string;
    all_day_date?: datetime;
    /**
     * Boolean indicating whether this is an all-day event (e.g. assignment due at midnight)
     */
    all_day?: boolean;
    created_at?: datetime;
    updated_at?: datetime;
    assignment?: Assignment;
    assignment_overrides?: AssignmentOverride;
    /**
     * Boolean indicating whether this has important dates.
     */
    important_dates?: boolean;
};

