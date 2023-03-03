/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BlackoutDate } from '../models/BlackoutDate';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class BlackoutDatesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get a single blackout date
     * Returns the blackout date with the given id.
     * @param courseId ID
     * @param id ID
     * @returns BlackoutDate success
     * @throws ApiError
     */
    public getSingleBlackoutDateCourses(
        courseId: string,
        id: string,
    ): CancelablePromise<BlackoutDate> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/blackout_dates/{id}',
            path: {
                'course_id': courseId,
                'id': id,
            },
        });
    }

    /**
     * Update Blackout Date
     * Update a blackout date for the given context.
     * @param courseId ID
     * @param id ID
     * @param formData
     * @returns BlackoutDate success
     * @throws ApiError
     */
    public updateBlackoutDateCourses(
        courseId: string,
        id: string,
        formData?: any,
    ): CancelablePromise<BlackoutDate> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/courses/{course_id}/blackout_dates/{id}',
            path: {
                'course_id': courseId,
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete Blackout Date
     * Delete a blackout date for the given context.
     * @param courseId ID
     * @param id ID
     * @returns BlackoutDate success
     * @throws ApiError
     */
    public deleteBlackoutDateCourses(
        courseId: string,
        id: string,
    ): CancelablePromise<BlackoutDate> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/courses/{course_id}/blackout_dates/{id}',
            path: {
                'course_id': courseId,
                'id': id,
            },
        });
    }

    /**
     * New Blackout Date
     * Initialize an unsaved Blackout Date for the given context.
     * @param courseId ID
     * @returns BlackoutDate success
     * @throws ApiError
     */
    public newBlackoutDateCourses(
        courseId: string,
    ): CancelablePromise<BlackoutDate> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/blackout_dates/new',
            path: {
                'course_id': courseId,
            },
        });
    }

    /**
     * List blackout dates
     * Returns the list of blackout dates for the current context.
     * @param courseId ID
     * @returns BlackoutDate success
     * @throws ApiError
     */
    public listBlackoutDatesCourses(
        courseId: string,
    ): CancelablePromise<Array<BlackoutDate>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/blackout_dates',
            path: {
                'course_id': courseId,
            },
        });
    }

    /**
     * Update a list of Blackout Dates
     * Create, update, and delete blackout dates to sync the db with the incoming data.
     * @param courseId ID
     * @param formData
     * @returns BlackoutDate_The_result_which_should_match_the_input_with_maybe_some_different_IDs_ success
     * @throws ApiError
     */
    public updateListOfBlackoutDates(
        courseId: string,
        formData?: any,
    ): CancelablePromise<Array<BlackoutDate>> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/courses/{course_id}/blackout_dates',
            path: {
                'course_id': courseId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Create Blackout Date
     * Create a blackout date for the given context.
     * @param courseId ID
     * @param formData
     * @returns BlackoutDate success
     * @throws ApiError
     */
    public createBlackoutDateCourses(
        courseId: string,
        formData?: any,
    ): CancelablePromise<BlackoutDate> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/blackout_dates',
            path: {
                'course_id': courseId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * List blackout dates
     * Returns the list of blackout dates for the current context.
     * @param accountId ID
     * @returns BlackoutDate success
     * @throws ApiError
     */
    public listBlackoutDatesAccounts(
        accountId: string,
    ): CancelablePromise<Array<BlackoutDate>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{account_id}/blackout_dates',
            path: {
                'account_id': accountId,
            },
        });
    }

    /**
     * Create Blackout Date
     * Create a blackout date for the given context.
     * @param accountId ID
     * @param formData
     * @returns BlackoutDate success
     * @throws ApiError
     */
    public createBlackoutDateAccounts(
        accountId: string,
        formData?: any,
    ): CancelablePromise<BlackoutDate> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/accounts/{account_id}/blackout_dates',
            path: {
                'account_id': accountId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get a single blackout date
     * Returns the blackout date with the given id.
     * @param accountId ID
     * @param id ID
     * @returns BlackoutDate success
     * @throws ApiError
     */
    public getSingleBlackoutDateAccounts(
        accountId: string,
        id: string,
    ): CancelablePromise<BlackoutDate> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{account_id}/blackout_dates/{id}',
            path: {
                'account_id': accountId,
                'id': id,
            },
        });
    }

    /**
     * Update Blackout Date
     * Update a blackout date for the given context.
     * @param accountId ID
     * @param id ID
     * @param formData
     * @returns BlackoutDate success
     * @throws ApiError
     */
    public updateBlackoutDateAccounts(
        accountId: string,
        id: string,
        formData?: any,
    ): CancelablePromise<BlackoutDate> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/accounts/{account_id}/blackout_dates/{id}',
            path: {
                'account_id': accountId,
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete Blackout Date
     * Delete a blackout date for the given context.
     * @param accountId ID
     * @param id ID
     * @returns BlackoutDate success
     * @throws ApiError
     */
    public deleteBlackoutDateAccounts(
        accountId: string,
        id: string,
    ): CancelablePromise<BlackoutDate> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/accounts/{account_id}/blackout_dates/{id}',
            path: {
                'account_id': accountId,
                'id': id,
            },
        });
    }

    /**
     * New Blackout Date
     * Initialize an unsaved Blackout Date for the given context.
     * @param accountId ID
     * @returns BlackoutDate success
     * @throws ApiError
     */
    public newBlackoutDateAccounts(
        accountId: string,
    ): CancelablePromise<BlackoutDate> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{account_id}/blackout_dates/new',
            path: {
                'account_id': accountId,
            },
        });
    }

}
