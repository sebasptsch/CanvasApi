/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExternalFeed } from "../models/ExternalFeed";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class AnnouncementExternalFeedsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Delete an external feed
   * Deletes the external feed.
   * @param courseId ID
   * @param externalFeedId ID
   * @returns ExternalFeed success
   * @throws ApiError
   */
  public deleteExternalFeedCourses(
    courseId: string,
    externalFeedId: string,
  ): CancelablePromise<ExternalFeed> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/courses/{course_id}/external_feeds/{external_feed_id}",
      path: {
        course_id: courseId,
        external_feed_id: externalFeedId,
      },
    });
  }

  /**
   * Delete an external feed
   * Deletes the external feed.
   * @param groupId ID
   * @param externalFeedId ID
   * @returns ExternalFeed success
   * @throws ApiError
   */
  public deleteExternalFeedGroups(
    groupId: string,
    externalFeedId: string,
  ): CancelablePromise<ExternalFeed> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/groups/{group_id}/external_feeds/{external_feed_id}",
      path: {
        group_id: groupId,
        external_feed_id: externalFeedId,
      },
    });
  }

  /**
   * List external feeds
   * Returns the paginated list of External Feeds this course or group.
   * @param groupId ID
   * @returns ExternalFeed success
   * @throws ApiError
   */
  public listExternalFeedsGroups(
    groupId: string,
  ): CancelablePromise<Array<ExternalFeed>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/groups/{group_id}/external_feeds",
      path: {
        group_id: groupId,
      },
    });
  }

  /**
   * Create an external feed
   * Create a new external feed for the course or group.
   * @param groupId ID
   * @param formData
   * @returns ExternalFeed success
   * @throws ApiError
   */
  public createExternalFeedGroups(
    groupId: string,
    formData: any,
  ): CancelablePromise<ExternalFeed> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/groups/{group_id}/external_feeds",
      path: {
        group_id: groupId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * List external feeds
   * Returns the paginated list of External Feeds this course or group.
   * @param courseId ID
   * @returns ExternalFeed success
   * @throws ApiError
   */
  public listExternalFeedsCourses(
    courseId: string,
  ): CancelablePromise<Array<ExternalFeed>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/external_feeds",
      path: {
        course_id: courseId,
      },
    });
  }

  /**
   * Create an external feed
   * Create a new external feed for the course or group.
   * @param courseId ID
   * @param formData
   * @returns ExternalFeed success
   * @throws ApiError
   */
  public createExternalFeedCourses(
    courseId: string,
    formData: any,
  ): CancelablePromise<ExternalFeed> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/courses/{course_id}/external_feeds",
      path: {
        course_id: courseId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }
}
