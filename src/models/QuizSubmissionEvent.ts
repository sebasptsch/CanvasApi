/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from './datetime';

/**
 * An event passed from the Quiz Submission take page
 */
export type QuizSubmissionEvent = {
    created_at?: datetime;
    /**
     * the type of event being sent
     */
    event_type?: string;
    /**
     * custom contextual data for the specific event type
     */
    event_data?: any;
};

