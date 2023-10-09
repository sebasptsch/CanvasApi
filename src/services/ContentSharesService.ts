/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContentShare } from "../models/ContentShare";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class ContentSharesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Add users to content share
   * Send a previously created content share to additional users
   * @param userId ID
   * @param id ID
   * @param formData
   * @returns ContentShare success
   * @throws ApiError
   */
  public addUsersToContentShare(
    userId: string,
    id: string,
    formData?: any,
  ): CancelablePromise<ContentShare> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/users/{user_id}/content_shares/{id}/add_users",
      path: {
        user_id: userId,
        id: id,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Create a content share
   * Share content directly between two or more users
   * @param userId ID
   * @param formData
   * @returns ContentShare success
   * @throws ApiError
   */
  public createContentShare(
    userId: string,
    formData: any,
  ): CancelablePromise<ContentShare> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/users/{user_id}/content_shares",
      path: {
        user_id: userId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * List content shares
   * Return a paginated list of content shares a user has sent or received. Use +self+ as the user_id
   * to retrieve your own content shares. Only linked observers and administrators may view other users'
   * content shares.
   * @param userId ID
   * @returns ContentShare success
   * @throws ApiError
   */
  public listContentSharesSent(
    userId: string,
  ): CancelablePromise<Array<ContentShare>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{user_id}/content_shares/sent",
      path: {
        user_id: userId,
      },
    });
  }

  /**
   * Get unread shares count
   * Return the number of content shares a user has received that have not yet been read. Use +self+ as the user_id
   * to retrieve your own content shares. Only linked observers and administrators may view other users'
   * content shares.
   * @param userId ID
   * @returns unread_count_integer_ success
   * @throws ApiError
   */
  public getUnreadSharesCount(userId: string): CancelablePromise<number> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{user_id}/content_shares/unread_count",
      path: {
        user_id: userId,
      },
    });
  }

  /**
   * Get content share
   * Return information about a single content share. You may use +self+ as the user_id to retrieve your own content share.
   * @param userId ID
   * @param id ID
   * @returns ContentShare success
   * @throws ApiError
   */
  public getContentShare(
    userId: string,
    id: string,
  ): CancelablePromise<ContentShare> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{user_id}/content_shares/{id}",
      path: {
        user_id: userId,
        id: id,
      },
    });
  }

  /**
   * Update a content share
   * Mark a content share read or unread
   * @param userId ID
   * @param id ID
   * @param formData
   * @returns ContentShare success
   * @throws ApiError
   */
  public updateContentShare(
    userId: string,
    id: string,
    formData?: any,
  ): CancelablePromise<ContentShare> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/users/{user_id}/content_shares/{id}",
      path: {
        user_id: userId,
        id: id,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Remove content share
   * Remove a content share from your list. Use +self+ as the user_id. Note that this endpoint does not delete other users'
   * copies of the content share.
   * @param userId ID
   * @param id ID
   * @returns any success
   * @throws ApiError
   */
  public removeContentShare(
    userId: string,
    id: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/users/{user_id}/content_shares/{id}",
      path: {
        user_id: userId,
        id: id,
      },
    });
  }

  /**
   * List content shares
   * Return a paginated list of content shares a user has sent or received. Use +self+ as the user_id
   * to retrieve your own content shares. Only linked observers and administrators may view other users'
   * content shares.
   * @param userId ID
   * @returns ContentShare success
   * @throws ApiError
   */
  public listContentSharesReceived(
    userId: string,
  ): CancelablePromise<Array<ContentShare>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{user_id}/content_shares/received",
      path: {
        user_id: userId,
      },
    });
  }
}
