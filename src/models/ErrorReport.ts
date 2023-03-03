/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A collection of information around a specific notification of a problem
 */
export type ErrorReport = {
    /**
     * The users problem summary, like an email subject line
     */
    subject?: string;
    /**
     * long form documentation of what was witnessed
     */
    comments?: string;
    /**
     * categorization of how bad the user thinks the problem is.  Should be one of [just_a_comment, not_urgent, workaround_possible, blocks_what_i_need_to_do, extreme_critical_emergency].
     */
    user_perceived_severity?: string;
    /**
     * the email address of the reporting user
     */
    email?: string;
    /**
     * URL of the page on which the error was reported
     */
    url?: string;
    /**
     * string describing the asset being interacted with at the time of error.  Formatted '[type]_[id]'
     */
    context_asset_string?: string;
    /**
     * comma seperated list of roles the reporting user holds.  Can be one [student], or many [teacher,admin]
     */
    user_roles?: string;
};

