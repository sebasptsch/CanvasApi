/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OutcomeImport } from '../models/OutcomeImport';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OutcomeImportsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Import Outcomes
     * Import outcomes into Canvas.
     *
     * For more information on the format that's expected here, please see the
     * "Outcomes CSV" section in the API docs.
     * @param accountId ID
     * @param formData
     * @returns OutcomeImport success
     * @throws ApiError
     */
    public importOutcomesAccounts(
        accountId: string,
        formData?: any,
    ): CancelablePromise<OutcomeImport> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/accounts/{account_id}/outcome_imports',
            path: {
                'account_id': accountId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get Outcome import status
     * Get the status of an already created Outcome import. Pass 'latest' for the outcome import id
     * for the latest import.
     *
     * Examples:
     * curl 'https://<canvas>/api/v1/accounts/<account_id>/outcome_imports/<outcome_import_id>' \
     * -H "Authorization: Bearer <token>"
     * curl 'https://<canvas>/api/v1/courses/<course_id>/outcome_imports/<outcome_import_id>' \
     * -H "Authorization: Bearer <token>"
     * @param accountId ID
     * @param id ID
     * @returns OutcomeImport success
     * @throws ApiError
     */
    public getOutcomeImportStatusAccounts(
        accountId: string,
        id: string,
    ): CancelablePromise<OutcomeImport> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{account_id}/outcome_imports/{id}',
            path: {
                'account_id': accountId,
                'id': id,
            },
        });
    }

    /**
     * Get Outcome import status
     * Get the status of an already created Outcome import. Pass 'latest' for the outcome import id
     * for the latest import.
     *
     * Examples:
     * curl 'https://<canvas>/api/v1/accounts/<account_id>/outcome_imports/<outcome_import_id>' \
     * -H "Authorization: Bearer <token>"
     * curl 'https://<canvas>/api/v1/courses/<course_id>/outcome_imports/<outcome_import_id>' \
     * -H "Authorization: Bearer <token>"
     * @param courseId ID
     * @param id ID
     * @returns OutcomeImport success
     * @throws ApiError
     */
    public getOutcomeImportStatusCourses(
        courseId: string,
        id: string,
    ): CancelablePromise<OutcomeImport> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/outcome_imports/{id}',
            path: {
                'course_id': courseId,
                'id': id,
            },
        });
    }

    /**
     * Get IDs of outcome groups created after successful import
     * Get the IDs of the outcome groups created after a successful import.
     * Pass 'latest' for the outcome import id for the latest import.
     *
     * Examples:
     * curl 'https://<canvas>/api/v1/accounts/<account_id>/outcome_imports/outcomes_group_ids/<outcome_import_id>' \
     * -H "Authorization: Bearer <token>"
     * curl 'https://<canvas>/api/v1/courses/<course_id>/outcome_imports/outcome_group_ids/<outcome_import_id>' \
     * -H "Authorization: Bearer <token>"
     * @param accountId ID
     * @param id ID
     * @returns array_of_outcome_ids success
     * @throws ApiError
     */
    public getIdsOfOutcomeGroupsCreatedAfterSuccessfulImportAccounts(
        accountId: string,
        id: string,
    ): CancelablePromise<Array<number>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{account_id}/outcome_imports/{id}/created_group_ids',
            path: {
                'account_id': accountId,
                'id': id,
            },
        });
    }

    /**
     * Get IDs of outcome groups created after successful import
     * Get the IDs of the outcome groups created after a successful import.
     * Pass 'latest' for the outcome import id for the latest import.
     *
     * Examples:
     * curl 'https://<canvas>/api/v1/accounts/<account_id>/outcome_imports/outcomes_group_ids/<outcome_import_id>' \
     * -H "Authorization: Bearer <token>"
     * curl 'https://<canvas>/api/v1/courses/<course_id>/outcome_imports/outcome_group_ids/<outcome_import_id>' \
     * -H "Authorization: Bearer <token>"
     * @param courseId ID
     * @param id ID
     * @returns array_of_outcome_ids success
     * @throws ApiError
     */
    public getIdsOfOutcomeGroupsCreatedAfterSuccessfulImportCourses(
        courseId: string,
        id: string,
    ): CancelablePromise<Array<number>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/outcome_imports/{id}/created_group_ids',
            path: {
                'course_id': courseId,
                'id': id,
            },
        });
    }

    /**
     * Import Outcomes
     * Import outcomes into Canvas.
     *
     * For more information on the format that's expected here, please see the
     * "Outcomes CSV" section in the API docs.
     * @param courseId ID
     * @param formData
     * @returns OutcomeImport success
     * @throws ApiError
     */
    public importOutcomesCourses(
        courseId: string,
        formData?: any,
    ): CancelablePromise<OutcomeImport> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/outcome_imports',
            path: {
                'course_id': courseId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
