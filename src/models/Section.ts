/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from './datetime';

export type Section = {
    /**
     * The unique identifier for the section.
     */
    id?: number;
    /**
     * The name of the section.
     */
    name?: string;
    /**
     * The sis id of the section. This field is only included if the user has permission to view SIS information.
     */
    sis_section_id?: string;
    /**
     * Optional: The integration ID of the section. This field is only included if the user has permission to view SIS information.
     */
    integration_id?: string;
    /**
     * The unique identifier for the SIS import if created through SIS. This field is only included if the user has permission to manage SIS information.
     */
    sis_import_id?: number;
    /**
     * The unique Canvas identifier for the course in which the section belongs
     */
    course_id?: number;
    /**
     * The unique SIS identifier for the course in which the section belongs. This field is only included if the user has permission to view SIS information.
     */
    sis_course_id?: string;
    start_at?: datetime;
    end_at?: datetime;
    /**
     * Restrict user enrollments to the start and end dates of the section
     */
    restrict_enrollments_to_section_dates?: boolean;
    /**
     * The unique identifier of the original course of a cross-listed section
     */
    nonxlist_course_id?: number;
    /**
     * optional: the total number of active and invited students in the section
     */
    total_students?: number;
};

