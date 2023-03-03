/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from './datetime';

export type ePortfolio = {
    /**
     * The database ID of the ePortfolio
     */
    id?: number;
    /**
     * The user ID to which the ePortfolio belongs
     */
    user_id?: number;
    /**
     * The name of the ePortfolio
     */
    name?: string;
    /**
     * Whether or not the ePortfolio is visible without authentication
     */
    public?: boolean;
    created_at?: datetime;
    updated_at?: datetime;
    /**
     * The state of the ePortfolio. Either 'active' or 'deleted'
     */
    workflow_state?: string;
    deleted_at?: datetime;
    /**
     * A flag indicating whether the ePortfolio has been
     * flagged or moderated as spam. One of 'flagged_as_possible_spam',
     * 'marked_as_safe', 'marked_as_spam', or null
     */
    spam_status?: string;
};

