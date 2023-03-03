/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GradingRules = {
    /**
     * Number of lowest scores to be dropped for each user.
     */
    drop_lowest?: number;
    /**
     * Number of highest scores to be dropped for each user.
     */
    drop_highest?: number;
    /**
     * Assignment IDs that should never be dropped.
     */
    never_drop?: Array<number>;
};

