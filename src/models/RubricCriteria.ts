/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RubricRating } from './RubricRating';

export type RubricCriteria = {
    points?: number;
    /**
     * The id of rubric criteria.
     */
    id?: string;
    /**
     * (Optional) The id of the learning outcome this criteria uses, if any.
     */
    learning_outcome_id?: string;
    /**
     * (Optional) The 3rd party vendor's GUID for the outcome this criteria references, if any.
     */
    vendor_guid?: string;
    description?: string;
    long_description?: string;
    criterion_use_range?: boolean;
    ratings?: Array<RubricRating>;
    ignore_for_scoring?: boolean;
};

