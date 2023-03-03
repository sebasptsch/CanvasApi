/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Unique identifiers of objects associated with a result
 */
export type ResultLinks = {
    /**
     * A unique identifier for the user to whom this result applies
     */
    user?: string;
    /**
     * A unique identifier for the user who created this result
     */
    assessor?: string;
    /**
     * A unique identifier for the assessment that this result is for
     */
    assessment?: string;
};

