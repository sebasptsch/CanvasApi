/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { QuizStatisticsAnswerStatistics } from './QuizStatisticsAnswerStatistics';

/**
 * Statistics for submissions made to a specific quiz question.
 */
export type QuizStatisticsQuestionStatistics = {
    /**
     * Number of students who have provided an answer to this question. Blank or empty responses are not counted.
     */
    responses?: number;
    answers?: QuizStatisticsAnswerStatistics;
};

