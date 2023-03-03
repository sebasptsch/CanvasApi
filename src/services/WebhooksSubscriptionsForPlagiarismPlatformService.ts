/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WebhooksSubscriptionsForPlagiarismPlatformService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Show a single Webhook Subscription
     * @param id ID
     * @returns any success
     * @throws ApiError
     */
    public showSingleWebhookSubscription(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/lti/subscriptions/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update a Webhook Subscription
     * This endpoint uses the same parameters as the create endpoint
     * @param id ID
     * @returns any success
     * @throws ApiError
     */
    public updateWebhookSubscription(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/lti/subscriptions/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Delete a Webhook Subscription
     * @param id ID
     * @returns any success
     * @throws ApiError
     */
    public deleteWebhookSubscription(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/lti/subscriptions/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * List all Webhook Subscription for a tool proxy
     * This endpoint returns a paginated list with a default limit of 100 items per result set.
     * You can retrieve the next result set by setting a 'StartKey' header in your next request
     * with the value of the 'EndKey' header in the response.
     *
     * Example use of a 'StartKey' header object:
     * { "Id":"71d6dfba-0547-477d-b41d-db8cb528c6d1","DeveloperKey":"10000000000001" }
     * @returns any success
     * @throws ApiError
     */
    public listAllWebhookSubscriptionForToolProxy(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/lti/subscriptions',
        });
    }

    /**
     * Create a Webhook Subscription
     * Creates a webook subscription for the specified event type and
     * context.
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public createWebhookSubscription(
        formData: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/lti/subscriptions',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
