/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class LoginsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List user logins
     * Given a user ID, return a paginated list of that user's logins for the given account.
     * @param userId ID
     * @returns any success
     * @throws ApiError
     */
    public listUserLoginsUsers(
        userId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/users/{user_id}/logins',
            path: {
                'user_id': userId,
            },
        });
    }

    /**
     * Edit a user login
     * Update an existing login for a user in the given account.
     * @param accountId ID
     * @param id ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public editUserLogin(
        accountId: string,
        id: string,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/accounts/{account_id}/logins/{id}',
            path: {
                'account_id': accountId,
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete a user login
     * Delete an existing login.
     * @param userId ID
     * @param id ID
     * @returns any success
     * @throws ApiError
     */
    public deleteUserLogin(
        userId: string,
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/users/{user_id}/logins/{id}',
            path: {
                'user_id': userId,
                'id': id,
            },
        });
    }

    /**
     * List user logins
     * Given a user ID, return a paginated list of that user's logins for the given account.
     * @param accountId ID
     * @returns any success
     * @throws ApiError
     */
    public listUserLoginsAccounts(
        accountId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{account_id}/logins',
            path: {
                'account_id': accountId,
            },
        });
    }

    /**
     * Create a user login
     * Create a new login for an existing user in the given account.
     * @param accountId ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public createUserLogin(
        accountId: string,
        formData: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/accounts/{account_id}/logins',
            path: {
                'account_id': accountId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Kickoff password recovery flow
     * Given a user email, generate a nonce and email it to the user
     * @returns any success
     * @throws ApiError
     */
    public kickoffPasswordRecoveryFlow(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/users/reset_password',
        });
    }

}
