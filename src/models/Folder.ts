/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from './datetime';

export type Folder = {
    context_type?: string;
    context_id?: number;
    files_count?: number;
    position?: number;
    updated_at?: datetime;
    folders_url?: string;
    files_url?: string;
    full_name?: string;
    lock_at?: datetime;
    id?: number;
    folders_count?: number;
    name?: string;
    parent_folder_id?: number;
    created_at?: datetime;
    unlock_at?: datetime;
    hidden?: boolean;
    hidden_for_user?: boolean;
    locked?: boolean;
    locked_for_user?: boolean;
    /**
     * If true, indicates this is a read-only folder containing files submitted to assignments
     */
    for_submissions?: boolean;
};

