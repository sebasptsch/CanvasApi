/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Admin } from '../models/Admin';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AdminsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List account admins
     * A paginated list of the admins in the account
     * @param accountId ID
     * @param userId Scope the results to those with user IDs equal to any of the IDs specified here.
     * @returns Admin success
     * @throws ApiError
     */
    public listAccountAdmins(
        accountId: string,
        userId?: Array<any>,
    ): CancelablePromise<Array<Admin>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{account_id}/admins',
            path: {
                'account_id': accountId,
            },
            query: {
                'user_id': userId,
            },
        });
    }

    /**
     * Make an account admin
     * Flag an existing user as an admin within the account.
     * @param accountId ID
     * @param formData
     * @returns Admin success
     * @throws ApiError
     */
    public makeAccountAdmin(
        accountId: string,
        formData: any,
    ): CancelablePromise<Admin> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/accounts/{account_id}/admins',
            path: {
                'account_id': accountId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Remove account admin
     * Remove the rights associated with an account admin role from a user.
     * @param accountId ID
     * @param userId ID
     * @param roleId The id of the role representing the user's admin relationship with the account.
     * @param role [DEPRECATED] Account role to remove from the user.
     * @returns Admin success
     * @throws ApiError
     */
    public removeAccountAdmin(
        accountId: string,
        userId: string,
        roleId: number,
        role?: string,
    ): CancelablePromise<Admin> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/accounts/{account_id}/admins/{user_id}',
            path: {
                'account_id': accountId,
                'user_id': userId,
            },
            query: {
                'role': role,
                'role_id': roleId,
            },
        });
    }

}
