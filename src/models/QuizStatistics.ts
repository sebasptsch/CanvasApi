/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from './datetime';
import type { QuizStatisticsLinks } from './QuizStatisticsLinks';
import type { QuizStatisticsQuestionStatistics } from './QuizStatisticsQuestionStatistics';
import type { QuizStatisticsSubmissionStatistics } from './QuizStatisticsSubmissionStatistics';

export type QuizStatistics = {
    /**
     * The ID of the quiz statistics report.
     */
    id: number;
    /**
     * The ID of the Quiz the statistics report is for.
     * NOTE: AVAILABLE ONLY IN NON-JSON-API REQUESTS.
     */
    quiz_id: number;
    /**
     * Whether there are any students that have made mutliple submissions for this quiz.
     */
    multiple_attempts_exist?: boolean;
    /**
     * In the presence of multiple attempts, this field describes whether the statistics describe all the submission attempts and not only the latest ones.
     */
    includes_all_versions?: boolean;
    generated_at?: datetime;
    /**
     * The API HTTP/HTTPS URL to this quiz statistics.
     */
    url?: string;
    /**
     * The HTTP/HTTPS URL to the page where the statistics can be seen visually.
     */
    html_url?: string;
    question_statistics?: QuizStatisticsQuestionStatistics;
    submission_statistics?: QuizStatisticsSubmissionStatistics;
    links?: QuizStatisticsLinks;
};

