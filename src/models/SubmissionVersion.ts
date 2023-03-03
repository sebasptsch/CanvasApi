/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from './datetime';

/**
 * A SubmissionVersion object contains all the fields that a Submission object does, plus additional fields prefixed with current_* new_* and previous_* described below.
 */
export type SubmissionVersion = {
    /**
     * the id of the assignment this submissions is for
     */
    assignment_id?: number;
    /**
     * the name of the assignment this submission is for
     */
    assignment_name?: string;
    /**
     * the body text of the submission
     */
    body?: string;
    /**
     * the most up to date grade for the current version of this submission
     */
    current_grade?: string;
    current_graded_at?: datetime;
    /**
     * the name of the most recent grader for this submission
     */
    current_grader?: string;
    /**
     * boolean indicating whether the grade is equal to the current submission grade
     */
    grade_matches_current_submission?: boolean;
    graded_at?: datetime;
    /**
     * the name of the user who graded this version of the submission
     */
    grader?: string;
    /**
     * the user id of the user who graded this version of the submission
     */
    grader_id?: number;
    /**
     * the id of the submission of which this is a version
     */
    id?: number;
    /**
     * the updated grade provided in this version of the submission
     */
    new_grade?: string;
    new_graded_at?: datetime;
    /**
     * alias for 'grader'
     */
    new_grader?: string;
    /**
     * the grade for the submission version immediately preceding this one
     */
    previous_grade?: string;
    previous_graded_at?: datetime;
    /**
     * the name of the grader who graded the version of this submission immediately preceding this one
     */
    previous_grader?: string;
    /**
     * the score for this version of the submission
     */
    score?: number;
    /**
     * the name of the student who created this submission
     */
    user_name?: string;
    /**
     * the type of submission
     */
    submission_type?: string;
    /**
     * the url of the submission, if there is one
     */
    url?: string;
    /**
     * the user ID of the student who created this submission
     */
    user_id?: number;
    /**
     * the state of the submission at this version
     */
    workflow_state?: string;
};

