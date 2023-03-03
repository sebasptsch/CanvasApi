/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Conference } from '../models/Conference';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ConferencesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List conferences
     * Retrieve the paginated list of conferences for this context
     *
     * This API returns a JSON object containing the list of conferences,
     * the key for the list of conferences is "conferences"
     * @param courseId ID
     * @returns Conference success
     * @throws ApiError
     */
    public listConferencesCourses(
        courseId: string,
    ): CancelablePromise<Array<Conference>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/conferences',
            path: {
                'course_id': courseId,
            },
        });
    }

    /**
     * List conferences
     * Retrieve the paginated list of conferences for this context
     *
     * This API returns a JSON object containing the list of conferences,
     * the key for the list of conferences is "conferences"
     * @param groupId ID
     * @returns Conference success
     * @throws ApiError
     */
    public listConferencesGroups(
        groupId: string,
    ): CancelablePromise<Array<Conference>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/groups/{group_id}/conferences',
            path: {
                'group_id': groupId,
            },
        });
    }

    /**
     * List conferences for the current user
     * Retrieve the paginated list of conferences for all courses and groups
     * the current user belongs to
     *
     * This API returns a JSON object containing the list of conferences.
     * The key for the list of conferences is "conferences".
     * @param state If set to "live", returns only conferences that are live (i.e., have
     * started and not finished yet). If omitted, returns all conferences for
     * this user's groups and courses.
     * @returns Conference success
     * @throws ApiError
     */
    public listConferencesForCurrentUser(
        state?: string,
    ): CancelablePromise<Array<Conference>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/conferences',
            query: {
                'state': state,
            },
        });
    }

}
