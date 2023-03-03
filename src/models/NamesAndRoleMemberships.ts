/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NamesAndRoleContext } from './NamesAndRoleContext';
import type { NamesAndRoleMembership } from './NamesAndRoleMembership';

export type NamesAndRoleMemberships = {
    /**
     * Invocation URL
     */
    id?: string;
    context?: NamesAndRoleContext;
    /**
     * A list of NamesAndRoleMembership
     */
    members?: Array<NamesAndRoleMembership>;
};

