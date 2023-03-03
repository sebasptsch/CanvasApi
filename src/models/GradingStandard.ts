/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GradingSchemeEntry } from './GradingSchemeEntry';

export type GradingStandard = {
    /**
     * the title of the grading standard
     */
    title?: string;
    /**
     * the id of the grading standard
     */
    id?: number;
    /**
     * the context this standard is associated with, either 'Account' or 'Course'
     */
    context_type?: string;
    /**
     * the id for the context either the Account or Course id
     */
    context_id?: number;
    /**
     * A list of GradingSchemeEntry that make up the Grading Standard as an array of values with the scheme name and value
     */
    grading_scheme?: Array<GradingSchemeEntry>;
};

