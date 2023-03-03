/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GradingStandard } from '../models/GradingStandard';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class GradingStandardsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List the grading standards available in a context.
     * Returns the paginated list of grading standards for the given context that are visible to the user.
     * @param accountId ID
     * @returns GradingStandard success
     * @throws ApiError
     */
    public listGradingStandardsAvailableInContextAccounts(
        accountId: string,
    ): CancelablePromise<Array<GradingStandard>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{account_id}/grading_standards',
            path: {
                'account_id': accountId,
            },
        });
    }

    /**
     * Create a new grading standard
     * Create a new grading standard
     *
     * If grading_scheme_entry arguments are omitted, then a default grading scheme
     * will be set. The default scheme is as follows:
     * "A" : 94,
     * "A-" : 90,
     * "B+" : 87,
     * "B" : 84,
     * "B-" : 80,
     * "C+" : 77,
     * "C" : 74,
     * "C-" : 70,
     * "D+" : 67,
     * "D" : 64,
     * "D-" : 61,
     * "F" : 0,
     * @param accountId ID
     * @param formData
     * @returns GradingStandard success
     * @throws ApiError
     */
    public createNewGradingStandardAccounts(
        accountId: string,
        formData: any,
    ): CancelablePromise<GradingStandard> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/accounts/{account_id}/grading_standards',
            path: {
                'account_id': accountId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * List the grading standards available in a context.
     * Returns the paginated list of grading standards for the given context that are visible to the user.
     * @param courseId ID
     * @returns GradingStandard success
     * @throws ApiError
     */
    public listGradingStandardsAvailableInContextCourses(
        courseId: string,
    ): CancelablePromise<Array<GradingStandard>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/grading_standards',
            path: {
                'course_id': courseId,
            },
        });
    }

    /**
     * Create a new grading standard
     * Create a new grading standard
     *
     * If grading_scheme_entry arguments are omitted, then a default grading scheme
     * will be set. The default scheme is as follows:
     * "A" : 94,
     * "A-" : 90,
     * "B+" : 87,
     * "B" : 84,
     * "B-" : 80,
     * "C+" : 77,
     * "C" : 74,
     * "C-" : 70,
     * "D+" : 67,
     * "D" : 64,
     * "D-" : 61,
     * "F" : 0,
     * @param courseId ID
     * @param formData
     * @returns GradingStandard success
     * @throws ApiError
     */
    public createNewGradingStandardCourses(
        courseId: string,
        formData: any,
    ): CancelablePromise<GradingStandard> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/grading_standards',
            path: {
                'course_id': courseId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get a single grading standard in a context.
     * Returns a grading standard for the given context that is visible to the user.
     * @param accountId ID
     * @param gradingStandardId ID
     * @returns GradingStandard success
     * @throws ApiError
     */
    public getSingleGradingStandardInContextAccounts(
        accountId: string,
        gradingStandardId: string,
    ): CancelablePromise<GradingStandard> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{account_id}/grading_standards/{grading_standard_id}',
            path: {
                'account_id': accountId,
                'grading_standard_id': gradingStandardId,
            },
        });
    }

    /**
     * Get a single grading standard in a context.
     * Returns a grading standard for the given context that is visible to the user.
     * @param courseId ID
     * @param gradingStandardId ID
     * @returns GradingStandard success
     * @throws ApiError
     */
    public getSingleGradingStandardInContextCourses(
        courseId: string,
        gradingStandardId: string,
    ): CancelablePromise<GradingStandard> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/grading_standards/{grading_standard_id}',
            path: {
                'course_id': courseId,
                'grading_standard_id': gradingStandardId,
            },
        });
    }

}
