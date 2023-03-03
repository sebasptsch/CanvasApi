/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from './datetime';

/**
 * Date and time for an appointment
 */
export type Appointment = {
    /**
     * The appointment identifier.
     */
    id?: number;
    start_at?: datetime;
    end_at?: datetime;
};

