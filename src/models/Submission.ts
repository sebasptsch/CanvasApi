/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Assignment } from './Assignment';
import type { Course } from './Course';
import type { datetime } from './datetime';
import type { SubmissionComment } from './SubmissionComment';
import type { User } from './User';

export type Submission = {
    /**
     * The submission's assignment id
     */
    assignment_id?: number;
    assignment?: Assignment;
    course?: Course;
    /**
     * This is the submission attempt number.
     */
    attempt?: number;
    /**
     * The content of the submission, if it was submitted directly in a text field.
     */
    body?: string;
    /**
     * The grade for the submission, translated into the assignment grading scheme (so a letter grade, for example).
     */
    grade?: string;
    /**
     * A boolean flag which is false if the student has re-submitted since the submission was last graded.
     */
    grade_matches_current_submission?: boolean;
    /**
     * URL to the submission. This will require the user to log in.
     */
    html_url?: string;
    /**
     * URL to the submission preview. This will require the user to log in.
     */
    preview_url?: string;
    /**
     * The raw score
     */
    score?: number;
    /**
     * Associated comments for a submission (optional)
     */
    submission_comments?: Array<SubmissionComment>;
    /**
     * The types of submission ex: ('online_text_entry'|'online_url'|'online_upload'|'media_recording'|'student_annotation')
     */
    submission_type?: string;
    submitted_at?: datetime;
    /**
     * The URL of the submission (for 'online_url' submissions).
     */
    url?: string;
    /**
     * The id of the user who created the submission
     */
    user_id?: number;
    /**
     * The id of the user who graded the submission. This will be null for submissions that haven't been graded yet. It will be a positive number if a real user has graded the submission and a negative number if the submission was graded by a process (e.g. Quiz autograder and autograding LTI tools).  Specifically autograded quizzes set grader_id to the negative of the quiz id.  Submissions autograded by LTI tools set grader_id to the negative of the tool id.
     */
    grader_id?: number;
    graded_at?: datetime;
    user?: User;
    /**
     * Whether the submission was made after the applicable due date
     */
    late?: boolean;
    /**
     * Whether the assignment is visible to the user who submitted the assignment. Submissions where `assignment_visible` is false no longer count towards the student's grade and the assignment can no longer be accessed by the student. `assignment_visible` becomes false for submissions that do not have a grade and whose assignment is no longer assigned to the student's section.
     */
    assignment_visible?: boolean;
    /**
     * Whether the assignment is excused.  Excused assignments have no impact on a user's grade.
     */
    excused?: boolean;
    /**
     * Whether the assignment is missing.
     */
    missing?: boolean;
    /**
     * The status of the submission in relation to the late policy. Can be late, missing, extended, none, or null.
     */
    late_policy_status?: string;
    /**
     * The amount of points automatically deducted from the score by the missing/late policy for a late or missing assignment.
     */
    points_deducted?: number;
    /**
     * The amount of time, in seconds, that an submission is late by.
     */
    seconds_late?: number;
    /**
     * The current state of the submission
     */
    workflow_state?: string;
    /**
     * Extra submission attempts allowed for the given user and assignment.
     */
    extra_attempts?: number;
    /**
     * A unique short ID identifying this submission without reference to the owning user. Only included if the caller has administrator access for the current account.
     */
    anonymous_id?: string;
    posted_at?: datetime;
    /**
     * The read status of this submission for the given user (optional). Including read_status will mark submission(s) as read.
     */
    read_status?: string;
    /**
     * This indicates whether the submission has been reassigned by the instructor.
     */
    redo_request?: boolean;
};

