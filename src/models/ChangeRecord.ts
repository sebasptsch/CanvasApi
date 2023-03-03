/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Describes a learning object change propagated to associated courses from a blueprint course
 */
export type ChangeRecord = {
    /**
     * The ID of the learning object that was changed in the blueprint course.
     */
    asset_id?: number;
    /**
     * The type of the learning object that was changed in the blueprint course.  One of 'assignment', 'attachment', 'discussion_topic', 'external_tool', 'quiz', 'wiki_page', 'syllabus', or 'settings'.  For 'syllabus' or 'settings', the asset_id is the course id.
     */
    asset_type?: string;
    /**
     * The name of the learning object that was changed in the blueprint course.
     */
    asset_name?: string;
    /**
     * The type of change; one of 'created', 'updated', 'deleted'
     */
    change_type?: string;
    /**
     * The URL of the changed object
     */
    html_url?: string;
    /**
     * Whether the object is locked in the blueprint
     */
    locked?: boolean;
    /**
     * A list of ExceptionRecords for linked courses that did not receive this update.
     */
    exceptions?: Array<any>;
};

