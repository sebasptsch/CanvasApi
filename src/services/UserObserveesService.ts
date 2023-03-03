/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PairingCode } from '../models/PairingCode';
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserObserveesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Show an observer
     * Gets information about an observer.
     *
     * *Note:* all users are allowed to view their own observers.
     * @param userId ID
     * @param observerId ID
     * @returns User success
     * @throws ApiError
     */
    public showObserver(
        userId: string,
        observerId: string,
    ): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/users/{user_id}/observers/{observer_id}',
            path: {
                'user_id': userId,
                'observer_id': observerId,
            },
        });
    }

    /**
     * Show an observee
     * Gets information about an observed user.
     *
     * *Note:* all users are allowed to view their own observees.
     * @param userId ID
     * @param observeeId ID
     * @returns User success
     * @throws ApiError
     */
    public showObservee(
        userId: string,
        observeeId: string,
    ): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/users/{user_id}/observees/{observee_id}',
            path: {
                'user_id': userId,
                'observee_id': observeeId,
            },
        });
    }

    /**
     * Add an observee
     * Registers a user as being observed by the given user.
     * @param userId ID
     * @param observeeId ID
     * @param formData
     * @returns User success
     * @throws ApiError
     */
    public addObservee(
        userId: string,
        observeeId: string,
        formData?: any,
    ): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/users/{user_id}/observees/{observee_id}',
            path: {
                'user_id': userId,
                'observee_id': observeeId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Remove an observee
     * Unregisters a user as being observed by the given user.
     * @param userId ID
     * @param observeeId ID
     * @param rootAccountId If specified, only removes the link for the given root account
     * @returns User success
     * @throws ApiError
     */
    public removeObservee(
        userId: string,
        observeeId: string,
        rootAccountId?: number,
    ): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/users/{user_id}/observees/{observee_id}',
            path: {
                'user_id': userId,
                'observee_id': observeeId,
            },
            query: {
                'root_account_id': rootAccountId,
            },
        });
    }

    /**
     * List observees
     * A paginated list of the users that the given user is observing.
     *
     * *Note:* all users are allowed to list their own observees. Administrators can list
     * other users' observees.
     *
     * The returned observees will include an attribute "observation_link_root_account_ids", a list
     * of ids for the root accounts the observer and observee are linked on. The observer will only be able to
     * observe in courses associated with these root accounts.
     * @param userId ID
     * @param include - "avatar_url": Optionally include avatar_url.
     * @returns User success
     * @throws ApiError
     */
    public listObservees(
        userId: string,
        include?: 'avatar_url',
    ): CancelablePromise<Array<User>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/users/{user_id}/observees',
            path: {
                'user_id': userId,
            },
            query: {
                'include': include,
            },
        });
    }

    /**
     * Add an observee with credentials
     * Register the given user to observe another user, given the observee's credentials.
     *
     * *Note:* all users are allowed to add their own observees, given the observee's
     * credentials or access token are provided. Administrators can add observees given credentials, access token or
     * the {api:UserObserveesController#update observee's id}.
     * @param userId ID
     * @param formData
     * @returns User success
     * @throws ApiError
     */
    public addObserveeWithCredentials(
        userId: string,
        formData?: any,
    ): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/users/{user_id}/observees',
            path: {
                'user_id': userId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Create observer pairing code
     * If the user is a student, will generate a code to be used with self registration
     * or observees APIs to link another user to this student.
     * @param userId ID
     * @returns PairingCode success
     * @throws ApiError
     */
    public createObserverPairingCode(
        userId: string,
    ): CancelablePromise<PairingCode> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/users/{user_id}/observer_pairing_codes',
            path: {
                'user_id': userId,
            },
        });
    }

    /**
     * List observers
     * A paginated list of the observers of a given user.
     *
     * *Note:* all users are allowed to list their own observers. Administrators can list
     * other users' observers.
     *
     * The returned observers will include an attribute "observation_link_root_account_ids", a list
     * of ids for the root accounts the observer and observee are linked on. The observer will only be able to
     * observe in courses associated with these root accounts.
     * @param userId ID
     * @param include - "avatar_url": Optionally include avatar_url.
     * @returns User success
     * @throws ApiError
     */
    public listObservers(
        userId: string,
        include?: 'avatar_url',
    ): CancelablePromise<Array<User>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/users/{user_id}/observers',
            path: {
                'user_id': userId,
            },
            query: {
                'include': include,
            },
        });
    }

}
