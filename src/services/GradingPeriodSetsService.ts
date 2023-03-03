/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class GradingPeriodSetsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Delete a grading period set
     * <b>204 No Content</b> response code is returned if the deletion was
     * successful.
     * @param accountId ID
     * @param id ID
     * @returns any success
     * @throws ApiError
     */
    public deleteGradingPeriodSet(
        accountId: string,
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/accounts/{account_id}/grading_period_sets/{id}',
            path: {
                'account_id': accountId,
                'id': id,
            },
        });
    }

    /**
     * Update a grading period set
     * Update an existing grading period set
     *
     * <b>204 No Content</b> response code is returned if the update was
     * successful.
     * @param accountId ID
     * @param id ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public updateGradingPeriodSet(
        accountId: string,
        id: string,
        formData: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/v1/accounts/{account_id}/grading_period_sets/{id}',
            path: {
                'account_id': accountId,
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * List grading period sets
     * Returns the paginated list of grading period sets
     * @param accountId ID
     * @returns any success
     * @throws ApiError
     */
    public listGradingPeriodSets(
        accountId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{account_id}/grading_period_sets',
            path: {
                'account_id': accountId,
            },
        });
    }

    /**
     * Create a grading period set
     * Create and return a new grading period set
     * @param accountId ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public createGradingPeriodSet(
        accountId: string,
        formData: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/accounts/{account_id}/grading_period_sets',
            path: {
                'account_id': accountId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
