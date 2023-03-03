/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { QuizAssignmentOverride } from './QuizAssignmentOverride';

/**
 * Set of assignment-overridden dates for a quiz.
 */
export type QuizAssignmentOverrideSet = {
    /**
     * ID of the quiz those dates are for.
     */
    quiz_id?: string;
    due_dates?: QuizAssignmentOverride;
    all_dates?: QuizAssignmentOverride;
};

