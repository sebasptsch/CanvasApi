/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContentExport } from './ContentExport';
import type { datetime } from './datetime';

/**
 * Content shared between users
 */
export type ContentShare = {
    /**
     * The id of the content share for the current user
     */
    id?: number;
    /**
     * The name of the shared content
     */
    name?: string;
    /**
     * The type of content that was shared. Can be assignment, discussion_topic, page, quiz, module, or module_item.
     */
    content_type?: string;
    created_at?: datetime;
    updated_at?: datetime;
    /**
     * The id of the user who sent or received the content share.
     */
    user_id?: number;
    /**
     * The user who shared the content. This field is provided only to receivers; it is not populated in the sender's list of sent content shares.
     */
    sender?: any;
    /**
     * An Array of users the content is shared with.  This field is provided only to senders; an empty array will be returned for the receiving users.
     */
    receivers?: Array<any>;
    /**
     * The course the content was originally shared from.
     */
    source_course?: any;
    /**
     * Whether the recipient has viewed the content share.
     */
    read_state?: string;
    content_export?: ContentExport;
};

