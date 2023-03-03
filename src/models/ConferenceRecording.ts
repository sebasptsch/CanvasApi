/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from './datetime';

export type ConferenceRecording = {
    duration_minutes?: number;
    title?: string;
    updated_at?: datetime;
    created_at?: datetime;
    playback_url?: string;
};

