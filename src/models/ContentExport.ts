/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from './datetime';
import type { File } from './File';

export type ContentExport = {
    /**
     * the unique identifier for the export
     */
    id?: number;
    created_at?: datetime;
    /**
     * the type of content migration: 'common_cartridge' or 'qti'
     */
    export_type?: string;
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
     * Current state of the content migration: created exporting exported failed
     */
    workflow_state?: string;
};

