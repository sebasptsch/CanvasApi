/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Lists associated courses that did not receive a change propagated from a blueprint
 */
export type ExceptionRecord = {
    /**
     * The ID of the associated course
     */
    course_id?: number;
    /**
     * A list of change classes in the associated course's copy of the item that prevented a blueprint change from being applied. One or more of ['content', 'points', 'due_dates', 'availability_dates'].
     */
    conflicting_changes?: Array<any>;
};

