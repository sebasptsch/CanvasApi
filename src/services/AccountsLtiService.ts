/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Account } from '../models/Account';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccountsLtiService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get account
     * Retrieve information on an individual account, given by local or global ID.
     * @param accountId ID
     * @returns Account success
     * @throws ApiError
     */
    public getAccount(
        accountId: string,
    ): CancelablePromise<Account> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/lti/accounts/{account_id}',
            path: {
                'account_id': accountId,
            },
        });
    }

}
