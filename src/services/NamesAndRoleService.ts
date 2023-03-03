/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NamesAndRoleMemberships } from '../models/NamesAndRoleMemberships';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class NamesAndRoleService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Course Memberships
     * Return active NamesAndRoleMemberships in the given course.
     * @param courseId ID
     * @param rlid If specified only NamesAndRoleMemberships with access to the LTI link references by this `rlid` will be included.
     * Also causes the member array to be included for each returned NamesAndRoleMembership.
     * If the `role` parameter is also present, it will be 'and-ed' together with this parameter
     * @param role If specified only NamesAndRoleMemberships having this role in the given Course will be included.
     * Value must be a fully-qualified LTI/LIS role URN.
     * If the `rlid` parameter is also present, it will be 'and-ed' together with this parameter
     * @param limit May be used to limit the number of NamesAndRoleMemberships returned in a page. Defaults to 50.
     * @returns NamesAndRoleMemberships success
     * @throws ApiError
     */
    public listCourseMemberships(
        courseId: string,
        rlid?: string,
        role?: string,
        limit?: string,
    ): CancelablePromise<NamesAndRoleMemberships> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/lti/courses/{course_id}/names_and_roles',
            path: {
                'course_id': courseId,
            },
            query: {
                'rlid': rlid,
                'role': role,
                'limit': limit,
            },
        });
    }

    /**
     * List Group Memberships
     * Return active NamesAndRoleMemberships in the given group.
     * @param groupId ID
     * @param rlid If specified only NamesAndRoleMemberships with access to the LTI link references by this `rlid` will be included.
     * Also causes the member array to be included for each returned NamesAndRoleMembership.
     * If the role parameter is also present, it will be 'and-ed' together with this parameter
     * @param role If specified only NamesAndRoleMemberships having this role in the given Group will be included.
     * Value must be a fully-qualified LTI/LIS role URN. Further, only
     * http://purl.imsglobal.org/vocab/lis/v2/membership#Member and
     * http://purl.imsglobal.org/vocab/lis/v2/membership#Manager are supported.
     * If the `rlid` parameter is also present, it will be 'and-ed' together with this parameter
     * @param limit May be used to limit the number of NamesAndRoleMemberships returned in a page. Defaults to 50.
     * @returns NamesAndRoleMemberships success
     * @throws ApiError
     */
    public listGroupMemberships(
        groupId: string,
        rlid?: string,
        role?: string,
        limit?: string,
    ): CancelablePromise<NamesAndRoleMemberships> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/lti/groups/{group_id}/names_and_roles',
            path: {
                'group_id': groupId,
            },
            query: {
                '`rlid`': rlid,
                'role': role,
                'limit': limit,
            },
        });
    }

}
