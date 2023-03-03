/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from './datetime';
import type { MediaComment } from './MediaComment';

export type SubmissionComment = {
    id?: number;
    author_id?: number;
    author_name?: string;
    /**
     * Abbreviated user object UserDisplay (see users API).
     */
    author?: string;
    comment?: string;
    created_at?: datetime;
    edited_at?: datetime;
    media_comment?: MediaComment;
};

