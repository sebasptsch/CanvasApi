/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountNotification } from '../models/AccountNotification';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccountNotificationsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Index of active global notification for the user
     * Returns a list of all global notifications in the account for the current user
     * Any notifications that have been closed by the user will not be returned, unless
     * a include_past parameter is passed in as true.
     * @param accountId ID
     * @param includePast Include past and dismissed global announcements.
     * @returns AccountNotification success
     * @throws ApiError
     */
    public indexOfActiveGlobalNotificationForUser(
        accountId: string,
        includePast?: boolean,
    ): CancelablePromise<Array<AccountNotification>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{account_id}/account_notifications',
            path: {
                'account_id': accountId,
            },
            query: {
                'include_past': includePast,
            },
        });
    }

    /**
     * Create a global notification
     * Create and return a new global notification for an account.
     * @param accountId ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public createGlobalNotification(
        accountId: string,
        formData: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/accounts/{account_id}/account_notifications',
            path: {
                'account_id': accountId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Show a global notification
     * Returns a global notification for the current user
     * A notification that has been closed by the user will not be returned
     * @param accountId ID
     * @param id ID
     * @returns AccountNotification success
     * @throws ApiError
     */
    public showGlobalNotification(
        accountId: string,
        id: string,
    ): CancelablePromise<AccountNotification> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{account_id}/account_notifications/{id}',
            path: {
                'account_id': accountId,
                'id': id,
            },
        });
    }

    /**
     * Update a global notification
     * Update global notification for an account.
     * @param accountId ID
     * @param id ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public updateGlobalNotification(
        accountId: string,
        id: string,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/accounts/{account_id}/account_notifications/{id}',
            path: {
                'account_id': accountId,
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Close notification for user
     * If the current user no long wants to see this notification it can be excused with this call
     * @param accountId ID
     * @param id ID
     * @returns AccountNotification success
     * @throws ApiError
     */
    public closeNotificationForUser(
        accountId: string,
        id: string,
    ): CancelablePromise<AccountNotification> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/accounts/{account_id}/account_notifications/{id}',
            path: {
                'account_id': accountId,
                'id': id,
            },
        });
    }

}
