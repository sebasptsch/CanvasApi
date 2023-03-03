/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CalendarLink } from './CalendarLink';

/**
 * Profile details for a Canvas user.
 */
export type Profile = {
    /**
     * The ID of the user.
     */
    id?: number;
    /**
     * Sample User
     */
    name?: string;
    /**
     * Sample User
     */
    short_name?: string;
    /**
     * user, sample
     */
    sortable_name?: string;
    title?: string;
    bio?: string;
    /**
     * sample_user@example.com
     */
    primary_email?: string;
    /**
     * sample_user@example.com
     */
    login_id?: string;
    /**
     * sis1
     */
    sis_user_id?: string;
    lti_user_id?: string;
    /**
     * The avatar_url can change over time, so we recommend not caching it for more than a few hours
     */
    avatar_url?: string;
    calendar?: CalendarLink;
    /**
     * Optional: This field is only returned in certain API calls, and will return the IANA time zone name of the user's preferred timezone.
     */
    time_zone?: string;
    /**
     * The users locale.
     */
    locale?: string;
    /**
     * Optional: Whether or not the user is a K5 user. This field is nil if the user settings are not for the user making the request.
     */
    k5_user?: boolean;
};

