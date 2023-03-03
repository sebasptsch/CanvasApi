/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type QuizIPFilter = {
    /**
     * A unique name for the filter.
     */
    name: string;
    /**
     * Name of the Account (or Quiz) the IP filter is defined in.
     */
    account: string;
    /**
     * An IP address (or range mask) this filter embodies.
     */
    filter: string;
};

