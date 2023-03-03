/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Outcome } from './Outcome';
import type { OutcomeGroup } from './OutcomeGroup';

export type OutcomeLink = {
    /**
     * the URL for fetching/updating the outcome link. should be treated as opaque
     */
    url?: string;
    /**
     * the context owning the outcome link. will match the context owning the outcome group containing the outcome link; included for convenience. may be null for links in global outcome groups.
     */
    context_id?: number;
    context_type?: string;
    outcome_group?: OutcomeGroup;
    outcome?: Outcome;
    /**
     * whether this outcome has been used to assess a student in the context of this outcome link.  In other words, this will be set to true if the context is a course, and a student has been assessed with this outcome in that course.
     */
    assessed?: boolean;
    /**
     * whether this outcome link is manageable and is not the last link to an aligned outcome
     */
    can_unlink?: boolean;
};

