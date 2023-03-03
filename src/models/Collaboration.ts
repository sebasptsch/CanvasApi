/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from './datetime';

export type Collaboration = {
    /**
     * The unique identifier for the collaboration
     */
    id?: number;
    /**
     * A name for the type of collaboration
     */
    collaboration_type?: string;
    /**
     * The collaboration document identifier for the collaboration provider
     */
    document_id?: string;
    /**
     * The canvas id of the user who created the collaboration
     */
    user_id?: number;
    /**
     * The canvas id of the course or group to which the collaboration belongs
     */
    context_id?: number;
    /**
     * The canvas type of the course or group to which the collaboration belongs
     */
    context_type?: string;
    /**
     * The LTI launch url to view collaboration.
     */
    url?: string;
    created_at?: datetime;
    updated_at?: datetime;
    description?: string;
    title?: string;
    /**
     * Another representation of the collaboration type
     */
    type?: string;
    /**
     * The LTI launch url to edit the collaboration
     */
    update_url?: string;
    /**
     * The name of the user who owns the collaboration
     */
    user_name?: string;
};

