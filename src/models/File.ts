/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from './datetime';

export type File = {
    size?: number;
    'content-type'?: string;
    url?: string;
    id?: number;
    display_name?: string;
    created_at?: datetime;
    updated_at?: datetime;
};

