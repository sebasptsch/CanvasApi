/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Proficiency } from '../models/Proficiency';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProficiencyRatingsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get proficiency ratings
     * Get account-level proficiency ratings. If not defined for this account,
     * it will return proficiency ratings for the nearest super-account with ratings defined.
     * Will return 404 if none found.
     *
     * Examples:
     * curl https://<canvas>/api/v1/accounts/<account_id>/outcome_proficiency \
     * -H 'Authorization: Bearer <token>'
     * @param courseId ID
     * @returns Proficiency success
     * @throws ApiError
     */
    public getProficiencyRatingsCourses(
        courseId: string,
    ): CancelablePromise<Proficiency> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/outcome_proficiency',
            path: {
                'course_id': courseId,
            },
        });
    }

    /**
     * Create/update proficiency ratings
     * Create or update account-level proficiency ratings. These ratings will apply to all
     * sub-accounts, unless they have their own account-level proficiency ratings defined.
     * @param courseId ID
     * @param formData
     * @returns Proficiency success
     * @throws ApiError
     */
    public createUpdateProficiencyRatingsCourses(
        courseId: string,
        formData?: any,
    ): CancelablePromise<Proficiency> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/outcome_proficiency',
            path: {
                'course_id': courseId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get proficiency ratings
     * Get account-level proficiency ratings. If not defined for this account,
     * it will return proficiency ratings for the nearest super-account with ratings defined.
     * Will return 404 if none found.
     *
     * Examples:
     * curl https://<canvas>/api/v1/accounts/<account_id>/outcome_proficiency \
     * -H 'Authorization: Bearer <token>'
     * @param accountId ID
     * @returns Proficiency success
     * @throws ApiError
     */
    public getProficiencyRatingsAccounts(
        accountId: string,
    ): CancelablePromise<Proficiency> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{account_id}/outcome_proficiency',
            path: {
                'account_id': accountId,
            },
        });
    }

    /**
     * Create/update proficiency ratings
     * Create or update account-level proficiency ratings. These ratings will apply to all
     * sub-accounts, unless they have their own account-level proficiency ratings defined.
     * @param accountId ID
     * @param formData
     * @returns Proficiency success
     * @throws ApiError
     */
    public createUpdateProficiencyRatingsAccounts(
        accountId: string,
        formData?: any,
    ): CancelablePromise<Proficiency> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/accounts/{account_id}/outcome_proficiency',
            path: {
                'account_id': accountId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
