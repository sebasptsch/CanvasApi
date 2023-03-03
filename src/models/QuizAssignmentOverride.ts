/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from './datetime';

/**
 * Set of assignment-overridden dates for a quiz.
 */
export type QuizAssignmentOverride = {
    /**
     * ID of the assignment override, unless this is the base construct, in which case the 'id' field is omitted.
     */
    id?: number;
    due_at?: datetime;
    unlock_at?: datetime;
    lock_at?: datetime;
    /**
     * Title of the section this assignment override is for, if any.
     */
    title?: string;
    /**
     * If this property is present, it means that dates in this structure are not based on an assignment override, but are instead for all students.
     */
    base?: boolean;
};

