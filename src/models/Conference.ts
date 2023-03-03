/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConferenceRecording } from './ConferenceRecording';
import type { datetime } from './datetime';

export type Conference = {
    /**
     * The id of the conference
     */
    id?: number;
    /**
     * The type of conference
     */
    conference_type?: string;
    /**
     * The 3rd party's ID for the conference
     */
    conference_key?: string;
    /**
     * The description for the conference
     */
    description?: string;
    /**
     * The expected duration the conference is supposed to last
     */
    duration?: number;
    ended_at?: datetime;
    started_at?: datetime;
    /**
     * The title of the conference
     */
    title?: string;
    /**
     * Array of user ids that are participants in the conference
     */
    users?: Array<number>;
    /**
     * True if the conference type has advanced settings.
     */
    has_advanced_settings?: boolean;
    /**
     * If true the conference is long running and has no expected end time
     */
    long_running?: boolean;
    /**
     * A collection of settings specific to the conference type
     */
    user_settings?: any;
    /**
     * A List of recordings for the conference
     */
    recordings?: Array<ConferenceRecording>;
    /**
     * URL for the conference, may be null if the conference type doesn't set it
     */
    url?: string;
    /**
     * URL to join the conference, may be null if the conference type doesn't set it
     */
    join_url?: string;
    /**
     * The type of this conference's context, typically 'Course' or 'Group'.
     */
    context_type?: string;
    /**
     * The ID of this conference's context.
     */
    context_id?: number;
};

