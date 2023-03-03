/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from './datetime';

export type Day = {
    date?: datetime;
    /**
     * an array of the graders who were responsible for the submissions in this response. the submissions are grouped according to the person who graded them and the assignment they were submitted for.
     */
    graders?: number;
};

