/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ref } from '../models/ref';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AuthenticationsLogService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Query by login.
     * List authentication events for a given login.
     * @param loginId ID
     * @param startTime The beginning of the time range from which you want events.
     * Events are stored for one year.
     * @param endTime The end of the time range from which you want events.
     * @returns any success
     * @throws ApiError
     */
    public queryByLogin(
        loginId: string,
        startTime?: ref,
        endTime?: ref,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/audit/authentication/logins/{login_id}',
            path: {
                'login_id': loginId,
            },
            query: {
                'start_time': startTime,
                'end_time': endTime,
            },
        });
    }

    /**
     * Query by user.
     * List authentication events for a given user.
     * @param userId ID
     * @param startTime The beginning of the time range from which you want events.
     * Events are stored for one year.
     * @param endTime The end of the time range from which you want events.
     * @returns any success
     * @throws ApiError
     */
    public queryByUser(
        userId: string,
        startTime?: ref,
        endTime?: ref,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/audit/authentication/users/{user_id}',
            path: {
                'user_id': userId,
            },
            query: {
                'start_time': startTime,
                'end_time': endTime,
            },
        });
    }

    /**
     * Query by account.
     * List authentication events for a given account.
     * @param accountId ID
     * @param startTime The beginning of the time range from which you want events.
     * Events are stored for one year.
     * @param endTime The end of the time range from which you want events.
     * @returns any success
     * @throws ApiError
     */
    public queryByAccount(
        accountId: string,
        startTime?: ref,
        endTime?: ref,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/audit/authentication/accounts/{account_id}',
            path: {
                'account_id': accountId,
            },
            query: {
                'start_time': startTime,
                'end_time': endTime,
            },
        });
    }

}
