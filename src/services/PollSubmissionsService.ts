/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PollSubmissionsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create a single poll submission
     * Create a new poll submission for this poll session
     * @param pollId ID
     * @param pollSessionId ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public createSinglePollSubmission(
        pollId: string,
        pollSessionId: string,
        formData: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/polls/{poll_id}/poll_sessions/{poll_session_id}/poll_submissions',
            path: {
                'poll_id': pollId,
                'poll_session_id': pollSessionId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get a single poll submission
     * Returns the poll submission with the given id
     * @param pollId ID
     * @param pollSessionId ID
     * @param id ID
     * @returns any success
     * @throws ApiError
     */
    public getSinglePollSubmission(
        pollId: string,
        pollSessionId: string,
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/polls/{poll_id}/poll_sessions/{poll_session_id}/poll_submissions/{id}',
            path: {
                'poll_id': pollId,
                'poll_session_id': pollSessionId,
                'id': id,
            },
        });
    }

}
