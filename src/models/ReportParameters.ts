/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from './datetime';

/**
 * The parameters returned will vary for each report.
 */
export type ReportParameters = {
    /**
     * The canvas id of the term to get grades from
     */
    enrollment_term_id?: number;
    /**
     * If true, deleted objects will be included. If false, deleted objects will be omitted.
     */
    include_deleted?: boolean;
    /**
     * The id of the course to report on
     */
    course_id?: number;
    /**
     * The sort order for the csv, Options: 'users', 'courses', 'outcomes'.
     */
    order?: string;
    /**
     * If true, user data will be included. If false, user data will be omitted.
     */
    users?: boolean;
    /**
     * If true, account data will be included. If false, account data will be omitted.
     */
    accounts?: boolean;
    /**
     * If true, term data will be included. If false, term data will be omitted.
     */
    terms?: boolean;
    /**
     * If true, course data will be included. If false, course data will be omitted.
     */
    courses?: boolean;
    /**
     * If true, section data will be included. If false, section data will be omitted.
     */
    sections?: boolean;
    /**
     * If true, enrollment data will be included. If false, enrollment data will be omitted.
     */
    enrollments?: boolean;
    /**
     * If true, group data will be included. If false, group data will be omitted.
     */
    groups?: boolean;
    /**
     * If true, data for crosslisted courses will be included. If false, data for crosslisted courses will be omitted.
     */
    xlist?: boolean;
    sis_terms_csv?: number;
    sis_accounts_csv?: number;
    /**
     * If true, enrollment state will be included. If false, enrollment state will be omitted. Defaults to false.
     */
    include_enrollment_state?: boolean;
    /**
     * Include enrollment state. Defaults to 'all' Options: ['active'| 'invited'| 'creation_pending'| 'deleted'| 'rejected'| 'completed'| 'inactive'| 'all']
     */
    enrollment_state?: Array<string>;
    start_at?: datetime;
    end_at?: datetime;
};

