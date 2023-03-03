/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InstAccessToken } from '../models/InstAccessToken';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class InstAccessTokensService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create InstAccess token
     * Create a unique, encrypted InstAccess token.
     *
     * Generates a different InstAccess token each time it's called, each one expires
     * after a short window (1 hour).
     * @returns InstAccessToken success
     * @throws ApiError
     */
    public createInstaccessToken(): CancelablePromise<InstAccessToken> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/inst_access_tokens',
        });
    }

}
