/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NamesAndRoleMessage } from './NamesAndRoleMessage';

/**
 * A member of a LTI Context in one or more roles
 */
export type NamesAndRoleMembership = {
    /**
     * Membership state
     */
    status?: NamesAndRoleMembership.status;
    /**
     * Member's full name. Only included if tool privacy level is `public` or `name_only`.
     */
    name?: string;
    /**
     * URL to the member's avatar. Only included if tool privacy level is `public`.
     */
    picture?: string;
    /**
     * Member's 'first' name. Only included if tool privacy level is `public` or `name_only`.
     */
    given_name?: string;
    /**
     * Member's 'last' name. Only included if tool privacy level is `public` or `name_only`.
     */
    family_name?: string;
    /**
     * Member's email address. Only included if tool privacy level is `public` or `email_only`.
     */
    email?: string;
    /**
     * Member's primary SIS identifier. Only included if tool privacy level is `public` or `name_only`.
     */
    lis_person_sourcedid?: string;
    /**
     * Member's unique LTI identifier.
     */
    user_id?: string;
    /**
     * Member's roles in the current Context, expressed as LTI/LIS URNs.
     */
    roles?: Array<'http://purl.imsglobal.org/vocab/lis/v2/membership/Instructor#TeachingAssistant' | 'http://purl.imsglobal.org/vocab/lis/v2/membership#Learner' | 'http://purl.imsglobal.org/vocab/lis/v2/membership#Instructor' | 'http://purl.imsglobal.org/vocab/lis/v2/membership#ContentDeveloper' | 'http://purl.imsglobal.org/vocab/lis/v2/membership#Mentor' | 'http://purl.imsglobal.org/vocab/lis/v2/membership#Member' | 'http://purl.imsglobal.org/vocab/lis/v2/membership#Manager'>;
    /**
     * Only present when the request specifies a `rlid` query parameter. Contains additional attributes which would appear in the LTI launch message were this member to click the link referenced by the `rlid` query parameter
     */
    message?: Array<NamesAndRoleMessage>;
};

export namespace NamesAndRoleMembership {

    /**
     * Membership state
     */
    export enum status {
        ACTIVE = 'Active',
    }


}

