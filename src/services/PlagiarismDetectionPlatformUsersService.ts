/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PlagiarismDetectionPlatformUsersService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get a single user (lti)
     * Get a single Canvas user by Canvas id or LTI id. Tool providers may only access
     * users that have been assigned an assignment associated with their tool.
     * @param id ID
     * @returns User success
     * @throws ApiError
     */
    public getSingleUserLti(
        id: string,
    ): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/lti/users/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get all users in a group (lti)
     * Get all Canvas users in a group. Tool providers may only access
     * groups that belong to the context the tool is installed in.
     * @param groupId ID
     * @returns User success
     * @throws ApiError
     */
    public getAllUsersInGroupLti(
        groupId: string,
    ): CancelablePromise<Array<User>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/lti/groups/{group_id}/users',
            path: {
                'group_id': groupId,
            },
        });
    }

}
