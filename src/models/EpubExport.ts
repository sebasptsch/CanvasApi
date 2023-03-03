/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from './datetime';
import type { File } from './File';

export type EpubExport = {
    /**
     * the unique identifier for the export
     */
    id?: number;
    created_at?: datetime;
    attachment?: File;
    /**
     * The api endpoint for polling the current progress
     */
    progress_url?: string;
    /**
     * The ID of the user who started the export
     */
    user_id?: number;
    /**
     * Current state of the ePub export: created exporting exported generating generated failed
     */
    workflow_state?: string;
};

