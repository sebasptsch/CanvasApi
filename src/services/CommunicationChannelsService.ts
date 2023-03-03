/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommunicationChannel } from '../models/CommunicationChannel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CommunicationChannelsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List user communication channels
     * Returns a paginated list of communication channels for the specified user,
     * sorted by position.
     * @param userId ID
     * @returns CommunicationChannel success
     * @throws ApiError
     */
    public listUserCommunicationChannels(
        userId: string,
    ): CancelablePromise<Array<CommunicationChannel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/users/{user_id}/communication_channels',
            path: {
                'user_id': userId,
            },
        });
    }

    /**
     * Create a communication channel
     * Creates a new communication channel for the specified user.
     * @param userId ID
     * @param formData
     * @returns CommunicationChannel success
     * @throws ApiError
     */
    public createCommunicationChannel(
        userId: string,
        formData: any,
    ): CancelablePromise<CommunicationChannel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/users/{user_id}/communication_channels',
            path: {
                'user_id': userId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete a communication channel
     * Delete an existing communication channel.
     * @param userId ID
     * @param type ID
     * @param address ID
     * @returns CommunicationChannel success
     * @throws ApiError
     */
    public deleteCommunicationChannelType(
        userId: string,
        type: string,
        address: string,
    ): CancelablePromise<CommunicationChannel> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/users/{user_id}/communication_channels/{type}/{address}',
            path: {
                'user_id': userId,
                'type': type,
                'address': address,
            },
        });
    }

    /**
     * Delete a push notification endpoint
     * @returns success_true_ success
     * @throws ApiError
     */
    public deletePushNotificationEndpoint(): CancelablePromise<true> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/users/self/communication_channels/push',
        });
    }

    /**
     * Delete a communication channel
     * Delete an existing communication channel.
     * @param userId ID
     * @param id ID
     * @returns CommunicationChannel success
     * @throws ApiError
     */
    public deleteCommunicationChannelId(
        userId: string,
        id: string,
    ): CancelablePromise<CommunicationChannel> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/users/{user_id}/communication_channels/{id}',
            path: {
                'user_id': userId,
                'id': id,
            },
        });
    }

}
