/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeveloperKey } from '../models/DeveloperKey';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PublicJwkService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Update Public JWK
     * Rotate the public key in jwk format when using lti services
     * @param formData
     * @returns DeveloperKey success
     * @throws ApiError
     */
    public updatePublicJwk(
        formData: any,
    ): CancelablePromise<DeveloperKey> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/lti/developer_key/update_public_jwk',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
