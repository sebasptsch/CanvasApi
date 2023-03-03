/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AssignmentExtension = {
    /**
     * The ID of the Assignment the extension belongs to.
     */
    assignment_id: number;
    /**
     * The ID of the Student that needs the assignment extension.
     */
    user_id: number;
    /**
     * Number of times the student is allowed to re-submit the assignment
     */
    extra_attempts?: number;
};

