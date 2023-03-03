/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Progress } from '../models/Progress';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProgressService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Query progress
     * Return completion and status information about an asynchronous job
     * @param id ID
     * @returns Progress success
     * @throws ApiError
     */
    public queryProgress(
        id: string,
    ): CancelablePromise<Progress> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/progress/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Cancel progress
     * Cancel an asynchronous job associated with a Progress object
     * @param id ID
     * @returns Progress success
     * @throws ApiError
     */
    public cancelProgress(
        id: string,
    ): CancelablePromise<Progress> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/progress/{id}/cancel',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Query progress
     * Return completion and status information about an asynchronous job
     * @param courseId ID
     * @param id ID
     * @returns Progress success
     * @throws ApiError
     */
    public queryProgress1(
        courseId: string,
        id: string,
    ): CancelablePromise<Progress> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/lti/courses/{course_id}/progress/{id}',
            path: {
                'course_id': courseId,
                'id': id,
            },
        });
    }

}
