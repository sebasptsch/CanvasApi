/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccountDomainLookupsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Search account domains
     * Returns a list of up to 5 matching account domains
     *
     * Partial match on name / domain are supported
     * @param name campus name
     * @param domain no description
     * @param latitude no description
     * @param longitude no description
     * @returns any success
     * @throws ApiError
     */
    public searchAccountDomains(
        name?: string,
        domain?: string,
        latitude?: number,
        longitude?: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/search',
            query: {
                'name': name,
                'domain': domain,
                'latitude': latitude,
                'longitude': longitude,
            },
        });
    }

}
