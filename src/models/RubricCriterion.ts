/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RubricRating } from './RubricRating';

export type RubricCriterion = {
    /**
     * the ID of the criterion
     */
    id?: string;
    description?: string;
    long_description?: string;
    points?: number;
    criterion_use_range?: boolean;
    /**
     * the possible ratings for this Criterion
     */
    ratings?: Array<RubricRating>;
};

