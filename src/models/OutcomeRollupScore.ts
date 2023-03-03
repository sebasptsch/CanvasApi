/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OutcomeRollupScoreLinks } from './OutcomeRollupScoreLinks';

export type OutcomeRollupScore = {
    /**
     * The rollup score for the outcome, based on the student alignment scores related to the outcome. This could be null if the student has no related scores.
     */
    score?: number;
    /**
     * The number of alignment scores included in this rollup.
     */
    count?: number;
    links?: OutcomeRollupScoreLinks;
};

