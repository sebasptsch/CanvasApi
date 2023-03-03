/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Attributes of a course object.  See Courses API for more details
 */
export type CourseAttributes = {
    /**
     * The unique Canvas identifier for the origin course
     */
    id?: number;
    /**
     * The name of the origin course.
     */
    name?: string;
    /**
     * The sis id of the origin_course.
     */
    sis_id?: string;
    /**
     * The integration ID of the origin_course.
     */
    integration_id?: string;
};

