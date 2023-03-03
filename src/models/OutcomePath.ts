/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OutcomePathPart } from './OutcomePathPart';

/**
 * The full path to an outcome
 */
export type OutcomePath = {
    /**
     * A unique identifier for this outcome
     */
    id?: number;
    parts?: OutcomePathPart;
};

