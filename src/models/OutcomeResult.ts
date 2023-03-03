/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from './datetime';

/**
 * A student's result for an outcome
 */
export type OutcomeResult = {
    /**
     * A unique identifier for this result
     */
    id?: number;
    /**
     * The student's score
     */
    score?: number;
    submitted_or_assessed_at?: datetime;
    /**
     * Unique identifiers of objects associated with this result
     */
    links?: any;
    /**
     * score's percent of maximum points possible for outcome, scaled to reflect any custom mastery levels that differ from the learning outcome
     */
    percent?: number;
};

