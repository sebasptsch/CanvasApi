/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from './datetime';

/**
 * A Canvas assignment
 */
export type LtiAssignment = {
    id?: number;
    name?: string;
    description?: string;
    points_possible?: number;
    due_at?: datetime;
    lti_id?: string;
    course_id?: number;
    lti_course_id?: string;
};

