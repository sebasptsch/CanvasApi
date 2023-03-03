/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from './datetime';

export type ContentMigration = {
    /**
     * the unique identifier for the migration
     */
    id?: number;
    /**
     * the type of content migration
     */
    migration_type?: string;
    /**
     * the name of the content migration type
     */
    migration_type_title?: string;
    /**
     * API url to the content migration's issues
     */
    migration_issues_url?: string;
    /**
     * attachment api object for the uploaded file may not be present for all migrations
     */
    attachment?: string;
    /**
     * The api endpoint for polling the current progress
     */
    progress_url?: string;
    /**
     * The user who started the migration
     */
    user_id?: number;
    /**
     * Current state of the content migration: pre_processing, pre_processed, running, waiting_for_select, completed, failed
     */
    workflow_state?: string;
    started_at?: datetime;
    finished_at?: datetime;
    /**
     * file uploading data, see {file:file_uploads.html File Upload Documentation} for file upload workflow This works a little differently in that all the file data is in the pre_attachment hash if there is no upload_url then there was an attachment pre-processing error, the error message will be in the message key This data will only be here after a create or update call
     */
    pre_attachment?: string;
};

