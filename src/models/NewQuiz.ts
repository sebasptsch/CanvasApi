/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from './datetime';
import type { QuizSettings } from './QuizSettings';

export type NewQuiz = {
    /**
     * the ID of the quiz
     */
    id?: string;
    /**
     * the title of the quiz
     */
    title?: string;
    /**
     * the quiz's instructions
     */
    instructions?: string;
    /**
     * the ID of the quiz's assignment group
     */
    assignment_group_id?: string;
    /**
     * The total point value given to the quiz
     */
    points_possible?: number;
    due_at?: datetime;
    lock_at?: datetime;
    unlock_at?: datetime;
    /**
     * whether the quiz has a published or unpublished draft state.
     */
    published?: boolean;
    quiz_settings?: QuizSettings;
};

