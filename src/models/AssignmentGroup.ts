/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GradingRules } from './GradingRules';

export type AssignmentGroup = {
    /**
     * the id of the Assignment Group
     */
    id?: number;
    /**
     * the name of the Assignment Group
     */
    name?: string;
    /**
     * the position of the Assignment Group
     */
    position?: number;
    /**
     * the weight of the Assignment Group
     */
    group_weight?: number;
    /**
     * the sis source id of the Assignment Group
     */
    sis_source_id?: string;
    /**
     * the integration data of the Assignment Group
     */
    integration_data?: any;
    /**
     * the assignments in this Assignment Group (see the Assignment API for a detailed list of fields)
     */
    assignments?: Array<number>;
    rules?: GradingRules;
};

