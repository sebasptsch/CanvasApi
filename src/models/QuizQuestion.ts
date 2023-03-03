/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Answer } from './Answer';

export type QuizQuestion = {
    /**
     * The ID of the quiz question.
     */
    id: number;
    /**
     * The ID of the Quiz the question belongs to.
     */
    quiz_id: number;
    /**
     * The order in which the question will be retrieved and displayed.
     */
    position?: number;
    /**
     * The name of the question.
     */
    question_name?: string;
    /**
     * The type of the question.
     */
    question_type?: string;
    /**
     * The text of the question.
     */
    question_text?: string;
    /**
     * The maximum amount of points possible received for getting this question correct.
     */
    points_possible?: number;
    /**
     * The comments to display if the student answers the question correctly.
     */
    correct_comments?: string;
    /**
     * The comments to display if the student answers incorrectly.
     */
    incorrect_comments?: string;
    /**
     * The comments to display regardless of how the student answered.
     */
    neutral_comments?: string;
    /**
     * An array of available answers to display to the student.
     */
    answers?: Array<Answer>;
};

