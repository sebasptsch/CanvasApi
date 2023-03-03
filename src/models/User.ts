/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Enrollment } from './Enrollment';

/**
 * A Canvas user, e.g. a student, teacher, administrator, observer, etc.
 */
export type User = {
    /**
     * The ID of the user.
     */
    id: number;
    /**
     * The name of the user.
     */
    name?: string;
    /**
     * The name of the user that is should be used for sorting groups of users, such as in the gradebook.
     */
    sortable_name?: string;
    /**
     * The last name of the user.
     */
    last_name?: string;
    /**
     * The first name of the user.
     */
    first_name?: string;
    /**
     * A short name the user has selected, for use in conversations or other less formal places through the site.
     */
    short_name?: string;
    /**
     * The SIS ID associated with the user.  This field is only included if the user came from a SIS import and has permissions to view SIS information.
     */
    sis_user_id?: string;
    /**
     * The id of the SIS import.  This field is only included if the user came from a SIS import and has permissions to manage SIS information.
     */
    sis_import_id?: number;
    /**
     * The integration_id associated with the user.  This field is only included if the user came from a SIS import and has permissions to view SIS information.
     */
    integration_id?: string;
    /**
     * The unique login id for the user.  This is what the user uses to log in to Canvas.
     */
    login_id?: string;
    /**
     * If avatars are enabled, this field will be included and contain a url to retrieve the user's avatar.
     */
    avatar_url?: string;
    /**
     * Optional: If avatars are enabled and caller is admin, this field can be requested and will contain the current state of the user's avatar.
     */
    avatar_state?: string;
    /**
     * Optional: This field can be requested with certain API calls, and will return a list of the users active enrollments. See the List enrollments API for more details about the format of these records.
     */
    enrollments?: Array<Enrollment>;
    /**
     * Optional: This field can be requested with certain API calls, and will return the users primary email address.
     */
    email?: string;
    /**
     * Optional: This field can be requested with certain API calls, and will return the users locale in RFC 5646 format.
     */
    locale?: string;
    /**
     * Optional: This field is only returned in certain API calls, and will return a timestamp representing the last time the user logged in to canvas.
     */
    last_login?: string;
    /**
     * Optional: This field is only returned in certain API calls, and will return the IANA time zone name of the user's preferred timezone.
     */
    time_zone?: string;
    /**
     * Optional: The user's bio.
     */
    bio?: string;
};

