/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from './datetime';
import type { LockInfo } from './LockInfo';
import type { User } from './User';

export type Page = {
    /**
     * the ID of the page
     */
    page_id?: number;
    /**
     * the unique locator for the page
     */
    url?: string;
    /**
     * the title of the page
     */
    title?: string;
    created_at?: datetime;
    updated_at?: datetime;
    /**
     * (DEPRECATED) whether this page is hidden from students (note: this is always reflected as the inverse of the published value)
     */
    hide_from_students?: boolean;
    /**
     * roles allowed to edit the page; comma-separated list comprising a combination of 'teachers', 'students', 'members', and/or 'public' if not supplied, course defaults are used
     */
    editing_roles?: string;
    last_edited_by?: User;
    /**
     * the page content, in HTML (present when requesting a single page; omitted when listing pages)
     */
    body?: string;
    /**
     * whether the page is published (true) or draft state (false).
     */
    published?: boolean;
    publish_at?: datetime;
    /**
     * whether this page is the front page for the wiki
     */
    front_page?: boolean;
    /**
     * Whether or not this is locked for the user.
     */
    locked_for_user?: boolean;
    lock_info?: LockInfo;
    /**
     * (Optional) An explanation of why this is locked for the user. Present when locked_for_user is true.
     */
    lock_explanation?: string;
};

