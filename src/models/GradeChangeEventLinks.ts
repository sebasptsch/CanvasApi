/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GradeChangeEventLinks = {
    /**
     * ID of the assignment associated with the event
     */
    assignment?: number;
    /**
     * ID of the course associated with the event. will match the context_id in the associated assignment if the context type for the assignment is a course
     */
    course?: number;
    /**
     * ID of the student associated with the event. will match the user_id in the associated submission.
     */
    student?: number;
    /**
     * ID of the grader associated with the event. will match the grader_id in the associated submission.
     */
    grader?: number;
    /**
     * ID of the page view during the event if it exists.
     */
    page_view?: string;
};

