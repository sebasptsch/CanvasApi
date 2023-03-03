/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnrollmentTerm } from '../models/EnrollmentTerm';
import type { EnrollmentTermsList } from '../models/EnrollmentTermsList';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class EnrollmentTermsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Retrieve enrollment term
     * Retrieves the details for an enrollment term in the account. Includes overrides by default.
     * @param accountId ID
     * @param id ID
     * @returns EnrollmentTerm success
     * @throws ApiError
     */
    public retrieveEnrollmentTerm(
        accountId: string,
        id: string,
    ): CancelablePromise<EnrollmentTerm> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{account_id}/terms/{id}',
            path: {
                'account_id': accountId,
                'id': id,
            },
        });
    }

    /**
     * Update enrollment term
     * Update an existing enrollment term for the specified account.
     * @param accountId ID
     * @param id ID
     * @param formData
     * @returns EnrollmentTerm success
     * @throws ApiError
     */
    public updateEnrollmentTerm(
        accountId: string,
        id: string,
        formData?: any,
    ): CancelablePromise<EnrollmentTerm> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/accounts/{account_id}/terms/{id}',
            path: {
                'account_id': accountId,
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete enrollment term
     * Delete the specified enrollment term.
     * @param accountId ID
     * @param id ID
     * @returns EnrollmentTerm success
     * @throws ApiError
     */
    public deleteEnrollmentTerm(
        accountId: string,
        id: string,
    ): CancelablePromise<EnrollmentTerm> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/accounts/{account_id}/terms/{id}',
            path: {
                'account_id': accountId,
                'id': id,
            },
        });
    }

    /**
     * List enrollment terms
     * An object with a paginated list of all of the terms in the account.
     * @param accountId ID
     * @param workflowState If set, only returns terms that are in the given state.
     * Defaults to 'active'.
     * @param include Array of additional information to include.
     *
     * "overrides":: term start/end dates overridden for different enrollment types
     * "course_count":: the number of courses in each term
     * @returns EnrollmentTermsList success
     * @throws ApiError
     */
    public listEnrollmentTerms(
        accountId: string,
        workflowState?: 'active' | 'deleted' | 'all',
        include?: 'overrides',
    ): CancelablePromise<EnrollmentTermsList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{account_id}/terms',
            path: {
                'account_id': accountId,
            },
            query: {
                'workflow_state': workflowState,
                'include': include,
            },
        });
    }

    /**
     * Create enrollment term
     * Create a new enrollment term for the specified account.
     * @param accountId ID
     * @param formData
     * @returns EnrollmentTerm success
     * @throws ApiError
     */
    public createEnrollmentTerm(
        accountId: string,
        formData?: any,
    ): CancelablePromise<EnrollmentTerm> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/accounts/{account_id}/terms',
            path: {
                'account_id': accountId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
