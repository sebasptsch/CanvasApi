/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from './datetime';
import type { File } from './File';
import type { Progress } from './Progress';

export type QuizReport = {
    /**
     * the ID of the quiz report
     */
    id?: number;
    /**
     * the ID of the quiz
     */
    quiz_id?: number;
    /**
     * which type of report this is possible values: 'student_analysis', 'item_analysis'
     */
    report_type?: string;
    /**
     * a human-readable (and localized) version of the report_type
     */
    readable_type?: string;
    /**
     * boolean indicating whether the report represents all submissions or only the most recent ones for each student
     */
    includes_all_versions?: boolean;
    /**
     * boolean indicating whether the report is for an anonymous survey. if true, no student names will be included in the csv
     */
    anonymous?: boolean;
    /**
     * boolean indicating whether the report can be generated, which is true unless the quiz is a survey one
     */
    generatable?: boolean;
    created_at?: datetime;
    updated_at?: datetime;
    /**
     * the API endpoint for this report
     */
    url?: string;
    file?: File;
    /**
     * if the report has not yet finished generating, a URL where information about its progress can be retrieved. refer to the Progress API for more information (Note: not available in JSON-API format)
     */
    progress_url?: string;
    progress?: Progress;
};

