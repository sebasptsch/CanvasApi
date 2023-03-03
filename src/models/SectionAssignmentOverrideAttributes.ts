/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from './datetime';

/**
 * Attributes of an assignment override that apply to the section object.  See Assignments API for more details
 */
export type SectionAssignmentOverrideAttributes = {
    /**
     * The title for the assignment override
     */
    override_title?: string;
    due_at?: datetime;
    unlock_at?: datetime;
    lock_at?: datetime;
};

