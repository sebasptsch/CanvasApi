/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from './datetime';

/**
 * Information about a recently visited item or page in Canvas
 */
export type HistoryEntry = {
    /**
     * The asset string for the item viewed
     */
    asset_code: string;
    /**
     * The name of the item
     */
    asset_name: string;
    /**
     * The icon type shown for the item. One of 'icon-announcement', 'icon-assignment', 'icon-calendar-month', 'icon-discussion', 'icon-document', 'icon-download', 'icon-gradebook', 'icon-home', 'icon-message', 'icon-module', 'icon-outcomes', 'icon-quiz', 'icon-user', 'icon-syllabus'
     */
    asset_icon?: string;
    /**
     * The associated category describing the asset_icon
     */
    asset_readable_category?: string;
    /**
     * The type of context of the item visited. One of 'Course', 'Group', 'User', or 'Account'
     */
    context_type?: string;
    /**
     * The id of the context, if applicable
     */
    context_id?: number;
    /**
     * The name of the context
     */
    context_name?: string;
    /**
     * The URL of the item
     */
    visited_url: string;
    visited_at: datetime;
    /**
     * The estimated time spent on the page in seconds
     */
    interaction_seconds?: number;
};

