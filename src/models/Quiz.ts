/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AssignmentDate } from './AssignmentDate';
import type { datetime } from './datetime';
import type { LockInfo } from './LockInfo';
import type { QuizPermissions } from './QuizPermissions';

export type Quiz = {
    /**
     * the ID of the quiz
     */
    id?: number;
    /**
     * the title of the quiz
     */
    title?: string;
    /**
     * the HTTP/HTTPS URL to the quiz
     */
    html_url?: string;
    /**
     * a url suitable for loading the quiz in a mobile webview.  it will persiste the headless session and, for quizzes in public courses, will force the user to login
     */
    mobile_url?: string;
    /**
     * A url that can be visited in the browser with a POST request to preview a quiz as the teacher. Only present when the user may grade
     */
    preview_url?: string;
    /**
     * the description of the quiz
     */
    description?: string;
    /**
     * type of quiz possible values: 'practice_quiz', 'assignment', 'graded_survey', 'survey'
     */
    quiz_type?: string;
    /**
     * the ID of the quiz's assignment group:
     */
    assignment_group_id?: number;
    /**
     * quiz time limit in minutes
     */
    time_limit?: number;
    /**
     * shuffle answers for students?
     */
    shuffle_answers?: boolean;
    /**
     * let students see their quiz responses? possible values: null, 'always', 'until_after_last_attempt'
     */
    hide_results?: string;
    /**
     * show which answers were correct when results are shown? only valid if hide_results=null
     */
    show_correct_answers?: boolean;
    /**
     * restrict the show_correct_answers option above to apply only to the last submitted attempt of a quiz that allows multiple attempts. only valid if show_correct_answers=true and allowed_attempts > 1
     */
    show_correct_answers_last_attempt?: boolean;
    show_correct_answers_at?: datetime;
    hide_correct_answers_at?: datetime;
    /**
     * prevent the students from seeing their results more than once (right after they submit the quiz)
     */
    one_time_results?: boolean;
    /**
     * which quiz score to keep (only if allowed_attempts != 1) possible values: 'keep_highest', 'keep_latest'
     */
    scoring_policy?: string;
    /**
     * how many times a student can take the quiz -1 = unlimited attempts
     */
    allowed_attempts?: number;
    /**
     * show one question at a time?
     */
    one_question_at_a_time?: boolean;
    /**
     * the number of questions in the quiz
     */
    question_count?: number;
    /**
     * The total point value given to the quiz
     */
    points_possible?: number;
    /**
     * lock questions after answering? only valid if one_question_at_a_time=true
     */
    cant_go_back?: boolean;
    /**
     * access code to restrict quiz access
     */
    access_code?: string;
    /**
     * IP address or range that quiz access is limited to
     */
    ip_filter?: string;
    due_at?: datetime;
    lock_at?: datetime;
    unlock_at?: datetime;
    /**
     * whether the quiz has a published or unpublished draft state.
     */
    published?: boolean;
    /**
     * Whether the assignment's 'published' state can be changed to false. Will be false if there are student submissions for the quiz.
     */
    unpublishable?: boolean;
    /**
     * Whether or not this is locked for the user.
     */
    locked_for_user?: boolean;
    lock_info?: LockInfo;
    /**
     * (Optional) An explanation of why this is locked for the user. Present when locked_for_user is true.
     */
    lock_explanation?: string;
    /**
     * Link to Speed Grader for this quiz. Will not be present if quiz is unpublished
     */
    speedgrader_url?: string;
    /**
     * Link to endpoint to send extensions for this quiz.
     */
    quiz_extensions_url?: string;
    permissions?: QuizPermissions;
    /**
     * list of due dates for the quiz
     */
    all_dates?: Array<AssignmentDate>;
    /**
     * Current version number of the quiz
     */
    version_number?: number;
    /**
     * List of question types in the quiz
     */
    question_types?: Array<string>;
    /**
     * Whether survey submissions will be kept anonymous (only applicable to 'graded_survey', 'survey' quiz types)
     */
    anonymous_submissions?: boolean;
};

