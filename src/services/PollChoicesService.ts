/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PollChoicesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List poll choices in a poll
     * Returns the paginated list of PollChoices in this poll.
     * @param pollId ID
     * @returns any success
     * @throws ApiError
     */
    public listPollChoicesInPoll(
        pollId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/polls/{poll_id}/poll_choices',
            path: {
                'poll_id': pollId,
            },
        });
    }

    /**
     * Create a single poll choice
     * Create a new poll choice for this poll
     * @param pollId ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public createSinglePollChoice(
        pollId: string,
        formData: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/polls/{poll_id}/poll_choices',
            path: {
                'poll_id': pollId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get a single poll choice
     * Returns the poll choice with the given id
     * @param pollId ID
     * @param id ID
     * @returns any success
     * @throws ApiError
     */
    public getSinglePollChoice(
        pollId: string,
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/polls/{poll_id}/poll_choices/{id}',
            path: {
                'poll_id': pollId,
                'id': id,
            },
        });
    }

    /**
     * Update a single poll choice
     * Update an existing poll choice for this poll
     * @param pollId ID
     * @param id ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public updateSinglePollChoice(
        pollId: string,
        id: string,
        formData: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/polls/{poll_id}/poll_choices/{id}',
            path: {
                'poll_id': pollId,
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete a poll choice
     * <b>204 No Content</b> response code is returned if the deletion was successful.
     * @param pollId ID
     * @param id ID
     * @returns any success
     * @throws ApiError
     */
    public deletePollChoice(
        pollId: string,
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/polls/{poll_id}/poll_choices/{id}',
            path: {
                'poll_id': pollId,
                'id': id,
            },
        });
    }

}
