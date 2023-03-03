/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OutcomeRollupLinks } from './OutcomeRollupLinks';
import type { OutcomeRollupScore } from './OutcomeRollupScore';

export type OutcomeRollup = {
    scores?: OutcomeRollupScore;
    /**
     * The name of the resource for this rollup. For example, the user name.
     */
    name?: string;
    links?: OutcomeRollupLinks;
};

