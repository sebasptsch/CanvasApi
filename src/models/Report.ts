/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from './datetime';
import type { File } from './File';
import type { ReportParameters } from './ReportParameters';

export type Report = {
    /**
     * The unique identifier for the report.
     */
    id?: number;
    /**
     * The type of report.
     */
    report?: string;
    /**
     * The url to the report download.
     */
    file_url?: string;
    attachment?: File;
    /**
     * The status of the report
     */
    status?: string;
    created_at?: datetime;
    started_at?: datetime;
    ended_at?: datetime;
    parameters?: ReportParameters;
    /**
     * The progress of the report
     */
    progress?: number;
    /**
     * This is the current line count being written to the report. It updates every 1000 records.
     */
    current_line?: number;
};

