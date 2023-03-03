/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Bookmark } from '../models/Bookmark';
import type { Folder } from '../models/Folder';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class BookmarksService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List bookmarks
     * Returns the paginated list of bookmarks.
     * @returns Bookmark success
     * @throws ApiError
     */
    public listBookmarks(): CancelablePromise<Array<Bookmark>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/users/self/bookmarks',
        });
    }

    /**
     * Create bookmark
     * Creates a bookmark.
     * @param formData
     * @returns Bookmark success
     * @throws ApiError
     */
    public createBookmark(
        formData?: any,
    ): CancelablePromise<Bookmark> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/users/self/bookmarks',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get bookmark
     * Returns the details for a bookmark.
     * @param id ID
     * @returns Bookmark success
     * @throws ApiError
     */
    public getBookmark(
        id: string,
    ): CancelablePromise<Bookmark> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/users/self/bookmarks/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update bookmark
     * Updates a bookmark
     * @param id ID
     * @param formData
     * @returns Folder success
     * @throws ApiError
     */
    public updateBookmark(
        id: string,
        formData?: any,
    ): CancelablePromise<Folder> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/users/self/bookmarks/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete bookmark
     * Deletes a bookmark
     * @param id ID
     * @returns any success
     * @throws ApiError
     */
    public deleteBookmark(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/users/self/bookmarks/{id}',
            path: {
                'id': id,
            },
        });
    }

}
