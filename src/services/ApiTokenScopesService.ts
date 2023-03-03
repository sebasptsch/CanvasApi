/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Scope } from '../models/Scope';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ApiTokenScopesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List scopes
     * A list of scopes that can be applied to developer keys and access tokens.
     * @param accountId ID
     * @param groupBy The attribute to group the scopes by. By default no grouping is done.
     * @returns Scope success
     * @throws ApiError
     */
    public listScopes(
        accountId: string,
        groupBy?: 'resource_name',
    ): CancelablePromise<Array<Scope>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{account_id}/scopes',
            path: {
                'account_id': accountId,
            },
            query: {
                'group_by': groupBy,
            },
        });
    }

}
